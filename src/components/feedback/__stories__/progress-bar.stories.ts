import { withContainer } from '@components/__stories__/decorators';
import { ProgressBar } from '@components/feedback/progress-bar';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: ProgressBar,
  title: 'Feedback/ProgressBar',
  tags: ['autodocs'],
  decorators: [withContainer],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AutoProgressBar: Story = {
  args: {
    autoTarget: 'min',
    current: 50,
    strokeWidth: 8,
    total: 100,
    variant: 'auto',
  },
};
