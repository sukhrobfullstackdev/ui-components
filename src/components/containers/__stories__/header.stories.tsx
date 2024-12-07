import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '@components/containers/header';
import { IcoAdd, IcoDismiss } from '@components/icons';
import Text from '@components/primitives/text';

const meta = {
  component: Header,
  title: 'Containers/Header',
  tags: ['autodocs'],
  argTypes: {
    position: {
      options: ['absolute', 'relative'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderWithText: Story = {
  render: ({ ...args }) => {
    return (
      <Header {...args}>
        <Header.Content>
          <Text.H3>Header Text</Text.H3>
        </Header.Content>
      </Header>
    );
  },
  args: {
    position: 'relative',
  },
};

export const HeaderWithIcons: Story = {
  render: ({ ...args }) => {
    return (
      <Header {...args}>
        <Header.RightAction>
          <IcoDismiss />
        </Header.RightAction>
        <Header.LeftAction>
          <IcoAdd />
        </Header.LeftAction>
        <Header.Content>
          <Text.H3>Header Text</Text.H3>
        </Header.Content>
      </Header>
    );
  },
  args: {
    position: 'relative',
  },
};
