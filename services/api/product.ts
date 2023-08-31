import { Product } from "@/models/Types";
import privateAxios from "../instance/privateAxios";
import publicAxios from "../instance/publiceAxios"


export const getAllProducts = async (): Promise<Product[]> => {
    const response = await publicAxios.get(`/products?limit=30`);
    return await response.data.data.products;    
}

export const getProductByCategoryId=async (categoryId:String,limit:Number):Promise<Product[]>=>{
    const response = await publicAxios.get(`/products?category=${categoryId}&limit=${limit}`)
    return await response.data.data.products;   
}
