import { Map, Marker } from "pigeon-maps";
import Image from "next/image";
import Link from "next/link";
import {MdKeyboardArrowUp} from 'react-icons/md'

const Footer = () => {

    return (
        <footer className="footer p-8 h-[20rem] border-t-[1px] mt-8 border-gray-700 text-base-content flex flex-col justify-between w-full">
            <div className="flex items-center justify-between w-full">
                <Link href={'/home'} className=" w-24 h-16" >
                    <Image alt="لوگو" src={'/Images/logo2.png'} width={300} height={300} className="w-full h-full" />
                </Link>
                
            </div>
            <div className='flex justify-start w-full'>
                <div className="w-4/12 flex flex-col gap-2">
                    <span className="footer-title text-lg">می بوک</span>
                    <Link href={'/'}>آیتم</Link>
                    <Link href={'/'}>آیتم</Link>
                    <Link href={'/'}>آیتم</Link>
                    <Link href={'/'}>آیتم</Link>
                </div>
                <div className="w-4/12 flex flex-col gap-2">
                    <span className="footer-title text-lg">پیوند ها</span>
                    <Link href={'/'}>آیتم</Link>
                    <Link href={'/'}>آیتم</Link>
                    <Link href={'/'}>آیتم</Link>
                </div>
                <div className="w-4/12">
                    {/* <Map height={200} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                        <Marker width={50} anchor={[50.879, 4.6997]} />
                    </Map> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer
