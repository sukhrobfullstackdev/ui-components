import type { Meta, StoryObj } from '@storybook/react';

import { withContainer } from '@components/__stories__/decorators';
import { IcoEmail, IcoWallet } from '@components/icons';
import { SegmentedControl, Tab, Text } from '@components/primitives';
import { VStack } from '@styled/jsx';
import { useState } from 'react';

const meta: Meta<typeof SegmentedControl> = {
  title: 'Primitives/SegmentedControl',
  component: SegmentedControl,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
  decorators: [withContainer],
  parameters: {
    width: 500,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const createTabContent = (title: string, content: string) => {
  return (
    <VStack gap={3} mt={4}>
      <Text.H4 styles={{ textAlign: 'center', fontWeight: '600' }}>{title}</Text.H4>
      <Text styles={{ textAlign: 'justify' }}>{content}</Text>
    </VStack>
  );
};

interface ContentMap {
  [key: string]: JSX.Element;
}

const content: ContentMap = {
  tab1: createTabContent(
    'Tab 1',
    'Praesent mattis tellus sit amet sem iaculis porta. Vestibulum auctor sit amet neque a mollis. Donec blandit blandit mattis. Integer aliquam mollis condimentum. Pellentesque lectus neque, tristique a gravida eget, mattis nec arcu. Aliquam sed ullamcorper enim. Vivamus eleifend, nisi sit amet finibus dapibus, risus ipsum faucibus justo, ac aliquet justo est vitae mi. Nulla facilisi. Aenean dapibus finibus mi a porttitor. Duis condimentum nec lectus bibendum lobortis.',
  ),
  tab2: createTabContent(
    'Tab 2',
    'Suspendisse non quam non ligula cursus pharetra. In hac habitasse platea dictumst. Maecenas id eros sed mauris egestas elementum a at nulla. Donec sollicitudin id velit aliquam imperdiet. Curabitur rhoncus, ex eu ultrices tempus, arcu mi aliquet tellus, et tempor orci mauris vitae sapien. Sed venenatis, massa nec dictum varius, enim erat ultricies arcu, non luctus enim lacus quis sapien. Maecenas elementum porttitor velit, eget ultricies dui viverra eu. Nam placerat pretium consectetur.',
  ),
  tab3: createTabContent(
    'Tab 3',
    'Integer finibus lectus ac velit mollis, eget maximus sapien porttitor. Aenean id efficitur massa. Morbi laoreet sed nisl vel aliquam. Morbi ipsum nisl, malesuada ac arcu sed, elementum dapibus tellus. Ut suscipit pellentesque auctor. Nulla feugiat semper lectus ut fermentum. In dolor dui, dapibus nec volutpat in, tempus vitae nibh. Vestibulum vulputate pharetra elit id auctor. Nullam facilisis rhoncus turpis eget tristique. Nunc dignissim velit eget nunc tempus mattis eu sed dui.',
  ),
};

export const SegmentedControlDefault: Story = {
  render: args => {
    const [selectedTab, setSelectedTab] = useState('tab1');
    return (
      // tabs scale proportionally to the size of the container
      <VStack>
        <SegmentedControl {...args} selectedTab={selectedTab} onChange={setSelectedTab}>
          <Tab id="tab1" label="Tab 1" />
          <Tab id="tab2" label="Tab 2" />
          <Tab id="tab3" label="Tab 3" />
        </SegmentedControl>
        {content[selectedTab]}
      </VStack>
    );
  },
};
export const SegmentedControlDisabled: Story = {
  render: args => {
    const [selectedTab, setSelectedTab] = useState('tab1');
    return (
      <VStack>
        <SegmentedControl {...args} selectedTab={selectedTab} onChange={setSelectedTab} disabled={true}>
          <Tab id="tab1" label="Tab 1" />
          <Tab id="tab2" label="Tab 2" />
          <Tab id="tab3" label="Tab 3" />
        </SegmentedControl>
        {content[selectedTab]}
      </VStack>
    );
  },
};

export const SegmentedControlWithIcons: Story = {
  render: args => {
    const [selectedTab, setSelectedTab] = useState('tab1');
    return (
      <VStack>
        <SegmentedControl {...args} selectedTab={selectedTab} onChange={setSelectedTab}>
          <Tab id="tab1" label="Tab 1">
            <Tab.Icon>
              <IcoEmail />
            </Tab.Icon>
          </Tab>
          <Tab id="tab2" label="Tab 2">
            <Tab.Icon>
              <IcoWallet />
            </Tab.Icon>
          </Tab>
        </SegmentedControl>
        {content[selectedTab]}
      </VStack>
    );
  },
};
