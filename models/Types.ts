export interface User  {
    _id: string
    firstname: string,
    lastname: string,
    username: string,
    password: string,
    phoneNumber: string,
    address: string,
    role: string,
}

export type Product = {
    _id: string,
    category: Category,
    subcategory: SubCategory,
    name: string,
    slugname: string,
    price: number
    quantity: number
    brand: string,
    description: string,
    thumbnail: string,
    images: string[],
    rating: Rating,

}

export type  SubCategory={
    _id:string,
    name:string
}


type Rating = {
    rate: Number,
    count: Number,
}
export type Order = {
    _id: string
    user: string
    products: { products: Product[], count: number },
    totalPrice: number
    deliveryDate: Date
    deliveryStatus: boolean
    createdAt: Date
    updatedAt: Date
}

export type Category = {
    _id: string,
    name: string
    slugname: string
    icon: string
}

export enum AdminRoles {
    ADMIN,
    USER
}


export type Cart = {
    productId: string
    count: number
    image:String
    price:number,
    name:string
}