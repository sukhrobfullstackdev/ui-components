import { Meta, StoryObj } from '@storybook/react';

import { withContainer } from '@components/__stories__/decorators';
import { ActivityListItem } from '@components/list-items';
import { LogoEthereum, LogoSolana } from '@components/logos';
import { token } from '@styled/tokens';
import { IcoArrowUp, IcoKey } from '@components/icons';

const meta: Meta<typeof ActivityListItem> = {
  component: ActivityListItem,
  title: 'List Items/ActivityListItem',
  tags: ['autodocs'],
  decorators: [withContainer],
  argTypes: {
    onPress: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ActivityListItemWithSecondaryValues: Story = {
  render: ({ ...args }) => {
    return <ActivityListItem {...args} />;
  },
  args: {
    title: 'Sent',
    subtitle: 'USDC',
    primaryValue: '-75 USDC',
    primaryValueColor: token('colors.negative.base'),
    secondaryValue: '$75',
    children: (
      <>
        <ActivityListItem.PrimaryIcon backgroundColor="neutral.secondary">
          <LogoEthereum />
        </ActivityListItem.PrimaryIcon>
      </>
    ),
  },
};

export const ActivityListItemWithSecondaryIcon: Story = {
  render: ({ ...args }) => {
    return <ActivityListItem {...args} />;
  },
  args: {
    ...ActivityListItemWithSecondaryValues.args,
    title: 'Sent',
    subtitle: 'USDC',
    primaryValue: '-75 USDC',
    primaryValueColor: token('colors.negative.base'),
    secondaryValue: '$75',
    children: (
      <>
        <ActivityListItem.PrimaryIcon backgroundColor="neutral.secondary">
          <LogoEthereum />
        </ActivityListItem.PrimaryIcon>
        <ActivityListItem.SecondaryIcon backgroundColor="negative.lighter">
          <IcoArrowUp />
        </ActivityListItem.SecondaryIcon>
      </>
    ),
  },
};

export const ActivityListItemWithDoubleIcon: Story = {
  render: ({ ...args }) => {
    return <ActivityListItem {...args} />;
  },
  args: {
    ...ActivityListItemWithSecondaryIcon.args,
    title: 'Swapped',
    subtitle: 'ETH -> SOL',
    primaryValue: '-75 ETH',
    primaryValueColor: token('colors.negative.base'),
    secondaryValue: '$75',
    children: (
      <>
        <ActivityListItem.DoubleIcon backgroundColor="surface.primary">
          <LogoEthereum />
          <LogoSolana />
        </ActivityListItem.DoubleIcon>
      </>
    ),
  },
};

export const ActivityListItemWithoutSubtitleAndSecondaryValue: Story = {
  render: ({ ...args }) => {
    return <ActivityListItem {...args} />;
  },
  args: {
    ...ActivityListItemWithDoubleIcon.args,
    title: 'Title',
    subtitle: 'Value',
    children: (
      <>
        <ActivityListItem.PrimaryIcon backgroundColor="neutral.secondary">
          <LogoEthereum />
        </ActivityListItem.PrimaryIcon>
      </>
    ),
  },
};

export const ActivityListItemWithoutSecondaryValues: Story = {
  render: ({ ...args }) => {
    return <ActivityListItem {...args} />;
  },
  args: {
    ...ActivityListItemWithoutSubtitleAndSecondaryValue.args,
    title: 'Private Key',
    subtitle: 'Viewed',
    children: (
      <>
        <ActivityListItem.PrimaryIcon backgroundColor="neutral.secondary">
          <IcoKey />
        </ActivityListItem.PrimaryIcon>
      </>
    ),
  },
};
