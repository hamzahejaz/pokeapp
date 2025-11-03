import type { Meta, StoryObj } from '@storybook/react';
import { BackButton } from './BackButton';

const meta: Meta<typeof BackButton> = {
  title: 'Common/BackButton',
  component: BackButton,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-red-500 p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BackButton>;

export const Default: Story = {
  args: {},
};

export const WithCustomHref: Story = {
  args: {
    href: '/pokemon/25',
  },
};

export const WithOnClick: Story = {
  args: {
    onClick: () => alert('Back button clicked!'),
  },
};
