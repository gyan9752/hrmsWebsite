import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_END_POINT } from "@/components/admin/config/env";

const rawEndpoint = API_END_POINT || "https://blogb.hrvico.com/hrms-blogs/api/";
const sanitizedEndpoint = rawEndpoint.replace(/\/+$/, ""); 
const BASE_API = sanitizedEndpoint.endsWith("/hrms-blogs/api")
  ? `${sanitizedEndpoint}/admin/`
  : `${sanitizedEndpoint}/hrms-blogs/api/admin/`;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (values) => ({
        url: "register",
        method: "POST",
        body: values,
      }),
    }),
    login: builder.mutation({
      query: (values) => ({
        url: "login",
        method: "POST",
        body: values,
      }),
    }),
    logout: builder.mutation({
      query: (token) => ({
        url: "logout",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    forgotPassword: builder.mutation({
      query: (values) => ({
        url: "forgot-password",
        method: "POST",
        body: values,
      }),
    }),
    resetPassword: builder.mutation({
      query: (values) => ({
        url: "reset-password",
        method: "POST",
        body: values,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
