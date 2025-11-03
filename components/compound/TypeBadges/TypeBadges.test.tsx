import { render, screen } from '@testing-library/react';
import { TypeBadges } from './TypeBadges';
import { PokemonType } from '@/types';

describe('TypeBadges', () => {
  it('renders single type', () => {
    const types: PokemonType[] = [
      { slot: 1, type: { name: 'electric', url: '' } },
    ];

    render(<TypeBadges types={types} />);
    expect(screen.getByText(/electric/i)).toBeInTheDocument();
  });

  it('renders multiple types', () => {
    const types: PokemonType[] = [
      { slot: 1, type: { name: 'grass', url: '' } },
      { slot: 2, type: { name: 'poison', url: '' } },
    ];

    render(<TypeBadges types={types} />);
    expect(screen.getByText(/grass/i)).toBeInTheDocument();
    expect(screen.getByText(/poison/i)).toBeInTheDocument();
  });

  it('renders no badges when types array is empty', () => {
    const { container } = render(<TypeBadges types={[]} />);
    const badges = container.querySelectorAll('span');
    expect(badges.length).toBe(0);
  });

  it('applies correct colors to types', () => {
    const types: PokemonType[] = [
      { slot: 1, type: { name: 'fire', url: '' } },
    ];

    const { container } = render(<TypeBadges types={types} />);
    const badge = container.querySelector('span');
    expect(badge).toHaveStyle({ backgroundColor: '#F08030' });
  });
});
