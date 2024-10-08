import { useTranslations, useLocale } from 'next-intl';
import Card from '../Card';
import { process } from '@/config/config'; // Traemos el array de procesos

export default function ProcessMobile() {
  const t = useTranslations('Index.process');
  const locale = useLocale(); // Usamos el idioma activo
  const t2 = useTranslations('Index');

 
  // Aquí mapeamos el array de procesos sin filtrar nada aún
  return (
    <div className='flex flex-col p-2 pt-6'>
      <div className='flex flex-col gap-1 z-10'>
        <h2 className='font-semibold text-[32px] lg:text-[56px] bg-clip-text text-transparent bg-titleAction'>
              {t2("actionProcess.title")}
        </h2>
        <p className='text-[16px] lg:text-[24px]'>

        {t2("actionProcess.description")}
        </p>
      </div>
      <div>
        <h2 className='md:hidden font-bold text-[32px] pt-[90px] pb-[30px] bg-clip-text text-transparent bg-titleAction'>
          {t("initial_title")}
        </h2>      
        </div>
    <div className="grid grid-cols-1 md:hidden gap-3">
      {process.map((item) => (
        <Card 
          key={item.number} 
          title={t(`${item.number}.title`)} 
          description={t(`${item.number}.description`)} 
          number={item.number} 
        />
      ))}
    </div>

    <div
        className="md:hidden absolute block left-0 bottom-[77rem] -translate-y-4 transform w-[18rem] h-[29rem] bg-no-repeat bg-cover z-0"
        style={{ backgroundImage: "url('Circle Process.svg')" }}
    ></div>

    </div>
  );
}
