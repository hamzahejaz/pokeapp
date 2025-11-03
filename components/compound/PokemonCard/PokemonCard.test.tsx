import { render, screen } from '@testing-library/react';
import { PokemonCard } from './PokemonCard';
import { Pokemon } from '@/types';

const mockPokemon: Pokemon = {
  id: 25,
  name: 'pikachu',
  height: 4,
  weight: 60,
  base_experience: 112,
  sprites: {
    front_default: 'https://example.com/pikachu.png',
    front_shiny: '',
    back_default: '',
    back_shiny: '',
    other: {
      'official-artwork': {
        front_default: 'https://example.com/pikachu-official.png',
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
  types: [],
  stats: [],
  abilities: [],
  species: {
    name: 'pikachu',
    url: '',
  },
};

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe('PokemonCard', () => {
  it('renders pokemon name', () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
  });

  it('renders pokemon image', () => {
    render(<PokemonCard pokemon={mockPokemon} />);
    const image = screen.getByAltText('pikachu');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/pikachu-official.png');
  });

  it('applies background color', () => {
    const { container } = render(
      <PokemonCard pokemon={mockPokemon} backgroundColor="#F8D030" />
    );
    const card = container.querySelector('div[style*="background-color"]');
    expect(card).toHaveStyle({ backgroundColor: 'rgb(248, 208, 48)' });
  });

  it('formats pokemon name correctly', () => {
    const pokemonWithHyphen = {
      ...mockPokemon,
      name: 'mr-mime',
    };
    render(<PokemonCard pokemon={pokemonWithHyphen} />);
    expect(screen.getByText('Mr Mime')).toBeInTheDocument();
  });
});
