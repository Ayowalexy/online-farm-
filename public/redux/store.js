import { configureStore } from '@reduxjs/toolkit'
import thunk, { ThunkDispatch } from "redux-thunk";
import { rootReducers } from './rootReducer';

export const store = configureStore({
  reducer: rootReducers,
  middleware: [thunk]
})