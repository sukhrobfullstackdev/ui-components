import { AnimatedDismiss } from '@components/feedback/animated-dismiss';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: AnimatedDismiss,
  title: 'Feedback/AnimatedDismiss',
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
} satisfies Meta<typeof AnimatedDismiss>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnimatedDismissDefault: Story = {
  args: {
    isVisible: true,
    onShown: () => console.log('Shown'),
    onHidden: () => console.log('Hidden'),
  },
};
