import { Meta, StoryObj } from '@storybook/react';

import { SecurityOtp } from '@components/info';
import { token } from '@styled/tokens';

const meta = {
  component: SecurityOtp,
  title: 'Info/SecurityOtp',
  tags: ['autodocs'],
} satisfies Meta<typeof SecurityOtp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SecurityOtpDefault: Story = {
  render: ({ ...args }) => {
    return <SecurityOtp {...args} />;
  },
  args: {
    onCopy: () => console.log('Copied'),
    otp: '123',
    color: token('colors.brand.base'),
  },
};
