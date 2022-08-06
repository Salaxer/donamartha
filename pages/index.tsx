import type { NextPage } from 'next'
import Head from 'next/head'

import { useState } from 'react';

import { AllScreen, AutoScroll } from '@Components';
import { Greeting, Presentation, SeaFood, Drinks, Place, FindUs } from '@Containers';

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
          <AllScreen className='bg-blue-100 overflow-hidden'>
            <Presentation/>
          </AllScreen>
          <AllScreen className='bg-blue-100 overflow-hidden'>
            <SeaFood/>
          </AllScreen>
          <AllScreen className='bg-blue-100 overflow-hidden'>
            <FindUs/>
          </AllScreen>
          {/* <AllScreen className='bg-blue-100 overflow-hidden'>
            <Drinks></Drinks>
          </AllScreen> */}
          <AllScreen className='bg-blue-100 overflow-hidden'>
            <Place></Place>
          </AllScreen>
        </AutoScroll>
      </main>

    </div>
  )
}

export default Home
