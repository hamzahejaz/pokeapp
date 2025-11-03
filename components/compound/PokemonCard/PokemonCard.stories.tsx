import type { Meta, StoryObj } from '@storybook/react';
import { PokemonCard } from './PokemonCard';
import { Pokemon } from '@/types';

const meta: Meta<typeof PokemonCard> = {
  title: 'Compound/PokemonCard',
  component: PokemonCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PokemonCard>;

const mockPikachu: Pokemon = {
  id: 25,
  name: 'pikachu',
  height: 4,
  weight: 60,
  base_experience: 112,
  sprites: {
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    front_shiny: '',
    back_default: '',
    back_shiny: '',
    other: {
      'official-artwork': {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        front_shiny: '',
      },
      dream_world: {
        front_default: '',
      },
      home: {
        front_default: '',
        front_shiny: '',
      },
    },
  },
  types: [{ slot: 1, type: { name: 'electric', url: '' } }],
  stats: [],
  abilities: [],
  species: { name: 'pikachu', url: '' },
};

const mockBulbasaur: Pokemon = {
  ...mockPikachu,
  id: 1,
  name: 'bulbasaur',
  sprites: {
    ...mockPikachu.sprites,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    other: {
      'official-artwork': {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        front_shiny: '',
      },
      dream_world: { front_default: '' },
      home: { front_default: '', front_shiny: '' },
    },
  },
};

export const Pikachu: Story = {
  args: {
    pokemon: mockPikachu,
    backgroundColor: '#F8D030',
  },
};

export const Bulbasaur: Story = {
  args: {
    pokemon: mockBulbasaur,
    backgroundColor: '#78C850',
  },
};

export const Default: Story = {
  args: {
    pokemon: mockPikachu,
  },
};
