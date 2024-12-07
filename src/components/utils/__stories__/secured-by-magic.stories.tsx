import { Meta, StoryObj } from '@storybook/react';

import { SecuredByMagic } from '@components/utils';

const meta = {
  component: SecuredByMagic,
  title: 'Utils/SecuredByMagic',
  tags: ['autodocs'],
} satisfies Meta<typeof SecuredByMagic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SecuredByMagicDefault: Story = {
  render: ({ ...args }) => {
    return <SecuredByMagic {...args} />;
  },
  args: {
    enableLink: true,
  },
};
