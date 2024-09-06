import { useTranslations } from 'next-intl'
import { enterprises } from '@/config/config'
import Image from 'next/image'

const Enterprises = () => {
  const t = useTranslations('Index')
  
  return (
    <div id='empresas' className='hidden md:flex flex-col gap-4 bg-white w-full p-9'>
      <h2 className='text-[76px] mb-2 md:text-4xl font-bold text-[#45025D] bg-clip-text bg-text-gradient'>{t('enterprise.title')}</h2>
      <div className=" mx-auto  md:grid grid-cols-2 md:grid-cols-4 flex-wrap justify-center items-center gap-8">
        {enterprises?.map((enterprise, key) => (
          <Image key={key} src={enterprise?.logo} alt={enterprise?.number} width={160} height={120} className={`object-contain p-2 ${enterprise?.logo !== "/logojehoroller.png" ? "bg-white" : ""}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Enterprises