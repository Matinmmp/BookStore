import { Product } from '@/models/Types'
import { getAllProducts, getProductById } from '@/services/api/product'
import Image from 'next/image'
import React, { ChangeEvent } from 'react'
import { BsBasket } from 'react-icons/bs';
import { separate } from '../../utils/seperator';
import {useState} from 'react';
import FlipBook from '@/components/Products/FlipBook';
// import { GoIssueClosed } from 'react-icons/go';
// import { IoCloseCircleOutline } from 'react-icons/io'

interface IProps {
    product: Product
}

const ProductById = ({ product }: IProps) => {

    const [quantity,setQuantity] = useState(1);

    const handleQuantityChnage=(e:any)=>{
        if(e.target.value>0 && e.target.value<=product.quantity)
        setQuantity(e.target.value)
    }
    return (
        <main className='mt-[8rem] lg:mt-[10rem] mx-auto px-8 lg:px-16 xl:px-28'>
            <div className="flex flex-wrap lg:flex-nowrap gap-20 w-full ">

                <div className='w-full lg:w-[25rem] '>
                <FlipBook/>
                    {/* <Image alt={product.name} width={200} height={500}
                        className='w-[20rem] h-[25rem] shadow-xl shadow-gray-600 rounded-md mx-auto'
                        src={`http://localhost:8000/images/products/images/${product.images[0]}`} /> */}
                </div>

                <div className='flex flex-wrap lg:flex-nowrap w-full justify-between gap-16 items-center -z-50 '>

                    <div className=' w-full lg:w-8/12 '>
                        <h1 className=' text-2xl xl:text-4xl font-semibold'>{product.name}</h1>

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
                                <input type="number" placeholder="Type here" className="input input-bordered  "
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

                    <div className=' w-full lg:w-4/12'>
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