import { withTestBg } from '@components/__stories__/decorators';
import { pageArgs, pageMeta } from '@components/__stories__/defaults';
import { IcoAstronaut } from '@components/icons';
import { Dialogue } from '@components/layouts/dialogue';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Dialogue> = {
  component: Dialogue,
  title: 'Layouts/Dialogue',
  decorators: [withTestBg],
  ...pageMeta,
  argTypes: {
    onCancel: {
      table: {
        disable: true,
      },
    },
    onConfirm: {
      table: {
        disable: true,
      },
    },
    ...pageMeta.argTypes,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DialoguePage: Story = {
  render: ({ ...args }) => {
    return (
      <Dialogue {...args}>
        <Dialogue.Icon>
          <IcoAstronaut />
        </Dialogue.Icon>
      </Dialogue>
    );
  },
  args: {
    confirmLabel: 'Okay',
    title: 'Foo Dialogue',
    message: 'message goes here',
    onCancel: () => console.log('Cancel clicked'),
    onConfirm: () => console.log('Confirm clicked'),
    ...pageArgs,
  },
  argTypes: {},
};
