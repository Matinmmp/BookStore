import { getAllCategories } from '@/services/api/category';
import { useQuery } from '@tanstack/react-query';
import FilterItem from './FilterItem';
import Link from "next/link";
import React from 'react';

const Filter = () => {

    let { data: categories, isLoading } = useQuery({ queryKey: ['categories'], queryFn: () => getAllCategories() });

    return (
        <div >
            <ul className=" menu bg-base-200 w-56 rounded-box min-h-[40rem] hidden md:block" dir="rtl">
                {!isLoading && categories?.map((category) => <FilterItem key={category._id} category={category} />)}
            </ul>
           
        </div>
    )
}

export default Filter