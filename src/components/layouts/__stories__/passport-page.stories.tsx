import { withContainer, withTestBg } from '@components/__stories__/decorators';
import { Menu } from '@components/containers';
import { IcoCaretRight, IcoMagic } from '@components/icons';
import type { HeaderProps, PassportPageProps, TitleProps } from '@components/layouts/passport-page';
import { PassportPage } from '@components/layouts/passport-page';
import { NavigationButton } from '@components/list-items';
import Button from '@components/primitives/button';
import Text from '@components/primitives/text';
import type { Meta, StoryObj } from '@storybook/react';
import { HStack, VStack } from '@styled/jsx';
import { token } from '@styled/tokens';
import { useState } from 'react';

type PageTypes = PassportPageProps & HeaderProps & TitleProps;

const meta: Meta<PageTypes> = {
  component: PassportPage,
  title: 'Layouts/PassportPage',
  decorators: [withContainer, withTestBg],
  parameters: {
    width: 400,
  },
  argTypes: {
    onAnimated: {
      table: {
        disable: true,
      },
    },
    onBack: {
      table: {
        disable: true,
      },
    },
    onCancel: {
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
};

export default meta;
type Story = StoryObj<typeof meta>;

const DrawerContent = () => (
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
);

export const Passport: Story = {
  render: ({ ...args }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
      <PassportPage {...args}>
        <PassportPage.Header name={args.name} domain={args.domain} />
        <PassportPage.Title branding={args.branding} title={args.title} />
        <PassportPage.Content>
          <Text>Our content goes here.</Text>
          <Button label="Open Drawer" onPress={() => setIsDrawerOpen(!isDrawerOpen)} />
        </PassportPage.Content>
        <PassportPage.Confirm label="Confirm Foo" onPress={() => {}} />
        <PassportPage.Cancel label="Cancel Foo" onPress={() => {}} />
        <PassportPage.Actions>
          <Button label="Other" variant="tertiary" onPress={() => {}} />
        </PassportPage.Actions>
        <PassportPage.Menu>
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
        </PassportPage.Menu>
        <PassportPage.Drawer title="Drawer Title" isOpen={isDrawerOpen} onToggle={setIsDrawerOpen}>
          <DrawerContent />
        </PassportPage.Drawer>
        <PassportPage.Footer>
          <Text>Footer Content</Text>
        </PassportPage.Footer>
      </PassportPage>
    );
  },
  args: {
    actionDirection: 'column',
    branding: 'light',
    domain: 'foo.bar',
    name: 'Foo',
    title: 'Foo Passport Page',
  },
  argTypes: {},
};

export const PassportMinimal: Story = {
  render: ({ ...args }) => {
    return (
      <PassportPage {...args}>
        <PassportPage.Info>Info Content</PassportPage.Info>
        <PassportPage.Content>
          <Text>Content</Text>
        </PassportPage.Content>
      </PassportPage>
    );
  },
  args: {
    onBack: () => console.log('Back clicked'),
  },
  argTypes: {},
};
