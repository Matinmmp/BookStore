import { getLastProductByCategoryId, getLastProductBySubCategoryId, getProductByCategoryId, getProductBySubCategoryId } from '@/services/api/product'
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

interface IProps {
    products: Product[],
    page: String,
    totalPages: number,
}

const Products = ({ products, page, totalPages }: IProps) => {

    // const route = useRouter();
    // let { data: categories, isLoading } = useQuery({ queryKey: ['categories'], queryFn: () => getAllCategories() });

    // const handleChangePage = (number: Number) => {
    //     if (route.query.slug?.length === 2)
    //         route.replace(`${route.query.slug[0]}/${route.query.slug[1]}?page=${number}`)

    //     if (route.query.slug?.length === 3)
    //         route.replace(`${route.query.slug[0]}/${route.query.slug[1]}/${route.query.slug[2]}?page=${number}`)
    // }


    return (
        <main className='mt-[8rem] lg:mt-[10rem] mx-auto px-8 lg:px-12 xl:px-16 flex justify-center md:justify-normal '>
            {/* <Filter />
            <div className="flex flex-col gap-4">
                <div className=" mx-4">
                    <div className="dropdown dropdown-end  md:hidden">
                        <label tabIndex={0} className="btn m-1 text-md">دسته بندی ژانر ها</label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            {!isLoading && categories?.map((category) => <li key={category._id}>
                                <Link href={`${category._id}/new?page=1`}>
                                    {category.name}
                                </Link>
                            </li>)}
                        </ul>
                    </div>
                </div>
                <main className="px-4 w-full">
                    <ProductsList products={products} />
                </main>
                <div className="join flex flex-row-reverse justify-center items-center mt-4">
                    {totalPages > 1 && Array.from({ length: totalPages }, (v, k) => k + 1).map(number =>

                        <button key={number} onClick={() => handleChangePage(number)}
                            className={`join-item btn btn-primary btn-md
                         ${Number(page) === number ? 'btn-active' : ''}`}>{number}</button>

                    )}
                </div>
            </div> */}
        </main>
    )
}

export default Products


export const getServerSideProps = async (context: any) => {
    console.log("context");

    let productsData: any

    const page = context.query.page;




    // if (context.params.slug.length === 2) {
    //     const [id, sort] = context.params.slug;
    //     if (sort === 'new') productsData = await getLastProductByCategoryId(id, 12, page);
    //     else productsData = await getProductByCategoryId(id, 12, page);
    // }

    // if (context.params.slug.length === 3) {
    //     const [categoryId, SubcategorID, sort] = context.params.slug;
    //     if (sort === 'new') productsData = await getLastProductBySubCategoryId(SubcategorID, 12, page);
    //     else productsData = await getProductBySubCategoryId(SubcategorID, 12, page);
    // }

    return {
        props: {
            // products: productsData.products,
            // page: productsData.page,
            // totalPages: productsData.totalPages,
        }
    }
}

