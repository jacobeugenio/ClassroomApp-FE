import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://classroom-app-be.vercel.app",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    // headers.set("Authorization", "Bearer your_token_here");
    headers.set("Access-Control-Allow-Credentials", "true");
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
