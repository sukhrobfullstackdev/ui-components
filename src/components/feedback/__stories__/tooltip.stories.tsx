import { IcoQuestionCircleFill } from '@components/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@styled/css';
import { VStack } from '@styled/jsx';
import Tooltip from '../tooltip';

const DEFAULT_TOOLTIP_CONTENT = `I'm a longer tooltip, where it's necessary to enforce a max-width of 288px in order to wrap text to multiple lines`;

const meta: Meta<typeof Tooltip> = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    content: DEFAULT_TOOLTIP_CONTENT,
  },
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
      defaultValue: DEFAULT_TOOLTIP_CONTENT,
    },
    width: {
      control: {
        type: 'number',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TooltipDefault: Story = {
  render: args => {
    return (
      <VStack h={250} justify={'center'}>
        <Tooltip {...args}>
          <IcoQuestionCircleFill
            className={css({
              w: 4,
              h: 4,
              color: 'ink.70',
            })}
          />
        </Tooltip>
      </VStack>
    );
  },
};
