import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image';

import { motion } from 'framer-motion';

import { AllScreen, ToolTip, NotFound, PreviewImage, Tag, MetaTags, BubbleImg } from '@Components'
import { Product } from '@MyTypes/menu'
import { getAllItemsIds, getItemMenu } from '@ServerAPI/menu'

import { useIsMobile } from 'utils/hooks/mediaQuery';
import { discount } from 'utils/number';
import { deleteTypeValues } from 'utils/object';

import styles from '../../styles/Menu[id].module.css';

interface ProductProps{
  product: Product
  err: Error
}

const MenuItem = ({ product, err }:ProductProps) => {
  const isMobile = useIsMobile();
  if (err || !product) {
    return <NotFound/>
  }
  return (
    <>
      <MetaTags 
        description={product.details}
        image={product.image}
        title={product.title}
        keyWorks={["Restaurante","Mojarra","Comida","Cerveza","Micheladas","Mariscos"]}
      />
      <main className='bg-blue-100'>
        <AllScreen className='relative overflow-hidden' minHeight={isMobile}>
          <section className={styles.screenShowMenu}>
            <motion.div initial={{x: -400, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 0.5}} className='relative'>
              <BubbleImg preview alt={product.title} image={product.image} priority className={styles.containerIMG}/>
            </motion.div>
            <motion.div initial={{x: 400, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{delay: 1}} className={styles.descriptionShowMenu}>
              <span className={styles.availability}>
                { product.available ? <Tag severity='success' shadow='lg' size={ isMobile ? 'lg' :'3xl' } value="Disponible"></Tag> : <Tag shadow='lg' severity='danger' size={ isMobile ? 'lg' :'3xl' } value="Agotado"></Tag>}
                { product.discount > 0 && <Tag shadow='lg' severity='warning' size={ isMobile ? 'lg' :'3xl' } value={`-${product.discount}% OFF`}></Tag>}
              </span>
              <h1 className='text-center'>{product.title.toUpperCase()}</h1>
              <div className='flex gap-5'>
                { product.discount > 0 ? 
                  <>
                    <span className={styles.lastPrice}>${product.price}</span>
                    <h2 style={{color: 'var(--maincolorgreen)'}} className='text-5xl font-semibold'>${discount(product.price, product.discount)}</h2>
                  </>
                  :
                  <h2 className='text-5xl font-semibold'>${product.price}</h2>
                }
                <div className={styles.heart}>
                  <i className='pi pi-heart'></i>
                  <ToolTip position='bottom' value='Agregar a favoritos'></ToolTip>
                </div>
              </div>
              <h5 className='text-3xl text-center mt-10'>{product.details}</h5>
              <ol style={{listStyle: "outside"}}>
                {product.time > 0 && <li className='text-2xl mt-3'>Preparacion en {product.time} minutos <i style={{color: 'var(--maincolorgreen)'}} className='pi pi-check-circle'></i></li>}
                <li className='text-2xl mt-3'>con un tamaño de {product.size}   <i style={{color: 'var(--maincolorgreen)'}} className='pi pi-check-circle'></i></li>
                {product.ingredients && <li className='text-2xl mt-3'>Ingredientes: {product.ingredients}<i style={{color: 'var(--maincolorgreen)'}} className='pi pi-check-circle'></i></li>}
              </ol>
            </motion.div>
          </section>
        </AllScreen>
      </main>
    </>
  )
}

// Obtain the statics phats from the file on posts/***.md and assign to the props
export const getStaticPaths:GetStaticPaths<{id: string}> = async ( )=>{
  const paths = await getAllItemsIds();
  return {
      paths: paths,
      fallback: true
  }
}

// obtian the static props and return anoter one
export const getStaticProps:GetStaticProps = async ({ params }) => {
  let product;
  let err = null;
  if (params) {
    if (typeof params.id == "string") {
      const { response, error } = await getItemMenu(params.id)
      product = response?.exists() ? {...response.data(), id: response.id } : null;
      err = error ? deleteTypeValues(error, "undefined", "function") : null;
    }
  }
  return {
      props: {
        product,
        err,
      },
  }
}

export default MenuItem