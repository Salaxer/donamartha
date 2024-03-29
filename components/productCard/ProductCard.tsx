import Link from 'next/link';
import Image from 'next/image'

import styles from './ProductCard.module.css';

import { Product } from '@MyTypes/menu'

import { Tag } from '@Components'
import { motion, Variants } from 'framer-motion';
import { discount } from 'utils/number';

interface PropsProductCard{
    products: Product,
    index: number,
}

const variants:Variants = {
    initial: {
        opacity: 0,
        y: 30,
    },
    animate: (index) =>{
        const delay = index * 0.2 + 1;
    return (
        {
            opacity: 1,
            y: 0,
            transition: {
                delay,
            }
        }
    )}
}

const ProductCard = ({products, index}:PropsProductCard ) =>{
    return (
        <motion.div variants={variants} initial="initial" animate="animate" custom={index} className={styles.containCard}>
            <Link href={`/menu/${products.id}`} >
                <a className={styles.cardFood}>
                    {products.discount > 0 && <div className={styles.discount}> <span>-{products.discount}%</span></div>}
                    <figure className={styles.cardFood__a}>
                        <Image className={styles.cardFood__img} layout="responsive" width={100} height={100} src={products.image} alt={products.title} />
                    </figure>
                    <div className={styles.FoodDetails}>
                        <div className='w-full flex justify-between'>
                            <div>
                                { products.discount > 0 ? 
                                <>
                                    <p className={styles.lastPrice}>${products.price}</p>
                                    <p className={styles.priceFood}>${discount(products.price, products.discount)}</p>
                                </>
                                    :
                                    <p className={styles.priceFood}>${products.price}</p>
                                }
                            </div>
                            <div className='flex items-center flex-col'>
                                { products.available ? <Tag severity='success' shadow='lg' size='lg' value="Disponible"></Tag> : <Tag shadow='lg' severity='danger' size='lg' value="Agotado"></Tag>}
                                <div className='flex mt-3 '>
                                    <div className='text-2xl text-blue-400 mr-5 cursor-default'>
                                        {/* <Rating className='flex gap-1' cancel={false} readOnly value={products.rating.rate} stars={5} /> */}
                                    </div>
                                    <i className='pi pi-heart text-red-600 cursor-pointer text-3xl'></i>
                                </div>
                            </div>
                        </div>
                        <h6 className={styles.titleFood}>{products.title}</h6>
                    </div>
                </a>
            </Link>
        </motion.div>
    )
}
export default ProductCard;