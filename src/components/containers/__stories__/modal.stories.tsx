import type { Meta, StoryObj } from '@storybook/react';

import { withTestBg } from '@components/__stories__/decorators';
import { Footer } from '@components/containers/footer';
import { Header } from '@components/containers/header';
import { Modal } from '@components/containers/modal';
import { IcoDismiss } from '@components/icons';
import { Button } from '@components/primitives';
import Text from '@components/primitives/text';
import { VStack } from '@styled/jsx';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: 'Containers/Modal',
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    paddingType: {
      control: { type: 'select' },
    },
    onAnimated: {
      table: {
        disable: true,
      },
    },
    onClosed: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withTestBg],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicModal: Story = {
  render: ({ ...args }) => {
    return (
      <Modal {...args}>
        <VStack alignItems="center" width="full">
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
          <Text size="lg">This is a content message.</Text>
          <Footer />
        </VStack>
      </Modal>
    );
  },
  args: {
    animate: true,
    isOpen: true,
    paddingType: 'none',
    onAnimated: () => console.log('Animated'),
    onClosed: () => console.log('Closed'),
  },
  argTypes: {},
};
