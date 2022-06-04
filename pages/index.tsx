import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import styles from 'styles/Home.module.css';
import DishRounded from 'public/images/dish-rounded.jpg';

import { AllScreen, AutoScroll, Greeting } from '@Components'
import { useState } from 'react';

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
            <Greeting />
          </AllScreen>
          <AllScreen className='bg-blue-100 overflow-hidden'>
            <div className={styles.screenShowMenu}>
              <div>
                <div className={styles.containerIMG}>
                  <Image src={DishRounded} alt='restaurant' layout='fill' objectFit='cover' className={styles.imageDish}></Image>
                </div>
              </div>
              <div className={styles.descriptionShowMenu}>
                <h3 className='text-5xl text-center'>Restaurante Doña Martha</h3>
                <h5 className='text-3xl text-center'>Antes Micheladas Doña Martha</h5>
                <p className='text-lg text-center'>Podras</p>
                <Link href='/menu'>
                  <a className={styles.redirectMenu}>
                    <p>Mostrar Menu</p>
                  </a>
                </Link>
              </div>
            </div>
          </AllScreen>
          <AllScreen className='bg-blue-200'>
            <p className='text-5xl text-red-400'>Soy Pantalla 3</p>
          </AllScreen>
          <AllScreen className='bg-blue-300'>
            <p className='text-5xl text-red-400'>Soy Pantalla 4</p>
          </AllScreen>
          <AllScreen className='bg-blue-400'>
            <p className='text-5xl text-red-400'>Soy Pantalla 5</p>
          </AllScreen>
          <AllScreen className='bg-blue-500'>
            <p className='text-5xl text-red-400'>Soy Pantalla 6</p>
          </AllScreen>
          <AllScreen className='bg-blue-400'>
            <p className='text-5xl text-red-400'>Soy Pantalla 7</p>
          </AllScreen>
          <AllScreen className='bg-blue-300'>
            <p className='text-5xl text-red-400'>Soy Pantalla 8</p>
          </AllScreen>
        </AutoScroll>
      </main>

    </div>
  )
}

export default Home
