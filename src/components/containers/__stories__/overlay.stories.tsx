import type { Meta, StoryObj } from '@storybook/react';

import { withTestBg } from '@components/__stories__/decorators';
import { Overlay } from '@components/containers/overlay';

const meta: Meta<typeof Overlay> = {
  component: Overlay,
  title: 'Containers/Overlay',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    onAnimated: {
      table: {
        disable: true,
      },
    },
    onHidden: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withTestBg],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicOverlay: Story = {
  render: ({ ...args }) => {
    return <Overlay {...args} />;
  },
  args: {
    animate: true,
    backgroundType: 'blurred',
    hide: false,
    onAnimated: () => console.log('Animated'),
    onHidden: () => console.log('Hidden'),
  },
  argTypes: {},
};
