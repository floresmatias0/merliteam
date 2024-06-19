import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations("Index")

  return (
    <footer className='flex flex-col justify-between px-8 md:px-14 md:flex-row mb-4 mt-10'>
      <div className='w-full md:w-1/3'>
        <div>
          <Image src='/Logo.svg' alt='Merliteam' width={200} height={200} className='m-auto md:m-[initial] w-40 md:w-36'/>
        </div>
        <div>
          {/* {FOOTER_CONTENT.contact.t1} */}
        </div>
      </div>
      <div className='w-full md:w-1/3 flex items-start justify-start md:items-end md:justify-end mt-8 md:mt-0'>
        <small>
          {t("footer.copyright")}
        </small>
      </div>
    </footer>
  )
}

export default Footer