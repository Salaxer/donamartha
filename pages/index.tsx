import type { NextPage } from 'next'
import Head from 'next/head'

import { useState } from 'react';

import { AllScreen, AutoScroll, Emerge } from '@Components';
import { Greeting, Presentation, SeaFood } from '@Containers';


const Home: NextPage = () => {

  const [currentScreen , setCurrentScreen] = useState<number>(0);

  return (
    <div>
      <Head>
        <title>Doña Martha</title>
        <meta name="description" content="Restaurante de mariscos, micheladas y venta de bebidas alcoholicas" />
        <link rel="icon" href="/favicon .ico" />
      </Head>

      <main id="main">
        <AutoScroll className='' autoScroll={true} onChangeScreen={(e)=>setCurrentScreen(e)}>
          <AllScreen> {/* index: 0*/}
            <Emerge animation='dispel' className=''>
              <Greeting />
            </Emerge>
          </AllScreen>
          <AllScreen className='bg-blue-100 overflow-hidden'>
            <Presentation/>
          </AllScreen>
          <AllScreen className='bg-black-100'>
            <SeaFood/>
          </AllScreen>
          <AllScreen className='bg-blue-300'>
            <p className='text-5xl text-red-400'>Soy Pantalla 4</p>
          </AllScreen>
        </AutoScroll>
      </main>

    </div>
  )
}

export default Home
