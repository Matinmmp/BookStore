import { useKeenSlider } from "keen-slider/react";
import { PiArrowBendDownLeftDuotone } from 'react-icons/pi';
import "keen-slider/keen-slider.min.css";
import * as React from "react";
import {BsFillPersonFill} from 'react-icons/bs';


const comments = [
    {
        comment: 'طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند، تا ازنظر گرافیکی نشانگر چگونگی نوع و اندازهٔ قلم و ظاهرِ متن باشد.',
        name: 'متین'
    },
    {
        comment: 'طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند، تا ازنظر گرافیکی نشانگر چگونگی نوع و اندازهٔ قلم و ظاهرِ متن باشد.',
        name: 'علی'
    },
    {
        comment: 'طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند، تا ازنظر گرافیکی نشانگر چگونگی نوع و اندازهٔ قلم و ظاهرِ متن باشد.',
        name: 'حامد'
    },
    {
        comment: 'طرح‌نما یا لورم ایپسوم به نوشتاری آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این نوشتار به‌عنوان عنصری از ترکیب‌بندی برای پُر کردن صفحه و ارائهٔ اولیهٔ شکل ظاهری و کلیِ طرح سفارش‌گرفته‌شده‌استفاده می‌کند، تا ازنظر گرافیکی نشانگر چگونگی نوع و اندازهٔ قلم و ظاهرِ متن باشد.',
        name: 'رضا'
    }
]

const Comments = () => {
    const [ref] = useKeenSlider<HTMLDivElement>({
        loop: {
            min: -5,
            max: 5,
        },
    })

    return (
        <section className='w-full px-4 pt-4 mt-[2rem] mb-[10rem]'>
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-8">
                <div className="w-full lg:w-5/12">
                    <h3 className="text-3xl lg:text-4xl font-semibold text-center lg:text-right">نظرات درمورد می بوک</h3>
                    <p className="mt-[1rem] text-lg text-gray-400 text-center lg:text-right">بخشی از نظراتی که مشتری ها در مورد می بوک دارند.</p>
                    <div className="w-full mt-[1rem]">
                        <PiArrowBendDownLeftDuotone className="text-6xl ms-auto ml-[10rem] mt-[1rem]" />
                    </div>
                </div>
                <div className="w-full lg:w-7/12">
                    <div ref={ref} className="keen-slider shadow-md shadow-gray-400 rounded-2xl overflow-hidden w-full overflow-y-auto">
                        {comments.map((item: any,index:number) => {
                            return (
                                <div className="keen-slider__slide bg-white h-[20rem] w-full  p-8 flex flex-col justify-between gap-4" key={index}>
                                   <p className="leading-[2.3rem] text-sm lg:text-[1.2rem] text-gray-500 text-justify">{item.comment}</p>
                                   <div className="w-full">
                                   <div className="avatar flex gap-2 justify-center">
                                        <div className="w-16 mask mask-squircle bg-primary flex items-center justify-center text-center">
                                            <BsFillPersonFill className="text-white text-5xl mx-auto mt-2"/>
                                        </div>
                                        <span className="mt-4">{item.name}</span>
                                    </div>
                                   </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comments
