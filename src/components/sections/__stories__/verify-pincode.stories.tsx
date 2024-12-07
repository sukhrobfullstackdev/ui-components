import { Button, Text } from '@components/primitives';
import { VerifyPincode } from '@components/sections';
import type { Meta, StoryObj } from '@storybook/react';
import { VStack } from '@styled/jsx';
import { token } from '@styled/tokens';

const meta: Meta<typeof VerifyPincode> = {
  title: 'Sections/VerifyPincode',
  component: VerifyPincode,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
    onComplete: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const VerifyPincodeDefault: Story = {
  render: args => {
    return <VerifyPincode {...args} />;
  },
  args: {
    pinLength: 6,
    onChange: (pins: string[]) => console.log('Pins: ', pins.toString()),
    onComplete: (pin: string) => alert(`Pin: ${pin}`),
  },
};

export const VerifyPincodeWithRetryContent: Story = {
  render: args => {
    return (
      <VerifyPincode {...args}>
        <VerifyPincode.RetryContent>
          <VStack gap={2}>
            <Text
              size="sm"
              styles={{
                color: token('colors.text.tertiary'),
              }}
            >
              New code available in 17s
            </Text>
            <Button variant="text" label={'Request a new code'} />
          </VStack>
        </VerifyPincode.RetryContent>
      </VerifyPincode>
    );
  },
  args: {
    ...VerifyPincodeDefault.args,
  },
};
