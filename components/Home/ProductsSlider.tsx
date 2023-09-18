import { Product } from '@/models/Types';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { useEffect } from 'react';

// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/pagination';
import ProductItem from './ProductItem';


import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

interface IProps {
    products: Product[],
    title: String
}

const ProductsSlider = ({ products, title }: IProps) => {


    const [sliderRef] = useKeenSlider<HTMLDivElement>({
        loop: false,
        mode: "snap",
        rtl: true,
        slides: { perView: "auto",spacing:15 },
    })

    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "free",
        slides: {
          perView: 3,
          spacing: 15,
        },
      })


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
            if (window.innerWidth > 1400) setSlidesPerView(6);
            if (window.innerWidth > 1600) setSlidesPerView(8);
        }
    }, [])

    return (
        <section className='w-full px-4 pt-4 mt-[4rem]'>
            <Link href={`/product/${products[0].category}/new?page=1`}
                className='text-3xl hover:text-primary transition-all '>{title}</Link>
            {/* <div className='mt-3 h-[30rem] px-4 flex gap-4 overflow-x-auto ' >
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={10}
                    freeMode={true}
                    modules={[Pagination]}
                    className=" w-full h-[30rem] px-4">
                    {products.map((product) =>
                        <SwiperSlide key={product._id} className='pt-4'>
                            <ProductItem product={product} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div> */}

            <div ref={sliderRef} className="keen-slider h-[30rem] py-4">
                {products.map((product) =>
                    <ProductItem product={product} key={product._id} />
                )}
            </div>
        </section>
    );
}

export default ProductsSlider





