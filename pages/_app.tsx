import '../src/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Open_Sans } from '@next/font/google'
import Header from "../src/components/header"
import Footer from "../src/components/footer"
import { useRouter } from 'next/router'

const open_sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open_sans'
})

export default function App({ Component, pageProps }: AppProps) {

  const { asPath, push, pathname } = useRouter()
  if (asPath.split('?')[0] != pathname.split('?')[0] && !pathname.includes('[')) {
    // Work around for next export breaking SPA routing on first hit
    console.log('Browser route ' + asPath + ' did not match nextjs router route ' + pathname)
    push(asPath)
    return <div>Loading...</div>
  }
  return (
    <main className={`${open_sans.variable} font-sans`}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>)
}
