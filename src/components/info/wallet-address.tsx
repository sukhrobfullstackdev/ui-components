import { ButtonContainer } from '@components/containers';
import { IcoCheckmark, IcoCopy } from '@components/icons';
import { css } from '@styled/css';
import { HStack } from '@styled/jsx';
import { token } from '@styled/tokens';
import { forwardRef, useCallback, useEffect, useState } from 'react';
import { AriaButtonProps } from 'react-aria';

export interface WalletAddressProps extends AriaButtonProps {
  address: string;
  onCopy?: (address: string) => void;
  size?: 'sm' | 'md';
  icon?: boolean;
  fontColor?: 'text.primary' | 'text.secondary' | 'text.tertiary';
  fontWeight?: 'normal' | 'medium';
}

const WalletAddress = forwardRef<HTMLButtonElement, WalletAddressProps>((props, forwardedRef) => {
  const { address, onCopy, size = 'md', icon, fontColor = 'text.tertiary', fontWeight = 'normal' } = props;
  const [isCopied, setIsCopied] = useState(false);
  const truncatedAddress = `${address.slice(0, 6)}...${address?.slice(-4)}`;
  const iconSize = size === 'sm' ? 16 : 20;

  const handleOnCopy = useCallback(() => {
    if (onCopy) {
      onCopy(address);
    }
    setIsCopied(true);
  }, [address]);

  useEffect(() => {
    if (isCopied) {
      const timeoutId = setTimeout(() => {
        setIsCopied(false);
      }, 1500);

      return () => clearTimeout(timeoutId);
    }
  }, [isCopied]);

  if (!onCopy) {
    return (
      <span
        className={css({
          fontSize: size,
          color: fontColor,
          fontWeight,
          fontVariant: 'no-contextual',
        })}
      >
        {truncatedAddress}
      </span>
    );
  }

  return (
    <ButtonContainer
      className={css({
        fontSize: size,
        color: isCopied ? 'positive.base' : fontColor,
        fontWeight: isCopied ? 'medium' : fontWeight,
        rounded: 'button',
        fontVariant: 'no-contextual',
        transition: 'none',
      })}
      onPress={handleOnCopy}
      ref={forwardedRef}
    >
      <HStack gap={2}>
        {isCopied ? (icon ? 'Copied' : 'Copied!') : truncatedAddress}
        {icon && (
          <>
            {isCopied ? (
              <IcoCheckmark width={iconSize} height={iconSize} color={token('colors.positive.base')} />
            ) : (
              <IcoCopy width={iconSize} height={iconSize} color={token('colors.text.tertiary')} />
            )}
          </>
        )}
      </HStack>
    </ButtonContainer>
  );
});

WalletAddress.displayName = 'WalletAddress';

export default WalletAddress;
