import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { log } from 'console';


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
        addToCart(state, action :PayloadAction<Cart>) {
            console.log(action.payload);
            
            // let isExistedProductInCart= state.cartList.find((item)=>item.productId === action.payload)
            state.cartList.push()
        }
        // increment: (state) => {
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})


export const { addToCart } = shopingCartSlice.actions

export default shopingCartSlice.reducer

