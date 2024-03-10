import { FC } from 'react'
import { useGetPokemonByNameQuery } from '../../app/services/pokemon.ts'

export const Home: FC = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu')

  return (
    <div className="w-full h-screen flex align-middle text-center justify-center bg-[#27365E]">
      <div className="text-9xl">Welcome DaVinci</div>
    </div>
  )
}
