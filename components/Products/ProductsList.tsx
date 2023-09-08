import { Product } from '@/models/Types'
import React from 'react'
import ProductItem from '../Home/ProductItem'


interface IProps {
    products: Product[]
}

const ProductsList = ({ products }: IProps) => {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4 w-full' >
            {products.map((product) => <ProductItem key={product._id} product={product} />)}
        </div>
    )
}

export default ProductsList