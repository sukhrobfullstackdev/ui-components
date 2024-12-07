import { Skeleton } from '@components/feedback/skeleton';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Skeleton,
  title: 'Feedback/Skeleton',
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SkeletonDefault: Story = {
  args: {},
};
