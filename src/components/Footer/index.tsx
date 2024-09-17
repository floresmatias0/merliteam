import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations("Index")

  return (
    <footer className='flex justify-between items-center w-full h-[139px] bg-gradient-to-br from-[#070009] to-[#45025D] px-[56px] py-[32px]'>
      <div className='ml-auto w-full md:w-auto flex flex-col items-end'>
        <div className='flex space-x-4 relative top-[-4px] mb-2'>
          <Link href='https://www.instagram.com/merliteam.ok/' target='_blank' rel='noopener noreferrer'>
            <Image src='/logo-instagram.png' alt='Instagram' width={24} height={24} />
          </Link>
          <Link href='https://www.linkedin.com/in/merli-team-7778492a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer'>
            <Image src='/logo-linkedin.png' alt='LinkedIn' width={24} height={24} />
          </Link>
        </div>
        <small className='whitespace-nowrap'>
          {t("footer.copyright")}
        </small>
      </div>
    </footer>
  )
}

export default Footer
