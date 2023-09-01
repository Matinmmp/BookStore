import { Product } from '@/models/Types'
import { getAllProducts, getProductById } from '@/services/api/product'
import React from 'react'


interface IProps{
    product:Product
}

const ProductById = ({product}:IProps) => {
    return (
        <main className='mt-[10rem]'>
            {product.name}
        </main>
    )
}

export default ProductById


export const getStaticProps = async (context:any) => {
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
        fallback:true
    }
}