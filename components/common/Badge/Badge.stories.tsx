import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { POKEMON_TYPE_COLORS } from '@/lib/constants';

const meta: Meta<typeof Badge> = {
  title: 'Common/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Grass: Story = {
  args: {
    label: 'GRASS',
    color: POKEMON_TYPE_COLORS.grass,
  },
};

export const Fire: Story = {
  args: {
    label: 'FIRE',
    color: POKEMON_TYPE_COLORS.fire,
  },
};

export const Water: Story = {
  args: {
    label: 'WATER',
    color: POKEMON_TYPE_COLORS.water,
  },
};

export const Electric: Story = {
  args: {
    label: 'ELECTRIC',
    color: POKEMON_TYPE_COLORS.electric,
  },
};

export const Small: Story = {
  args: {
    label: 'SMALL',
    color: POKEMON_TYPE_COLORS.psychic,
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    label: 'MEDIUM',
    color: POKEMON_TYPE_COLORS.dragon,
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    label: 'LARGE',
    color: POKEMON_TYPE_COLORS.ghost,
    size: 'lg',
  },
};

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {Object.entries(POKEMON_TYPE_COLORS).map(([type, color]) => (
        <Badge key={type} label={type} color={color} />
      ))}
    </div>
  ),
};
