import { IcoMenu, IcoWand } from '@components/icons';
import { Popover, Text } from '@components/primitives';
import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@styled/css';
import { Box } from '@styled/jsx';
import { useState } from 'react';

const ContentMeta: Meta<typeof Popover.Content> = {
  title: 'Primitives/Popover/Content',
  component: Popover.Content,
  tags: ['autodocs'],
  args: {
    offset: 8,
  },
  argTypes: {
    offset: {
      control: {
        type: 'number',
      },
    },
    placement: {
      control: {
        type: 'select',
      },
      options: [
        'bottom',
        'bottom left',
        'bottom right',
        'bottom start',
        'bottom end',
        'top',
        'top left',
        'top right',
        'top start',
        'top end',
        'left',
        'left top',
        'left bottom',
        'start',
        'start top',
        'start bottom',
        'right',
        'right top',
        'right bottom',
        'end',
        'end top',
        'end bottom',
      ],
    },
  },
};

const meta: Meta<typeof Popover> = {
  title: 'Primitives/Popover',
  component: Popover,
  tags: ['autodocs'],
  args: {},
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
    defaultOpen: {
      control: {
        type: 'boolean',
      },
    },
    onOpenChange: {
      table: {
        disable: true,
      },
    },
    ...ContentMeta.argTypes,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const renderPopoverContent = () => {
  return (
    <>
      <Text size="md">admin@magic.link</Text>
      <button
        className={css({
          color: 'text.primary',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: 'sm',
        })}
      >
        Log out
      </button>
    </>
  );
};

export const PopoverDefault: Story = {
  render: args => {
    const label = args.trigger === 'hover' ? 'Hover over me' : 'Click me';

    return (
      <>
        <Popover label={label} {...args}>
          <Popover.Content
            className={css({
              py: 2,
              gap: 1,
            })}
          >
            {renderPopoverContent()}
          </Popover.Content>
        </Popover>
      </>
    );
  },
  args: {
    onOpenChange: isOpen => console.log(isOpen),
    trigger: 'hover',
    variant: 'text',
  },
};

export const IconPopover: Story = {
  render: args => {
    return (
      <>
        <Popover {...args}>
          <Popover.LeadingIcon>
            <IcoMenu />
          </Popover.LeadingIcon>
          <Popover.Content
            className={css({
              py: 2,
              gap: 1,
            })}
          >
            {renderPopoverContent()}
          </Popover.Content>
        </Popover>
      </>
    );
  },
  args: {
    ...PopoverDefault.args,
    size: 'sm',
    variant: 'neutral',
  },
};

export const PopoverWithTrailingIcon: Story = {
  render: args => {
    return (
      <>
        <Popover {...args}>
          <Popover.TrailingIcon>
            <IcoWand />
          </Popover.TrailingIcon>
          <Popover.Content
            className={css({
              py: 2,
              gap: 1,
            })}
          >
            {renderPopoverContent()}
          </Popover.Content>
        </Popover>
      </>
    );
  },
  args: {
    ...PopoverDefault.args,
    iconSize: 16,
  },
};

export const PopoverWithExternalTrigger: Story = {
  render: args => {
    const [isOpen, setIsOpen] = useState<boolean>();

    return (
      <>
        <Popover {...args} isOpen={isOpen}>
          <Popover.Trigger>
            <Box onClick={() => setIsOpen(!isOpen)}>External Trigger</Box>
          </Popover.Trigger>
          <Popover.Content
            className={css({
              py: 2,
              gap: 1,
            })}
          >
            {renderPopoverContent()}
          </Popover.Content>
        </Popover>
      </>
    );
  },
  args: {
    ...PopoverDefault.args,
    iconSize: 16,
  },
};
