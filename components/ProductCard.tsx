import Link from 'next/link';
import Image from 'next/image'

import styles from './ProductCard.module.css';

import {Product} from '../utils/interfaces/Product'


interface CardItem{
    products: Product,
    index: number,
}

const ProductCard = ({products, index}:CardItem ) =>{
    console.log(products);
    
    return (
        <div className={styles.containCard} key={index}>
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
                        <div className='text-3xl flex items-center cursor-pointer text-red-600'>
                            <i className='pi pi-heart'></i>
                        </div>
                    </div>
                    <h6 className={styles.titleFood}>{products.title}</h6>
                    <div>
                    {/* <RatingStar
                        maxScore={100}
                        id={index.toString()}
                        rating={products.rating}
                    /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCard;