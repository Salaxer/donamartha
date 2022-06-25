import Image from 'next/image'
import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from './Slide.module.css'
import { TypeSlide } from 'lib/types/Slide';


interface PropSlide{
    value: TypeSlide[],
}

const Slide = ({ value }:PropSlide) => {
    return (
        <>
            <Swiper pagination={true} navigation={true} autoplay={true} modules={[Pagination, Navigation]} className="mySwiper">
                {value.map((item, index) =>{
                    return (
                    <SwiperSlide key={item.id}>
                        <Link href={`/offers/${item.id}`}>
                            <a>
                                <div className={styles.imageSlide}>
                                    <Image layout='fill'
                                    objectFit='cover'
                                    alt={item.title}
                                    src={item.image} />
                                </div>
                            </a>
                        </Link>
                    </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
  }

  export default Slide