import { useState, useEffect } from 'react';
import { Pokemon, PokemonSpecies } from '@/types';
import { getPokemon, getPokemonSpecies, PokemonNotFoundError } from '@/lib/pokeapi';

interface UsePokemonReturn {
  pokemon: Pokemon | null;
  species: PokemonSpecies | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function usePokemon(idOrName: string | number | null): UsePokemonReturn {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [species, setSpecies] = useState<PokemonSpecies | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchPokemon = async () => {
    if (!idOrName) return;

    setLoading(true);
    setError(null);

    try {
      const pokemonData = await getPokemon(idOrName);
      setPokemon(pokemonData);

      const speciesData = await getPokemonSpecies(pokemonData.id);
      setSpecies(speciesData);
    } catch (err) {
      setError(err as Error);
      setPokemon(null);
      setSpecies(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [idOrName]);

  return {
    pokemon,
    species,
    loading,
    error,
    refetch: fetchPokemon,
  };
}
