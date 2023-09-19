import {TbArrowBigLeftLinesFilled} from 'react-icons/tb';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Category, Product } from '@/models/Types';
import ProductItem from './ProductItem';
import React, {useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
import CategoryItem from './CategoryItem';

interface IProps {
    categories: Category[],
}

const CategorisSlider = ({ categories }: IProps) => {
    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: false,
        mode: "snap",
        rtl: true,
        slides: { perView: "auto", spacing: 15 },
    })

    return (
        <section className='w-full px-4 pt-4 mt-[2rem] mb-[2rem]'>
            <div className='text-4xl font-semibold'>دسته بندی ها </div>
            <div ref={sliderRef} className="keen-slider h-[20rem] py-4 mt-8">
                {categories.map((category) =>
                    <CategoryItem category={category} key={category._id} />
                )}
            </div>
        </section>
    );
}

export default CategorisSlider





