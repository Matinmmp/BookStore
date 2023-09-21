import { initialCart } from '../../store/shopingCart-slice';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';
import { setUser } from "@/store/user-slice";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Cart } from '@/models/Types';
import Image from "next/image";
import Link from "next/link";
import { IoLogIn } from 'react-icons/io5';
import { BsPersonFillAdd } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';



const Header = () => {
    const [visibleDownNav, setVisibleDownNav] = useState(false);
    const list = useSelector((state: RootState) => state.shopingCart.cartList)
    const user = useSelector((state: RootState) => state.user.user);
    const [cartList, setCartList] = useState<Cart[]>([]);
    const router = useRouter();
    const dispatch = useDispatch()
    const handleLocalStorageForShopingCart = () => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('ShopingCart')) {
                const info = JSON.parse(String(localStorage.getItem("ShopingCart")));
                dispatch(initialCart(info))
            }
            else {
                localStorage.setItem("ShopingCart", '[]');
                dispatch(initialCart('' as any))
            }
        }
    }

    const handleLocalStorageForUser = () => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('User') !== null) {
                const user = JSON.parse(String(localStorage.getItem("User")));
                dispatch(setUser(user))
            }
            else {
                localStorage.setItem("User", '');
                dispatch(setUser(''))
            }
        }
    }

    const handleCart = () => {
        router.push('/cart');
    }

    useEffect(() => {
        handleLocalStorageForShopingCart();
        handleLocalStorageForUser();
        setCartList(list)
    }, [])

    useEffect(() => {
        setCartList(list);
    }, [list]);


    return (
        <header className="w-full px-4 sm:px-8 lg:px-4 2xl:px-32 pt-8">
            <div className='bg-base-100 p-8 px-4 lg:px-12 rounded-2xl'>
                <div className="flex items-center justify-between gap-2">
                    <div>
                        <Link href={'/'} className='flex items-center '>
                            <h3 className='hidden lg:block text-3xl pt-2 text-info'>MeBook</h3>
                            <Image alt="logo" src={'/Images/logo2.png'} width={200} height={200} className='w-16 h-10' />
                        </Link>
                    </div>

                    <div className="hidden md:flex w-[25rem] lg:w-[35rem] place-items-center bg-base-300 rounded-xl p-1 px-1">
                        <AiOutlineSearch className="text-xl w-8" />
                        <input type="text" placeholder="جستجو" className="input text-sm h-10 w-full bg-base-300 "
                            style={{ border: 'none !important', outline: 'none !important' }} />
                    </div>

                    <div className="flex gap-4 items-center">

                        <div className="relative">
                            <div className="p-2 rounded-md cursor-pointer"
                                style={{ transform: 'rotateY(180deg)' }}>
                                <FiShoppingCart className="text-2xl" onClick={handleCart} />
                            </div>
                            {cartList.length > 0 ? <span className="px-[5px] rounded-[3px] bottom-0 right-0 text-white
                                 text-[10px] leading-4 bg-primary absolute">{cartList.length}</span> : ''}
                        </div>

                        <div>
                            <div className="rounded-lg flex cursor-pointer bg-base-300 w-[10rem] h-[2.5rem] text-primary">
                                <span className=" hover:bg-primary hover:bg-opacity-70 hover:text-white transition-all rounded-s-lg 
                                    text-primary h-full flex items-center justify-center gap-1 px-4 me-[-.8rem] text-sm">
                                    <span>ورود</span>
                                    <IoLogIn className="text-2xl" />
                                </span>
                                <span className=" ms-auto rounded-lg bg-primary hover:bg-opacity-70 transition-all 
                                 h-full flex items-center justify-center gap-1 px-3 text-white text-sm">
                                    عضویت
                                    <BsPersonFillAdd className="text-xl" />
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex bg-gray-300 p-5 mx-14 rounded-b-3xl'>
                <div className="flex items-center gap-10 mx-auto">
                    <Link href={'/'} className="hover:text-primary transition-all">خانه</Link>
                    <Link href={'/product/'} className="hover:text-primary transition-all flex items-center gap-1">
                        دسته بندی ها
                        <IoIosArrowDown className="text-lg" />
                    </Link>
                    <Link href={'/'} className="hover:text-primary transition-all">درباره ی ما</Link>
                    <Link href={'/'} className="hover:text-primary transition-all">ارتباط با ما</Link>

                </div>
            </div>
        </header>
    )
}

export default Header;



