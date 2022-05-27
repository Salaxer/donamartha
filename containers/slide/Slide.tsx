import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from './Slide.module.css'

interface ItemCarousel {
    id: number,
    src: string,
    title: string,
    description: string,
    url: string,
}

const Slide: NextPage = () => {
    let dataCarousel : ItemCarousel[] = [{
        id: 1,
        description: 'Something',
        src: 'http://react-responsive-carousel.js.org/assets/1.jpeg',
        title: 'Mejor',
        url: 'SAD21',
    },
    {
        id: 2,
        description: 'more',
        src: '/Slides/1.png',
        title: 'Las mejores ofertas',
        url: 'OFF10',
    }]; 
    return (
        <>
            <Swiper pagination={true} autoHeight={true} navigation={true} autoplay={true} modules={[Pagination, Navigation]} className="mySwiper">
                {dataCarousel.map((item) =>{
                    return (
                    <SwiperSlide key={item.id}>
                        <Link href={`offers/${item.url}`}>
                            <a>
                                <div className={styles.imageSlide}>
                                    <Image layout='fill'
                                    objectFit='cover'
                                    alt={item.title}
                                    src={item.src} />
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