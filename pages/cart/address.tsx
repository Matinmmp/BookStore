import { MdDriveFileRenameOutline } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { BiMap } from 'react-icons/bi';


const address = () => {
    return (
        <section className='px-[8rem] pt-[10rem]'>
            <div className="w-full flex mb-[3rem]">
                <ul className="w-[50rem]  mx-auto flex justify-between items-center relative">
                    <li className="absolute w-full h-2 lg:h-3 bg-slate-300 -z-50 ">
                        <div className="h-full bg-primary w-1/2"></div>
                    </li>
                    <li className="h-10 w-10 lg:h-16 lg:w-16 bg-primary rounded-full flex items-center justify-center text-white" style={{ transform: 'rotateY(180deg)' }}>
                        <FiShoppingCart className="text-xl lg:text-2xl" />
                    </li>
                    <li className="h-10 w-10 lg:h-16 lg:w-16 bg-primary rounded-full flex items-center justify-center text-white">
                        <BiMap className="text-xl lg:text-2xl" />
                    </li>
                    <li className="h-10 w-10 lg:h-16 lg:w-16 bg-slate-300 rounded-full flex items-center justify-center ">
                        <MdDriveFileRenameOutline className="text-xl lg:text-2xl" />
                    </li>
                </ul>
            </div>
            <div className='flex gap-4'>
                <div>

                </div>
                <div>
                    
                </div>

            </div>
        </section>
    )
}

export default address
