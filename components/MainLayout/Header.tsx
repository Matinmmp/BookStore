import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from 'react-icons/ai';
import { BsBasket } from 'react-icons/bs';
import { HiOutlineLogout } from 'react-icons/hi';
import { FaBars } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';


const Header = () => {

    const [visibleDownNav, setVisibleDownNav] = useState(false);
    useEffect(() => {
        window.addEventListener("wheel", e => {
            setVisibleDownNav(e.deltaY < 0 ? false : true);
        })
    }, []);

    return (
        <header className=" fixed top-0 left-0 right-0 z-50">
            <nav className={`py-3 px-5 lg:pt-3 backdrop-blur-3xl flex flex-col gap-2 z-20 ${visibleDownNav && 'py-3'}`}>

                <div className="flex items-center gap-6 w-full" >

                    <Link href={'/home'} className=" w-16" >
                        <Image alt="لوگو" src={'/Images/logo2.png'} width={200} height={200} className="w-full h-full" />
                    </Link>

                    <div className="flex w-full lg:w-[40rem] place-items-center bg-base-100 rounded-lg border-primary border-[1px]">
                        <AiOutlineSearch className="text-xl w-8" />
                        <input type="text" placeholder="جستجو" className="input text-sm h-10 w-full "
                            style={{ border: 'none !important', outline: 'none !important' }} />
                    </div>

                    <div className="flex-1"></div>

                    <div className="hidden lg:flex items-center justify-center gap-1">
                        <button className="btn btn-primary flex items-center gap-2 ">
                            <HiOutlineLogout className="text-2xl" style={{ transform: 'rotateY(180deg)' }} />
                            <span className="font-semibold text-xs">ورود | ثبت‌نام</span>
                        </button>

                        <div className="divider lg:divider-horizontal " style={{ marginInline: '.5rem' }}></div>

                        <div className="relative">
                            <div className="p-2 rounded-md cursor-pointer"
                                style={{ transform: 'rotateY(180deg)' }}>
                                <BsBasket className="text-2xl" />
                            </div>
                            <span className="px-[5px] rounded-[3px] bottom-0 right-0 text-white
                                 text-[10px] leading-4 bg-primary absolute">1</span>
                        </div>

                    </div>

                </div>

                <AnimatePresence>
                    {!visibleDownNav &&
                        <motion.div layout
                            initial={{ y: -35 ,opacity:0}}
                            animate={{ y: 0 ,opacity:100}}                          
                            exit={{ y: -35,opacity:0 }}
                            transition={{ ease: "easeOut", duration: .2 }}
                            className="py-3 hidden lg:flex items-center w-full z-10 ">
                            <div className="flex items-center justify-start gap-1 cursor-pointer">
                                <FaBars />
                                <span className="text-sm">دسته بندی کتاب ها</span>
                            </div>
                            <div className="divider lg:divider-horizontal" style={{ marginInline: '.5rem' }}></div>
                            <ul className="flex items-center gap-4 text-xs">
                                <li><Link href={'/'} >آخرینها</Link></li>
                                <li><Link href={'/'} >بالاترین امتیازها</Link></li>
                                <li><Link href={'/'} >همه دسته بندی ها</Link></li>
                                <li><Link href={'/'} >درباره ما</Link></li>
                                <li><Link href={'/'} >ارتباط با ما</Link></li>
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
