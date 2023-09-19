import {MdOutlineMarkEmailUnread} from 'react-icons/md';
import {FaTelegramPlane} from 'react-icons/fa';
import {AiOutlinePhone} from 'react-icons/ai';
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    return (
        <footer className="footer p-8 text-base-content hidden lg:flex flex-col justify-between
        w-full px-4 sm:px-8 lg:px-4 2xl:px-32 pt-8">
            <div className="flex items-center justify-between w-full">
                <Link href={'/home'} className=" w-24 h-16" >
                    <Image alt="لوگو" src={'/Images/logo2.png'} width={300} height={300} className="w-full h-full" />
                </Link>

            </div>
            <div className='flex justify-between w-full gap-16'>
                <div className="w-5/12 flex flex-col gap-2">
                    <span className="text-xl text-gray-700 font-semibold mb-4">درباره ی می بوک</span>
                    <p className="text-lg leading-8 text-gray-500 text-justify">
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                    </p>
                </div>
                <div className="w-3/12 flex flex-col items-center gap-2 ">
                    <span className="text-xl text-gray-700 font-semibold mb-4">بخش های سایت</span>
                    <div className="flex flex-col gap-2 w-[8rem]">
                        <Link href={'/'} className="hover:text-primary transition-all">خانه</Link>
                        <Link href={'/'} className="hover:text-primary transition-all">دسته بندی ها</Link>
                        <Link href={'/'} className="hover:text-primary transition-all">درباره ی ما</Link>
                        <Link href={'/'} className="hover:text-primary transition-all" >ارتباط با ما</Link>
                    </div>
                </div>
                <div className="w-4/12 flex flex-col gap-4 ">
                    <span className="text-xl text-gray-700 font-semibold mb-4">بخش های سایت</span>
                    <div className="flex flex-col gap-2  ">
                        <div className="flex justify-between">
                            <span className="flex items-center gap-1">
                                <MdOutlineMarkEmailUnread className="text-xl text-primary"/>
                                <span>ایمیل : </span>
                            </span>
                            <span>matinmmp1381@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2  ">
                        <div className="flex justify-between">
                            <span className="flex items-center gap-1">
                                <FaTelegramPlane className="text-xl text-primary"/>
                                <span>تلگرام : </span>
                            </span>
                            <span>matinmmp1381</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2  ">
                        <div className="flex justify-between">
                            <span className="flex items-center gap-1">
                                <AiOutlinePhone className="text-xl text-primary"/>
                                <span>شماره تماس : </span>
                            </span>
                            <span>09183102170</span>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
