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
        <section className='w-full p-4 mt-[4rem] bg-base-300 '>
            <Link href={"/home/"} className='text-2xl'>{title}</Link>
            <div className='mt-6 h-[26rem]  p-4 flex gap-4 overflow-x-auto ' >
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={10}
                    freeMode={true}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[Pagination]}
                    className=" w-full h-[24rem] px-4">

                    {products.map((product) =>

                        <SwiperSlide className=' border-[1px] border-gray-400 border-opacity-50' key={product._id}>
                            <div className='w-full h-full p-[6px] flex flex-col gap-3'>
                                <Link href={'/home/'} >
                                    <Image alt={product.name} width={200} height={500}
                                        className='w-full h-[16rem] shadow-lg shadow-gray-600 rounded-md '
                                        src={`http://localhost:8000/images/products/images/${product.images[0]}`} />
                                </Link>
                                <Link href={'/home/'} className="mt-2 ">
                                    <h5 className="text-sm">{product.name}</h5>
                                </Link>
                                <div className="divider m-0 mt-2" ></div>
                                <div className='flex justify-between'>
                                    <div className="flex items-center gap-2 text-sm">
                                        <span className='text-primary-focus'>{separate(product.price)}</span>
                                        <span >تومان</span>
                                    </div>

                                    <BsBasket className="text-2xl text-primary-focus cursor-pointer" />


                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </section>
    );
}

export default ProductsSlider





