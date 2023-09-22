import { getAllCategories } from '@/services/api/category';
import { useQuery } from '@tanstack/react-query';
import FilterItem from './FilterItem';
import Link from "next/link";
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { getAllSubCategories } from '@/services/api/subCategories';


const convert_english_numbers_to_persisn = (s: any) => s.replace(/\d/g, (d: number) => '۰۱۲۳۴۵۶۷۸۹'[d])
const Filter = () => {
    const route = useRouter();

    let { data: categories, isLoading:isCatLoading } = useQuery({ queryKey: ['categories'], queryFn: () => getAllCategories() });
    let { data: subCategories, isLoading:isSubLoading } = useQuery({ queryKey: ['subCategories'], queryFn: () => getAllSubCategories() });

    const [exist, setExist] = useState(true);
    const [range,setRange] = useState(1000000);


    return (
        <section className='w-full'>
            <div className='w-full rounded-lg bg-white shadow-md shadow-gray-300 p-4'>
                <div className="form-control  ">
                    <label className="cursor-pointer label ">
                        <span className="label-text">کتاب های موجود</span>
                        <input type="checkbox" className="toggle toggle-primary" checked={exist} onChange={() => setExist((exist) => !exist)} />
                        <span className="label-text">همه کتاب ها</span>
                    </label>
                </div>
            </div>

            <div className='w-full rounded-lg bg-white shadow-md shadow-gray-300 p-4 mt-4'>
                <div className="flex gap-4" >                
                    <span>{convert_english_numbers_to_persisn(`${range}`) } تومان</span>
                    <input type="range" dir='ltr' min={0} max={1000000} value={range} step={1000} onChange={(e)=>setRange(()=>Number(e.target.value))}
                        className="range range-primary" />
                    <span>{convert_english_numbers_to_persisn("0")} تومان</span>
                </div>
            </div>

            <div className='w-full rounded-lg bg-white shadow-md shadow-gray-300 p-4 mt-4'>
                <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-semibold">دسته بندی ها</h4>
                    <ul className="flex flex-col gap-2">
                        {!isCatLoading && categories?.map((category,index)=>{
                            return(
                                <li className="form-control" key={index}>
                                <label className="label cursor-pointer">
                                    <span className=" text-md">{category.name}</span>
                                    <input type="checkbox" name="radio-10" className="radio border-primary checked:bg-primary" />
                                </label>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className='w-full rounded-lg bg-white shadow-md shadow-gray-300 p-4 mt-4'>
                <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-semibold"> ژانر ها</h4>
                    <ul className="flex flex-col gap-2">
                        {!isSubLoading && subCategories?.map((subCategory,index)=>{
                            return(
                                <li className="form-control" key={index}>
                                <label className="label cursor-pointer">
                                    <span className=" text-md">{subCategory.name}</span>
                                    <input type="checkbox" name="radio-10" className="radio border-primary checked:bg-primary" />
                                </label>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Filter