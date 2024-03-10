import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", "6fb51d49c8msh73dcd480b9f345cp164997jsna707c1adeeff")

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTopCharts: builder.query({query: () => "/charts/track"}),
  })
})

export const { 
  useGetTopChartsQuery ,
  useGetSongDetailsQuery
} = shazamApi