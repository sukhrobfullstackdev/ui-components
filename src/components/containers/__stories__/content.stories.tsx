import type { Meta, StoryObj } from '@storybook/react';

import { Content } from '@components/containers/content';
import Text from '@components/primitives/text';

const meta = {
  component: Content,
  title: 'Containers/Content',
  tags: ['autodocs'],
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicContent: Story = {
  render: ({ ...args }) => {
    return (
      <Content {...args}>
        <Text.H6>Content content here.</Text.H6>
      </Content>
    );
  },
};
