import { Product } from "@/models/Types";
import privateAxios from "../instance/privateAxios";
import publicAxios from "../instance/publiceAxios"


export const getAllProducts = async (): Promise<Product[]> => {
    const response = await publicAxios.get(`/products?limit=30`);
    return await response.data.data.products;
}

export const getProductById = async (id: String): Promise<Product> => {
    const response = await publicAxios.get(`/products/${id}`);
    return await response.data.data.product;
}


export const getProductByCategoryId = async (categoryId: String, limit: Number) => {
    const response = await publicAxios.get(`/products?category=${categoryId}&limit=${limit}`)
    return await
        {
            products: response.data.data.products,
            page: response.data.page,
            totalPages: response.data.total_pages
        };
}


export const getLastProductByCategoryId = async (categoryId: String, limit: Number) => {
    const response = await publicAxios.get(`/products?category=${categoryId}&limit=${limit}&sort=-createdAt`)
    return await
        {
            products: response.data.data.products,
            page: response.data.page,
            totalPages: response.data.total_pages
        };
}