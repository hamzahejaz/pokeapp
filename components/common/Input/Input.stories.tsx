import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Common/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['text', 'number', 'email', 'password'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Pikachu',
    placeholder: 'Pokemon name',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const NumberType: Story = {
  args: {
    type: 'number',
    placeholder: 'Pokemon ID',
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Search Pokemon by name or ID',
  },
};
