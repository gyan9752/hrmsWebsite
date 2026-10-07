import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { blogApi } from "../features/api/blogApi";
import { authApi } from "../features/api/authApi";
import { dynamicImageApi } from "../features/api/dynamicImageApi";
import { categoryApi } from "../features/api/categoryApi";
import { contactApi } from "../features/api/contactApi";
import { questionApi } from "../features/api/questionApi";
import { userApi } from "../features/api/userApi";

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogApi.middleware,
      dynamicImageApi.middleware,
      authApi.middleware,
      categoryApi.middleware,
      contactApi.middleware,
      questionApi.middleware,
      userApi.middleware,
    ),
});
