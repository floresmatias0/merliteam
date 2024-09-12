import { useTranslations } from 'next-intl';

export default function ProcessMobile() {
  const t = useTranslations('Index.process');

  // Convertimos las claves de process en un array y luego iteramos sobre ellas
  const processKeys = Object.keys(t.raw());
    console.log(processKeys)
  return (
    <div className="grid grid-cols-1 md:hidden">
      {/* Iteramos sobre las claves del objeto process */}
      {processKeys.map((key) => (
        <div key={key} className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">{t(`0${key}.title`)}</h2>
          <p className="text-gray-700">{t(`0${key}.description`)}</p>
        </div>
      ))}
    </div>
  );
}
