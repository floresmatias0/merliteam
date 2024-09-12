import { useTranslations } from 'next-intl';

export default function ActionProcess() {

const t = useTranslations("Index");



  return (
    <div className="flex flex-col p-[70px]">
      <h2 className='text-[56px] font-semibold leading-[60px] text-white'>{t("ActionProcess.title")}</h2>
      <p className='text-[24px] leading-[31.25px]'>
        {t("ActionProcess.description")}
      </p>
    </div>
  );
}