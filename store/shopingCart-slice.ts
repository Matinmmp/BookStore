import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Cart } from '@/models/Types';


const saveToLocalStorage = (shopingCart: Cart[]) => {
    if (typeof window !== 'undefined') {
        const jsonString = JSON.stringify(shopingCart);
        localStorage.setItem("ShopingCart", jsonString);
    }
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
            const isExistedProductInCart = state.cartList.find((item) => item.productId === action.payload.productId)
            if (isExistedProductInCart) {
                state.cartList = state.cartList.map((item) => {
                    if (item.productId === action.payload.productId) {
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
        deleteFromCart(state, action: PayloadAction<Cart>) {
            const productInCart = state.cartList.find((item) => item.productId === action.payload.productId)
            if (productInCart) {
                if (productInCart.count === 1) {
                    state.cartList = state.cartList.filter(item => {
                        if (item.productId !== action.payload.productId)
                            return item;
                    });
                    saveToLocalStorage(state.cartList);
                    return;
                }    
                state.cartList = state.cartList.map((item) => {
                    if (item.productId === action.payload.productId) {
                        return {
                            ...item,
                            count: item.count - action.payload.count
                        }
                    }
                    return item;
                });    
                saveToLocalStorage(state.cartList);        
            }
            
        },

        initialCart(state, action: PayloadAction<Cart[]>) {
            state.cartList = action.payload
        }
    },
})


export const { initialCart, addToCart, deleteFromCart } = shopingCartSlice.actions

export default shopingCartSlice.reducer

