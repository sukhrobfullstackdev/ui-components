import { LoadingSpinner } from '@components/feedback/loading-spinner';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: LoadingSpinner,
  title: 'Feedback/LoadingSpinner',
  tags: ['autodocs'],
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorSpinner: Story = {
  args: {},
};

export const NeutralSpinner: Story = {
  args: {
    neutral: true,
  },
};
