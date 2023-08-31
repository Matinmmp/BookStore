import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import "swiper/css/autoplay"
import Link from 'next/link';


interface IProps {
    products: any
}


const Hero = ({ products }: IProps) => {

    console.log(products);


    return (
        <div className="h-[90vh]">
            <Swiper
                slidesPerView={1}
                pagination={{ dynamicBullets: true, }}
                modules={[Pagination, Navigation, Autoplay]}
                // autoplay={{delay:6000}}
                className="h-full" >

                <SwiperSlide className='bg-red-yellow h-full  relative'>
                    <Image alt='sdaf' width={2000} height={1200} className='w-full h-full object-cover'
                        src={`http://localhost:8000/images/products/thumbnails/${products[products.length - 1].thumbnail}`} />
                    <div className='absolute top-0 right-0 left-0 bottom-0 backdrop-blur-[3px] bg-slate-950 bg-opacity-70'>
                        <div className='flex flex-col p-16 px-36 mt-[6rem] gap-12'>
                            <Link href={'/'}>
                                <h3 className='text-2xl text-white font-semibold'>{products[products.length - 1].name}</h3>
                            </Link>
                            <div className="flex ">
                                <Image alt='sdaf' width={2000} height={1300} className='w-[15rem] h-[20rem] object-cover rounded-lg'
                                    src={`http://localhost:8000/images/products/images/${products[products.length - 1].images[0]}`} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className='bg-blue-500'>Slide 2</SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Hero