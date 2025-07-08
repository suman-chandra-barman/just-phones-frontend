import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://phonora-backend.vercel.app/api/v1' }),
  endpoints: () => ({}),
  tagTypes: ["phones"],
});
