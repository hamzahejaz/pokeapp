import React from 'react';
import { Card } from '@/components/common/Card/Card';
import { Pokemon } from '@/types';
import { formatPokemonName } from '@/lib/utils';
import Image from 'next/image';

export interface PokemonCardProps {
  pokemon: Pokemon;
  backgroundColor?: string;
}

export function PokemonCard({ pokemon, backgroundColor }: PokemonCardProps) {
  const imageUrl =
    pokemon.sprites.other['official-artwork'].front_default ||
    pokemon.sprites.front_default;

  return (
    <Card className="text-center rounded-xl" backgroundColor={backgroundColor}>
      {imageUrl && (
        <div className="relative w-64 h-64 mx-auto mb-6">
          <Image
            src={imageUrl}
            alt={pokemon.name}
            fill
            className="object-contain"
            priority
          />
        </div>
      )}
      <h1 className="text-4xl font-bold capitalize mb-2">
        {formatPokemonName(pokemon.name)}
      </h1>
    </Card>
  );
}
