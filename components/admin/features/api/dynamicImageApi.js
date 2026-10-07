import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_END_POINT } from "@/components/admin/config/env";

const rawEndpoint = API_END_POINT || "https://blogb.hrvico.com/hrms-blogs/api/";
const sanitizedEndpoint = rawEndpoint.replace(/\/+$/, ""); 
const BASE_URL = sanitizedEndpoint.endsWith("/hrms-blogs/api") 
  ? `${sanitizedEndpoint}/` 
  : `${sanitizedEndpoint}/hrms-blogs/api/`;

export const dynamicImageApi = createApi({
  reducerPath: "dynamicImageApi",
  tagTypes: ["DynamicImages", "DynamicImage"],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, credentials: "include" }),
  endpoints: (builder) => ({
    getAllImages: builder.query({
      query: ({ page = 1, search = "" } = {}) => ({ url: `dynamic-images?page=${page}&search=${encodeURIComponent(search)}`, method: "GET" }),
      providesTags: ["DynamicImages"],
    }),
    addNewImage: builder.mutation({
      query: ({ formData, token }) => ({ url: `dynamic-images`, method: "POST", headers: { Authorization: `Bearer ${token}` }, body: formData }),
      invalidatesTags: ["DynamicImages"],
    }),
    getSingleImageBySlug: builder.query({
      query: (slug) => ({ url: `dynamic-images/${slug}`, method: "GET" }),
      providesTags: ["DynamicImage"],
    }),
    getImageById: builder.query({
      query: (id) => ({ url: `dynamic-images/id/${id}`, method: "GET" }),
      providesTags: ["DynamicImage"],
    }),
    updateImageById: builder.mutation({
      query: ({ id, formData, token }) => ({ url: `dynamic-images/id/${id}`, method: "PUT", headers: { Authorization: `Bearer ${token}` }, body: formData }),
      invalidatesTags: ["DynamicImages", "DynamicImage"],
    }),
    deleteImage: builder.mutation({
      query: ({ id, token }) => ({ url: `dynamic-images/id/${id}`, method: "DELETE", headers: { Authorization: `Bearer ${token}` } }),
      invalidatesTags: ["DynamicImages"],
    }),
    checkImageSlug: builder.query({
      query: (arg) => {
        const slug = typeof arg === "string" ? arg : arg?.slug;
        const id = typeof arg === "object" ? arg?.id : undefined;
        const qs = `slug=${encodeURIComponent(slug || "")}` + (id ? `&id=${id}` : "");
        return { url: `dynamic-images/check-slug?${qs}`, method: "GET" };
      },
    }),
    updateImageStatus: builder.mutation({
      query: ({ id, token, status }) => ({ url: `dynamic-images/id/${id}/status`, method: "PUT", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify({ status }) }),
      invalidatesTags: ["DynamicImages", "DynamicImage"],
    }),
  }),
});

export const {
  useGetAllImagesQuery,
  useAddNewImageMutation,
  useGetSingleImageBySlugQuery,
  useGetImageByIdQuery,
  useUpdateImageByIdMutation,
  useDeleteImageMutation,
  useCheckImageSlugQuery,
  useUpdateImageStatusMutation,
} = dynamicImageApi;
