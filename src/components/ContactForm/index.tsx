'use client'

import { useState } from 'react'
import { ButtonVariation } from '@/datamodels/models'
import Input from "../Input"
import Button from "../Button"
import { sendEmail } from '@/utils/emails'
import useContactForm from '@/hooks/useContactForm'

type Props = {
  lengendSubject: string,
  legendEmail: string,
  legendMessage: string,
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

      //expresion para validar el formato del mail

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(values.email)) {
        setIsSubmitted({
          isLoading: false,
          error: true,
          ok: false
        });
        return
      }

      //validar subject y messsage

      if (!values.subject || !values.message) {
        setIsSubmitted({
          isLoading: false,
          error: true,
          ok: false
        });
        return
      }

      //hacer mas validaciones

      if (values.subject.length > 100 || values.message.length > 1000) {
        setIsSubmitted({
          isLoading: false,
          error: true,
          ok: false
        });
        return
      }

      //validar minimo lenght

      if (values.subject.length < 5 || values.message.length < 5) {
        setIsSubmitted({
          isLoading: false,
          error: true,
          ok: false
        });
        return
      }


      const req = await sendEmail(values.email, values.subject, values.message);
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
        <Input name="message" label={legendMessage} type="textarea" onChange={handleChange} value={values.message} className="h-48 md:h-48" />
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
          <Button 
            variant={ButtonVariation.outline} 
            label={isSubmitted.isLoading ? btnLoading : btnToSend} 
            className='contact-form-button w-full md:w-[initial] px-16 md:px-20 py-2 md:py-3 disabled:cursor-not-allowed' 
            disabled={!values.subject || !values.email || !values.message} 
          />
        </div>
      </form>
    </>
  )
}

export default ContactForm

