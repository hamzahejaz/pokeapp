'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Pokemon, PokemonSpecies } from '@/types';
import { TypeBadges } from '@/components/compound/TypeBadges/TypeBadges';
import { Tabs } from '@/components/common/Tabs/Tabs';
import { StatsTab } from '@/components/compound/StatsTab/StatsTab';
import { BackButton } from '@/components/common/BackButton/BackButton';
import { Spinner } from '@/components/common/Spinner/Spinner';
import { getTypeColor } from '@/lib/utils';

const EvolutionsTab = dynamic(() => import('@/components/compound/EvolutionsTab/EvolutionsTab').then(mod => ({ default: mod.EvolutionsTab })), {
  loading: () => <div className="flex justify-center py-8"><Spinner /></div>,
});

export interface PokemonDetailProps {
  pokemon: Pokemon;
  species: PokemonSpecies;
  description: string;
}

const tabs = [
  { id: 'stats', label: 'Stats' },
  { id: 'evolutions', label: 'Evolutions' },
];

export function PokemonDetail({ pokemon, species, description }: PokemonDetailProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('stats');
  const [imageLoaded, setImageLoaded] = useState(false);

  const backgroundColor = getTypeColor(pokemon.types[0]?.type.name || 'normal');
  const imageUrl = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor }}>
      <div className="pt-8 px-6 pb-6">
        <BackButton onClick={() => router.push('/')} />
      </div>

      <div className="flex-1 px-4 flex flex-col">
        <div className="flex-1 max-w-6xl w-full mx-auto bg-white rounded-t-3xl shadow-xl p-8 pt-24 relative">
          {imageUrl && (
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-52 h-52 z-0">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 rounded-full animate-pulse" />
              )}
              <Image
                src={imageUrl}
                alt={pokemon.name}
                fill
                className={`object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                priority
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          )}

          <h1 className="text-4xl font-bold capitalize text-center mb-6 mt-10 text-gray-800 relative z-10">
            {pokemon.name}
          </h1>

          <div className="flex justify-center gap-3 mb-6 relative z-10">
            <TypeBadges types={pokemon.types} />
          </div>

          <p className="text-center text-gray-600 text-base mb-8 leading-relaxed px-4 relative z-10">
            {description}
          </p>

          <div className="relative z-10">
            <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}>
              {activeTab === 'stats' && <StatsTab stats={pokemon.stats} statColor={backgroundColor} />}
              {activeTab === 'evolutions' && species.evolution_chain && (
                <EvolutionsTab
                  evolutionChainUrl={species.evolution_chain.url}
                  arrowColor={backgroundColor}
                />
              )}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
