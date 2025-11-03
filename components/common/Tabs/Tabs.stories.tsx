import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Common/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const tabs = [
  { id: 'stats', label: 'STATS' },
  { id: 'evolutions', label: 'EVOLUTIONS' },
  { id: 'moves', label: 'MOVES' },
];

export const Default: Story = {
  args: {
    tabs,
    activeTab: 'stats',
    onTabChange: () => {},
    children: <div>Tab content goes here</div>,
  },
};

export const WithStatsActive: Story = {
  args: {
    tabs,
    activeTab: 'stats',
    onTabChange: () => {},
    children: <div>Stats content</div>,
  },
};

export const WithEvolutionsActive: Story = {
  args: {
    tabs,
    activeTab: 'evolutions',
    onTabChange: () => {},
    children: <div>Evolutions content</div>,
  },
};

export const Interactive: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('stats');

    return (
      <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}>
        {activeTab === 'stats' && <div>Stats tab content</div>}
        {activeTab === 'evolutions' && <div>Evolutions tab content</div>}
        {activeTab === 'moves' && <div>Moves tab content</div>}
      </Tabs>
    );
  },
};
