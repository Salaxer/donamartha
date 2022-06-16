import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react';

import { Loader, ProductCard, DropDown, Slide } from '@Components';
import { Product } from 'utils/interfaces/Product';

import styles from 'styles/Menu.module.css';
import { TypeSlide } from 'utils/interfaces/Slide';

interface PropsMenu{
  products: Product[],
  dataCarousel: TypeSlide[]
}

const Menu = ({products, dataCarousel}:PropsMenu) => {

  const [sortByCategory, setSortByCategory] = useState<String>('Ordenar la categoria');
  const [sortByType, setSortByType] = useState<String>('Ordenar por');

  return (
    <>
      <Head>
        <title>Doña Martha | Menu</title>
        <meta name="description" content="Menu del restaurante doña martha, aqui podras encontrar todos nuestros productos" />
        <link rel="icon" href="/favicon .ico" />
      </Head>
      <main>
        <Slide value={dataCarousel}></Slide>
        <div>
          <div className={styles.MenuFoodMain} id="MenuFoodMain">
            <div className={styles.ContainerAllFood}>
              <div className={styles.searchFood}> 
                <h1 className={styles.titleFood}>Carta</h1>
                <div className={`${styles.formFood} text-2xl`}>
                  <div className={styles.sortFood}>
                    <DropDown onChangeSelected={(e)=>{setSortByCategory(e)}} selected={sortByCategory} options={['Todo','Favoritos' , 'Comida', 'Bebidas', 'Botanas']}></DropDown>
                  </div>
                  <input type="search" name="inputfoodSearch" placeholder="Buscar" className={styles.inputfoodSearch} id="" />
                  <div className={styles.selectFood}>
                    <DropDown onChangeSelected={(e)=>{setSortByType(e)}} selected={sortByType} options={['Recomendados', 'Mejor Valorado', 'Menor a Mayor Precio', 'Mayor a Menor Precio']}></DropDown>
                  </div>
                </div>
              </div>
              {
                products.length === 0 ?
                <div className={styles.loader} >
                  <Loader color='' position='relative' background='' size=''></Loader>
                </div> :
                products.map((product, index) => <ProductCard products={product} key={index}></ProductCard>)
              }
            </div> 
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps:GetStaticProps = async (contex) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  let products = [];
  try {

    const res = await fetch('https://fakestoreapi.com/products/')
    products = await res.json()

  } catch (e) {
    console.log(e);
    
  }
  let dataCarousel : TypeSlide[] = [{
    id: 1,
    description: 'Something',
    src: 'http://react-responsive-carousel.js.org/assets/1.jpeg',
    title: 'Mejor',
    url: 'SAD21',
  },
  {
    id: 2,
    description: 'more',
    src: '/Slides/1.png',
    title: 'Las mejores ofertas',
    url: 'OFF10',
  }]; 
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
      dataCarousel,
    },
  }
}

export default Menu
