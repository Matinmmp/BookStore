import { Category } from "@/models/Types"
import { getAllSubCategories } from "@/services/api/subCategories";
import { useQuery } from '@tanstack/react-query';
import Link from "next/link";
interface IProps {
    category: Category
}

const FilterItem = ({ category }: IProps) => {
    let { data: subCategories, isLoading } =
        useQuery({ queryKey: [`categories${category._id}`], queryFn: () => getAllSubCategories(category._id) });
    return (
        <li >
            <Link  href={`product/${category._id}/new?page=1`}>
            <h2 className="menu-title text-primary text-lg">{category.name}</h2>
            </Link>
            <ul className='before:left-auto before:right-0 ps-1' style={{ margin: '0rem', marginRight: '1rem' }}>
                {!isLoading && subCategories?.map((subCategory)=> 
                <li key={subCategory._id}>
                    <Link href={`product/${category._id}/${subCategory._id}/new?page=1`}>{subCategory.name}</Link>
                </li>
                )}
            </ul>
        </li>
    )
}

export default FilterItem