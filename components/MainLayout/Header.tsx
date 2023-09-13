import { initialCart } from '../../store/shopingCart-slice';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store/store';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineLogout } from 'react-icons/hi';
import {FiShoppingCart} from 'react-icons/fi';
import { setUser } from "@/store/user-slice";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Cart } from '@/models/Types';
import Image from "next/image";
import Link from "next/link";



const Header = () => {
    const [visibleDownNav, setVisibleDownNav] = useState(false);
    const list = useSelector((state: RootState) => state.shopingCart.cartList)
    const user = useSelector((state: RootState) => state.user.user);
    const [cartList, setCartList] = useState<Cart[]>([]);
    const router = useRouter();
    const dispatch = useDispatch()
    console.log(list)
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
        window.addEventListener("wheel", e => {
            setVisibleDownNav(e.deltaY < 0 ? false : true);
        })
    }, [])

    useEffect(() => {
        setCartList(list);
    }, [list]);


    return (
        <header className=" fixed top-0 left-0 right-0 z-50">
            <nav className={`py-2 px-5 lg:pt-3 backdrop-blur-3xl bg-zinc-900 bg-opacity-80
             flex flex-col  z-20 ${visibleDownNav && 'py-3'}`}>

                <div className="flex items-center gap-6 w-full" >

                    <Link href={'/'} className=" w-16" >
                        <Image alt="لوگو" src={'/Images/logo2.png'} width={200} height={200} className="w-full h-full" />
                    </Link>

                    <div className="flex w-full lg:w-[40rem] place-items-center bg-base-100 rounded-lg border-primary border-[1px]">
                        <AiOutlineSearch className="text-xl w-8" />
                        <input type="text" placeholder="جستجو" className="input text-sm h-10 w-full "
                            style={{ border: 'none !important', outline: 'none !important' }} />
                    </div>

                    <div className="flex-1"></div>

                    <div className="hidden lg:flex items-center justify-center gap-1 text-white">
                        {
                            user ?
                                <button onClick={()=>dispatch(setUser(''))} className="btn btn-primary flex items-center gap-2 ">
                                    <HiOutlineLogout className="text-2xl" style={{ transform: 'rotateY(180deg)' }} />
                                   <span className="font-semibold text-xs">خروج </span> 
                                
                                </button> :
                                <Link href={'/user/login'}  className="btn btn-primary flex items-center gap-2 ">
                                    <HiOutlineLogout className="text-2xl" style={{ transform: 'rotateY(180deg)' }} />
                                        <span className="font-semibold text-xs">ورود | ثبت‌نام</span>
                                </Link>
                        }

                        <div className="divider lg:divider-horizontal " style={{ marginInline: '.5rem' }}></div>

                        <div className="relative">
                            <div className="p-2 rounded-md cursor-pointer"
                                style={{ transform: 'rotateY(180deg)' }}>
                                <FiShoppingCart className="text-2xl" onClick={handleCart} />
                            </div>
                            {cartList.length > 0 ? <span className="px-[5px] rounded-[3px] bottom-0 right-0 text-white
                                 text-[10px] leading-4 bg-primary absolute">{cartList.length}</span> : ''}
                        </div>

                    </div>

                </div>

                <AnimatePresence>
                    {!visibleDownNav &&
                        <motion.div layout
                            initial={{ y: -35, opacity: 0 }}
                            animate={{ y: 0, opacity: 100 }}
                            transition={{ ease: "easeOut", duration: .2 }}
                            className="py-3 hidden lg:flex items-center w-full z-10 ">
                            <div className="flex items-center justify-start gap-1 cursor-pointer text-white">
                                <FaBars />
                                <span className="text-sm">دسته بندی کتاب ها</span>
                            </div>
                            <div className="divider lg:divider-horizontal" style={{ marginInline: '.5rem' }}></div>
                            <ul className="flex items-center gap-4 text-xs text-white">
                                <li><Link href={'/'} >آخرینها</Link></li>
                                <li><Link href={'/'} >بالاترین امتیازها</Link></li>
                                <li><Link href={'/'} >همه دسته بندی ها</Link></li>
                                <li><Link href={'/about'} >درباره ما</Link></li>
                                <li><Link href={'/contact'} >ارتباط با ما</Link></li>
                                <div className="divider lg:divider-horizontal" style={{ marginInline: '.5rem' }}></div>
                                <li><Link href={'/'} >سوالی دارید؟</Link></li>
                            </ul>
                        </motion.div>
                    }

                </AnimatePresence>
            </nav>
        </header>
    )
}

export default Header;
