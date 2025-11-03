import { useState, useEffect } from 'react';
import { EvolutionChain, ChainLink, EvolutionNode } from '@/types';
import { getEvolutionChain, getPokemon } from '@/lib/pokeapi';
import { getPokemonIdFromUrl } from '@/lib/utils';

interface UseEvolutionsReturn {
  evolutions: EvolutionNode[];
  loading: boolean;
  error: Error | null;
}

function parseEvolutionChain(chain: ChainLink): EvolutionNode[] {
  const evolutions: EvolutionNode[] = [];
  let current: ChainLink | null = chain;

  while (current) {
    const id = getPokemonIdFromUrl(current.species.url);
    evolutions.push({
      id,
      name: current.species.name,
      image: '',
    });

    current = current.evolves_to.length > 0 ? current.evolves_to[0] : null;
  }

  return evolutions;
}

export function useEvolutions(evolutionChainUrl: string | null): UseEvolutionsReturn {
  const [evolutions, setEvolutions] = useState<EvolutionNode[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchEvolutions = async () => {
      if (!evolutionChainUrl) return;

      setLoading(true);
      setError(null);

      try {
        const chainData = await getEvolutionChain(evolutionChainUrl);
        const evolutionNodes = parseEvolutionChain(chainData.chain);

        const evolutionsWithImages = await Promise.all(
          evolutionNodes.map(async (node) => {
            try {
              const pokemon = await getPokemon(node.id);
              return {
                ...node,
                image: pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default,
              };
            } catch {
              return node;
            }
          })
        );

        setEvolutions(evolutionsWithImages);
      } catch (err) {
        setError(err as Error);
        setEvolutions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvolutions();
  }, [evolutionChainUrl]);

  return {
    evolutions,
    loading,
    error,
  };
}
