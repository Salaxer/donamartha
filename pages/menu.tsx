import type { NextPage } from 'next'
import Head from 'next/head'

import Slide from '../containers/slide/Slide'
import ListProducts from '../containers/listProducts/ListProducts'

const Menu: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Doña Martha | Menu</title>
        <meta name="description" content="Menu del restaurante doña martha, aqui podras encontrar todos nuestros productos" />
        <link rel="icon" href="/favicon .ico" />
      </Head>
      <main>
        <Slide></Slide>
        <ListProducts></ListProducts>
      </main>
    </div>
  )
}

export default Menu
