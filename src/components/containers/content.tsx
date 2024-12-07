import { css } from '@styled/css';
import { VStack } from '@styled/jsx';
import { ComponentProps } from 'react';

export interface ContentProps extends ComponentProps<'div'> {
  className?: string;
}

export const Content = ({ children, className = '' }: ContentProps) => (
  <VStack
    alignItems="center"
    justifyContent="center"
    flexShrink={0}
    className={`${css({
      pb: 0,
      pt: 6,
      px: 8,
      width: '100%',
    })} ${className}`}
  >
    {children}
  </VStack>
);
