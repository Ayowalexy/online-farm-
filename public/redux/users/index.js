import { createSlice } from "@reduxjs/toolkit";
import {
    getAllUsers,
    suspendUser,
    getAllSellers,
    getStats
} from "./thunkActions";

const initialState = {
    loading: 'idle',
    allUsers: [],
    isSuspending: 'idle',
    allSellers: [],
    stats: {}

}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getAllUsers.pending, (state) => {
            return { ...state, loading: 'pending' }
        })

        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            return { ...state, loading: 'successful', allUsers: action.payload }
        })

        builder.addCase(getAllUsers.rejected, (state) => {
            return { ...state, loading: 'failed' }
        })

        // suspend all users
        builder.addCase(suspendUser.pending, (state) => {
            return { ...state, loading: 'pending' }
        })

        builder.addCase(suspendUser.fulfilled, (state,) => {
            return { ...state, loading: 'successful' }
        })

        builder.addCase(suspendUser.rejected, (state) => {
            return { ...state, loading: 'failed' }
        })

         // suspend all sellers
         builder.addCase(getAllSellers.pending, (state) => {
            return { ...state, loading: 'pending' }
        })

        builder.addCase(getAllSellers.fulfilled, (state, action) => {
            return { ...state, loading: 'successful', allSellers: action.payload}
        })

        builder.addCase(getAllSellers.rejected, (state) => {
            return { ...state, loading: 'failed' }
        })

         // get stats
         builder.addCase(getStats.pending, (state) => {
            return { ...state, loading: 'pending' }
        })

        builder.addCase(getStats.fulfilled, (state, action) => {
            return { ...state, loading: 'successful', stats: action.payload}
        })

        builder.addCase(getStats.rejected, (state) => {
            return { ...state, loading: 'failed' }
        })




    }
})


export const user = userSlice.reducer;
