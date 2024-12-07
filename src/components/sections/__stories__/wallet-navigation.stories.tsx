import { withContainer, withTestBg } from '@components/__stories__/decorators';
import { WalletNavigation } from '@components/sections';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { WalletNavigationType } from '../wallet-navigation';

const meta: Meta<typeof WalletNavigation> = {
  title: 'Sections/WalletNavigation',
  component: WalletNavigation,
  decorators: [withContainer, withTestBg],
  parameters: {
    width: 400,
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
        labels: {
          false: 'All enabled',
          true: 'Disable some',
        },
      },
      options: [false, true],
      mapping: {
        false: [],
        true: [
          { type: WalletNavigationType.Activity, label: 'Coming soon' },
          { type: WalletNavigationType.Settings, label: 'Coming soon' },
        ],
      },
    },
    onActivity: {
      table: {
        disable: true,
      },
    },
    onGallery: {
      table: {
        disable: true,
      },
    },
    onHome: {
      table: {
        disable: true,
      },
    },
    onSettings: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WalletNavigationDefault: Story = {
  render: ({ active, disabled }) => {
    const [selectedNav, setSelectedNav] = useState(active);

    useEffect(() => {
      setSelectedNav(active);
    }, [active]);

    return (
      <WalletNavigation
        active={selectedNav}
        disabled={disabled}
        onActivity={() => setSelectedNav(WalletNavigationType.Activity)}
        onGallery={() => setSelectedNav(WalletNavigationType.Gallery)}
        onHome={() => setSelectedNav(WalletNavigationType.Home)}
        onSettings={() => setSelectedNav(WalletNavigationType.Settings)}
      />
    );
  },
  args: {
    active: WalletNavigationType.Home,
  },
};
