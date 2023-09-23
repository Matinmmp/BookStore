import { Product } from '@/models/Types';
import Link from 'next/link';
import React from 'react';
import {TbArrowBigLeftLinesFilled} from 'react-icons/tb';

interface IProps {
    products: Product[],
    title: String
}
const Products = ({ products, title }: IProps) => {
  return (
    <section>
        <div className="flex justify-between">
            <h3 className='text-2xl md:text-4xl font-black '>{title}</h3>
            <Link href={'/'} className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-all">
                <span className='text-xl '>مشاهده همه ی کتاب ها</span>
                <TbArrowBigLeftLinesFilled className="text-2xl"/>
            </Link>
        </div>
       
    </section>
  )
}

export default Products
