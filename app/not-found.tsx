import Image from 'next/image';
import { BackButton } from '@/components/common/BackButton/BackButton';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FF5252]">
      <div className="pt-8 px-6 pb-6">
        <BackButton />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-8">No Pokemon Found!</h1>
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-64">
              <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png"
                alt="Psyduck"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <p className="text-xl text-white mt-4">
            The Pokemon you are looking for does not exist
          </p>
        </div>
      </div>
    </div>
  );
}
