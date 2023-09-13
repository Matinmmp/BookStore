import NeshanMap, { OlMap, Ol } from "@neshan-maps-platform/react-openlayers";
import DatePicker, { Calendar, DateObject } from 'react-multi-date-picker';
import "@neshan-maps-platform/react-openlayers/dist/style.css";
import persian_fa from "react-date-object/locales/persian_fa";
import { MdDriveFileRenameOutline } from 'react-icons/md';
import persian from "react-date-object/calendars/persian";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState, useEffect, useRef } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { BiMap } from 'react-icons/bi';
import React from 'react';

type Inputs = {
    name: string,
    address: string,
}

function convertPersianToGregorian(persianDate: any) {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    const gregorianDate = persianDate.replace(/[۰-۹]/g, (char: any) => persianDigits.indexOf(char));
    return gregorianDate;
}

const address = () => {

    var dateFormat = new Intl.DateTimeFormat("fa", { year: "numeric", month: "2-digit", day: "2-digit" });
    const { register, reset, formState: { errors }, handleSubmit } = useForm<Inputs>();
    const today = new Date();
    const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
    const tomorrowTick = tomorrow.getTime();
    const tomorrow_date = convertPersianToGregorian(dateFormat.format(tomorrowTick));
    const [date, setDate] = useState(tomorrow_date);


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // const user = {
        //     username: data.username,
        //     password: data.password
        // }

    }


    // const mapRef = useRef<any>(null)
    // const [ol, setOl] = useState<Ol>()
    // const [olMap, setOlMap] = useState<OlMap>()
    // const onInit = (ol: Ol, map: OlMap) => {
    //     setOl(ol)
    //     setOlMap(map)
    //     console.log(ol)
    //     const url = `https://api.neshan.org/v5/reverse?lat=LATITUDE&lng=LONGITUDE`
    //     setTimeout(() => {
    //         const view = map.getView()
    //         view.animate({
    //             center: (ol.proj.fromLonLat)([
    //                 51.36281969540723, 35.69672648316882,
    //             ]),
    //             zoom: 12,
    //             duration: 1000,
    //         })
    //     }, 5000)
    // }
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         if (mapRef.current) {
    //             // console.log(mapRef.current.map);
    //             clearInterval(interval)
    //         }
    //     }, 1000)
    //     return () => clearInterval(interval)
    // }, [])

    return (
        <section className='px-[8rem] pt-[10rem]'>

            <div className='flex gap-4'>

                <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 flex flex-col gap-4'>
                    <div className="form-control w-full relative pb-8">
                        <label className="label">نام گیرنده</label>
                        <input type="text" placeholder="نام گیرنده را وارد کنید . "
                            {...register('name', { required: "نام کاربری را وارد کنید" })}
                            className="input input-bordered input-primary w-full text-base-content" />
                        {errors.name &&
                            <label className="label text-error absolute bottom-0">
                                <span className="label-text-alt text-error">{errors.name.message}</span>
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

                <div className='w-1/2 flex flex-col items-center gap-4'>
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
