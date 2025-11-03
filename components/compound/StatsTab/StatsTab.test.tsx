import { render, screen } from '@testing-library/react';
import { StatsTab } from './StatsTab';
import { PokemonStat } from '@/types';

const mockStats: PokemonStat[] = [
  { base_stat: 35, effort: 0, stat: { name: 'hp', url: '' } },
  { base_stat: 55, effort: 0, stat: { name: 'attack', url: '' } },
  { base_stat: 40, effort: 0, stat: { name: 'defense', url: '' } },
  { base_stat: 50, effort: 0, stat: { name: 'special-attack', url: '' } },
  { base_stat: 50, effort: 0, stat: { name: 'special-defense', url: '' } },
  { base_stat: 90, effort: 0, stat: { name: 'speed', url: '' } },
];

describe('StatsTab', () => {
  it('renders all stats', () => {
    render(<StatsTab stats={mockStats} />);

    expect(screen.getByText('HP')).toBeInTheDocument();
    expect(screen.getByText('ATK')).toBeInTheDocument();
    expect(screen.getByText('DEF')).toBeInTheDocument();
    expect(screen.getByText('SATK')).toBeInTheDocument();
    expect(screen.getByText('SDEF')).toBeInTheDocument();
    expect(screen.getByText('SPD')).toBeInTheDocument();
  });

  it('displays correct stat values', () => {
    render(<StatsTab stats={mockStats} />);

    expect(screen.getByText('035')).toBeInTheDocument();
    expect(screen.getByText('055')).toBeInTheDocument();
    expect(screen.getByText('040')).toBeInTheDocument();
    expect(screen.getAllByText('050').length).toBe(2);
    expect(screen.getByText('090')).toBeInTheDocument();
  });

  it('renders stats in correct order', () => {
    const { container } = render(<StatsTab stats={mockStats} />);
    const statNames = Array.from(container.querySelectorAll('.font-bold.w-16')).map(
      (el) => el.textContent
    );

    expect(statNames).toEqual(['HP', 'ATK', 'DEF', 'SATK', 'SDEF', 'SPD']);
  });

  it('handles empty stats array', () => {
    const { container } = render(<StatsTab stats={[]} />);
    const statBars = container.querySelectorAll('.flex.items-center.gap-3');
    expect(statBars.length).toBe(0);
  });
});
