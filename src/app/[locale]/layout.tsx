 
import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { notFound } from 'next/navigation';
import { GoogleAnalytics } from '@next/third-parties/google'
import { NextIntlClientProvider } from 'next-intl';
 


const locales = ['en', 'es']; // Definimos los locales disponibles

const inter = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Merliteam',
  description: 'Juntos en la transformación digital',
  icons: [
    {
      url: '/MerliTeamLogoRedondo.svg',
      sizes: 'any',
      type: 'image/x-icon',
    },
  ],
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};
import { SessionProvider } from "next-auth/react";

export default async function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  if (!locales.includes(locale as any)) notFound();

  // Cargar los mensajes correspondientes al locale
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default; // Carga los mensajes del locale
  } catch (error) {
    notFound(); // Si no encuentra el archivo de traducción, muestra un 404
  }

 

  return (
    <html lang={locale}  >
      <head>
        <meta name="google-site-verification" content="flPF7T6iV0dSSs_z92wbewTx8hnLtpNBtjQvVAHDaJM"/>
       </head>
      <body className={`${inter.className} text-merli-gray-light bg-gradient-radial`}>
        {/* Proveer los mensajes cargados al proveedor */}
         <NextIntlClientProvider messages={messages}>
          <SessionProvider>{children}</SessionProvider>
        </NextIntlClientProvider>
         
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/46984286.js"></script>
      </body>
      <GoogleAnalytics gaId="G-1WHF6KC60T" />
    </html>
  )
}
