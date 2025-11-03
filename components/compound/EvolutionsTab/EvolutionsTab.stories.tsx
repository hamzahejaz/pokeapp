import type { Meta, StoryObj } from '@storybook/react';
import { EvolutionsTab } from './EvolutionsTab';
import { useEvolutions } from '@/hooks/useEvolutions';

const meta: Meta<typeof EvolutionsTab> = {
  title: 'Compound/EvolutionsTab',
  component: EvolutionsTab,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EvolutionsTab>;

export const Loading: Story = {
  args: {
    evolutionChainUrl: 'https://pokeapi.co/api/v2/evolution-chain/1/',
  },
  parameters: {
    mockData: [
      {
        url: 'https://pokeapi.co/api/v2/evolution-chain/1/',
        method: 'GET',
        status: 200,
        response: {},
      },
    ],
  },
};

export const ThreeStage: Story = {
  args: {
    evolutionChainUrl: 'https://pokeapi.co/api/v2/evolution-chain/1/',
    arrowColor: '#78C850',
  },
};

export const TwoStage: Story = {
  args: {
    evolutionChainUrl: 'https://pokeapi.co/api/v2/evolution-chain/10/',
    arrowColor: '#F8D030',
  },
};

export const Error: Story = {
  args: {
    evolutionChainUrl: 'invalid-url',
  },
};
