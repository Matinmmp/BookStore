import { MdDriveFileRenameOutline } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import EmptyCart from '@/components/Cart/EmptyCart';
import type { RootState } from '../../store/store';
import { separate } from './../../utils/seperator';
import { FiShoppingCart } from 'react-icons/fi';
import Table from '@/components/Cart/Table';
import { useRouter } from "next/navigation";
import { BiMap } from 'react-icons/bi';



const index = () => {
    const list = useSelector((state: RootState) => state.shopingCart.cartList);
    const user = useSelector((state: RootState) => state.user.user);
    const router = useRouter();

    let totalPrice = 0;
    for (const item of list) {
        totalPrice += item.count * item.price
    }

    const handleSubmit=()=>{
        if(!user){
            router.push('/user/login');
        }
        router.push('/cart/address');

    }

    if (!list.length)
        return (
            <section className='p-[2rem] pt-[10rem]'>
                <EmptyCart />
            </section>
        )

    return (
        <section className='px-4 md:px-[4rem] lg:px-[8rem] pt-[10rem]'>
            <div className='flex flex-wrap md:flex-nowrap gap-4'>

                <div className="w-full md:w-8/12">
                    <div className="flex items-center justify-between w-full mb-4">
                        <h4 className="text-xl font-semibold">سبد خرید </h4>
                        <button className="btn bg-red-500 hover:bg-red-400 text-white">حذف همه</button>
                    </div>
                    <Table products={list} />
                </div>
                <div className="w-full md:w-4/12">
                    <section className="  rounded-lg border-[1px] border-gray-300 flex flex-col gap-8 mt-[5.2rem] p-6">
                        <div className="flex justify-between w-full">
                            <span className="font-semibold">تعداد محصولات </span>
                            <span className="font-semibold">{list.length} کالا</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span className="font-semibold">قیمت کل</span>
                            <span className="font-semibold">{separate(totalPrice)} تومان</span>
                        </div>
                        <div className="flex justify-between w-full">
                            <span className="font-semibold">هزینه ازسال</span>
                            <span className="font-semibold">{separate(55000)} تومان</span>
                        </div>
                        <div className="flex justify-between w-full mt-8">
                            <span className="font-semibold">قیمت نهایی</span>
                            <span className="font-semibold">{separate(totalPrice+55000)} تومان</span>
                        </div>


                        <button className="btn btn-primary m-0" onClick={handleSubmit}>ثبت سفارش</button>
                    </section>
                </div>

            </div>
        </section>
    )
}

export default index
