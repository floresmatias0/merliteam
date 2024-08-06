import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import { notFound } from 'next/navigation';
import { GoogleAnalytics } from '@next/third-parties/google'

const locales = ['en', 'es'];

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

export default function LocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <head>
        <meta name="google-site-verification" content="flPF7T6iV0dSSs_z92wbewTx8hnLtpNBtjQvVAHDaJM"/>
      </head>
      <body className={`${inter.className} text-merli-gray-light bg-gradient-radial`}>
        {children}
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/46984286.js"></script>
      </body>
      <GoogleAnalytics gaId="G-1WHF6KC60T" />
    </html>
  )
}
