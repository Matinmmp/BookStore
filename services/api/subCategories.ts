import { SubCategory } from "../../models/Types";
import publicAxios from "../instance/publiceAxios"

export const getAllSubCategories = async (): Promise<SubCategory[]> => {
    const respons = await publicAxios.get(`subcategories`);
    return await respons.data.data.subcategories
}