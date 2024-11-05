import { useTranslations } from 'next-intl'
import { enterprises } from '@/config/config'
import Image from 'next/image'

const Enterprises = () => {
  const t = useTranslations('Index')
  
  return (
    <div id='empresas' className='relative justify-center flex-col pt-8 gap-8 md:gap-3 bg-white w-full md:p-9 md:pb-0 pb-9 z-10'>
      <h2 className='leading-[38px] pb-6 pt-5 text-center md:text-left text-[40px] text-[#700796] md:text-[60px] font-bold md:text-[#45025D] bg-clip-text bg-text-gradient'>{t('enterprise.title')}</h2>
      <div className="grid grid-cols-3 md:grid-cols-5 flex-wrap justify-center items-center gap-[46px] md:p-8 px-8">
        {enterprises?.map((enterprise, key) => (
          <Image key={key} src={enterprise?.logo} alt={enterprise?.number} width={160} height={120} className={`object-contain p-2 ${enterprise?.logo !== "/logojehoroller.png" ? "bg-white" : ""}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Enterprises