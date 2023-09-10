import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';



// const handleLocalStorage = () => {
//     if (typeof window !== 'undefined') {
//         if (localStorage.getItem('ShopingCart')) {
//             const cartList = JSON.parse(String(localStorage.getItem("ShopingCart")));
//             return cartList;
//         }
//         else {
//             localStorage.setItem("ShopingCart", '[]');
//             return [];
//         }
//     }
// }


const saveToLocalStorage = (shopingCart: Cart[]) => {
    if (typeof window !== 'undefined') {
        const jsonString = JSON.stringify(shopingCart);
        localStorage.setItem("ShopingCart", jsonString);
    }
}

type Cart = {
    productId: string
    count: number
}

export interface ShopingCart {
    cartList: Cart[]
}

const initialState: ShopingCart = {
    cartList: []
}


export const shopingCartSlice = createSlice({
    name: 'ShopingCart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Cart>) {
            let isExistedProductInCart = state.cartList.find((item) => item.productId === action.payload.productId)
            if (isExistedProductInCart) {
                state.cartList = state.cartList.map((item) => {
                    if (item.productId === action.payload.productId) {
                        console.log(action.payload.count);
                        return {
                            ...item,
                            count: +item.count + +action.payload.count
                        }
                    }
                    return item;
                })
                saveToLocalStorage(state.cartList);
                return;
            }
            state.cartList.push(action.payload);
            saveToLocalStorage(state.cartList);
        },
        initialCart(state, action: PayloadAction<Cart[]>) {
            state.cartList = action.payload
        }
    },
})


export const { initialCart, addToCart } = shopingCartSlice.actions

export default shopingCartSlice.reducer

