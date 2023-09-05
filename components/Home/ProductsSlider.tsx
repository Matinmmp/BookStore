import { Product } from '@/models/Types';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { BsBasket } from 'react-icons/bs';
import Image from 'next/image';
import { useEffect } from 'react';
import { separate } from '../../utils/seperator';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import ProductItem from './ProductItem';

interface IProps {
    products: Product[],
    title: String
}

const ProductsSlider = ({ products, title }: IProps) => {

    const [slidesPerView, setSlidesPerView] = useState(0);
    useEffect(() => {
        checkSize();
        window.addEventListener('resize', () => {
            checkSize();
        })
        function checkSize() {
            if (window.innerWidth > 0) setSlidesPerView(1);
            if (window.innerWidth > 450) setSlidesPerView(2);
            if (window.innerWidth > 650) setSlidesPerView(3);
            if (window.innerWidth > 850) setSlidesPerView(4);
            if (window.innerWidth > 1050) setSlidesPerView(5);
            if (window.innerWidth > 1300) setSlidesPerView(6);
            if (window.innerWidth > 1400) setSlidesPerView(7);
            if (window.innerWidth > 1600) setSlidesPerView(8);
        }
    }, [])

    return (
        <section className='w-full px-4 pt-4 mt-[4rem] bg-base-300 rounded-xl 
        shadow-inner shadow-success'>
            <Link href={`/product/${products[0].category}/new?page=1`} 
            className='text-3xl hover:text-primary transition-all '>{title}</Link>
            <div className='mt-6 h-[28rem] px-4 flex items-center gap-4 overflow-x-auto ' >
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={10}
                    freeMode={true}
                    modules={[Pagination]}
                    className=" w-full h-[28rem] px-4">
                    {products.map((product) =>
                        <SwiperSlide key={product._id} className='pt-4'>
                            <ProductItem product={product} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </section>
    );
}

export default ProductsSlider





