import { withTestBg } from '@components/__stories__/decorators';
import { pageArgs, pageMeta } from '@components/__stories__/defaults';
import { Error } from '@components/layouts/error';
import Button from '@components/primitives/button';
import type { Meta, StoryObj } from '@storybook/react';
import { IcoCode } from '@components/icons';
import React from 'react';
import { token } from '@styled/tokens';

const meta: Meta<typeof Error> = {
  component: Error,
  title: 'Layouts/Error',
  decorators: [withTestBg],
  ...pageMeta,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorPage: Story = {
  render: ({ ...args }) => {
    return (
      <Error {...args}>
        <Error.Button>
          <Button label="Close" />
        </Error.Button>
      </Error>
    );
  },
  args: {
    title: 'Foo Error',
    message: 'message goes here',
    detailTitle: 'details',
    detailMessage: 'foo bar baz bat',
    ...pageArgs,
  },
};

export const InternalErrorPage: Story = {
  render: ({ ...args }) => {
    return (
      <Error {...args}>
        <Error.Icon color={token('colors.negative.base')}>
          <IcoCode />
        </Error.Icon>
        <Error.Button>
          <Button label="Close" />
        </Error.Button>
      </Error>
    );
  },
  args: {
    title: 'Internal server error',
    message: "We're currently working on getting everything back to normal. Please try again soon.",
    detailTitle: 'TRACE ID',
    detailMessage: '1238abc-24fb-123f-1223-1248a9o2',
    ...pageArgs,
  },
};
