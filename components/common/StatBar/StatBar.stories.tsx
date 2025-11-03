import type { Meta, StoryObj } from '@storybook/react';
import { StatBar } from './StatBar';

const meta: Meta<typeof StatBar> = {
  title: 'Common/StatBar',
  component: StatBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StatBar>;

export const HP: Story = {
  args: {
    name: 'HP',
    value: 45,
  },
};

export const Attack: Story = {
  args: {
    name: 'ATK',
    value: 49,
  },
};

export const Defense: Story = {
  args: {
    name: 'DEF',
    value: 65,
  },
};

export const SpecialAttack: Story = {
  args: {
    name: 'SATK',
    value: 120,
  },
};

export const HighValue: Story = {
  args: {
    name: 'ATK',
    value: 200,
  },
};

export const LowValue: Story = {
  args: {
    name: 'SPD',
    value: 10,
  },
};

export const MaxValue: Story = {
  args: {
    name: 'DEF',
    value: 255,
  },
};

export const PikachuStats: Story = {
  render: () => (
    <div className="w-96">
      <StatBar name="HP" value={35} />
      <StatBar name="ATK" value={55} />
      <StatBar name="DEF" value={40} />
      <StatBar name="SATK" value={50} />
      <StatBar name="SDEF" value={50} />
      <StatBar name="SPD" value={90} />
    </div>
  ),
};
