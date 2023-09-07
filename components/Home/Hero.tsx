import React from 'react';
import { Swiper, } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/autoplay"
import { Product } from '@/models/Types';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
    products: Product[]
}


const Hero = ({ products }: IProps) => {

    return (
        <div className="h-[90vh]">
            <Swiper
                slidesPerView={1}
                pagination={{ dynamicBullets: true, }}
                modules={[Pagination, Navigation, Autoplay]}
                // autoplay={{delay:6000}}
                className="h-full" >
                {products.map((product) =>
                    <SwiperSlide className='h-full relative' key={product._id}>
                        <Image alt='header' width={2000} height={1200} className='w-full h-full object-cover'
                            src={`http://localhost:8000/images/products/thumbnails/${product.thumbnail}`} />
                        <div className='absolute top-0 right-0 left-0 bottom-0 backdrop-blur-[3px] bg-primary bg-opacity-10'>
                            <div className='flex flex-col items-center lg:items-start p-4 pt-20 lg:p-16 lg:px-36 lg:mt-[6rem] gap-12'>
                                <Link href={`/product/${product._id}`}>
                                    <h3 className='text-2xl text-white font-semibold'>{product.name}</h3>
                                </Link>
                                <div className="flex flex-col w-full items-center lg:flex-row  gap-8">
                                    <Link href={`/product/${product._id}`} >
                                        <Image alt={product.name} width={600} height={1000} className='w-[15rem] h-[22.5rem] 
                                        shadow-sm shadow-primary rounded-lg'
                                            src={`http://localhost:8000/images/products/images/${product.images[0]}`} />
                                    </Link>
                                    <div className="hidden lg:flex flex-col text-white gap-4 w-7/12"
                                        dangerouslySetInnerHTML={{ __html: product.description }} />
                                    <div className="self-end w-full text-center lg:w-auto ">
                                        <button className="btn btn-primary ">
                                            <Link href={`/product/${product._id}`}>
                                                بیشتر....
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default Hero