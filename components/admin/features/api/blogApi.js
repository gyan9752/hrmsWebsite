import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_END_POINT } from "@/components/admin/config/env";

const rawEndpoint = API_END_POINT || "https://blogb.hrvico.com/hrms-blogs/api/";
const sanitizedEndpoint = rawEndpoint.replace(/\/+$/, ""); 
const BASE_URL = sanitizedEndpoint.endsWith("/hrms-blogs/api") 
  ? `${sanitizedEndpoint}/` 
  : `${sanitizedEndpoint}/hrms-blogs/api/`;

export const blogApi = createApi({
  reducerPath: "blogApi",
  tagTypes: ["Refetch_Blogs", "Refetch_Single_Blog"],
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: (args = {}) => {
        const { page, search, fromDate, toDate, before } = args;
        const params = new URLSearchParams();

        if (page) params.append("page", page);
        if (search && search.trim() !== "") params.append("search", search.trim());
        if (before) params.append("before", before);
        if (fromDate && toDate) {
          params.append("fromDate", fromDate);
          params.append("toDate", toDate);
        }

        const queryString = params.toString();
        return {
          url: queryString ? `blogs?${queryString}` : "blogs",
          method: "GET",
        };
      },
      providesTags: ["Refetch_Blogs"],
    }),

    deleteBlogs: builder.mutation({
      query: ({ id, token }) => ({
        url: `blogs/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["Refetch_Blogs", "Refetch_Single_Blog"],
    }),

    addNewBlog: builder.mutation({
      query: ({ formData, token }) => ({
        url: `blogs`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }),
      invalidatesTags: ["Refetch_Blogs"],
    }),

    checkSlug: builder.query({
      query: (arg) => {
        const slug = typeof arg === "string" ? arg : arg?.slug;
        const id = typeof arg === "object" ? arg?.id : undefined;
        const qs =
          `slug=${encodeURIComponent(slug || "")}` + (id ? `&id=${id}` : "");
        return {
          url: `blogs/check-slug?${qs}`,
          method: "GET",
        };
      },
    }),

    getSingleBlogBySlug: builder.query({
      query: (slug) => ({
        url: `blogs/${slug}`,
        method: "GET",
      }),
      providesTags: ["Refetch_Single_Blog"],
    }),

    updateBlogById: builder.mutation({
      query: ({ id, token, formData }) => ({
        url: `blogs/${id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }),
      invalidatesTags: ["Refetch_Blogs", "Refetch_Single_Blog"],
    }),

    updateBlogStatus: builder.mutation({
      query: ({ id, token, status }) => ({
        url: `blogs/${id}/status`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      }),
      invalidatesTags: ["Refetch_Blogs", "Refetch_Single_Blog"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useDeleteBlogsMutation,
  useAddNewBlogMutation,
  useCheckSlugQuery,
  useGetSingleBlogBySlugQuery,
  useUpdateBlogByIdMutation,
  useUpdateBlogStatusMutation,
} = blogApi;
