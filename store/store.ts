import shopingCartSlice from './shopingCart-slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        shopingCart: shopingCartSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch