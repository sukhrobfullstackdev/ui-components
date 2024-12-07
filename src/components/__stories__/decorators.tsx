import type { StoryContext, StoryFn } from '@storybook/react';
import { css } from '@styled/css';
import { HStack } from '@styled/jsx';

export const withTestBg = (Story: StoryFn) => (
  <div
    className={css({
      bg: 'linear-gradient(#00CC8F, #6851FF)',
      pos: 'fixed',
      inset: 0,
    })}
  >
    <Story />
  </div>
);

export const withContainer = (Story: StoryFn, context: StoryContext) => {
  const width = context.parameters.width || 300;
  const height = context.parameters.height || '100%';

  return (
    <HStack style={{ width: width, height: height }} justify="center" m="0 auto">
      <Story />
    </HStack>
  );
};
