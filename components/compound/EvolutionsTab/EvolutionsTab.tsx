import React, { useState } from 'react';
import { useEvolutions } from '@/hooks/useEvolutions';
import { Spinner } from '@/components/common/Spinner/Spinner';
import { formatPokemonName } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export interface EvolutionsTabProps {
  evolutionChainUrl: string;
  arrowColor?: string;
}

function EvolutionImage({ src, alt, index }: { src: string; alt: string; index: number }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-2">
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200 rounded-lg animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="eager"
        priority={index < 2}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
}

export function EvolutionsTab({ evolutionChainUrl, arrowColor = '#78C850' }: EvolutionsTabProps) {
  const { evolutions, loading, error } = useEvolutions(evolutionChainUrl);

  if (loading) {
    return (
      <div className="flex justify-center pt-8 px-4">
        <Spinner size="lg" color={arrowColor} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center pt-8 px-4 text-red-600">
        Failed to load evolutions
      </div>
    );
  }

  if (evolutions.length === 0) {
    return (
      <div className="text-center pt-8 px-4 text-gray-600">
        No evolution data available
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8 px-4">
      {evolutions.map((evolution, index) => (
        <React.Fragment key={`${evolution.id}-${index}`}>
          <Link
            href={`/pokemon/${evolution.id}`}
            className="flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            {evolution.image && (
              <EvolutionImage src={evolution.image} alt={evolution.name} index={index} />
            )}
            <p className="font-semibold capitalize text-base sm:text-lg text-black">
              {formatPokemonName(evolution.name)}
            </p>
          </Link>
          {index < evolutions.length - 1 && (
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:rotate-0 rotate-90"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke={arrowColor}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
