import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_END_POINT } from "@/components/admin/config/env";

const rawEndpoint = API_END_POINT || "https://blogb.hrvico.com/hrms-blogs/api/";
const sanitizedEndpoint = rawEndpoint.replace(/\/+$/, ""); 
const BASE_URL = sanitizedEndpoint.endsWith("/hrms-blogs/api")
  ? `${sanitizedEndpoint}/admin/categories`
  : `${sanitizedEndpoint}/hrms-blogs/api/admin/categories`;

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
  }),
  tagTypes: ["Refetch_Categories"],
  endpoints: (builder) => ({
    getAllCategoriesList: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["Refetch_Categories"],
    }),
    deleteCategory: builder.mutation({
      query: ({ slug, token }) => ({
        url: `/${slug}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Refetch_Categories"],
    }),
    addNewCategory: builder.mutation({
      query: ({ values, token, slug }) => ({
        url: `/${slug}`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: values,
      }),
      invalidatesTags: ["Refetch_Categories"],
    }),
    checkSlug: builder.query({
      query: (slug) => ({
        url: `/check-slug?slug=${encodeURIComponent(slug)}`,
        method: "GET",
      }),
    }),
    updateCategiryById: builder.mutation({
      query: ({ slug, token, values }) => ({
        url: `/${slug}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: values,
      }),
      invalidatesTags: ["Refetch_Categories"],
    }),
    getCategoryById: builder.query({
      query: ({ id, token }) => ({
        url: `${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Refetch_Categories"],
    }),

    getAllVisibleCategoriesList: builder.query({
      query: () => ({
        url: `/visible`,
        method: "GET",
      }),
      providesTags: ["Refetch_Categories"],
    }),

    updateCategoryStatus: builder.mutation({
      query: ({ id, token, status }) => ({
        url: `/${id}/status`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      }),
      invalidatesTags: ["Refetch_Categories"],
    }),
  }),
});

export const {
  useGetAllVisibleCategoriesListQuery,
  useGetAllCategoriesListQuery,
  useDeleteCategoryMutation,
  useAddNewCategoryMutation,
  useCheckSlugQuery,
  useUpdateCategiryByIdMutation,
  useGetCategoryByIdQuery,
  useUpdateCategoryStatusMutation,
} = categoryApi;
