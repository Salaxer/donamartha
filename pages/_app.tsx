import '../styles/globals.css'
import '../styles/custom.css'
import '../styles/variables.css'

import type { AppProps } from 'next/app'

import Footer from '../containers/footer/Footer'
import Header from '../containers/header/Header'

import NotificationProvider from 'components/notification';
import ProgressBar from 'components/progressbar';

import store from '../state/store'
import { Provider } from 'react-redux'
import useRouterChange from 'utils/hooks/routerChange'
import ObserverUser from 'components/observerUser'

function MyApp({ Component, pageProps }: AppProps) {
	
	const loading = useRouterChange();

  return (
		<Provider store={store}>
			<ObserverUser></ObserverUser>
			<ProgressBar animate={loading}></ProgressBar>
      <NotificationProvider>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </NotificationProvider>
		</Provider>
  )
}

export default MyApp
