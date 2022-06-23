// Packages
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react';

// Styles
import styles from 'styles/Menu.module.css';

// Personal
import { Loader, ProductCard, DropDown, Slide } from '@Components';
import { Product } from 'lib/types/Product';
import { TypeSlide } from 'lib/types/Slide';

// API to getStaticProps and render the page before giving it to the client side using Firebase.
import { getMenu } from '@ServerAPI/menu';
// API For clients that perform communication between the client side and the Next server using Axios.
import { getNewMenu, Category, ByType } from '@ClientAPI/menu';
import { SocketReadyState } from 'net';


interface PropsMenu{
  dataCarousel: TypeSlide[],
  MenuProducts: Product[];
}

const Menu = ({dataCarousel, MenuProducts}:PropsMenu) => {

  const [orderProducts, setOrderProducts] = useState<Product[]>([]);
  const [sortByCategory, setSortByCategory] = useState<Category>("Todo");
  const [sortByType, setSortByType] = useState<ByType>("Recomendados");

  useEffect(()=>{

    const reorderMenu = async () =>{
      const res = await getNewMenu(sortByCategory, sortByType);
      console.log(res.error);
      console.log(res.response?.data);
    }

    if (sortByCategory !== "Todo" || sortByType !== "Recomendados"){
      reorderMenu();
      setOrderProducts([])
    }else{
      setOrderProducts(MenuProducts)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[sortByCategory, sortByType])

  return (
    <>
      <Head>
        <title> Menu | Doña Martha </title>
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
                orderProducts.length === 0 ?
                <div className={styles.loader} >
                  <Loader color='' position='relative' background='' size=''></Loader>
                </div> :
                orderProducts.map((product, index) => <ProductCard index={index} products={product} key={index}></ProductCard>)
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
  let MenuProducts:Product[] = [];
  try {
    const resFirebase = await getMenu();
    resFirebase.forEach((item)=>{
      MenuProducts.push({...item.data() as Product, id: item.id});
    })
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
      dataCarousel,
      MenuProducts,
    },
    revalidate: 3600
  }
}

export default Menu
