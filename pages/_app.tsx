import '../src/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Open_Sans } from '@next/font/google'
import Header from "../src/components/header"
import Footer from "../src/components/footer"


const open_sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open_sans'
})

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <main className={`${open_sans.variable} font-sans`}>
      
      <Component {...pageProps} />
      <Footer />
    </main>)
}
