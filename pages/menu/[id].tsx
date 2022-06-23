import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'


const Product = () => {
  return (
    <div >
      <Head>
        <title>Doña Martha | Product</title>
        <meta name="description" content="Product del restaurante doña martha, aqui podras encontrar todos nuestros productos" />
        <link rel="icon" href="/favicon .ico" />
      </Head>
      <main>
      </main>
    </div>
  )
}

// Obtain the statics phats from the file on posts/***.md and assign to the props
export const getStaticPaths:GetStaticPaths = async ()=>{

  console.log('im in getStaticPaths');

  return {
      paths: [],
      fallback: true
  }
}

// obtian the static props and return anoter one
export const getStaticProps:GetStaticProps = async ({ params }) => {
  console.log('im in getStaticProps');
  // console.log('Here the id received:: ',params.id);
  // const postData = await getCharacterData(params.id);
  return {
      props: {
          // postData
      }
  }
}

export default Product