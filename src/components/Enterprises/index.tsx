import { useTranslations } from 'next-intl'
import { enterprises } from '@/config/config'
import Image from 'next/image'

const Enterprises = () => {
  const t = useTranslations('Index')
  
  return (
    <div id='empresas' className='flex flex-col gap-4'>
      <h2 className='text-center mb-2 text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-text-gradient'>{t('enterprise.title')}</h2>
      <div className="w-full mx-auto flex flex-wrap justify-center items-center gap-6">
        {enterprises?.map((enterprise, key) => (
          <Image key={key} src={enterprise?.logo} alt={enterprise?.number} width={160} height={120} className={`object-cover mx-auto ${enterprise?.logo !== "/logojehoroller.png" ? "bg-white" : ""}`}/>
        ))}
      </div>
    </div>
  )
}

export default Enterprises