import { Product } from '@/models/Types'
import { getAllProducts, getProductById } from '@/services/api/product'
import Image from 'next/image'
import React from 'react'
import { BsBasket } from 'react-icons/bs';
import { separate } from '../../utils/seperator';
import { TiTick } from 'react-icons/ti';

interface IProps {
    product: Product
}

const ProductById = ({ product }: IProps) => {
    return (
        <main className='mt-[8rem] lg:mt-[10rem] mx-auto px-8 lg:px-16 xl:px-28'>
            <div className="flex flex-wrap lg:flex-nowrap gap-20 w-full ">
                <div className='w-full lg:w-[25rem]'>
                    <Image alt={product.name} width={200} height={500}
                        className='w-[20rem] h-[25rem] shadow-xl shadow-gray-600 rounded-md mx-auto'
                        src={`http://localhost:8000/images/products/images/${product.images[0]}`} />
                </div>
                <div className='flex flex-wrap lg:flex-nowrap w-full justify-between gap-16 items-center'>

                    <div className=' w-full lg:w-6/12 '>
                        <h1 className=' text-2xl xl:text-4xl font-semibold'>{product.name}</h1>
                        <div className='flex justify-between'>
                            <div className="flex items-center gap-2 text-lg mt-20">
                                <span className='text-primary-focus'>{separate(product.price)}</span>
                                <span >تومان</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-lg mt-6">
                            <TiTick className="text-green-500" />
                            <span className='text-green-500'>موجود هست</span>
                        </div>
                        <div className="flex items-center gap-1 text-lg mt-6">
                            <span>انتشارات : </span>
                            <span>{product.brand}</span>
                        </div>
                        <button className='btn btn-primary mt-[100px] '>
                            <BsBasket className="text-xl" />
                            <div className="border-l-[1px] border-gray-200 "></div>
                            <span className="text-md lg:text-lg font-thin">افزودن به سبد خرید</span>
                        </button>
                    </div>

                    <div className=' w-full lg:w-6/12'>
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