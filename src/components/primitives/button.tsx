import { LoadingSpinner } from '@components/feedback';
import { button } from '@recipes/button';
import { cx } from '@styled/css';
import { Box, Flex, HStack } from '@styled/jsx';
import { createHost, createSlot } from 'create-slots';
import React, { Children, MouseEventHandler, TouchEventHandler, cloneElement, forwardRef, useRef } from 'react';
import { mergeProps, useButton, useFocusRing, useHover, type AriaButtonProps } from 'react-aria';

export interface ButtonProps extends AriaButtonProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?:
    | 'primary'
    | 'secondary'
    | 'positive'
    | 'negative'
    | 'neutral'
    | 'tertiary'
    | 'text'
    | 'transparent'
    | 'inverse';
  textStyle?: 'negative' | 'positive' | 'neutral' | 'subtle';
  disabled?: boolean;
  expand?: boolean;
  validating?: boolean;
  iconSize?: number;
  onHover?: MouseEventHandler<HTMLButtonElement> | TouchEventHandler<HTMLButtonElement>;
  centerContent?: boolean;
}

const LeadingIcon = createSlot(({ children, ...props }) => {
  return (
    <Flex alignItems="center" justifyContent="center">
      {Children.map(children, child => {
        return cloneElement(child, props);
      })}
    </Flex>
  );
});

const TrailingIcon = createSlot(({ children, ...props }) => {
  return (
    <Flex alignItems="center" justifyContent="center">
      {Children.map(children, child => {
        return cloneElement(child, props);
      })}
    </Flex>
  );
});

const Validation = ({ variant = 'primary', size = 'md' }: Partial<ButtonProps>) => {
  const spinnerInverted = variant === 'primary' || variant === 'negative';
  const spinnerNeutral = variant === 'neutral' || variant === 'tertiary';
  const spinnerSizes = {
    sm: 20,
    md: 24,
    lg: 28,
  };

  return (
    <LoadingSpinner size={spinnerSizes[size]} strokeWidth={2.5} inverted={spinnerInverted} neutral={spinnerNeutral} />
  );
};

const Component = forwardRef<HTMLButtonElement, ButtonProps>((props, forwardedRef) => {
  const {
    label,
    variant = 'primary',
    textStyle,
    size = 'md',
    disabled,
    expand,
    validating,
    iconSize: iconSizeOverride,
    onHover,
    centerContent,
  } = props;

  const iconSize = iconSizeOverride || (size === 'sm' ? 16 : 24);
  const addPaddingContainer = label && expand && !centerContent;

  const classes = button({ variant, textStyle, expand, size, validating, iconOnly: !label });

  const internalRef = useRef(null);
  const ref = forwardedRef || internalRef;

  const { buttonProps } = useButton(
    { ...props, isDisabled: disabled ?? false },
    ref as React.RefObject<HTMLButtonElement>,
  );
  const { hoverProps } = useHover({ isDisabled: disabled ?? false });
  const { isFocusVisible, focusProps } = useFocusRing();

  return createHost(props.children, slots => {
    const leadingIcon = slots.get(LeadingIcon);
    const trailingIcon = slots.get(TrailingIcon);
    const containerSize = iconSize / 4;

    return (
      <button
        className={cx(classes.button, 'group', !label && classes.iconContainer, isFocusVisible && classes.focus)}
        ref={ref}
        {...mergeProps(buttonProps, hoverProps, focusProps)}
        aria-disabled={disabled}
        onMouseEnter={onHover as MouseEventHandler}
        onTouchStart={onHover as TouchEventHandler}
      >
        {validating ? (
          <Validation variant={variant} size={size} />
        ) : (
          <HStack
            w="full"
            gap={2}
            justify={label && (leadingIcon || trailingIcon) && !centerContent ? 'space-between' : 'center'}
          >
            {leadingIcon && {
              ...leadingIcon,
              props: {
                className: !leadingIcon.props.color ? classes.icon : undefined,
                width: iconSize,
                height: iconSize,
                ...leadingIcon.props,
              },
            }}
            {trailingIcon && addPaddingContainer && <Box w={containerSize} />}
            {label && <span className={classes.label}>{label}</span>}
            {leadingIcon && addPaddingContainer && <Box w={containerSize} />}
            {trailingIcon && {
              ...trailingIcon,
              props: {
                className: !trailingIcon.props.color ? classes.icon : undefined,
                width: iconSize,
                height: iconSize,
                ...trailingIcon.props,
              },
            }}
          </HStack>
        )}
      </button>
    );
  });
});

const Button = Object.assign(Component, {
  LeadingIcon,
  TrailingIcon,
});

Component.displayName = 'Button';

export default Button;
