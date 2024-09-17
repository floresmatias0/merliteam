import { useTranslations, useLocale } from 'next-intl';
import Card from '../Card';
import { process } from '@/config/config'; // Traemos el array de procesos

export default function ProcessMobile() {
  const t = useTranslations('Index.process');
  const locale = useLocale(); // Usamos el idioma activo
  const t2 = useTranslations('Index');

 
  // Aquí mapeamos el array de procesos sin filtrar nada aún
  return (
    <div className='flex flex-col p-9'>
      <div className='flex flex-col gap-1 p-3'>
        <h2 className='font-semibold text-white text-[32px] lg:text-[56px]'>
              {t2("actionProcess.title")}
        </h2>
        <p className='text-[16px] lg:text-[24px]'>

        {t2("actionProcess.description")}
        </p>
      </div>
    <div className="grid grid-cols-1 lg:hidden gap-3">
      {process.map((item) => (
        <Card 
          key={item.number} 
          title={t(`${item.number}.title`)} 
          description={t(`${item.number}.description`)} 
          number={item.number} 
        />
      ))}
    </div>
    </div>
  );
}
