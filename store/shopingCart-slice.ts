import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { Cart } from '@/models/Types';


const saveToLocalStorage = (shopingCart:any) => {
    if (typeof window !== 'undefined') {
        const jsonString = JSON.stringify(shopingCart);
        localStorage.setItem("ShopingCart", jsonString);
    }
}

export interface ShopingCart {
    cartList: Cart[]
    address:String,
    deliveryData:any
}

const initialState: ShopingCart = {
    cartList: [],
    address:'',
    deliveryData:''
}


export const shopingCartSlice = createSlice({
    name: 'ShopingCart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Cart>) {
            console.log(state.cartList)
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
                saveToLocalStorage(state);
                return;
            }
            state.cartList.push(action.payload);
            saveToLocalStorage(state);
        },
        deleteFromCart(state, action: PayloadAction<Cart>) {
            const productInCart = state.cartList.find((item) => item.productId === action.payload.productId)
            if (productInCart) {
                if (productInCart.count === 1) {
                    state.cartList = state.cartList.filter(item => {
                        if (item.productId !== action.payload.productId)
                            return item;
                    });
                    saveToLocalStorage(state);
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
                saveToLocalStorage(state);        
            }
        },
        addDate(state, action: any){
            state.address = action.payload.address;
            state.deliveryData = action.payload.deliveryData
            saveToLocalStorage(state);        

        },
        deleteAllInformation(state){
            state.cartList = []
            saveToLocalStorage(state);  
        },
        initialCart(state, action:any) {
            state.cartList = action.payload.cartList !== false ? action.payload.cartList : [];
            state.address = action.payload.address !== false ? action.payload.address : '';
            state.deliveryData = action.payload.deliveryData !== false ? action.payload.deliveryData : '';
        }

    },
})


export const { initialCart, addToCart, deleteFromCart,addDate,deleteAllInformation } = shopingCartSlice.actions

export default shopingCartSlice.reducer

