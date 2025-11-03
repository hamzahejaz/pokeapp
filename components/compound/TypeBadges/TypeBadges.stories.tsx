import type { Meta, StoryObj } from '@storybook/react';
import { TypeBadges } from './TypeBadges';
import { PokemonType } from '@/types';

const meta: Meta<typeof TypeBadges> = {
  title: 'Compound/TypeBadges',
  component: TypeBadges,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TypeBadges>;

const electricType: PokemonType[] = [
  { slot: 1, type: { name: 'electric', url: '' } },
];

const grassPoisonTypes: PokemonType[] = [
  { slot: 1, type: { name: 'grass', url: '' } },
  { slot: 2, type: { name: 'poison', url: '' } },
];

const waterTypes: PokemonType[] = [
  { slot: 1, type: { name: 'water', url: '' } },
];

const fireTypes: PokemonType[] = [
  { slot: 1, type: { name: 'fire', url: '' } },
];

export const SingleType: Story = {
  args: {
    types: electricType,
  },
};

export const DualType: Story = {
  args: {
    types: grassPoisonTypes,
  },
};

export const Water: Story = {
  args: {
    types: waterTypes,
  },
};

export const Fire: Story = {
  args: {
    types: fireTypes,
  },
};

export const AllTypes: Story = {
  render: () => {
    const allTypes: PokemonType[] = [
      { slot: 1, type: { name: 'normal', url: '' } },
      { slot: 2, type: { name: 'fire', url: '' } },
      { slot: 3, type: { name: 'water', url: '' } },
      { slot: 4, type: { name: 'electric', url: '' } },
      { slot: 5, type: { name: 'grass', url: '' } },
      { slot: 6, type: { name: 'ice', url: '' } },
      { slot: 7, type: { name: 'fighting', url: '' } },
      { slot: 8, type: { name: 'poison', url: '' } },
    ];

    return <TypeBadges types={allTypes} />;
  },
};
