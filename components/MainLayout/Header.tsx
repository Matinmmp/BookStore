import Image from "next/image";
import Link from "next/link";
import { AiOutlineSearch } from 'react-icons/ai';
import { BsBasket } from 'react-icons/bs';


const Header = () => {
    return (
        <header className=" fixed top-0 left-0 right-0">
            <nav className="navbar  backdrop-blur-3xl">
                <div className="flex items-center gap-4 w-full" >
                    <Link href={'/home'} className=" w-16" >
                        <Image alt="لوگو" src={'/Images/logo2.png'} width={200} height={200} className="w-full h-full" />
                    </Link>
                    <div className=" flex place-items-center  bg-base-100 rounded-lg">
                        <AiOutlineSearch className="text-xl w-8" />
                        <input type="text" placeholder="جستجو" className="input  text-sm h-10 w-[35rem]"
                            style={{ border: 'none !important', outline: 'none !important' }} />
                    </div>
                    <div className="flex-1" />
                    <div className="flex items-center justify-center gap-2 relative">
                        <div className="p-2 rounded-md cursor-pointer"
                            style={{ transform: 'rotateY(180deg)' }}>
                            <BsBasket className="text-2xl" />                           
                        </div>
                        <span className="px-[5px] rounded-[3px] bottom-0 right-0 text-white text-[10px] leading-4 bg-primary absolute">1</span>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Header;
