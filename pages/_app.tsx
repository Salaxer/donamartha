import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from '../containers/footer/Footer'
import Header from '../containers/header/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}

export default MyApp
