import type { GetStaticProps } from 'next'

import Head from 'next/head'

import Slide from '../containers/slide/Slide'
import ListProducts from '../containers/listProducts/ListProducts'

const Menu = ({products}:any) => {
  return (
    <div >
      <Head>
        <title>Doña Martha | Menu</title>
        <meta name="description" content="Menu del restaurante doña martha, aqui podras encontrar todos nuestros productos" />
        <link rel="icon" href="/favicon .ico" />
      </Head>
      <main>
        <Slide></Slide>
        <ListProducts products={products}></ListProducts>
      </main>
    </div>
  )
}

export const getStaticProps:GetStaticProps = async (contex) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://fakestoreapi.com/products/')
  const products = await res.json()
  console.log(contex);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
    },
  }
}

export default Menu
