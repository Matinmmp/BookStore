import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { addOrder } from '@/services/api/order';
import { User } from '@/models/Types';
import { deleteAllInformation} from '../../store/shopingCart-slice';



const payment = () => {
    const user = useSelector((state: RootState) => state.user.user) as User;
    const route = useRouter()
    const dispatch = useDispatch();
    if (typeof window !== 'undefined') {
        if (localStorage.getItem('ShopingCart')) {
            const info = JSON.parse(String(localStorage.getItem("ShopingCart")));
            if (info.cartList.length > 0)
                if (route.query.status === 'accept') {
                    const products = info.cartList.map((item: any) => {
                        return {
                            product: item.productId,
                            count: item.count
                        }
                    });
                   const order= {
                        "user": user._id,
                        "products": products,
                        "deliveryStatus": false,
                        "deliveryDate": info.deliveryData
                    }
                    
                    addOrder(order).then(() => {
                        dispatch(deleteAllInformation())
                    })
                }
        }
    }




    return (<section className='px-4 md:px-[4rem] lg:px-[8rem] pt-[5rem] lg:pt-[10rem]' >
        {route.query.status === 'accept' ?
            <div className="flex flex-col gap-6 items-center">
                <Image alt="" src={'/Images/tick_box_512px.png'} width={512} height={512} className="w-[15rem] h-[15rem]" />
                <p className='text-2xl'>پرداخت با موفقیت انجان شد .</p>
                <Link href={'/'} className='btn btn-success'>بازگشت به خانه </Link>
            </div> : route.query.status === 'reject' ?
                <div className="flex flex-col gap-6 items-center">
                    <Image alt="" src={'/Images/cancel_512px.png'} width={512} height={512} className="w-[15rem] h-[15rem]" />
                    <p>پرداخت ناموفق بود .</p>
                    <Link href={'/cart'} className='btn btn-success'>بازگشت به سبد خرید </Link>
                </div> : ""
        }

    </section>)
}

export default payment
