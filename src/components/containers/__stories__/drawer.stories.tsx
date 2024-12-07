import type { Meta, StoryObj } from '@storybook/react';

import { withTestBg } from '@components/__stories__/decorators';
import { Drawer } from '@components/containers/drawer';
import { Footer } from '@components/containers/footer';
import { Header } from '@components/containers/header';
import { Modal } from '@components/containers/modal';
import { IcoCaretRight, IcoDismiss } from '@components/icons';
import { NavigationButton } from '@components/list-items';
import { Button } from '@components/primitives';
import Text from '@components/primitives/text';
import { Box, VStack } from '@styled/jsx';
import { useState } from 'react';

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  title: 'Containers/Drawer',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withTestBg],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicDrawer: Story = {
  render: args => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
      <Modal>
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
        <Box my={10}>
          <Button label="Open Drawer" onPress={() => setIsDrawerOpen(!isDrawerOpen)} />
        </Box>
        <Drawer {...args} isOpen={isDrawerOpen} onToggle={setIsDrawerOpen}>
          <VStack>
            <NavigationButton primaryLabel="Button 1">
              <NavigationButton.TrailingIcon>
                <IcoCaretRight />
              </NavigationButton.TrailingIcon>
            </NavigationButton>
            <NavigationButton primaryLabel="Button 2">
              <NavigationButton.TrailingIcon>
                <IcoCaretRight />
              </NavigationButton.TrailingIcon>
            </NavigationButton>
          </VStack>
        </Drawer>
        <Footer />
      </Modal>
    );
  },
  args: {
    title: 'Drawer Title',
  },
};
