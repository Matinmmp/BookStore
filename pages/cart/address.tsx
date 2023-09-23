import { Calendar } from 'react-multi-date-picker';
import "@neshan-maps-platform/react-openlayers/dist/style.css";
import persian_fa from "react-date-object/locales/persian_fa";
import persian from "react-date-object/calendars/persian";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect } from 'react';
import type { RootState } from '../../store/store';
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from 'react-redux';
import { addDate } from '../../store/shopingCart-slice';

type Inputs = {
    name: string,
    famiy: string
    address: string,
    phone: string
}

function convertPersianToGregorian(persianDate: any) {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    const gregorianDate = persianDate.replace(/[۰-۹]/g, (char: any) => persianDigits.indexOf(char));
    return gregorianDate;
}

const address = () => {

    var dateFormat = new Intl.DateTimeFormat("fa", { year: "numeric", month: "2-digit", day: "2-digit" });
    const { register, reset, formState: { errors }, handleSubmit, getValues } = useForm<Inputs>();
    const user = useSelector((state: RootState) => state.user.user);
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const tomorrowTick = tomorrow.getTime();
    const tomorrow_date = convertPersianToGregorian(dateFormat.format(tomorrowTick));
    const [date, setDate] = useState(tomorrow_date);
    const router = useRouter();
    const dispatch = useDispatch()


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        dispatch(addDate({address:getValues('address'),deliveryData:date}));
        router.push('http://localhost:5174/');
    }

    useEffect(() => {
        !user && router.push('/')
    }, [user])

    return (
        <section className='w-full px-4 sm:px-8 lg:px-4 2xl:px-32 pt-8'>

            <div className='flex flex-wrap md:flex-nowrap gap-4'>

                <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-1/2 flex flex-col  order-2'>
                    <div className="form-control w-full relative pb-8">
                        <label className="label">نام </label>
                        <input type="text" placeholder="نام گیرنده را وارد کنید . "
                            {...register('name', { required: "نام گیرنده را وارد کنید . " })}
                            className="input input-bordered input-primary w-full text-base-content" />
                        {errors.name &&
                            <label className="label text-error absolute bottom-0">
                                <span className="label-text-alt text-error">{errors.name.message}</span>
                            </label>}
                    </div>
                    <div className="form-control w-full relative pb-8">
                        <label className="label">نام خانوادگی</label>
                        <input type="text" placeholder="نام خانوادگی گیرنده را وارد کنید ."
                            {...register('famiy', { required: "نام خانوادگی گیرنده را وارد کنید " })}
                            className="input input-bordered input-primary w-full text-base-content" />
                        {errors.famiy &&
                            <label className="label text-error absolute bottom-0">
                                <span className="label-text-alt text-error">{errors.famiy.message}</span>
                            </label>}
                    </div>
                    <div className="form-control w-full relative pb-8">
                        <label className="label">شماره تلفن </label>
                        <input type="text" placeholder="شماره تلفن را وارد کنید ."

                            {...register('phone',
                                {
                                    required: "شماره تلفن را وارد کنید . ",
                                    pattern: {
                                        value: new RegExp("^(\\+98|0)?9\\d{9}$"),
                                        message: 'لطفا شماره تلفن معتبر وراد کنید .',
                                    }
                                })}

                            className="input input-bordered input-primary w-full text-base-content" />
                        {errors.phone &&
                            <label className="label text-error absolute bottom-0">
                                <span className="label-text-alt text-error">{errors.phone.message}</span>
                            </label>}
                    </div>
                    <div className="form-control w-full relative pb-8">
                        <label className="label">آدرس </label>
                        <textarea placeholder="آدرس را وارد کنید ."
                            {...register('address', { required: "آدرس را وارد کنید ." })}
                            className="input input-bordered input-primary w-full text-base-content h-[8rem]" />
                        {errors.address &&
                            <label className="label text-error absolute bottom-0">
                                <span className="label-text-alt text-error">{errors.address.message}</span>
                            </label>}
                    </div>

                    <button className="btn btn-primary">ثبت نهایی</button>
                    {/* <NeshanMap
                        mapKey="web.83e823e906d741019f33fb915341b14d"
                        center={{ latitude: 35.7665394, longitude: 51.4749824 }}
                        zoom={14}
                        onInit={onInit}
                        ref={mapRef}
                    ></NeshanMap> */}
                </form>

                <div className='w-full md:w-1/2 flex flex-col items-center gap-4 order-1 z-0'>
                    <div className="flex flex-col gap-4">
                        <span>تاریخ تحویل : {date}</span>
                        <Calendar
                            value={tomorrow_date}
                            onChange={(e) => setDate(e?.toString())}
                            minDate={tomorrow_date}
                            calendar={persian}
                            locale={persian_fa}
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default address
