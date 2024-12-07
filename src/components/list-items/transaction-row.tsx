import { ButtonContainer } from '@components/containers';
import { Skeleton } from '@components/feedback';
import { IcoArrowDown, IcoArrowUp, IcoLightningFill, IcoLockUnlockedFill } from '@components/icons';
import { Text } from '@components/primitives';
import { css } from '@styled/css';
import { Center, HStack } from '@styled/jsx';
import { token } from '@styled/tokens';
import { createHost, createSlot } from 'create-slots';
import { Children, cloneElement, ReactNode, useCallback, useRef } from 'react';

export interface TransactionRowProps {
  variant: 'send' | 'receive' | 'networkFee' | 'spendingCap';
  primaryText: string;
  secondaryText?: string;
  showTitle?: boolean;
  children: ReactNode;
  onPress?: () => void;
  loading?: boolean;
}

const variants = {
  send: {
    title: 'Send',
    primaryTextColor: token('colors.text.primary'),
    secondaryTextColor: token('colors.text.secondary'),
    icon: IcoArrowUp,
    iconColor: token('colors.negative.darker'),
    skeletonWidth: '89px',
  },
  receive: {
    title: 'Receive',
    primaryTextColor: token('colors.positive.base'),
    secondaryTextColor: `${token('colors.positive.lighter')}`,
    icon: IcoArrowDown,
    iconColor: token('colors.positive.base'),
    skeletonWidth: '89px',
  },
  networkFee: {
    title: 'Network Fee',
    primaryTextColor: token('colors.text.primary'),
    secondaryTextColor: token('colors.text.secondary'),
    icon: IcoLightningFill,
    iconColor: token('colors.brand.base'),
    skeletonWidth: '54px',
  },
  spendingCap: {
    title: 'Spending Cap',
    primaryTextColor: token('colors.warning.base'),
    secondaryTextColor: token('colors.warning.base'),
    icon: IcoLockUnlockedFill,
    iconColor: token('colors.warning.base'),
    skeletonWidth: '89px',
  },
};

const TokenIcon = createSlot(({ children, ...props }) => {
  return (
    <Center>
      {Children.map(children, child => {
        return cloneElement(child, props);
      })}
    </Center>
  );
});

const TransactionRowBase = (props: TransactionRowProps) => {
  const { variant, primaryText, secondaryText, children, onPress, loading, showTitle = true } = props;
  const { title, primaryTextColor, secondaryTextColor, icon: Icon, iconColor, skeletonWidth } = variants[variant];
  const isEditable = variant === 'send' || variant === 'networkFee';
  const ref = useRef(null);

  const handlePress = useCallback(() => {
    onPress?.();
  }, [onPress]);

  return createHost(children, slots => {
    const tokenIcon = slots.get(TokenIcon);
    return (
      <HStack w="full" justify="space-between">
        <HStack gap={2}>
          <Icon width={16} height={16} color={iconColor} />
          {showTitle && (
            <Text size="sm" fontWeight="medium">
              {title}
            </Text>
          )}
        </HStack>

        <HStack gap={4}>
          {secondaryText && <Text styles={{ color: secondaryTextColor }}>{secondaryText}</Text>}
          {isEditable ? (
            <ButtonContainer
              ref={ref}
              className={css({
                px: 4,
                py: 2.5,
                bg: 'surface.secondary',
              })}
              borderRadius="0.75rem"
              onPress={handlePress}
              {...props}
            >
              <HStack gap={3}>
                {loading ? (
                  <Skeleton width={skeletonWidth} />
                ) : (
                  <Text styles={{ color: primaryTextColor }}>{primaryText}</Text>
                )}
                {tokenIcon && {
                  ...tokenIcon,
                  props: {
                    ...tokenIcon.props,
                    width: 32,
                    height: 32,
                  },
                }}
              </HStack>
            </ButtonContainer>
          ) : (
            <HStack gap={3}>
              {loading ? (
                <Skeleton width={skeletonWidth} />
              ) : (
                <Text styles={{ color: primaryTextColor }}>{primaryText}</Text>
              )}
              {tokenIcon && {
                ...tokenIcon,
                props: {
                  ...tokenIcon.props,
                  width: 32,
                  height: 32,
                },
              }}
            </HStack>
          )}
        </HStack>
      </HStack>
    );
  });
};

export const TransactionRow = Object.assign(TransactionRowBase, { TokenIcon });
