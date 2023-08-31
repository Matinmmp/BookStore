import { Product } from "@/models/Types";
import privateAxios from "../instance/privateAxios";
import publicAxios from "../instance/publiceAxios"


export const getAllProducts = async (): Promise<Product[]> => {
    const respons = await publicAxios.get(`/products?limit=30`);
    return await respons.data.data.products;    
}

