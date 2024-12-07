import type { Meta, StoryObj } from '@storybook/react';

import { withContainer } from '@components/__stories__/decorators';
import { IcoCaretRight } from '@components/icons';
import { NavigationButton } from '@components/list-items';
import { LogoPayPal } from '@components/logos';

const meta: Meta<typeof NavigationButton> = {
  title: 'List Items/NavigationButton',
  component: NavigationButton,
  tags: ['autodocs'],
  decorators: [withContainer],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationButtonDefault: Story = {
  render: args => (
    <NavigationButton {...args}>
      <NavigationButton.TrailingIcon>
        <IcoCaretRight />
      </NavigationButton.TrailingIcon>
    </NavigationButton>
  ),
  args: {
    primaryLabel: 'Wallet secret phrase',
    onPress: () => console.log('Button clicked'),
  },
};

export const PaymentMethodButton: Story = {
  render: args => (
    <NavigationButton {...args}>
      <NavigationButton.LeadingIcon>
        <LogoPayPal />
      </NavigationButton.LeadingIcon>
      <NavigationButton.TrailingIcon>
        <IcoCaretRight />
      </NavigationButton.TrailingIcon>
    </NavigationButton>
  ),
  args: {
    ...NavigationButtonDefault.args,
    primaryLabel: 'PayPal',
    secondaryLabel: 'ETH only',
    onPress: () => console.log('Button clicked'),
  },
};
