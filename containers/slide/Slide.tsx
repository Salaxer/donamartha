import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ItemCarousel {
    id: number,
    src: string,
    title: string,
    description: string,
    url: string,
}

const Slide: NextPage = () => {
    let dataCarousel : ItemCarousel[] = [{
        description: 'Something',
        id: 1,
        src: 'http://react-responsive-carousel.js.org/assets/1.jpeg',
        title: 'Mejor',
        url: 'SAD21',
    },
    {
        description: 'more',
        id: 2,
        src: '/Slides/1.png',
        title: 'Las mejores ofertas',
        url: 'OFF10',
    }]; 
    return (
        <>
            <Swiper pagination={true} navigation={true} modules={[Pagination, Navigation]} className="mySwiper">
                {dataCarousel.map((item) =>{
                    return (
                    <SwiperSlide key={item.id}>
                        <Link href={`offers/${item.url}`}>
                            <a>
                                <Image height={400} width={1200} alt={item.title} src={item.src} />
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