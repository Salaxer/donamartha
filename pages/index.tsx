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
          <AllScreen className='overflow-hidden'>
            <Greeting/>
          </AllScreen>
          <AllScreen className='overflow-hidden'>
            <Presentation/>
          </AllScreen>
          <AllScreen className='overflow-hidden'>
            <SeaFood/>
          </AllScreen>
          <AllScreen className='overflow-hidden'>
            <FindUs/>
          </AllScreen>
          {/* <AllScreen className='overflow-hidden'>
            <Drinks></Drinks>
          </AllScreen> */}
          <AllScreen className='overflow-hidden'>
            <Place></Place>
          </AllScreen>
        </AutoScroll>
      </main>
    </div>
  )
}

export default Home
