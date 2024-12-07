import { IconProfileLight } from '@components/logos';
import { ClientAssetLogo } from '@components/utils';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: ClientAssetLogo,
  title: 'Utils/ClientAssetLogo',
  tags: ['autodocs'],
} satisfies Meta<typeof ClientAssetLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClientAssetLogoDefault: Story = {
  render: args => {
    return <ClientAssetLogo {...args} />;
  },
  args: {
    assetUri: 'https://assets.fortmatic.com/MagicLogos/blank.png',
  },
};

export const ClientAssetLogoWithPlaceholder: Story = {
  render: args => {
    return (
      <ClientAssetLogo {...args}>
        <ClientAssetLogo.PlaceholderIcon>
          <IconProfileLight />
        </ClientAssetLogo.PlaceholderIcon>
      </ClientAssetLogo>
    );
  },
  args: {
    assetUri: null,
  },
};
