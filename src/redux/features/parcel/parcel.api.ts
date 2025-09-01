import { baseApi } from "@/redux/baseApi";

export const parcelAPi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createParcel: builder.mutation({
      query: (parcelInfo) => ({
        url: "/parcel/create-parcel",
        method: "POST",
        data: parcelInfo,
      }),
    }),
    editParcel: builder.mutation({
      query: ({ parcelId, data }) => ({
        url: `/parcel/${parcelId}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["PARCEL", "PARCELS"],
    }),
    getMyParcel: builder.query({
      query: (params) => ({
        url: "/parcel/my-parcel",
        method: "GET",
        params: params,
      }),
      providesTags: ["PARCEL"],
    }),
    getAllParcel: builder.query({
      query: (params) => ({
        url: "/parcel/all-parcel",
        method: "GET",
        params: params,
      }),
      providesTags: ["PARCELS"],
    }),
  }),
});

export const {
  useCreateParcelMutation,
  useGetMyParcelQuery,
  useEditParcelMutation,
  useGetAllParcelQuery,
} = parcelAPi;
