import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// 
import Greeting from '../components/Greeting'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Doña Martha</title>
        <meta name="description" content="Restaurante de mariscos, micheladas y venta de bebidas alcoholicas" />
        <link rel="icon" href="/favicon .ico" />
      </Head>

      <main id="main" className="main">
        <Greeting />
        {/* <!-- Slide food --> */}
        {/* <Discover></Discover> */}
        {/* <!-- Facebook --> */}
        {/* <Fb_opinions/> */}
        {/* <!-- little Menu --> */}
        {/* <MenuFood/> */}
      </main>

    </div>
  )
}

export default Home
