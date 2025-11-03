'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/common/Button/Button';
import { Input } from '@/components/common/Input/Input';
import { getRandomPokemonId } from '@/lib/pokeapi';

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (query.trim()) {
      setLoading(true);
      router.push(`/pokemon/${query.toLowerCase()}`);
    }
  };

  const handleRandom = () => {
    setLoading(true);
    const randomId = getRandomPokemonId();
    router.push(`/pokemon/${randomId}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 bg-red-500"></div>

      <div className="absolute inset-0 bg-white hidden md:block" style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}></div>

      <div
        className="absolute bg-gray-700 hidden md:block"
        style={{
          width: '141.42%',
          height: '80px',
          transform: 'rotate(30deg)',
          transformOrigin: 'top left',
          top: '0',
          left: '0',
        }}
      ></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[800px] md:h-[800px] z-10">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
          alt="Pikachu"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="relative z-20 bg-white rounded-2xl shadow-2xl border border-gray-400 p-8 w-96">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-linear-to-b from-red-500 to-white border-4 border-gray-800 flex items-center justify-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-red-500"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white"></div>
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-800 transform -translate-y-1/2 z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border-2 border-gray-800 z-20"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-gray-400 z-30"></div>
          </div>
        </div>

        <label className="block text-center text-gray-700 text-sm font-semibold mb-6">
          Pokemon Name or ID
        </label>

        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter pokemon..."
          disabled={loading}
          className="mb-6"
        />

        <div className="flex gap-4">
          <Button
            onClick={handleSearch}
            disabled={loading || !query.trim()}
            variant="red"
            className="flex-1"
          >
            Search
          </Button>
          <Button
            onClick={handleRandom}
            disabled={loading}
            variant="red"
            className="flex-1"
          >
            Random
          </Button>
        </div>
      </div>
    </main>
  );
}