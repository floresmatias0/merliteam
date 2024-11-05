import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";
import { useTranslations } from 'next-intl';

export default function LoginPage()
{
    const t = useTranslations('Index');

    return(
    <div>
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
      <div className="w-full h-full flex justify-center bg-merli-purple-dark p-9    ">
        <div className=" ">
          <LoginForm />
        </div>
      </div>
      <Footer />
      </div>    
    )
}
