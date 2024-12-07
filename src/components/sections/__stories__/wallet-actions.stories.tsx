import { withContainer, withTestBg } from '@components/__stories__/decorators';
import { IcoFingerprint, IcoLockPassword, IcoSocial } from '@components/icons';
import { WalletActions, WalletActionsProps } from '@components/sections';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<WalletActionsProps & { disabledLabel?: string }> = {
  title: 'Sections/WalletActions',
  component: WalletActions,
  decorators: [withContainer, withTestBg],
  parameters: {
    width: 400,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WalletActionsDefault: Story = {
  render: ({ disabledLabel, ...args }) => (
    <WalletActions {...args}>
      <WalletActions.Action disabledLabel={disabledLabel} label="Foo" onPress={() => console.log('Foo')}>
        <IcoFingerprint />
      </WalletActions.Action>
      <WalletActions.Action disabledLabel={disabledLabel} label="Bar" onPress={() => console.log('Bar')}>
        <IcoLockPassword />
      </WalletActions.Action>
      <WalletActions.Action disabledLabel={disabledLabel} label="Baz" onPress={() => console.log('Baz')}>
        <IcoSocial />
      </WalletActions.Action>
    </WalletActions>
  ),
  args: {
    actionBox: false,
    disabledLabel: '',
  },
};
