import React, { use } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { AuthContext } from '../Context/AuthProvider';
const Hero = () => {
    const { user } = use(AuthContext);
    return (
        <div>
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation={false}

                    pagination={{ clickable: true }}
                    loop={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    // className="w-full h-full"
                    className='w-300 h-150  mt-15 max-md:mt-35 rounded-xl max-md:w-100 max-md:h-55 m-auto mb-20 max-lg:w-170 max-lg:h-full'
                >
                    <SwiperSlide className=''><img className='m-auto' src="https://i.ibb.co.com/931DCw4m/3.png" alt="Hero Image 1" /></SwiperSlide>
                    <SwiperSlide className=''><img className='m-auto' src="https://i.ibb.co.com/B2M84wFg/2.png" alt="Hero Image 2" /></SwiperSlide>
                    <SwiperSlide className=''><img className='m-auto' src="https://i.ibb.co.com/LDK0C8n3/1.png" alt="Hero Image 3" /></SwiperSlide>
                </Swiper>
                <h1 className='text-4xl'>{user && user.name}</h1>
            </div>
        </div>
    )
}

export default Hero
