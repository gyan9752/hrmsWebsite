import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_END_POINT } from "@/components/admin/config/env";

const RAW_END_POINT = API_END_POINT || "https://blogb.hrvico.com/hrms-blogs/api/";
const sanitizedEndpoint = RAW_END_POINT.replace(/\/+$/, "");
const BASE_URL = sanitizedEndpoint.endsWith("/hrms-blogs/api") 
  ? `${sanitizedEndpoint}` 
  : `${sanitizedEndpoint}/hrms-blogs/api`;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
  }),
  tagTypes: ["Refetch_Users"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: ({ token, page, search } = {}) => {
        const queryParams = new URLSearchParams();
        if (page) queryParams.append("page", page);
        if (search) queryParams.append("search", search);
        const queryString = queryParams.toString();
        return {
          url: `/users${queryString ? `?${queryString}` : ""}`,
          method: "GET",
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        };
      },
      providesTags: ["Refetch_Users"],
    }),
    getUserById: builder.query({
      query: ({ id, token }) => ({
        url: `/users/${id}`,
        method: "GET",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }),
      providesTags: ["Refetch_Users"],
    }),
    getProfile: builder.query({
      query: ({ token }) => ({
        url: "/users/profile",
        method: "GET",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      }),
      providesTags: ["Refetch_Users"],
    }),
    addNewUser: builder.mutation({
      query: ({ formData, token }) => ({
        url: "/users",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }),
      invalidatesTags: ["Refetch_Users"],
    }),
    updateUserById: builder.mutation({
      query: ({ id, formData, token }) => ({
        url: `/users/${id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }),
      invalidatesTags: ["Refetch_Users"],
    }),
    deleteUser: builder.mutation({
      query: ({ id, token }) => ({
        url: `/users/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Refetch_Users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useGetProfileQuery,
  useAddNewUserMutation,
  useUpdateUserByIdMutation,
  useDeleteUserMutation,
} = userApi;
