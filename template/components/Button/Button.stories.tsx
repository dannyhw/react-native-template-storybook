import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';
import { MyButton } from './Button';

const meta = {
  component: MyButton,
  // On device, docgen reports optional props as `string | undefined`, which
  // the color matcher rejects, so declare the type and control explicitly.
  argTypes: {
    color: { control: 'color', type: 'string' },
    textColor: { control: 'color', type: 'string' },
  },
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Hello World',
    color: 'purple',
    onPress: fn(),
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    color: 'blue',
    onPress: fn(),
  },
};
