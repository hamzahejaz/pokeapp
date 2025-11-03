import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Common/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a card',
  },
};

export const WithBackgroundColor: Story = {
  args: {
    children: 'Card with green background',
    backgroundColor: '#78C850',
  },
};

export const WithComplexContent: Story = {
  args: {
    children: (
      <div>
        <h2 className="text-xl font-bold mb-2">Pikachu</h2>
        <p className="text-gray-600">Electric type Pokemon</p>
      </div>
    ),
  },
};

export const MultipleColors: Story = {
  render: () => (
    <div className="space-y-4">
      <Card backgroundColor="#F08030">Fire type</Card>
      <Card backgroundColor="#6890F0">Water type</Card>
      <Card backgroundColor="#78C850">Grass type</Card>
    </div>
  ),
};
