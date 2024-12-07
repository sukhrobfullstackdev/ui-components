import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from '@components/containers/footer';
import Text from '@components/primitives/text';

const meta = {
  component: Footer,
  title: 'Containers/Footer',
  tags: ['autodocs'],
  argTypes: {
    onLinkClick: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicFooter: Story = {
  render: ({ ...args }) => {
    return (
      <Footer {...args}>
        <Text.H6>Footer content here.</Text.H6>
      </Footer>
    );
  },
  args: {
    enableLink: true,
    label: 'Secured by',
    showLogo: true,
  },
};
