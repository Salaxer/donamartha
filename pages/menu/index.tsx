// Packages
import type { GetStaticProps } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react';

// Styles
import styles from 'styles/Menu.module.css';

//Personals Components 
import { Loader, ProductCard, DropDown, Slide } from '@Components';
// API to getStaticProps and render the page before giving it to the client side using Firebase.
import { getMenu } from '@ServerAPI/menu';
import { getSlide } from '@ServerAPI/slide';
// API For clients that perform communication between the client side and the Next server using Axios.
import { getOrderMenu } from '@ClientAPI/menu';
// All types used
import { TypeSlide } from '@MyTypes/Slide';
import { Category, ByType, PropsMenu, Product } from '@MyTypes/menu'

const Menu = ({dataCarousel, MenuProducts}:PropsMenu) => {

  const [orderProducts, setOrderProducts] = useState<Product[]>([]);
  const [sortByCategory, setSortByCategory] = useState<Category>("Todo");
  const [sortByType, setSortByType] = useState<ByType>("Recomendados");
  const [loader, setLoader] = useState<boolean>(false);

  const orderBy = () =>{
    if (sortByType == "Menor a Mayor Precio") {
      setOrderProducts([...orderProducts.sort((a, b) => {
        return a.price - b.price
      })])
    }
    if (sortByType == "Mayor a Menor Precio") {
      setOrderProducts([...orderProducts.sort((a, b) => {
        return b.price - a.price
      })])
    }
    if (sortByType == "Mejor Valorado") {
      setOrderProducts([...orderProducts.sort((a, b) => {
        return a.rating.rate - b.rating.rate
      })])
    }
    if (sortByType == "Recomendados") {
      setOrderProducts(MenuProducts)
    }
    setLoader(false)
  }

  useEffect(()=>{
    if (sortByType !== "Recomendados") {
      setLoader(true);
      orderBy()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[sortByType])
  
  useEffect(()=>{
    const reorderMenu = async () =>{
      const res = await getOrderMenu<Product[]>({
        category: sortByCategory, 
        type: sortByType,
      });
      if (res.response?.data.data) {
        setOrderProducts(res.response.data.data);
      }
      setLoader(false);
    }
    if (sortByCategory == "Todo") {
      setOrderProducts(MenuProducts)
    }else{
      setLoader(true);
      reorderMenu();
      setOrderProducts([])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[sortByCategory]);

  return (
    <>
      <Head>
        <title> Menu | Doña Martha </title>
        <meta name="description" content="Menu del restaurante doña martha, aqui podras encontrar todos nuestros productos" />
        <link rel="icon" href="/favicon .ico" />
      </Head>
      <main className={styles.MenuFoodMain}>
        <div className={styles.Slide}>
          <Slide value={dataCarousel}></Slide>
        </div>
        <div className={styles.ContainerAllFood}>
          <div className={styles.searchFood}> 
            <h1 className={styles.titleFood}>Carta</h1>
            <div className={`${styles.formFood} text-2xl p-3`}>
              <div className={styles.sortFood}>
                <p className='p-1 m-1'>Seleccionar categoria</p>
                <DropDown onChangeSelected={(e)=>{setSortByCategory(e)}} selected={sortByCategory} options={['Todo','Favoritos' , 'Comida', 'Bebidas', 'Botanas']}></DropDown>
              </div>
              <div className={styles.searchSection}>
                <p className='p-1 m-1'>Busca aqui</p>
                <input type="search" name="inputfoodSearch" placeholder="Buscar" className={`${styles.inputfoodSearch} border border-gray-300 shadow-sm`} id="" />
              </div>
              <div className={styles.selectFood}>
                <p className='p-1 m-1'>Ordenar por</p>
                <DropDown onChangeSelected={(e)=>{setSortByType(e)}} selected={sortByType} options={['Recomendados', 'Mejor Valorado', 'Menor a Mayor Precio', 'Mayor a Menor Precio']}></DropDown>
              </div>
            </div>
          </div>
          {
            loader ?
            <div className={styles.loader} >
              <Loader color='' position='relative' background='' size=''></Loader>
            </div> : (orderProducts.length > 0 ?
            orderProducts.map((product, index) => <ProductCard index={index} products={product} key={product.id}></ProductCard>): 
            <p>No hay productos disponibles</p>)
          }
        </div> 
      </main>
    </>
  )
}

export const getStaticProps:GetStaticProps = async (contex) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  let MenuProducts:Product[] = [];
  let dataCarousel:TypeSlide[] = [];
  const resFirebase = await getMenu();
  if (resFirebase.response) {
    resFirebase.response.forEach((item)=>{
      MenuProducts.push({...item.data() as Product, id: item.id});
    })
  }
  const resSlideFirebase = await getSlide();
  resSlideFirebase.forEach((item)=>{
    dataCarousel.push({...item.data() as TypeSlide, id: item.id});
  })
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
