import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations("Index")

  return (


    <footer className='w-full bg-[linear-gradient(163.79deg,#070009_0%,#45025D_208.84%)] px-[56px] py-[32px]'>
      <div className='hidden md:flex justify-between items-center w-full h-[80px]'>
        <div className='w-full md:w-auto flex items-center'>
          <Link href='https://drive.google.com/uc?export=download&id=1nAjUTP-Nn0oy_mlsn2LSaHFlsCkR-7AN'  className='text-white transition-transform duration-300 transform hover:scale-110' target='_blank' rel='noopener noreferrer'>
            {t("footer.brochure")}
          </Link>
        </div>
        <div className='ml-auto w-full md:w-auto flex flex-col items-end'>
          <div className='flex space-x-4 relative top-[-20px] '>
            <Link href='https://www.instagram.com/merliteam.ok/' target='_blank' rel='noopener noreferrer' >
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
      </div>

      {/* Layour responsive */}

      <div className='flex md:hidden flex-col items-center text-center'>
        <h2 className='text-3xl text-merli-white font-bold mb-5'>
          {t("footer.title_responsive")}
        </h2>
        <Link href='https://drive.google.com/uc?export=download&id=1nAjUTP-Nn0oy_mlsn2LSaHFlsCkR-7AN' target='_blank' className='text-white mb-4'>
          {t("footer.brochure")}
        </Link>
        <div className='flex space-x-4 mb-4'>
          <Link href='https://www.instagram.com/merliteam.ok/' target='_blank' rel='noopener noreferrer'>
            <Image src='/logo-instagram.png' alt='Instagram' width={20} height={20} />
          </Link>
          <Link href='https://www.linkedin.com/in/merli-team-7778492a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank' rel='noopener noreferrer'>
            <Image src='/logo-linkedin.png' alt='LinkedIn' width={20} height={20} />
          </Link>
        </div>
        <small className='text-xs whitespace-pre-line'>
          {t("footer.copyright")}
        </small>
      </div>
    </footer>
  )
}

export default Footer
