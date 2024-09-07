import Header from '@/components/Header'
import Footer from '@/components/Footer'

import Intro from '@/components/Intro'
import Services from '@/components/Services'
import Processes from '@/components/Processes'
import Contact from '@/components/Contact'

import { useTranslations } from 'next-intl';
import Enterprises from '@/components/Enterprises'
import CasosDeExitos from '@/components/CasosDeExitos'

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className="">
      <Header btnLegendTranslate={t('header.btn_translate')} btnLegendContact={t('header.btn_contact')}/>
      <div className='px-8 md:px-14 md:mb-8 md:mt-2 flex flex-col gap-24 container mx-auto'>
        <Intro
          title={t("intro.section_1.title")}
          description={t("intro.section_1.description")}
        />
        <Services />
      {/*  <Processes/> */}
       </div>
       
       <CasosDeExitos/>
       <div className='px-10 md:px-14 md:mb-8 md:mt-2 flex flex-col gap-24 container mx-auto'>
        <Contact /> 
       
      </div>
      <Footer />
    </main>
  )
}
