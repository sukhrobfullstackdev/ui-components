import { SharedLogo } from '@components/utils';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: SharedLogo,
  title: 'Utils/SharedLogo',
  tags: ['autodocs'],
} satisfies Meta<typeof SharedLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SharedLogoDefault: Story = {
  render: ({ ...args }) => {
    return <SharedLogo {...args} />;
  },
  args: {
    assetUri: 'https://assets.fortmatic.com/MagicLogos/blank.png',
  },
};
