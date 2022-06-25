import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../containers/footer/Footer'
import Header from '../containers/header/Header'

import NextNProgress from "nextjs-progressbar";
import { useIsMobile } from 'utils/hooks/mediaQuery';

function MyApp({ Component, pageProps }: AppProps) {
  const isMobile = useIsMobile();
  return (
    <>
      <NextNProgress options={{showSpinner: !isMobile}} />
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

export default MyApp
