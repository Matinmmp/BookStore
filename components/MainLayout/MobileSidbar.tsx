import Link from "next/link";
import { AiOutlineHome } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import { useEffect,useState } from "react";
import { Cart } from '@/models/Types';
import {FiShoppingCart} from 'react-icons/fi';
import {BiCategory} from 'react-icons/bi';

const MobileSidbar = () => {

    const list = useSelector((state: RootState) => state.shopingCart.cartList)

    return (
        <div className="fixed lg:hidden bottom-0 left-0 right-0 border-[1px] border-gray-400 bg-white z-50">
            <div className='flex justify-around items-center p-2'>
                <Link href={'/'} className="flex flex-col items-center gap-1">
                    <AiOutlineHome className="w-6 h-6" />
                    <span className="text-sm">خانه</span>
                </Link>
                <Link href={'/product/64dd173b0e366d6edaece779/new?page=1'}className="flex flex-col items-center gap-1">
                    <BiCategory className="w-6 h-6" />
                    <span className="text-sm">دسته بندی</span>
                </Link>

                <Link href={'/cart'} className="flex flex-col items-center gap-1">
                    <div className="relative">
                        <div className=" rounded-md cursor-pointer"
                            style={{ transform: 'rotateY(180deg)' }}>
                            <FiShoppingCart className="w-6 h-6"  />
                        </div>
                        {list.length > 0 ? <span className="px-[5px] rounded-[3px] bottom-0 right-0 text-white
                                 text-[10px] leading-4 bg-primary absolute">{list.length}</span> : ''}
                    </div>
                    <span className="text-sm">سبد خرید</span>
                </Link>
            </div>
        </div>
    )
}

export default MobileSidbar
