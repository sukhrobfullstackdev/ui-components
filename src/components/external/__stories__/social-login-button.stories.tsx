import type { Meta, StoryObj } from '@storybook/react';

import { withContainer } from '@components/__stories__/decorators';
import SocialLoginButton, { SocialLoginButtonProviders } from '@components/external/social-login-button';

const meta: Meta<typeof SocialLoginButton> = {
  title: 'External/Social Login Button',
  component: SocialLoginButton,
  tags: ['autodocs'],
  argTypes: {
    provider: {
      options: Object.entries(SocialLoginButtonProviders).map(([, value]) => value),
      control: { type: 'select' },
    },
    onPress: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [withContainer],
};

export default meta;

type Story = StoryObj<typeof meta>;

const ButtonDefault: Story = {
  args: {
    provider: SocialLoginButtonProviders.GOOGLE,
    size: 'sm',
    disabled: false,
    validating: false,
    onPress: () => console.log('Button clicked'),
  },
};

export const Google: Story = {
  render: args => {
    return <SocialLoginButton {...args} />;
  },
  args: {
    ...ButtonDefault.args,
  },
};
