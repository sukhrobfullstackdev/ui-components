import { Meta, StoryObj } from '@storybook/react';

import { withContainer } from '@components/__stories__/decorators';
import { TextBox } from '@components/info';

const meta = {
  component: TextBox,
  title: 'Info/TextBox',
  tags: ['autodocs'],
  argTypes: {
    onCopy: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withContainer],
  parameters: {
    width: 336,
  },
} satisfies Meta<typeof TextBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextBoxDefault: Story = {
  render: ({ ...args }) => {
    return <TextBox {...args} />;
  },
  args: {
    content: 'This is a text box',
  },
};

export const TextBoxWithCopyButtonDefault: Story = {
  render: ({ ...args }) => {
    return <TextBox {...args} />;
  },
  args: {
    content: 'pk_live_1FA6193FF62550A1',
    onCopy: key => console.log(`Copied: ${key}`),
  },
};
