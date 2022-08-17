import '../styles/globals.css'
import '../styles/custom.css'
import '../styles/variables.css'

import type { AppProps } from 'next/app'

import Footer from '../containers/footer/Footer'
import Header from '../containers/header/Header'

import NotificationProvider from 'components/notification';
import ProgressBar from 'components/progressbar';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [ loading, setLoading ] = useState(false);
	useEffect(()=>{
		const handleStart = () => {
			setLoading(true)
		};
		const handleComplete = () => {
			setTimeout(()=> {
				setLoading(false)
			}, 1000)
		};
		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);
		return ()=>{
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", handleComplete);
			router.events.off("routeChangeError", handleComplete);	
		}
	}, [router.asPath, router.events])
	
  return (
    <>
			<ProgressBar animate={loading} options={{ asd: ""}}></ProgressBar>
      <NotificationProvider>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </NotificationProvider>
    </>
  )
}

export default MyApp
