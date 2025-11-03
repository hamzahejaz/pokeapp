import React from 'react';
import { Badge } from '@/components/common/Badge/Badge';
import { PokemonType } from '@/types';
import { getTypeColor } from '@/lib/utils';

export interface TypeBadgesProps {
  types: PokemonType[];
}

export function TypeBadges({ types }: TypeBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {types.map((type) => (
        <Badge
          key={type.type.name}
          label={type.type.name}
          color={getTypeColor(type.type.name)}
          size="lg"
        />
      ))}
    </div>
  );
}
