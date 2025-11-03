import React from 'react';
import { StatBar } from '@/components/common/StatBar/StatBar';
import { PokemonStat } from '@/types';
import { getStatDisplayName } from '@/lib/utils';
import { STAT_ORDER } from '@/lib/constants';

export interface StatsTabProps {
  stats: PokemonStat[];
  statColor?: string;
}

export function StatsTab({ stats, statColor }: StatsTabProps) {
  const sortedStats = [...stats].sort((a, b) => {
    const indexA = STAT_ORDER.indexOf(a.stat.name as any);
    const indexB = STAT_ORDER.indexOf(b.stat.name as any);
    return indexA - indexB;
  });

  return (
    <div className="max-w-2xl mx-auto pt-6 px-4">
      {sortedStats.map((stat) => (
        <StatBar
          key={stat.stat.name}
          name={getStatDisplayName(stat.stat.name)}
          value={stat.base_stat}
          color={statColor}
        />
      ))}
    </div>
  );
}
