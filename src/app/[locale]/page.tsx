import Header from '@/components/Header'
import Footer from '@/components/Footer'

import Intro from '@/components/Intro'
import WhatsAppButton from '@/components/Whatsapp';
import Services from '@/components/Services'
import Processes from '@/components/Processes'
import Contact from '@/components/Contact'

import { useTranslations } from 'next-intl';
import Enterprises from '@/components/Enterprises'
import CasosDeExitos from '@/components/CasosDeExitos'
import Hexagon from '@/components/Hexagon'
import Video from '@/components/Video'

export default function Home() {
  const t = useTranslations('Index');

  return (
    <main className="relative">
      <Header
        btnLegendTitleResponsive={t('header.btn_title_responsive')}
        btnLegendServices={t('header.btn_services')}
        btnLegendClients={t('header.btn_clients')}
        btnLegendCommunity={t('header.btn_our_community')}
        btnLegendAboutUs={t('header.btn_about_us')}
        btnLegendSpanishText={t('header.btn_spanish_text')}
        btnLegendEnglishText={t('header.btn_english_text')}
        btnLegendContact={t('header.btn_contact')}
      />
      <div className='px-8 md:px-14 md:mb-8 md:mt-2 flex flex-col md:gap-24 container mx-auto'>
        <WhatsAppButton />
        <Intro
          title={t("intro.section_1.title")}
          description={t("intro.section_1.description")}
        />
      </div>
      <Video />
      <div className='px-8 md:px-0 md:mb-8 mt-2 flex flex-col gap-24 container mx-auto'>
        <Services />
      </div>
      {/*  <Processes/> */}
      <Hexagon />
      <Enterprises />
      <CasosDeExitos />
      <Contact />

      <Footer />

      

      <div
        className="hidden absolute md:block bottom-[90rem] left-0 -translate-x-12 transform w-[520px] h-[560px] bg-no-repeat bg-cover z-0"
        style={{ backgroundImage: "url('Circle Enterprises.svg')" }}
      ></div>
      <div
        className="hidden md:block absolute bottom-[24rem] right-0 transform w-[1086px] h-[2400px] bg-no-repeat bg-cover z-0"
        style={{ backgroundImage: "url('Circle Clients.svg')" }}
      ></div>
      <div
        className="hidden md:block absolute bottom-[8rem] left-0 transform -translate-y-4 w-[37.5rem] h-[50rem] bg-no-repeat bg-cover z-0"
        style={{ backgroundImage: "url('Circle Contact.svg')" }}
      ></div>

    </main>
  )
}
