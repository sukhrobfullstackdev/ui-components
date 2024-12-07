import { ButtonContainer } from '@components/containers';
import { IconGenericToken } from '@components/logos';
import { Text } from '@components/primitives';
import { css } from '@styled/css';
import { Center, HStack, VStack } from '@styled/jsx';
import { createHost, createSlot } from 'create-slots';
import { Children, cloneElement, FC, PropsWithChildren, useCallback, useRef } from 'react';
import { AriaButtonProps } from 'react-aria';

export interface TokenListItemProps extends AriaButtonProps {
  name: string;
  fiatBalanceWithSymbol?: string;
  tokenBalanceWithSymbol: string;
  logoUrl?: string;
  onPress?: () => void;
  tokenBalanceFirst?: boolean;
  disabled?: boolean;
}

const TokenIcon = createSlot(({ children, ...props }) => {
  return (
    <Center>
      {Children.map(children, child => {
        return cloneElement(child, props);
      })}
    </Center>
  );
});

interface ListContentProps extends Omit<TokenListItemProps, 'onPress'> {
  tokenIcon?: React.ReactElement;
}

const ListContent = ({
  name,
  fiatBalanceWithSymbol,
  tokenBalanceWithSymbol,
  tokenIcon,
  logoUrl,
  tokenBalanceFirst,
  disabled = false,
}: ListContentProps) => {
  const balanceFirst = tokenBalanceFirst || !fiatBalanceWithSymbol;
  return (
    <HStack w="full" justify="space-between" opacity={disabled ? '0.5' : '1'}>
      <HStack gap={4}>
        {tokenIcon ? (
          {
            ...tokenIcon,
            props: {
              ...tokenIcon.props,
              width: 40,
              height: 40,
            },
          }
        ) : logoUrl ? (
          <img width={40} height={40} src={logoUrl} alt={`${name} logo`} />
        ) : (
          <IconGenericToken width={40} height={40} />
        )}
        <Text fontWeight="medium" styles={{ textTransform: 'capitalize' }}>
          {name}
        </Text>
      </HStack>
      <VStack gap={0} alignItems="flex-end">
        <Text size="sm" styles={{ lineHeight: '1.5rem', textAlign: 'right' }}>
          {balanceFirst ? tokenBalanceWithSymbol : fiatBalanceWithSymbol}
        </Text>
        <Text size="sm" fontColor="text.secondary" styles={{ lineHeight: '1.5rem', textAlign: 'right' }}>
          {balanceFirst ? fiatBalanceWithSymbol : tokenBalanceWithSymbol}
        </Text>
      </VStack>
    </HStack>
  );
};

const TokenListItemBase: FC<PropsWithChildren<TokenListItemProps>> = props => {
  const { name, fiatBalanceWithSymbol, tokenBalanceWithSymbol, logoUrl, onPress, tokenBalanceFirst, disabled } = props;

  const ref = useRef(null);

  const handlePress = useCallback(() => {
    onPress?.();
  }, [onPress]);

  return createHost(props.children, slots => {
    const tokenIcon = slots.get(TokenIcon);

    if (onPress)
      return (
        <ButtonContainer
          ref={ref}
          className={css({
            _dark: { bg: 'surface.tertiary' },
            _hover: { bg: 'neutral.secondary' },
            bg: 'neutral.quaternary',
            px: 4,
            py: 2,
            minH: 16,
          })}
          borderRadius="0.5rem"
          expand
          onPress={disabled ? undefined : handlePress}
          disabled={disabled}
        >
          <ListContent
            name={name}
            fiatBalanceWithSymbol={fiatBalanceWithSymbol}
            tokenBalanceWithSymbol={tokenBalanceWithSymbol}
            tokenIcon={tokenIcon}
            logoUrl={logoUrl}
            tokenBalanceFirst={tokenBalanceFirst}
            disabled={disabled}
          />
        </ButtonContainer>
      );

    return (
      <ListContent
        name={name}
        fiatBalanceWithSymbol={fiatBalanceWithSymbol}
        tokenBalanceWithSymbol={tokenBalanceWithSymbol}
        tokenIcon={tokenIcon}
        logoUrl={logoUrl}
        tokenBalanceFirst={tokenBalanceFirst}
        disabled={disabled}
      />
    );
  });
};

export const TokenListItem = Object.assign(TokenListItemBase, { TokenIcon });
