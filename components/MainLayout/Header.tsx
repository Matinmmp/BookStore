import Image from "next/image";
import Link from "next/link";


const Header = () => {
    return (
        <header className=" fixed top-0 left-0 right-0">
            <nav className="navbar backdrop-blur-3xl backdrop-saturate-150 bg-background/70">
                <div className="flex gap-4 w-full" >
                    <Link href={'/home'} className=" w-16" >
                        <Image alt="لوگو" src={'/Images/logo2.png'} width={200} height={200} className="w-full h-full"/>
                    </Link>
                    <input type="text" placeholder="جستجو" className="input input-bordered input-group-sm  h-10 w-96"/>
                </div>
            </nav>
        </header>
    )
}

export default Header;
