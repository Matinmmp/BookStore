import { Product } from "@/models/Types";
import privateAxios from "../instance/privateAxios";
import publicAxios from "../instance/publiceAxios"


export const getAllProducts = async (limit:number): Promise<Product[]> => {
    const response = await publicAxios.get(`/products?limit=${limit}&sort=-createdAt`);
    return await response.data.data.products;
}

export const getProductById = async (id: String): Promise<Product> => {
    const response = await publicAxios.get(`/products/${id}`);
    return await response.data.data.product;
}


export const getProductByCategoryId = async (categoryId: String, limit: Number,page:Number) => {
    const response = await publicAxios.get(`/products?category=${categoryId}&limit=${limit}&page=${page}`)
    return await
        {
            products: response.data.data.products,
            page: response.data.page,
            totalPages: response.data.total_pages
        };
}


export const getLastProductByCategoryId = async (categoryId: String, limit: Number,page:Number) => {
    const response = await publicAxios.get(`/products?category=${categoryId}&limit=${limit}&sort=-createdAt&page=${page}`)
    return await
        {
            products: response.data.data.products,
            page: response.data.page,
            totalPages: response.data.total_pages
        };
}


export const getLastProductBySubCategoryId= async (subCategoryId: String, limit: Number,page:Number) => {
    const response = await publicAxios.get(`/products?subcategory=${subCategoryId}&limit=${limit}&sort=-createdAt&page=${page}`)
    return await
        {
            products: response.data.data.products,
            page: response.data.page,
            totalPages: response.data.total_pages
        };
}

export const getProductBySubCategoryId= async (subCategoryId: String, limit: Number,page:Number) => {
    const response = await publicAxios.get(`/products?subcategory=${subCategoryId}&limit=${limit}&page=${page}`)
    return await
        {
            products: response.data.data.products,
            page: response.data.page,
            totalPages: response.data.total_pages
        };
}