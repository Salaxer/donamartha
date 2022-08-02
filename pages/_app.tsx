import '../styles/globals.css'
import '../styles/custom.css'
import '../styles/variables.css'

import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";

import { useIsMobile } from 'utils/hooks/mediaQuery';
import Footer from '../containers/footer/Footer'
import Header from '../containers/header/Header'

import NotificationProvider from 'components/notification';

function MyApp({ Component, pageProps }: AppProps) {
  const isMobile = useIsMobile();
  return (
    <>
      <NextNProgress options={{showSpinner: !isMobile}} />
      <NotificationProvider>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </NotificationProvider>
    </>
  )
}

export default MyApp
