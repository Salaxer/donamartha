import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../containers/footer/Footer'
import Header from '../containers/header/Header'

import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress />
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

export default MyApp
