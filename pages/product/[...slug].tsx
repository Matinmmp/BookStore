import { Product } from '@/models/Types'
import { getAllProducts, getLastProductByCategoryId, getLastProductBySubCategoryId, getProductByCategoryId, getProductById, getProductBySubCategoryId } from '@/services/api/product'
import Image from 'next/image'
import React from 'react'
import { BsBasket } from 'react-icons/bs';
import { separate } from '../../utils/seperator';
import { TiTick } from 'react-icons/ti';
import Filter from '@/components/Products/Filter';
import { getAllCategories } from '@/services/api/category';
import ProductsList from '@/components/Products/ProductsList';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface IProps {
    products: Product[],
    page: String,
    totalPages: number,
}

const ProductById = ({ products, page, totalPages }: IProps) => {

    const route = useRouter();

    const handleChangePage=(number:Number)=>{
        if(route.query.slug?.length === 2)
        route.replace(`${route.query.slug[0]}/${route.query.slug[1]}?page=${number}`)

        if(route.query.slug?.length === 3)
        route.replace(`${route.query.slug[0]}/${route.query.slug[1]}/${route.query.slug[2]}?page=${number}`)
    }
    

    return (
        <main className='mt-[8rem] lg:mt-[10rem] mx-auto px-8 lg:px-12 xl:px-16 flex '>
            <Filter />
            <div className="flex flex-col gap-4">
                <main className="px-4 w-full">
                    <ProductsList products={products} />
                </main>
                <div className="join flex flex-row-reverse justify-center mt-4">
                    { totalPages >1 && Array.from({ length: totalPages }, (v, k) => k + 1).map(number =>

                        <button key={number} onClick={()=>handleChangePage(number)}
                            className={`join-item btn btn-primary btn-md
                         ${Number(page) === number ? 'btn-active' : ''}`}>{number}</button>

                    )}
                </div>
            </div>
        </main>
    )
}

export default ProductById


export const getServerSideProps = async (context: any) => {
    let productsData: any

const page= context.query.page;

    console.log(page);
    


    if (context.params.slug.length === 2) {
        const [id, sort] = context.params.slug;
        if (sort === 'new') productsData = await getLastProductByCategoryId(id, 12,page);
        else productsData = await getProductByCategoryId(id, 12,page);
    }

    if (context.params.slug.length === 3) {
        const [categoryId, SubcategorID, sort] = context.params.slug;
        if (sort === 'new') productsData = await getLastProductBySubCategoryId(SubcategorID, 12,page);
        else productsData = await getProductBySubCategoryId(SubcategorID, 12,page);
    }

    return {
        props: {
            products: productsData.products,
            page: productsData.page,
            totalPages: productsData.totalPages,
        }
    }
}

