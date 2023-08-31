import React, { useRef, useState } from 'react';
import {  SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/models/Types';

import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay"

interface IProps{
    product:Product
}


const Slide = ({product}:IProps) => {
    console.log(product);
    
    return (
        <SwiperSlide className='h-full relative'>
            <Image alt='sdaf' width={2000} height={1200} className='w-full h-full object-cover'
                src={`http://localhost:8000/images/products/thumbnails/${product.thumbnail}`} />
            <div className='absolute top-0 right-0 left-0 bottom-0 backdrop-blur-[3px] bg-slate-950 bg-opacity-70'>
                <div className='flex flex-col p-16 px-36 mt-[6rem] gap-12'>
                    <Link href={'/'}>
                        <h3 className='text-2xl text-white font-semibold'>{product.name}</h3>
                    </Link>
                    <div className="flex gap-8">
                        <Image alt='sdaf' width={2000} height={1300} className='w-[15rem] h-[20rem] object-cover rounded-lg'
                            src={`http://localhost:8000/images/products/images/${product.images[0]}`} />

                        <div className="flex flex-col text-white gap-4 w-7/12"
                            dangerouslySetInnerHTML={{ __html: product.description }} />
                        <button className="btn btn-primary self-end">
                            <Link href={"/"}>
                                بیشتر....
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </SwiperSlide>
    )
}

export default Slide
