// Packages
import type { GetStaticProps } from 'next'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Styles
import styles from 'styles/Menu.module.css';

//Personals Components 
import { Loader, ProductCard, DropDown, Slide, MetaTags } from '@Components';
// API to getStaticProps and render the page before giving it to the client side using Firebase.
import { getMenu } from '@ServerAPI/menu';
import { getSlide } from '@ServerAPI/slide';
// API For clients that perform communication between the client side and the Next server using Axios.
import { getOrderMenu } from '@ClientAPI/menu';
// All types used
import { TypeSlide } from '@MyTypes/Slide';
import { Category, ByType, PropsMenu, Product } from '@MyTypes/menu'
import InputText from 'components/inputText/InputText';

const Menu = ({dataCarousel, MenuProducts}:PropsMenu) => {
  const [orderProducts, setOrderProducts] = useState<Product[]>([]);
  const [sortByCategory, setSortByCategory] = useState<Category>("Todo");
  const [sortByType, setSortByType] = useState<ByType>("Recomendados");
  const [loader, setLoader] = useState<boolean>(false);

  const orderBy = () =>{
    if (sortByType == "Menor a Mayor Precio") {
      setOrderProducts([...orderProducts.sort((a, b) => a.price - b.price )])
    }
    if (sortByType == "Mayor a Menor Precio") {
      setOrderProducts([...orderProducts.sort((a, b) => b.price - a.price )])
    }
    if (sortByType == "Mejor Valorado") {
      setOrderProducts([...orderProducts.sort((a, b) => b.rating.rate - a.rating.rate )])
    }
    setLoader(false)
  }

  useEffect(()=>{
    if (sortByType !== "Recomendados") {
      setLoader(true);
      orderBy()
    }else{
      setOrderProducts(MenuProducts)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[sortByType])
  
  useEffect(()=>{
    console.log(sortByCategory);
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
      <MetaTags 
        description='Menu del restaurante doña martha, aqui podras encontrar todos nuestros productos'
        image={'/preview_page_menuasf12e4wfdasd.png'}
        keyWorks={['Mariscos', "Relajante", "Carta de doña martha", "Restaurante", "Comida", "Bebidas", "Micheladas", "mojitos"]}
        title='Menu del restaurante'></MetaTags>
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
                <DropDown onChange={(e)=>{setSortByCategory(e.target.value as any)}} selected={sortByCategory} options={['Todo','Favoritos' , 'Comida', 'Bebidas', 'Botanas']}></DropDown>
              </div>
              <div className={styles.searchSection}>
                <InputText displayName='Buscar' placeholder='Mojarras, Mezcal, Cocos...' type="search" name='Search'></InputText>
              </div>
              <div className={styles.selectFood}>
                <p className='p-1 m-1'>Ordenar por</p>
                <DropDown onChange={(e)=>{setSortByType(e.target.value as any)}} selected={sortByType} options={['Recomendados', 'Mejor Valorado', 'Menor a Mayor Precio', 'Mayor a Menor Precio']}></DropDown>
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
