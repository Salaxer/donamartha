import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head';
import Image from 'next/image';

import { motion } from 'framer-motion';

import styles from '../../styles/Menu[id].module.css';
import { AllScreen, ToolTip, NotFound, PreviewImage, Tag } from '@Components'
import { Product } from '@MyTypes/menu'
import { discount } from 'utils/dicount';
import { getItemMenu } from '@ServerAPI/menu'


interface ProductProps{
  product: Product
  err: Error
}

const MenuItem = ({ product, err }:ProductProps) => {
  
  return (
    <div >
      <Head>
        <title>{product.title} | Do&ntilde;a Martha</title>
        <meta name="description" content={product.details} />
        <link rel="icon" href="/favicon .ico" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1A1A1B" />
        <meta name="twitter:image:src" content={product.image}/>
        <meta name="twitter:site" content="@salaxer1"/>
        <meta name="twitter:card" content="product"/>
        <meta name="twitter:title" content= {`${product.title} | Do&ntilde;a Martha`}/>
        <meta name="twitter:description" content={product.details}/>
        <meta property="og:type" content="Producto"/>
        <meta property="og:description" content={product.details}/>
        <meta property="og:image" content={product.image}/>
        <meta property="og:image:alt" content={`${product.title} | Do&ntilde;a Martha`}/>
        <meta property="og:site_name" content="Do&ntilde;a Martha"/>
        <meta property="og:url" content="donamartha.com.mx"/>
        <link rel="apple-touch-icon" href={product.image}/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
      {(!err && product) ?
        <main className='bg-blue-100'>
          <AllScreen>
            <section className={styles.screenShowMenu}>
              <div className='relative'>
                <div className={styles.containerIMG}>
                  <PreviewImage>
                    <Image src={product.image} alt='restaurant' layout='fill' objectFit='cover' className={styles.imageDish}></Image>
                  </PreviewImage>
                </div>
              </div>
              <div className={styles.descriptionShowMenu}>
                <span className={styles.availability}>
                  { product.available ? <Tag severity='success' shadow='lg' size='4xl' value="Disponible"></Tag> : <Tag shadow='lg' severity='danger' size='4xl' value="Agotado"></Tag>}
                  { product.discount > 0 && <Tag className='mt-5' shadow='lg' severity='warning' size='3xl' value={`-${product.discount}% OFF`}></Tag>}
                </span>
                <h1 className='text-center'>{product.title}</h1>
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
                </ol>
              </div>
            </section>
          </AllScreen>
        </main>
        :
      <NotFound/>
      }
    </div>
  )
}

// Obtain the statics phats from the file on posts/***.md and assign to the props
export const getStaticPaths:GetStaticPaths = async ( ada )=>{
  return {
      paths: [],
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
      err = error ? (typeof error == "string" ? { message: error } : error )  : null;
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