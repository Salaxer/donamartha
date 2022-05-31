import Link from 'next/link';
import Image from 'next/image'

import styles from './ProductCard.module.css';

import {Product} from '../../utils/interfaces/Product'

import { Rating } from 'primereact/rating';
import { Tag } from '@Components'

interface CardItem{
    products: Product,
}

const ProductCard = ({products}:CardItem ) =>{
    return (
        <div className={styles.containCard}>
            <div className={styles.cardFood} >
                <div className={styles.discount}> <span>-10%</span></div>
                <div className={styles.cardFood__a}>
                    <Link href={`/menu/${products.id}`} >
                        <a>
                            <Image className={styles.cardFood__img} layout="responsive" width={100} height={100} src={products.image} alt={products.title} />
                        </a>
                    </Link>
                </div>
                <div className={styles.FoodDetails}>
                    <div className='w-full flex justify-between'>
                        <div>
                            <p className={styles.lastPrice}>${products.price}</p>
                            <p className={styles.priceFood}>${products.price}</p>
                        </div>
                        <div className='flex items-center flex-col'>
                            <Tag severity='success' size='lg' value='Disponible'></Tag>
                            <div className='flex mt-3 '>
                                <div className='text-2xl text-blue-400 mr-5 cursor-default'>
                                    <Rating className='flex gap-1' cancel={false} readOnly value={products.rating.rate} stars={5} />
                                </div>
                                <i className='pi pi-heart text-red-600 cursor-pointer text-3xl'></i>
                            </div>
                        </div>
                    </div>
                    <h6 className={styles.titleFood}>{products.title}</h6>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;