import type { NextPage } from 'next'
import Head from 'next/head'

import { AllScreen, AutoScroll, Greeting, SectionScroll } from '@Components'

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Doña Martha</title>
        <meta name="description" content="Restaurante de mariscos, micheladas y venta de bebidas alcoholicas" />
        <link rel="icon" href="/favicon .ico" />
      </Head>

      <main id="main">
        <AutoScroll className='' autoScroll={true}>
          <SectionScroll>
            <AllScreen>
              <Greeting />
            </AllScreen>
          </SectionScroll>
          <SectionScroll>
            <AllScreen className='bg-blue-100'>
              <div className='w-full '>
                
                <button>Hola</button>
                <p className='text-5xl text-red-400'>Soy Pantalla 2</p>
              </div>
            </AllScreen>
          </SectionScroll>
          <SectionScroll>
            <AllScreen className='bg-blue-200'>
              <p className='text-5xl text-red-400'>Soy Pantalla 3</p>
            </AllScreen>
          </SectionScroll>
          <SectionScroll>
            <AllScreen className='bg-blue-300'>
              <p className='text-5xl text-red-400'>Soy Pantalla 4</p>
            </AllScreen>
          </SectionScroll>
          <SectionScroll>
            <AllScreen className='bg-blue-400'>
              <p className='text-5xl text-red-400'>Soy Pantalla 5</p>
            </AllScreen>
          </SectionScroll>
          <SectionScroll>
            <AllScreen className='bg-blue-500'>
              <p className='text-5xl text-red-400'>Soy Pantalla 6</p>
            </AllScreen>
          </SectionScroll>
          <SectionScroll>
            <AllScreen className='bg-blue-400'>
              <p className='text-5xl text-red-400'>Soy Pantalla 7</p>
            </AllScreen>
          </SectionScroll>
          <SectionScroll>
            <AllScreen className='bg-blue-300'>
              <p className='text-5xl text-red-400'>Soy Pantalla 8</p>
            </AllScreen>
          </SectionScroll>
        </AutoScroll>
      </main>

    </div>
  )
}

export default Home
