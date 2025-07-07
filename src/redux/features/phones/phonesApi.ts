import { baseApi } from "../../api/baseApi";

const phonesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPhones: builder.query({
      query: () => {
        return {
          url: `/phones`,
          method: "GET",
        };
      },
      providesTags: ["phones"],
    }),

    getSinglePhone: builder.query({
      query: (id: string) => {
        return {
          url: `/eyeglasses/${id}`,
          method: "GET",
        };
      },
      providesTags: ["phones"],
    }),
  }),
});

export const {
  useGetAllPhonesQuery,
  useGetSinglePhoneQuery,
} = phonesApi;
