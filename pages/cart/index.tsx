import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import EmptyCart from '@/components/Cart/EmptyCart';
import { FiShoppingCart } from 'react-icons/fi';
import Table from '@/components/Cart/Table';
import { BiMap } from 'react-icons/bi';
import { MdDriveFileRenameOutline } from 'react-icons/md';


const index = () => {
    const list = useSelector((state: RootState) => state.shopingCart.cartList)

    if (!list.length)
        return (
            <section className='p-[2rem] pt-[10rem]'>
                <EmptyCart />
            </section>
        )

    return (
        <section className='px-[4rem] pt-[10rem]'>
            <div className="w-full flex">
                <ul className="w-[50rem] mb-[5rem] mx-auto flex justify-between items-center relative">
                    <li className="absolute w-full h-2 lg:h-3 bg-slate-300 -z-50 ">
                        <div className="h-full bg-primary w-0"></div>
                    </li>
                    <li className="h-10 w-10 lg:h-16 lg:w-16 bg-primary rounded-full flex items-center justify-center text-white" style={{ transform: 'rotateY(180deg)' }}>
                        <FiShoppingCart className="text-xl lg:text-2xl"/>
                    </li>
                    <li className="h-10 w-10 lg:h-16 lg:w-16 bg-slate-300 rounded-full flex items-center justify-center ">
                        <BiMap className="text-xl lg:text-2xl"/>
                    </li>
                    <li className="h-10 w-10 lg:h-16 lg:w-16 bg-slate-300 rounded-full flex items-center justify-center ">
                        <MdDriveFileRenameOutline className="text-xl lg:text-2xl"/>
                    </li>
                </ul>
            </div>
            <div className='flex gap-4'>
                <div className="w-8/12">
                    <div className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-xl font-semibold">سبد خرید </h4>
                        <button className="btn bg-red-500 hover:bg-red-400 text-white">حذف همه</button>
                    </div>
                    <Table products={list} />
                </div>
                <div className="w-4/12">
                    wdqq
                </div>

            </div>

        </section>
    )
}

export default index
