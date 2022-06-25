import { AllScreen, NotFound } from '@Components'
import { Product } from '@MyTypes/menu'
import { getItemMenu } from '@ServerAPI/menu'
import { FirebaseError } from 'firebase/app'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

interface PropsProduct{
  product: Product
  err: Error
}

const MenuItem = ({ product, err }:PropsProduct) => {
  console.log(product);
  return (
    <div >
      <Head>
        <title>Doña Martha | Product</title>
        <meta name="description" content="Product del restaurante doña martha, aqui podras encontrar todos nuestros productos" />
        <link rel="icon" href="/favicon .ico" />
      </Head>
      {(!err && product) ?
        <main>
          <AllScreen>
            <p className='font-sans text-xl font-bold'>Hola</p>
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