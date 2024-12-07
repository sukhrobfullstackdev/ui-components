import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from '@components/containers/footer';
import { Header } from '@components/containers/header';
import { Menu } from '@components/containers/menu';
import { Modal } from '@components/containers/modal';
import { IcoDismiss, IcoMagic } from '@components/icons';
import { Button } from '@components/primitives';
import Text from '@components/primitives/text';
import { HStack } from '@styled/jsx';
import { token } from '@styled/tokens';

const meta: Meta<typeof Menu> = {
  component: Menu,
  title: 'Containers/Menu',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SideMenu: Story = {
  render: args => {
    return (
      <Modal fullscreen>
        <Header position="relative">
          <Header.RightAction>
            <Button variant="neutral" size="sm">
              <Button.LeadingIcon>
                <IcoDismiss />
              </Button.LeadingIcon>
            </Button>
          </Header.RightAction>
          <Header.Content>
            <Text.H3>Header</Text.H3>
          </Header.Content>
        </Header>
        <Menu {...args}>
          <Menu.Header>
            <Text>Header Content</Text>
          </Menu.Header>
          <Menu.Content>
            <Text>Body Content</Text>
          </Menu.Content>
          <Menu.Footer>
            <HStack justify="space-between">
              <Text>Footer Content</Text>
              <IcoMagic color={token('colors.neutral.primary')} />
            </HStack>
          </Menu.Footer>
        </Menu>
        <Footer />
      </Modal>
    );
  },
};
