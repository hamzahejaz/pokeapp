import type { Meta, StoryObj } from '@storybook/react';
import { StatsTab } from './StatsTab';
import { PokemonStat } from '@/types';

const meta: Meta<typeof StatsTab> = {
  title: 'Compound/StatsTab',
  component: StatsTab,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatsTab>;

const pikachuStats: PokemonStat[] = [
  { base_stat: 35, effort: 0, stat: { name: 'hp', url: '' } },
  { base_stat: 55, effort: 0, stat: { name: 'attack', url: '' } },
  { base_stat: 40, effort: 0, stat: { name: 'defense', url: '' } },
  { base_stat: 50, effort: 0, stat: { name: 'special-attack', url: '' } },
  { base_stat: 50, effort: 0, stat: { name: 'special-defense', url: '' } },
  { base_stat: 90, effort: 0, stat: { name: 'speed', url: '' } },
];

const bulbasaurStats: PokemonStat[] = [
  { base_stat: 45, effort: 0, stat: { name: 'hp', url: '' } },
  { base_stat: 49, effort: 0, stat: { name: 'attack', url: '' } },
  { base_stat: 49, effort: 0, stat: { name: 'defense', url: '' } },
  { base_stat: 65, effort: 0, stat: { name: 'special-attack', url: '' } },
  { base_stat: 65, effort: 0, stat: { name: 'special-defense', url: '' } },
  { base_stat: 45, effort: 0, stat: { name: 'speed', url: '' } },
];

const mewtwoStats: PokemonStat[] = [
  { base_stat: 106, effort: 0, stat: { name: 'hp', url: '' } },
  { base_stat: 110, effort: 0, stat: { name: 'attack', url: '' } },
  { base_stat: 90, effort: 0, stat: { name: 'defense', url: '' } },
  { base_stat: 154, effort: 0, stat: { name: 'special-attack', url: '' } },
  { base_stat: 90, effort: 0, stat: { name: 'special-defense', url: '' } },
  { base_stat: 130, effort: 0, stat: { name: 'speed', url: '' } },
];

export const Pikachu: Story = {
  args: {
    stats: pikachuStats,
  },
};

export const Bulbasaur: Story = {
  args: {
    stats: bulbasaurStats,
  },
};

export const Mewtwo: Story = {
  args: {
    stats: mewtwoStats,
  },
};
