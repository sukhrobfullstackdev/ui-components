import { withTestBg } from '@components/__stories__/decorators';
import { pageArgs, pageMeta } from '@components/__stories__/defaults';
import { Header } from '@components/containers/header';
import { IcoArrowLeft, IcoCaretRight, IcoDismiss, IcoKey } from '@components/icons';
import { Page } from '@components/layouts/page';
import { NavigationButton } from '@components/list-items';
import Button from '@components/primitives/button';
import Text from '@components/primitives/text';
import type { Meta, StoryObj } from '@storybook/react';
import { VStack } from '@styled/jsx';
import { useState } from 'react';

const meta: Meta<typeof Page> = {
  component: Page,
  title: 'Layouts/Page',
  decorators: [withTestBg],
  ...pageMeta,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PageLayout: Story = {
  render: ({ ...args }) => {
    return (
      <Page {...args}>
        <Page.Icon>
          <IcoKey />
        </Page.Icon>
        <Page.Header>
          <Header.LeftAction>
            <Button size="sm" variant="neutral">
              <Button.LeadingIcon>
                <IcoArrowLeft />
              </Button.LeadingIcon>
            </Button>
          </Header.LeftAction>
          <Header.RightAction>
            <Button size="sm" variant="neutral">
              <Button.TrailingIcon>
                <IcoDismiss />
              </Button.TrailingIcon>
            </Button>
          </Header.RightAction>
        </Page.Header>
        <Page.Content>
          <Text size="lg" styles={{ textAlign: 'center' }}>
            Foo Page
          </Text>
          <Text>Our content goes here.</Text>
        </Page.Content>
        <Page.Footer />
      </Page>
    );
  },
  args: pageArgs,
};

export const PageWithDrawer: Story = {
  render: ({ ...args }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
      <Page {...args}>
        <Page.Icon>
          <IcoKey />
        </Page.Icon>
        <Page.Header>
          <Header.LeftAction>
            <Button size="sm" variant="neutral">
              <Button.LeadingIcon>
                <IcoArrowLeft />
              </Button.LeadingIcon>
            </Button>
          </Header.LeftAction>
          <Header.RightAction>
            <Button size="sm" variant="neutral">
              <Button.TrailingIcon>
                <IcoDismiss />
              </Button.TrailingIcon>
            </Button>
          </Header.RightAction>
        </Page.Header>
        <Page.Content>
          <Text size="lg" styles={{ textAlign: 'center' }}>
            Foo Page
          </Text>
          <Text>Our content goes here.</Text>
          <Button label="Open Drawer" onPress={() => setIsDrawerOpen(!isDrawerOpen)} />
        </Page.Content>
        <Page.Drawer title="Drawer Title" isOpen={isDrawerOpen} onToggle={setIsDrawerOpen}>
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
        </Page.Drawer>
        <Page.Footer />
      </Page>
    );
  },
  args: pageArgs,
};
