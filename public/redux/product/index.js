import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import {
   addProduct,
   getProducts,
   editProducts,
   deleteProducts
} from "./thunkActions";

const initialState = {
    loading: 'idle',
    allProducts: [],
    isDeleting: 'idle'
    
}


export const productSlice = createSlice({
    name: 'delivery',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        builder.addCase(addProduct.pending, (state) => {
            return { ...state, loading: 'pending' }
        })

        builder.addCase(addProduct.fulfilled, (state, action) => {
            return { ...state, loading: 'successful'}
        })

        builder.addCase(addProduct.rejected, (state) => {
            return { ...state, loading: 'failed' }
        })

        //get all products
        builder.addCase(getProducts.pending, (state) => {
            return { ...state, loading: 'pending' }
        })

        builder.addCase(getProducts.fulfilled, (state, action) => {
            return { ...state, loading: 'successful', allProducts: action.payload }
        })

        builder.addCase(getProducts.rejected, (state) => {
            return { ...state, loading: 'failed' }
        })

         //edit products
         builder.addCase(editProducts.pending, (state) => {
            return { ...state, isDeleting: 'pending' }
        })

        builder.addCase(editProducts.fulfilled, (state, action) => {
            return { ...state, isDeleting: 'successful', allProducts: action.payload }
        })

        builder.addCase(editProducts.rejected, (state) => {
            return { ...state, isDeleting: 'failed' }
        })


         //delete products
         builder.addCase(deleteProducts.pending, (state) => {
            return { ...state, isDeleting: 'pending' }
        })

        builder.addCase(deleteProducts.fulfilled, (state, action) => {
            return { ...state, isDeleting: 'successful', allProducts: action.payload }
        })

        builder.addCase(deleteProducts.rejected, (state) => {
            return { ...state, isDeleting: 'failed' }
        })


     

    }
})


export const product = productSlice.reducer;
