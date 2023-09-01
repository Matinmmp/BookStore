import { Product } from '@/models/Types'
import { getAllProducts, getLastProductByCategoryId, getProductByCategoryId, getProductById } from '@/services/api/product'
import Image from 'next/image'
import React from 'react'
import { BsBasket } from 'react-icons/bs';
import { separate } from '../../utils/seperator';
import { TiTick } from 'react-icons/ti';
import Filter from '@/components/Products/Filter';
import { getAllCategories } from '@/services/api/category';

interface IProps {
    products: Product[],
    page: String,
    totalPage: String,
}

const ProductById = ({ products, page, totalPage }: IProps) => {
    return (
        <main className='mt-[8rem] lg:mt-[10rem] mx-auto px-8 lg:px-12 xl:px-16'>
            <Filter />
        </main>
    )
}

export default ProductById


export const getServerSideProps = async (context: any) => {
    const [id, sort] = context.params.slug;
    let productsData: any
    if (sort === 'new') productsData = await getLastProductByCategoryId(id, 10);
    else productsData = await getProductByCategoryId(id, 10);

    return {
        props: {
            products: productsData.products,
            page: productsData.page,
            totalPages: productsData.totalPages,
        }
    }
}

