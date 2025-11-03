import { Pokemon, PokemonSpecies, EvolutionChain } from '@/types';
import { TOTAL_POKEMON_COUNT } from './constants';

const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    return '';
  }
  return process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
};

export class PokemonNotFoundError extends Error {
  constructor(identifier: string) {
    super(`Pokemon "${identifier}" not found`);
    this.name = 'PokemonNotFoundError';
  }
}

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

export async function getPokemon(idOrName: string | number): Promise<Pokemon> {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/pokemon/${idOrName}`, {
      next: { revalidate: 3600 },
    });

    if (response.status === 404) {
      throw new PokemonNotFoundError(String(idOrName));
    }

    if (!response.ok) {
      throw new NetworkError(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof PokemonNotFoundError || error instanceof NetworkError) {
      throw error;
    }
    throw new NetworkError('Network error occurred');
  }
}

export async function getPokemonSpecies(id: number): Promise<PokemonSpecies> {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/pokemon-species/${id}`, {
      next: { revalidate: 3600 },
    });

    if (response.status === 404) {
      throw new PokemonNotFoundError(String(id));
    }

    if (!response.ok) {
      throw new NetworkError(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof PokemonNotFoundError || error instanceof NetworkError) {
      throw error;
    }
    throw new NetworkError('Network error occurred');
  }
}

export async function getEvolutionChain(url: string): Promise<EvolutionChain> {
  try {
    const matches = url.match(/\/evolution-chain\/(\d+)\//);
    const id = matches ? matches[1] : '0';

    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/evolution-chain/${id}`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new NetworkError(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof NetworkError) {
      throw error;
    }
    throw new NetworkError('Failed to fetch evolution chain');
  }
}

export function getRandomPokemonId(): number {
  return Math.floor(Math.random() * TOTAL_POKEMON_COUNT) + 1;
}

export async function searchPokemon(query: string): Promise<Pokemon> {
  const trimmedQuery = query.trim().toLowerCase();

  if (!trimmedQuery) {
    throw new Error('Search query cannot be empty');
  }

  return getPokemon(trimmedQuery);
}
