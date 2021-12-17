import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ecommerceApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `/products`,
    }),
    postemail:builder.query({
      query: () => `/send`,
    }),

    getProductById: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, usePostemailQuery, useGetProductByIdQuery } =
  ecommerceApi;
