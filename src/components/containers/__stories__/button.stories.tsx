import type { Meta, StoryObj } from '@storybook/react';

import { withContainer, withTestBg } from '@components/__stories__/decorators';
import { ButtonContainer } from '@components/containers/button';
import { IcoRocketFill } from '@components/icons';
import Text from '@components/primitives/text';
import { HStack, Stack } from '@styled/jsx';

const meta = {
  component: ButtonContainer,
  title: 'Containers/Button',
  decorators: [withContainer, withTestBg],
} satisfies Meta<typeof ButtonContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonContainerWithCustom: Story = {
  render: ({ ...args }) => {
    return (
      <ButtonContainer {...args}>
        <Stack
          backdropFilter="blur(8px)"
          bgColor={args.disabled ? 'text.primary/1' : 'text.primary/5'}
          borderColor="text.primary/6"
          borderStyle="solid"
          borderWidth="thin"
          gap={2}
          justify="space-between"
          px={4}
          py={5}
          w="full"
          style={{ borderRadius: args.borderRadius }}
        >
          <HStack justify="space-between">
            <IcoRocketFill />
            <Text.H4>Custom content</Text.H4>
          </HStack>
        </Stack>
      </ButtonContainer>
    );
  },
  args: {
    borderRadius: 12,
    disabled: false,
    expand: false,
    shadow: true,
    onHover: () => console.log('Button hover'),
    onPress: () => console.log('Button pressed'),
  },
  argTypes: {
    className: {
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
};
