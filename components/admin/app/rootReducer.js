import { combineReducers } from "@reduxjs/toolkit";
import { blogApi } from "../features/api/blogApi";
import { authApi } from "../features/api/authApi";
import { dynamicImageApi } from "../features/api/dynamicImageApi";
import authReducer from "../features/authSlice";
import { categoryApi } from "../features/api/categoryApi";
import { contactApi } from "../features/api/contactApi";
import { questionApi } from "../features/api/questionApi";




import { userApi } from "../features/api/userApi";

const rootReducer=combineReducers({
    [blogApi.reducerPath]:blogApi.reducer,
    [authApi.reducerPath]:authApi.reducer,
    [dynamicImageApi.reducerPath]: dynamicImageApi.reducer,
    [categoryApi.reducerPath]:categoryApi.reducer,
    [contactApi.reducerPath]:contactApi.reducer,
    [questionApi.reducerPath]:questionApi.reducer,
    [userApi.reducerPath]:userApi.reducer,
    auth: authReducer,
})

export default rootReducer