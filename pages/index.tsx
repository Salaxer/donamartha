import type { NextPage } from 'next'
import Head from 'next/head'

import { AllScreen, AutoScroll } from '@Components';
import { Greeting, Presentation, SeaFood, Place, FindUs } from '@Containers';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Doña Martha</title>
        <meta name="description" content="Restaurante de mariscos, micheladas y venta de bebidas alcoholicas" />
        <link rel="icon" href="/favicon .ico" />
      </Head>

      <main id="main" className={styles.main}>
        <AutoScroll className='' autoScroll={true} onChangeScreen={()=>{}}>
          <AllScreen> {/* index: 0*/}
            <Greeting/>
          </AllScreen>
          <AllScreen>
            <Presentation/>
          </AllScreen>
          <AllScreen>
            <SeaFood/>
          </AllScreen>
          <AllScreen>
            <FindUs/>
          </AllScreen>
          {/* <AllScreen>
            <Drinks></Drinks>
          </AllScreen> */}
          <AllScreen>
            <Place></Place>
          </AllScreen>
        </AutoScroll>
      </main>
    </div>
  )
}

export default Home
