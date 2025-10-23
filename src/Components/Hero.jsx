import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
const Hero = () => {

    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                // spaceBetween={10}
                slidesPerView={1}
                navigation={false}
                // breakpoints={{
                //     640: {
                //         slidesPerView: 1,
                //     },
                //     768: {
                //         slidesPerView: 2,
                //     },
                //     1024: {
                //         slidesPerView: 3,
                //     },
                // }}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 2000 }}
                className='w-300 h-150  mt-15 rounded-xl max-md:w-100 max-md:h-55 m-auto mb-20'
            >
                <SwiperSlide className=''><img className='m-auto' src="https://i.ibb.co.com/931DCw4m/3.png" alt="Hero Image 1" /></SwiperSlide>
                <SwiperSlide className=''><img className='m-auto' src="https://i.ibb.co.com/B2M84wFg/2.png" alt="Hero Image 2" /></SwiperSlide>
                <SwiperSlide className=''><img className='m-auto' src="https://i.ibb.co.com/LDK0C8n3/1.png" alt="Hero Image 3" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Hero
