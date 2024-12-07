import { ButtonContainer } from '@components/containers';
import { LoadingSpinner } from '@components/feedback';
import { LogoPayPalWordmark } from '@components/logos';
import { Text } from '@components/primitives';
import { css } from '@styled/css';
import { Box, HStack } from '@styled/jsx';
import { token } from '@styled/tokens';
import { forwardRef } from 'react';
import { type AriaButtonProps } from 'react-aria';

export interface PayPalButtonProps extends AriaButtonProps {
  disabled?: boolean;
  expand?: boolean;
  validating?: boolean;
}

export const PayPalButton = forwardRef<HTMLButtonElement, PayPalButtonProps>((props, forwardedRef) => {
  const { disabled, validating } = props;

  return (
    <ButtonContainer
      ref={forwardedRef}
      className={css({
        bg: '#ffc439',
        outlineColor: '#ffc439',
        border: '1px solid transparent',
        px: 6,
        py: 2.5,
      })}
      aria-disabled={disabled}
      shadow
      {...props}
    >
      {validating ? (
        <LoadingSpinner size={24} strokeWidth={2.5} inverted />
      ) : (
        <HStack w="full" gap={1} justifyContent="center">
          <Text fontWeight="semibold" styles={{ color: token('colors.ink.90') }}>
            Pay with
          </Text>
          <Box mt={0.5}>
            <LogoPayPalWordmark width={60} />
          </Box>
        </HStack>
      )}
    </ButtonContainer>
  );
});

PayPalButton.displayName = 'PayPalButton';
