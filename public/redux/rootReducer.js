import { combineReducers } from "redux";
import { auth } from './auth'
import { product } from "./product";
import { user } from './users'

export const rootReducers = combineReducers({
   product,
   auth,
   user
})