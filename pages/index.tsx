import Head from 'next/head';
import { Category, Product } from '@/models/Types';
import { getAllProducts, getProductByCategoryId } from '@/services/api/product';
import ProductsSlider from '@/components/Home/ProductsSlider';
import Banner from '@/components/Home/Banner';
import Comments from '../components/Home/Comments';
import CategorisSlider from '@/components/Home/CategorisSlider';
import { getAllCategories } from '@/services/api/category';
import {useRef} from 'react';


interface IProps {
    productsForHero: Product[]
    firstProductSlider: Product[]
    firstProductSliderTitle:'string'
    allProducts:Product[]
    categories:Category[]
}

export default function HomePage({ firstProductSlider,allProducts ,categories,firstProductSliderTitle}: IProps) {

    if(allProducts === undefined){
        return <div>loading</div>
    }
    return (
        <>
            <Head>
                <title>خانه</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/Images/logo2.png" />
            </Head>

            <div >
                <Banner/>
            </div>

           <main className="w-full px-4 sm:px-8 lg:px-4 2xl:px-32 mt-44">
            {allProducts&&<ProductsSlider products={allProducts} title={'جدیدترین کتاب ها '}/>}
            {firstProductSlider&&<ProductsSlider products={firstProductSlider} title={firstProductSliderTitle}/>}
            <Comments/>
            {categories&&<CategorisSlider categories={categories}/>}
           </main>

        </>
    )
}


export const getStaticProps = async () => {
    const categories = await getAllCategories();
    if(categories.length){
        const firstProductSlider = await getProductByCategoryId(categories[0]._id, 20,1);
        const allProducts = await getAllProducts(10)
        return {
            props: {
                allProducts:allProducts,
                firstProductSlider:firstProductSlider.products.reverse(),
                firstProductSliderTitle:categories[0].name,
                categories:categories,
                NotFound:true
            },
            revalidate:1800,
        }
    }
    return {
        props: {
            NotFound:true
        },
        revalidate:1800,
    }
}