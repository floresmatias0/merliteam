import Image from 'next/image'
import ContactForm from '../ContactForm'
import { useTranslations } from 'next-intl'

const Contact = () => {
  const t = useTranslations('Index')

  return (
    <div id='contact' className='relative flex flex-col md:flex-row gap-4 p-6 pt-12 pb-20 md:p-18 md:pb-26 md:pt-30 z-10'>
      <div className="w-full md:w-2/4 text-right md:text-right relative">
        <h2 className="md:pl-28 mb-2 text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-text-gradient whitespace-pre-line">
          {t("intro.section_3.title")}
        </h2>
        <p className="md:pl-28 text-merli-white text-base md:text-2xl whitespace-pre-line">
          {t("intro.section_3.description")}
        </p>
      </div>
      <div className="w-full md:w-2/4">
        <ContactForm
          lengendSubject={t("contact.form.name")}
          legendEmail={t("contact.form.email")}
          legendMessage={t("contact.form.msg")}
          legendError={t("contact.form.errors.error")}
          legendPending={t("contact.form.errors.pending")}
          legendSuccess={t("contact.form.errors.success")}
          btnLoading={t("contact.form.btn_loading")}
          btnToSend={t("contact.form.btn_toSend")}
        />
      </div>
    </div>
  )
}

export default Contact
