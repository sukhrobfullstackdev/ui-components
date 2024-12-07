import Animate from '@components/utils/animate';
import { Meta, StoryObj } from '@storybook/react';
import { HStack } from '@styled/jsx';

const meta = {
  component: Animate,
  title: 'Utils/Animate',
  tags: ['autodocs'],
} satisfies Meta<typeof Animate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AnimateDefault: Story = {
  render: ({ ...args }) => {
    return (
      <HStack gap={8}>
        <HStack w={40} h={40} pos="relative">
          <Animate {...args}>
            <h1>{`Transition`}</h1>
          </Animate>
        </HStack>
      </HStack>
    );
  },
  argTypes: {
    type: {
      options: ['fade', 'slide', 'scale'],
      control: { type: 'select' },
    },
  },
};
