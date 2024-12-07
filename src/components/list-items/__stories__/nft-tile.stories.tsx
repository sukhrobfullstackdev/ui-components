import { Meta, StoryObj } from '@storybook/react';

import { withContainer } from '@components/__stories__/decorators';
import { NFTTile } from '@components/list-items';
import { Grid } from '@styled/jsx';
//@ts-expect-error typescript does not recognize direct SVG import
import sampleAssetSrc from '/.storybook/assets/magic-sample-nft.jpeg';

const meta: Meta<typeof NFTTile> = {
  component: NFTTile,
  title: 'List Items/NFTTile',
  tags: ['autodocs'],
  decorators: [withContainer],
  argTypes: {
    onPress: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NFTTileDefault: Story = {
  render: ({ ...args }) => {
    return <NFTTile {...args} />;
  },
  args: {
    src: sampleAssetSrc,
    alt: 'Magic Sample NFT',
  },
};

export const ClickableNFTTile: Story = {
  render: ({ ...args }) => {
    return <NFTTile {...args} />;
  },
  args: {
    ...NFTTileDefault.args,
    onPress: () => console.log('Clicked!'),
  },
};

export const NFTTileLayout: Story = {
  render: ({ ...args }) => {
    return (
      <Grid gridTemplateColumns={2} gap={4}>
        <NFTTile {...args} />
        <NFTTile {...args} />
        <NFTTile {...args} />
        <NFTTile {...args} />
      </Grid>
    );
  },
  args: {
    ...ClickableNFTTile.args,
  },
};
