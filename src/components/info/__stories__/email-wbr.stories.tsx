import { Meta, StoryObj } from '@storybook/react';

import { EmailWbr } from '@components/info';

const meta = {
  component: EmailWbr,
  title: 'Info/EmailWbr',
  tags: ['autodocs'],
} satisfies Meta<typeof EmailWbr>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmailWordBreakDefault: Story = {
  render: ({ ...args }) => {
    return <EmailWbr {...args} />;
  },
  args: {
    email: 'test+longlonglonglonglong@magic.link',
  },
};
