/* eslint-disable react-hooks/error-boundaries */
import { notFound } from 'next/navigation';
import { getPokemon, getPokemonSpecies, PokemonNotFoundError } from '@/lib/pokeapi';
import { getEnglishFlavorText } from '@/lib/utils';
import { PokemonDetail } from '@/components/compound/PokemonDetail/PokemonDetail';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const pokemon = await getPokemon(id);

    return {
      title: `${pokemon?.name?.charAt(0).toUpperCase() + pokemon.name.slice(1)} - Pokedex`,
      description: `View detailed information about ${pokemon.name} including stats, types, and evolutions.`,
    };
  } catch {
    return {
      title: 'Pokemon Not Found - Pokedex',
      description: 'The requested Pokemon could not be found.',
    };
  }
}

export default async function PokemonPage({ params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const pokemon = await getPokemon(id);
    const species = await getPokemonSpecies(pokemon.id);
    const description = getEnglishFlavorText(species.flavor_text_entries);

    return <PokemonDetail pokemon={pokemon} species={species} description={description} />;
  } catch (error) {
    if (error instanceof PokemonNotFoundError) {
      notFound();
    }
    throw error;
  }
}
