import type { Meta, StoryObj } from '@storybook/react';

import QRCode from '@components/utils/qr-code';
import { token } from '@styled/tokens';

const meta = {
  component: QRCode,
  title: 'Utils/QRCode',
  tags: ['autodocs'],
} satisfies Meta<typeof QRCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const QRCodeMFA: Story = {
  render: ({ ...args }) => {
    return <QRCode {...args} />;
  },
  args: {
    value: 'otpauth://totp/Magic%20Demo%20-%20Auth?secret=ACNX7WPI4TUUPTF5',
  },
  argTypes: {},
};

export const QRCodeWalletAddress: Story = {
  render: ({ ...args }) => {
    return <QRCode {...args} />;
  },
  args: {
    value: '0x84F153B6bc93151d49aa9922bb0BDaAAAAB670e9',
    ecLevel: 'M',
    qrStyle: 'dots',
    eyeRadius: 0,
    eyeColor: token('colors.ink.90'),
    size: 160,
    logoImage: '',
    logoHeight: 32,
    logoWidth: 32,
    logoOpacity: 1,
    logoPadding: 0,
    logoPaddingStyle: 'square',
    logoOnLoad: undefined,
    removeQrCodeBehindLogo: false,
    enableCORS: false,
    quietZone: 5,
    bgColor: token('colors.chalk'),
    fgColor: token('colors.ink.90'),
  },
  argTypes: {},
};
