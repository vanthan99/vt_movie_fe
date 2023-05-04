import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import type { ReactElement, ReactNode } from 'react';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)
  // thantest
  return getLayout(
    <>
      <ConfigProvider theme={{
        token: {
          fontFamily: 'Roboto',
        }
      }}>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XTS8R1ZTWJ"
          strategy='afterInteractive'
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XTS8R1ZTWJ');
          `}
        </Script>

        <Component {...pageProps} />
        <Analytics /> 
      </ConfigProvider>
    </>
  )
}