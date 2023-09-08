import { Product } from '@/models/Types'
import { getAllProducts, getProductById } from '@/services/api/product'
import Image from 'next/image'
import React, { ChangeEvent } from 'react'
import { BsBasket } from 'react-icons/bs';
import { separate } from '../../utils/seperator';
import { useState } from 'react';
import FlipBook from '@/components/Products/FlipBook';
import Link from 'next/link';
import { BsChevronLeft } from 'react-icons/bs';


interface IProps {
    product: Product
}

const ProductById = ({ product }: IProps) => {

    const [quantity, setQuantity] = useState(1);
    console.log(product);
    
    const handleQuantityChnage = (e: any) => {
        if (e.target.value > 0 && e.target.value <= product.quantity)
            setQuantity(e.target.value)
    }
    return (
        <main className=''>

            <Image alt='header' width={2000} height={1200}
                className='object-cover w-full h-[70vh] lg:h-[60vh] mt-[4rem] lg:mt-[8.5rem]'
                src={`http://localhost:8000/images/products/thumbnails/${product.thumbnail}`} />

            <div className="flex flex-col flex-wrap lg:flex-nowrap gap-2 w-full mt-[1rem] mx-auto px-4 lg:px-12 xl:px-">
                <div className="w-full flex">
                    <div className="text-md breadcrumbs">
                        <ul className='flex items-center gap-2'>
                            <li className='hover:text-primary transition-all'>
                                <Link href={`/product/${product.category._id}/new?page=1`}>{product.category.name}</Link>
                                </li>
                            <BsChevronLeft/>
                            <li className='hover:text-primary transition-all'>
                                <Link href={`/product/${product.category._id}/${product.subcategory._id}/new?page=1`}>{product.subcategory.name}</Link>
                                </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full px-4 py-2 flex justify-center">
                    <h1 className=' text-2xl xl:text-4xl font-semibold'>{product.name}</h1>
                </div>

                <div className='flex flex-wrap lg:flex-nowrap w-full gap-16 items-center'>

                    <div className=' flex justify-center w-full lg:block lg:w-auto'>
                        <FlipBook images={product.images} />
                    </div>

                    <div className=''>

                        <div className='flex justify-between mt-10'>
                            <div className="flex items-center gap-2 text-lg">
                                <span className='text-primary-focus'>{separate(product.price)}</span>
                                <span >تومان</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-1 text-lg mt-6">
                            {product.quantity > 1 ?
                                <>
                                    <span className='text-green-500'>{product.quantity} عدد موجود هست</span>
                                    {/* <GoIssueClosed className="text-green-500" /> */}
                                </>
                                : <>
                                    <span className='text-red-500'>موجود نیست</span>
                                    {/* <IoCloseCircleOutline className="text-red-500" /> */}
                                </>}

                        </div>

                        <div className="flex items-center gap-1 text-lg mt-6">
                            <span>انتشارات : </span>
                            <span>{product.brand}</span>
                        </div>

                        <div className="flex flex-wrap items-start gap-4 mt-20">
                            <div className="form-control w-full max-w-xs pb-8 relative ">
                                <input type="number" placeholder="Type here" className="input input-bordered "
                                    onChange={handleQuantityChnage}
                                    value={quantity} />
                                {/* <label className="label absolute bottom-0">
                                    <span className="label-text-alt text-red-500 ">تعداد نباید بیشتر از {product.quantity} باشد.</span>
                                </label> */}
                            </div>

                            {product.quantity ?
                                <button className='btn btn-primary '>
                                    <BsBasket className="text-xl" />
                                    <div className="border-l-[1px] border-gray-200 "></div>
                                    <span className="text-md lg:text-lg font-thin">افزودن به سبد خرید</span>
                                </button> :
                                <button className='btn btn-primary ' disabled>
                                    <BsBasket className="text-xl" />
                                    <div className="border-l-[1px] border-gray-200 "></div>
                                    <span className="text-md lg:text-lg font-thin">افزودن به سبد خرید</span>
                                </button>
                            }
                        </div>

                    </div>

                    <div className=''>
                        <div className="flex flex-col gap-8"
                            dangerouslySetInnerHTML={{ __html: product.description }} />
                    </div>

                </div>

            </div>
        </main>
    )
}

export default ProductById


export const getStaticProps = async (context: any) => {
    const id = context.params.productId;
    const product = await getProductById(id);
    return {
        props: { product }
    }
}

export const getStaticPaths = async () => {
    const products = await getAllProducts();
    const paths = products.map((item) => ({ params: { productId: item._id } }));

    return {
        paths: paths,
        fallback: true
    }
}