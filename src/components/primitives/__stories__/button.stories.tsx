import type { Meta, StoryObj } from '@storybook/react';

import { withContainer, withTestBg } from '@components/__stories__/decorators';
import { IcoArrowLeft, IcoDismiss, IcoDoc } from '@components/icons';
import Button from '@components/primitives/button';
import { Center } from '@styled/jsx';
import { token } from '@styled/tokens';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
    },
    iconSize: {
      table: {
        disable: true,
      },
    },
    onHover: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withContainer],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonDefault: Story = {
  args: {
    label: 'Hello World',
    size: 'md',
    variant: 'primary',
    disabled: false,
    validating: false,
    onPress: () => console.log('Button clicked'),
  },
};

export const TextButton: Story = {
  render: args => {
    return <Button {...args} />;
  },
  args: {
    ...ButtonDefault.args,
    variant: 'text',
  },
};

export const ButtonWithLeadingIcon: Story = {
  render: args => {
    return (
      <Button {...args}>
        <Button.LeadingIcon>
          <IcoDoc />
        </Button.LeadingIcon>
      </Button>
    );
  },
  args: {
    ...ButtonDefault.args,
  },
};

export const ButtonWithTrailingIcon: Story = {
  render: args => {
    return (
      <Button {...args}>
        <Button.TrailingIcon>
          <IcoDoc />
        </Button.TrailingIcon>
      </Button>
    );
  },
  args: {
    ...ButtonDefault.args,
  },
};

export const ButtonWithCustomColorIcon: Story = {
  render: args => {
    return (
      <Button {...args}>
        <Button.LeadingIcon color={token('colors.negative.base')}>
          <IcoDoc />
        </Button.LeadingIcon>
      </Button>
    );
  },
  args: {
    ...ButtonDefault.args,
  },
};

export const TextButtonWithLeadingIcon: Story = {
  render: args => {
    return (
      <Button {...args}>
        <Button.LeadingIcon>
          <IcoDoc />
        </Button.LeadingIcon>
      </Button>
    );
  },
  args: {
    ...TextButton.args,
  },
};

export const CloseButton: Story = {
  render: args => {
    return (
      <Button {...args}>
        <Button.LeadingIcon>
          <IcoDismiss />
        </Button.LeadingIcon>
      </Button>
    );
  },
  args: {
    ...ButtonDefault.args,
    size: 'sm',
    variant: 'neutral',
    label: undefined,
  },
};

export const BackButton: Story = {
  render: args => {
    return (
      <Button {...args}>
        <Button.LeadingIcon>
          <IcoArrowLeft />
        </Button.LeadingIcon>
      </Button>
    );
  },
  args: {
    ...CloseButton.args,
  },
};

export const TransparentButton: Story = {
  render: args => {
    return (
      <Center h="full">
        <Button {...args}>
          <Button.LeadingIcon>
            <IcoDismiss />
          </Button.LeadingIcon>
        </Button>
      </Center>
    );
  },
  args: {
    ...CloseButton.args,
    variant: 'transparent',
  },
  decorators: [withTestBg],
};
