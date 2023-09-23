import { Category, Product } from '@/models/Types';
import Link from 'next/link';
import { BsBasket } from 'react-icons/bs';
import Image from 'next/image';
import { separate } from '../../utils/seperator';


interface IProps {
    category: Category,
}

const CategoryItem = ({ category }: IProps) => {

    return (
        <Link href={`/products?category=${category._id}`} className=' bg-white shadow-md shadow-gary-400 relative cursor-pointer
         border-opacity-50 hover:scale-[1.03] transition-all rounded-md keen-slider__slide' style={{minWidth:"25rem"}}>
            <img src={`http://localhost:8000/images/categories/icons/${category.icon}`} className='w-full h-full'/>
            <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-60'>
                <h5 className="text-3xl text-white hover:text-primary transition-all">
                    {category.name}
                </h5>
            </div>
        </Link>
    )
}

export default CategoryItem