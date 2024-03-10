import { backendApi } from './api.ts'
import { Pokemon } from '../types/Pokemon.ts'

export const pokemonApi = backendApi.injectEndpoints({
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})

export const { useGetPokemonByNameQuery } = pokemonApi