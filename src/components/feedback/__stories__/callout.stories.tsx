import { Callout, CalloutProps } from '@components/feedback';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Callout> = {
  component: Callout,
  title: 'Feedback/Callout',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CalloutProps>;

const defaultArgs = {
  icon: false,
  size: 'md' as const,
  variant: 'branded' as const,
};

export const CalloutDefault: Story = {
  args: {
    ...defaultArgs,
    dismissible: false,
    label: "I'm a callout!",
  },
};

export const CalloutWithOnPress: Story = {
  args: {
    ...defaultArgs,
    label: "I'm a pressable callout!",
    onPress: () => console.log('Callout pressed!'),
  },
};
