import {TbArrowBigLeftLinesFilled} from 'react-icons/tb';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Product } from '@/models/Types';
import ProductItem from './ProductItem';
import React, {useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';

interface IProps {
    products: Product[],
    title: String
}

const ProductsSlider = ({ products, title }: IProps) => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: false,
        mode: "snap",
        rtl: true,
        slides: { perView: "auto", spacing: 15 },
    })
    let url =""
    if(products[0])
        url = `/products?category=${products[0].category}`;
    if(title === 'جدیدترین کتاب ها ')
        url= '/products';

    return (
        <section className='w-full px-4 pt-4 mt-[2rem] mb-[10rem]'>
            <div className="flex justify-between">
                <h3 className='text-2xl md:text-4xl font-black '>{title}</h3>
                <Link href={url} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-all">
                    <span className='text-xl '>مشاهده همه ی کتاب ها</span>
                    <TbArrowBigLeftLinesFilled className="text-2xl" />
                </Link>
            </div>

            <div ref={sliderRef} className="keen-slider h-[30rem] py-4 mt-8">
                {products.map((product) =>
                    <ProductItem product={product} key={product._id} />
                )}
            </div>
        </section>
    );
}

export default ProductsSlider





