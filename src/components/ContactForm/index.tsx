'use client'

import { useState } from 'react'
import { ButtonVariation } from '@/datamodels/models'
import Input from "../Input"
import Button from "../Button"
import Whatsapp from '../ui/icons/Whatsapp'
import { sendEmail } from '@/utils/emails'
import useContactForm from '@/hooks/useContactForm'

type Props = {
  lengendSubject: string,
  legendEmail: string,
  legendMessage: string,
  prefixWhatsapp: string,
  legendError: string,
  legendPending: string,
  legendSuccess: string,
  btnLoading: string,
  btnToSend: string
}

const ContactForm = ({
  lengendSubject,
  legendEmail,
  legendMessage,
  prefixWhatsapp,
  legendError,
  legendPending,
  legendSuccess,
  btnLoading,
  btnToSend
}: Props) => {

  const { values, handleChange, resetForm } = useContactForm();
  const [isSubmitted, setIsSubmitted] = useState({
    isLoading: false,
    error: false,
    ok: false
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setIsSubmitted({
      isLoading: true,
      error: false,
      ok: false
    })
    const form = e.currentTarget
    let formInputs = {}
    for (const element of form.elements) {
      if (element.type === 'submit') break
      formInputs = { ...formInputs, [element.name]: element.value }
    }

    try {
      const req = await sendEmail(values.email, values.subject, values.message);
      // const req = await testApi()
      if (req.status === 200) {
        setIsSubmitted({
          isLoading: false,
          error: false,
          ok: true
        })
        resetForm()
      }
    } catch (e) {
      console.log(e);
      setIsSubmitted({
        isLoading: false,
        error: true,
        ok: false
      });
    }

  }

  return (
    <>
      <form name='contact' onSubmit={handleSubmit} >
        <Input name="subject" label={lengendSubject} type="text" onChange={handleChange} value={values.subject} />
        <Input name="email" label={legendEmail} type="email" onChange={handleChange} value={values.email} />
        <Input name="message" label={legendMessage} type="textarea" onChange={handleChange} value={values.message} />
        <div className='w-full flex flex-col-reverse md:flex-row items-center justify-between'>
          <small className='flex-1 text-sm mt-4 md:mt-0'>
            {
              (isSubmitted.isLoading && !isSubmitted.error && !isSubmitted.ok) && 
              legendPending
            }
            {
              (!isSubmitted.isLoading && isSubmitted.error) && 
              legendError
            }
            {
              (!isSubmitted.isLoading && isSubmitted.ok) &&
              legendSuccess
            }
          </small>
          <Button variant={ButtonVariation.outline} label={isSubmitted.isLoading ? btnLoading : btnToSend} className='w-full md:w-[initial] px-16 disabled:cursor-not-allowed' disabled={!values.subject && !values.email && !values.message} />
        </div>
      </form>
      <p className='flex items-center mt-8 justify-center md:justify-end'>
        {prefixWhatsapp}
        <a href='https://wa.me/+5491167032053' target='_blank' className='mx-1 cursor-pointer flex items-center group hover:underline'>
          Whatsapp:
          <Whatsapp className="mx-1 animate-pulse group-hover:animate-none" />
        </a>
      </p>
    </>
  )
}

export default ContactForm