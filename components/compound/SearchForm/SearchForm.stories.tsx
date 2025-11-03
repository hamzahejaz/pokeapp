import type { Meta, StoryObj } from '@storybook/react';
import { SearchForm } from './SearchForm';

const meta: Meta<typeof SearchForm> = {
  title: 'Compound/SearchForm',
  component: SearchForm,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchForm>;

export const Default: Story = {
  args: {
    onSearch: (query: string) => console.log('Search:', query),
    onRandom: () => console.log('Random clicked'),
  },
};

export const Loading: Story = {
  args: {
    onSearch: (query: string) => console.log('Search:', query),
    onRandom: () => console.log('Random clicked'),
    loading: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const handleSearch = (query: string) => {
      alert(`Searching for: ${query}`);
    };

    const handleRandom = () => {
      alert('Getting random Pokemon');
    };

    return <SearchForm onSearch={handleSearch} onRandom={handleRandom} />;
  },
};
