import { getLastProduct, getLastProductByCategoryId, getLastProductBySubCategoryId, getProductByCategoryId, getProductBySubCategoryId } from '@/services/api/product'
import ProductsList from '@/components/Products/ProductsList';
import { getAllCategories } from '@/services/api/category';
import Filter from '@/components/Products/Filter';
import { separate } from '../../utils/seperator';
import { useQuery } from '@tanstack/react-query';
import { BsBasket } from 'react-icons/bs';
import { Product } from '@/models/Types';
import { TiTick } from 'react-icons/ti';
import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';


const Products = () => {
    const route = useRouter();

    const { page = 1, categoryId, subCategoryId, minPrice, maxPrice, isExist } = route.query;
    let { data, isLoading } = useQuery({
        queryKey: ['products', page, categoryId, subCategoryId, minPrice, maxPrice, isExist],
        queryFn: () => getLastProduct(categoryId, subCategoryId, 6, Number(page))
    });

    // console.log(page)

    const handleChangePage = (number: Number) => {
        const { query } = route;
        const updatedQuery = { ...query, page: `${number}` };
        const updatedUrl = {
            pathname: route.pathname,
            query: updatedQuery,
        };
        route.push(updatedUrl);
    }


    return (
        <main className=' mt-16 mx-auto xl:px-16 flex justify-center md:justify-normal w-full px-4 sm:px-8 lg:px-4 2xl:px-32 pt-8'>
            <div className='w-full flex gap-8'>
                <div className="w-full lg:w-4/12 xl:w-3/12 hidden lg:block">
                    <Filter />
                </div>
                <div className="w-full lg:w-8/12 xl:w-9/12 flex flex-col gap-4">
                   
                    <section className="px-4 w-full ">
                        {!isLoading && <ProductsList products={data?.products} />}
                    </section>

                    <div className="join flex flex-row-reverse justify-center items-center mt-4">
                        {!isLoading && data?.totalPages > 1 && Array.from({ length: data?.totalPages }, (v, k) => k + 1).map(number =>
                            <button key={number} onClick={() => handleChangePage(number)}
                                className={`join-item btn btn-primary btn-md m-0
                         ${Number(page) === number ? 'btn-active' : ''}`}>{number}</button>)}
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Products

