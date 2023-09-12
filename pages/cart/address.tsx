import { MdDriveFileRenameOutline } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { BiMap } from 'react-icons/bi';
import { useState } from 'react';
import DatePicker, { Calendar, DateObject } from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";




function convertPersianToGregorian(persianDate: any) {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    const gregorianDate = persianDate.replace(/[۰-۹]/g, (char: any) => persianDigits.indexOf(char));
    return gregorianDate;
}

const address = () => {

    var dateFormat = new Intl.DateTimeFormat("fa", { year: "numeric", month: "2-digit", day: "2-digit" });
    
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const tomorrowTick = tomorrow.getTime();
    const tomorrow_date = convertPersianToGregorian(dateFormat.format(tomorrowTick));
    const [date, setDate] = useState(tomorrow_date)
    console.log(date)

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
                <div className='w-1/2'>

                </div>

                <div className='w-1/2 flex flex-col items-center gap-4'>

                    <div>
                        <DatePicker
                            value={tomorrow_date}
                            onChange={(e)=>setDate(e?.toString())}
                            minDate={tomorrow_date}
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom-right"
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default address
