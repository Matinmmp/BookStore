import { PiBooks } from 'react-icons/pi';
import {GiBookshelf} from 'react-icons/gi';
import {PiWallet} from 'react-icons/pi';
import {BiPhoneCall} from 'react-icons/bi';

const Banner = () => {
    return (
        <section className="w-full px-4 sm:px-8 lg:px-4 2xl:px-32 mt-8">
            <div className="flex flex-wrap lg:flex-nowrap gap-2 ">

                <div className="w-full flex flex-col gap-8 lg:w-1/2 pt-20 pe-0 lg:pe-8 text-center lg:text-right order-2 lg:order-1">
                    <h1 className="text-3xl md:text-5xl md:leading-[4rem] lg:text-5xl lg:leading-[5rem] font-black">دنبال جایی هستی که هر کتابی داشته باشه ؟</h1>
                    <p className="text-[1.3rem] text-gray-500">می بوک مخصوص شما کتاب باز ها هست تا هر کتابی در هر ژانری که دوست دارید را با بهترین قیمت تهیه کنید .</p>
                    <div className='w-full flex'>
                        <button className="btn btn-primary btn-lg flex items-center gap-2 mx-auto lg:mx-0">
                            نگاهی به کتاب ها
                            <PiBooks className="text-3xl" />
                        </button>
                    </div>
                    <div className="flex flex-wrap mt-4 gap-8 sm:gap-0">
                        <div className="w-full sm:w-1/2 flex items-center gap-4">
                            <GiBookshelf className="text-purple-400 text-3xl"/>
                            <p className="text-xl">بیش از 1000 کتاب </p>
                        </div>
                        <div className="w-full sm:w-1/2 flex items-center gap-4">
                            <PiWallet className="text-red-400 text-3xl"/>
                            <p className="text-xl"> ضمانت بازگشت وجه </p>
                        </div>
                        <div className="w-full sm:w-1/2 flex items-center gap-4 sm:mt-8">
                            <BiPhoneCall className="text-blue-400 text-3xl"/>
                            <p className="text-xl">پشتیبانی 24 ساعته</p>
                        </div>
                    </div>      
                   
                </div>

                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <img src="/Images/Bookshop-pana.svg" />

                </div>
            </div>
        </section>
    )
}

export default Banner
