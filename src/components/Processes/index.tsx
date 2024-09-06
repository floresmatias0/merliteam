import { processes } from "@/config/config"
import Card from "@/components/Card"
import { useTranslations } from 'next-intl'

const Processes = () => {
  const t = useTranslations('Index')

  return (
    <div className='hidden md:flex mb-5'>
      <div className="mb-14">
        <h2 className="mb-2 text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-text-gradient">
          {t("intro.section_2.title")}
        </h2>
        <p className="text-merli-white text-base md:text-2xl">
          {t("intro.section_2.description")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          processes.map(process => 
            <Card 
              key={process.number}
              number={process.number}
              title={t(`process.${process.number}.title`)}
              description={t(`process.${process.number}.description`)}
            />)
        }
      </div>
    </div>
  )
}

export default Processes