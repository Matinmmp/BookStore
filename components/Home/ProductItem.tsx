import { Product } from '@/models/Types';
import Link from 'next/link';
import { BsBasket } from 'react-icons/bs';
import Image from 'next/image';
import { separate } from '../../utils/seperator';


interface IProps {
    product: Product,
}

const ProductItem = ({ product }: IProps) => {

    return (
        <div className=' bg-white shadow-md shadow-gary-400
         border-opacity-50 hover:scale-[1.03] transition-all rounded-md keen-slider__slide' style={{minWidth:"14rem"}}>
            <div className='w-full h-full p-[6px] flex flex-col gap-3'>

                <Link href={`/product/${product._id}`} className="overflow-hidden rounded-md ">
                    <Image alt={product.name} width={500} height={500} priority={true}
                        className='w-full h-[20rem] shadow-lg shadow-gray-700 rounded-md 
                         object-cover transform transition duration-200 hover:scale-110'
                        src={`http://localhost:8000/images/products/images/${product.images[0]}`} />
                </Link>

                <Link href={`/product/${product._id}`} className="mt-2 ">
                    <h5 className="text-md hover:text-primary transition-all">{product.name}</h5>
                </Link>

                <div className="divider m-0 mt-2" ></div>

                <div className='flex justify-between'>
                    <div className="flex items-center gap-2 text-sm">
                        <span className='text-primary-focus'>{separate(product.price)}</span>
                        <span >تومان</span>
                    </div>
                    <Link className="text-sm hover:text-primary transition-all" href={`/product/${product._id}`}>بیشتر</Link>
                </div>

            </div>

        </div>
    )
}

export default ProductItem