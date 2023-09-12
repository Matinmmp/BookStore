import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { User } from '@/models/Types';

const saveToLocalStorage = (user: User|string) => {
    if (typeof window !== 'undefined') {
        const jsonString = JSON.stringify(user);
        localStorage.setItem("User", jsonString);
    }
}

export interface UserVal {
    user: User | string
}

const initialState:UserVal = {
    user: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<User|string>){
            state.user = action.payload;
            saveToLocalStorage(state.user)
        }
        
    },
})


export const { setUser } = userSlice.actions

export default userSlice.reducer