import { useState } from 'react';
import { Pokemon } from '@/types';
import { searchPokemon, getRandomPokemonId, getPokemon } from '@/lib/pokeapi';

interface UsePokemonSearchReturn {
  search: (query: string) => Promise<Pokemon | null>;
  searchRandom: () => Promise<Pokemon | null>;
  loading: boolean;
  error: Error | null;
}

export function usePokemonSearch(): UsePokemonSearchReturn {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const search = async (query: string): Promise<Pokemon | null> => {
    setLoading(true);
    setError(null);

    try {
      const pokemon = await searchPokemon(query);
      return pokemon;
    } catch (err) {
      setError(err as Error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const searchRandom = async (): Promise<Pokemon | null> => {
    setLoading(true);
    setError(null);

    try {
      const randomId = getRandomPokemonId();
      const pokemon = await getPokemon(randomId);
      return pokemon;
    } catch (err) {
      setError(err as Error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    search,
    searchRandom,
    loading,
    error,
  };
}
