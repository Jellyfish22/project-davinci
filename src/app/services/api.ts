import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const backendApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  refetchOnReconnect: true,
  tagTypes: [],
  endpoints: (() => ({}))
})
