import { Meta, StoryObj } from '@storybook/react';

import { CopyButton } from '@components/info';
import { token } from '@styled/tokens';

const meta = {
  component: CopyButton,
  title: 'Info/CopyButton',
  tags: ['autodocs'],
} satisfies Meta<typeof CopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CopyButtonDefault: Story = {
  render: ({ ...args }) => {
    return <CopyButton {...args} />;
  },
  args: {
    value: '123',
    showText: true,
    color: token('colors.brand.base'),
    onCopy: () => console.log('Copied!'),
  },
};
