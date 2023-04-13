import '../src/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Open_Sans } from '@next/font/google'
import Header from "../src/components/header"
import Footer from "../src/components/footer"
import Script from 'next/script'


const open_sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open_sans'
})

export default function App({ Component, pageProps }: AppProps) {

  return (
    <main className={`${open_sans.variable} font-sans`}>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=G-32Z6P37JJH`}
      />

      <Script strategy='lazyOnload'>
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-32Z6P37JJH');`
        }
      </Script>

      <Component {...pageProps} />
      <Footer />
    </main>)
}
