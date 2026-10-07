import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_END_POINT } from "@/components/admin/config/env";

const rawEndpoint = API_END_POINT || "https://blogb.hrvico.com/hrms-blogs/api/";
const sanitizedEndpoint = rawEndpoint.replace(/\/+$/, ""); 
const BASE_URL = sanitizedEndpoint.endsWith("/hrms-blogs/api")
  ? `${sanitizedEndpoint}/admin/contacts`
  : `${sanitizedEndpoint}/hrms-blogs/api/admin/contacts`;

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: ({ token, page = 1 }) => ({
        url: `?page=${page}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    deleteContactById: builder.mutation({
      query: ({ id, token }) => ({
        url: `/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    getContactById: builder.query({
      query: ({ id, token }) => ({
        url: `/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useDeleteContactByIdMutation,
  useGetContactByIdQuery,
} = contactApi;
