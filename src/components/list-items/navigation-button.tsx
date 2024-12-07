import { ButtonContainer } from '@components/containers';
import { IcoExternalLink } from '@components/icons';
import { Text } from '@components/primitives';
import { css } from '@styled/css';
import { Center, HStack } from '@styled/jsx';
import { token } from '@styled/tokens';
import { createHost, createSlot } from 'create-slots';
import { Children, cloneElement, forwardRef } from 'react';
import { AriaButtonProps } from 'react-aria';

export interface NavigationButtonProps extends AriaButtonProps {
  primaryLabel: string;
  secondaryLabel?: string;
  isExternalLink?: boolean;
  disabled?: boolean;
}

const LeadingIcon = createSlot(({ children, ...props }) => {
  return (
    <Center>
      {Children.map(children, child => {
        return cloneElement(child, props);
      })}
    </Center>
  );
});

const TrailingIcon = createSlot(({ children, ...props }) => {
  return (
    <Center>
      {Children.map(children, child => {
        return cloneElement(child, props);
      })}
    </Center>
  );
});

const NavigationButtonBase = forwardRef<HTMLButtonElement, NavigationButtonProps>((props, forwardedRef) => {
  const { primaryLabel, secondaryLabel, isExternalLink } = props;

  return createHost(props.children, slots => {
    const leadingIcon = slots.get(LeadingIcon);
    const trailingIcon = slots.get(TrailingIcon);

    return (
      <ButtonContainer
        ref={forwardedRef}
        className={css({
          p: 4,
          bg: 'neutral.quaternary',
          _hover: { bg: 'neutral.secondary' },
        })}
        borderRadius="0.5rem"
        expand
        {...props}
      >
        <HStack justify="space-between" w="full">
          <HStack>
            {leadingIcon && {
              ...leadingIcon,
              props: {
                ...leadingIcon.props,
                className: !leadingIcon.props.color ? css({ color: 'brand.base' }) : undefined,
                height: 24,
              },
            }}
            <Text fontWeight="medium">{primaryLabel}</Text>
            {isExternalLink && <IcoExternalLink width={14} height={14} color={token('colors.neutral.primary')} />}
          </HStack>
          <HStack>
            {secondaryLabel && (
              <Text size="sm" fontColor="text.tertiary">
                {secondaryLabel}
              </Text>
            )}
            {trailingIcon && {
              ...trailingIcon,
              props: {
                ...trailingIcon.props,
                className: !trailingIcon.props.color ? css({ color: 'neutral.primary' }) : undefined,
                width: 16,
                height: 16,
              },
            }}
          </HStack>
        </HStack>
      </ButtonContainer>
    );
  });
});

NavigationButtonBase.displayName = 'NavigationButton';

const NavigationButton = Object.assign(NavigationButtonBase, { LeadingIcon, TrailingIcon });

export default NavigationButton;
