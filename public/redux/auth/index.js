import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import {
   login,
   signup
} from "./thunkActions";


const initialState = {
    loading: false,
    user: {}
    
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            return { ...state, loading: 'pending' }
        })

        builder.addCase(login.fulfilled, (state, action) => {
            return { ...state, loading: 'successful', user: action.payload}
        })

        builder.addCase(login.rejected, (state) => {
            return { ...state, loading: 'failed' }
        })

        //sign up
        builder.addCase(signup.pending, (state) => {
            return { ...state, loading: 'pending' }
        })

        builder.addCase(signup.fulfilled, (state) => {
            return { ...state, loading: 'successful' }
        })

        builder.addCase(signup.rejected, (state) => {
            return { ...state, loading: 'failed' }
        })

     

    }
})


export const auth = authSlice.reducer;
