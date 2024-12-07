import { css } from '@styled/css';
import { Box, HStack } from '@styled/jsx';
import { SystemProperties } from '@styled/types';
import { createHost, createSlot } from 'create-slots';
import { ComponentPropsWithoutRef } from 'react';

const Content = createSlot('div');
const LeftAction = createSlot('div');
const RightAction = createSlot('div');

export type HeaderProps = ComponentPropsWithoutRef<'div'> & {
  position?: SystemProperties['position'];
};

const HeaderHost = ({ children, position = 'absolute' }: HeaderProps) => {
  return createHost(children, slots => {
    return (
      <HStack
        alignItems="center"
        justifyContent="space-between"
        className={css({
          '& >': { _first: { minWidth: 8 }, _last: { minWidth: 8 } },
          position,
          p: 4,
          left: 0,
          right: 0,
          top: 0,
          width: 'full',
        })}
      >
        {slots.get(LeftAction) ?? <Box />}
        {slots.get(Content)}
        {slots.get(RightAction) ?? <Box />}
      </HStack>
    );
  });
};

export const Header = Object.assign(HeaderHost, {
  Content,
  LeftAction,
  RightAction,
});
