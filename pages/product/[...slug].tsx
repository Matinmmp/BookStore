import { Product } from '@/models/Types'
import { getAllProducts, getProductByCategoryId, getProductById } from '@/services/api/product'
import Image from 'next/image'
import React from 'react'
import { BsBasket } from 'react-icons/bs';
import { separate } from '../../utils/seperator';
import { TiTick } from 'react-icons/ti';

interface IProps {
    products: Product[],
    page:String,
    totalPage:String
}

const ProductById = ({ products,page,totalPage }: IProps) => {
    return (
        <main className='mt-[8rem] lg:mt-[10rem] mx-auto px-8 lg:px-16 xl:px-28'>
          
        </main>
    )
}

export default ProductById


// export const getServerSideProps = async (context: any) => {
//     const id = context.params.categoryId;
//     const data = await getProductByCategoryId(id,10);
//     return {
//         props: { products:data.products,page:data.page,totalPages:data.totalPages }
//     }
// }

