import { AnimatedCheckmark } from '@components/feedback/animated-checkmark';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: AnimatedCheckmark,
  title: 'Feedback/AnimatedCheckmark',
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
} satisfies Meta<typeof AnimatedCheckmark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnimatedCheckmarkDefault: Story = {
  args: {
    isVisible: true,
    onShown: () => console.log('Shown'),
    onHidden: () => console.log('Hidden'),
  },
};
