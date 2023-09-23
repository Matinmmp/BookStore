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

    let { data: categories, isLoading: isCatLoading } = useQuery({ queryKey: ['categories'], queryFn: () => getAllCategories() });
    let { data: subCategories, isLoading: isSubLoading } = useQuery({ queryKey: ['subCategories'], queryFn: () => getAllSubCategories() });

    const [exist, setExist] = useState(true);
    const [range, setRange] = useState(1000000);
    const [category, setCategory] = useState('0');
    const [subCategory, setSubCategory] = useState('0');

    const handleFilter = () => {
        const { query } = route;
        let updatedQuery = query;

        if (!exist)
            updatedQuery = { ...updatedQuery, exist: exist.toString() };
        else
            delete updatedQuery.exist;

        if (range !== 1000000)
            updatedQuery = { ...updatedQuery, range: range.toString() };
        else
            delete updatedQuery.range;

        if (category !== '0')
            updatedQuery = { ...updatedQuery, category: category };
        else
            delete updatedQuery.category;

        if (subCategory !== '0')
            updatedQuery = { ...updatedQuery, subCategory: subCategory };
        else
            delete updatedQuery.subCategory;

        const updatedUrl = {
            pathname: route.pathname,
            query: updatedQuery,
        };
        route.push(updatedUrl);
    }

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
                    <span>{convert_english_numbers_to_persisn(`${range}`)} تومان</span>
                    <input type="range" dir='ltr' min={0} max={1000000} value={range} step={1000} onChange={(e) => setRange(() => Number(e.target.value))}
                        className="range range-primary" />
                    <span>{convert_english_numbers_to_persisn("0")} تومان</span>
                </div>
            </div>

            <div className='w-full rounded-lg bg-white shadow-md shadow-gray-300 p-4 mt-4'>
                <div className="flex flex-col gap-4">
                    <h4 className="text-xl font-semibold">دسته بندی ها</h4>
                    <ul className="flex flex-col gap-2">
                        <li className="form-control" >
                            <label className="label cursor-pointer">
                                <span className=" text-md">همه</span>
                                <input type="radio" name="radio-1"  onClick={() => setCategory("0")}
                                    className="radio border-primary checked:bg-primary" />
                            </label>
                        </li>
                        {!isCatLoading && categories?.map((category, index) => {
                            return (
                                <li className="form-control" key={index}>
                                    <label className="label cursor-pointer">
                                        <span className=" text-md">{category.name}</span>
                                        <input type="radio" name="radio-1"  onClick={() => setCategory(category._id)}
                                            className="radio border-primary checked:bg-primary" />
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
                        <li className="form-control">
                            <label className="label cursor-pointer">
                                <span className=" text-md">همه</span>
                                <input type="radio" name="radio-2" onClick={() => setSubCategory("0")}
                                    className="radio border-primary checked:bg-primary" />
                            </label>
                        </li>
                        {!isSubLoading && subCategories?.map((subCategory, index) => {
                            return (
                                <li className="form-control" key={index}>
                                    <label className="label cursor-pointer">
                                        <span className=" text-md">{subCategory.name}</span>
                                        <input type="radio" name="radio-2" onClick={() => setSubCategory(subCategory._id)}
                                            className="radio border-primary checked:bg-primary" />
                                    </label>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className='w-full rounded-lg bg-white shadow-md shadow-gray-300 p-4 mt-4'>
                <div className="flex items-center justify-center">
                    <button className='w-full btn btn-primary' onClick={handleFilter}>اعمال فیلتر</button>
                </div>
            </div>

        </section>
    )
}

export default Filter