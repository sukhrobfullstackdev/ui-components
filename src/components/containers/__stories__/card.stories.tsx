import type { Meta, StoryObj } from '@storybook/react';

import { withContainer, withTestBg } from '@components/__stories__/decorators';
import { Card } from '@components/containers/card';
import { IcoRocketFill } from '@components/icons';
import Text from '@components/primitives/text';

const meta = {
  component: Card,
  title: 'Containers/Card',
  decorators: [withContainer, withTestBg],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicCard: Story = {
  render: ({ ...args }) => {
    return (
      <Card {...args}>
        <Text.H2>Card</Text.H2>
        <Text.H6>Card content here.</Text.H6>
      </Card>
    );
  },
};

export const ButtonCard: Story = {
  render: ({ ...args }) => {
    return (
      <Card {...args}>
        <IcoRocketFill />
        <Text.H6>Card button</Text.H6>
      </Card>
    );
  },
  args: {
    asButton: true,
    onClick: () => console.log('Button card clicked'),
  },
  argTypes: {
    asButton: {
      table: {
        disable: true,
      },
    },
    expand: {
      table: {
        disable: true,
      },
    },
    paddingType: {
      table: {
        disable: true,
      },
    },
    stack: {
      table: {
        disable: true,
      },
    },
  },
};
