import { LoadingSpinner } from '@components/feedback';
import { card } from '@recipes/card';
import { cx } from '@styled/css';
import { Box, Flex } from '@styled/jsx';
import { ComponentProps, forwardRef } from 'react';

export interface CardProps extends ComponentProps<'div'> {
  className?: string;
  id?: string;
  alt?: boolean;
  asButton?: boolean;
  alignment?: 'center' | 'left' | 'right';
  expand?: boolean;
  gapType?: 'none' | 'sm' | 'md' | 'lg';
  heavyShadow?: boolean;
  paddingType?: 'none' | 'sm' | 'md' | 'lg';
  stack?: boolean;
  widthMax?: boolean;
  disabled?: boolean;
  validating?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, id, asButton, stack, onClick, validating, ...props }, ref) => {
    const classStyles = card({ asButton, validating, ...props });

    return stack || asButton ? (
      <Flex
        id={id}
        className={cx(classStyles, className)}
        flexDirection="column"
        role={asButton ? 'button' : 'none'}
        onClick={asButton ? onClick : undefined}
        ref={ref}
      >
        {validating ? <LoadingSpinner neutral /> : children}
      </Flex>
    ) : (
      <Box id={id} className={cx(classStyles, className)} ref={ref}>
        {children}
      </Box>
    );
  },
);

Card.displayName = 'Card';
