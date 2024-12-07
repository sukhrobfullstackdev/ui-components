import { AnimatedSpinner } from '@components/feedback/animated-spinner';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: AnimatedSpinner,
  title: 'Feedback/AnimatedSpinner',
  tags: ['autodocs'],
  argTypes: {
    onShown: {
      table: {
        disable: true,
      },
    },
    onHidden: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof AnimatedSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnimatedSpinnerDefault: Story = {
  args: {
    isVisible: true,
    onShown: () => console.log('Shown'),
    onHidden: () => console.log('Hidden'),
  },
};
