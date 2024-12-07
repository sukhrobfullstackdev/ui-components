import {
  Children,
  cloneElement,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  isValidElement,
  ReactNode,
  RefObject,
  useRef,
} from 'react';
import type { AriaTextFieldProps } from 'react-aria';
import { mergeProps, useFocusRing, useHover, useTextField } from 'react-aria';

import { Button, Text } from '@components/primitives';
import { textInput } from '@recipes/text-input';
import { css, cx } from '@styled/css';
import { Flex, HStack, VStack } from '@styled/jsx';
import { token } from '@styled/tokens';

import { createHost, createSlot } from 'create-slots';

export type TextInputProps = AriaTextFieldProps & {
  className?: string;
  disabled?: boolean;
  attr?: InputHTMLAttributes<HTMLInputElement>;
  errorMessage?: string;
  children?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
  alignText?: 'left' | 'center' | 'right';
  required?: boolean;
};

export type CharProps = AriaTextFieldProps & {
  className?: string;
  disabled?: boolean;
  attr?: InputHTMLAttributes<HTMLInputElement>;
};

export type ActionIconProps = HTMLAttributes<HTMLElement> & {
  onClick: () => void;
};

const TypeIcon = createSlot(({ children, ...props }) => {
  return (
    <Flex alignItems="center" justifyContent="center">
      {Children.map(children, child => {
        return cloneElement(child, { ...props, color: child.props.color ?? token('colors.neutral.primary') });
      })}
    </Flex>
  );
});

const ActionIcon = createSlot(({ children, ...props }: ActionIconProps) => {
  return (
    <Flex alignItems="center" justifyContent="center">
      {Children.map(children, child => {
        if (isValidElement<ActionIconProps>(child)) {
          return cloneElement(child, { ...props, color: child.props.color ?? token('colors.brand.base') });
        }
        return null;
      })}
    </Flex>
  );
});

const ActionButton = createSlot(Button);
const Prefix = createSlot(Text);
const Suffix = createSlot(Text);

const Component = forwardRef<HTMLInputElement, TextInputProps>((props, forwardedRef) => {
  const {
    label,
    disabled,
    size = 'md',
    alignText = 'left',
    attr,
    description,
    autoFocus,
    className = '',
    errorMessage,
    required,
  } = props;
  const iconSize = size === 'sm' ? 16 : 20;

  const internalRef = useRef(null);
  // forwardedRef is null until after first render
  const ref = forwardedRef || internalRef;

  const { labelProps, inputProps, descriptionProps, errorMessageProps, isInvalid, validationErrors } = useTextField(
    { ...props, isDisabled: disabled ?? false, isInvalid: !!errorMessage },
    ref as RefObject<HTMLInputElement>,
  );

  const { focusProps } = useFocusRing({
    autoFocus: autoFocus ?? false,
  });
  const { hoverProps } = useHover({ isDisabled: disabled ?? false });

  return createHost(props.children, slots => {
    const typeIcon = slots.get(TypeIcon);
    const actionIcon = slots.get(ActionIcon);
    const actionButtonProps = slots.getProps(ActionButton);
    const prefixProps = slots.getProps(Prefix);
    const suffixProps = slots.getProps(Suffix);

    const classes = textInput({
      size,
      alignText,
      disabled,
      isError: isInvalid,
    });

    return (
      <VStack className={cx(classes.container, className)}>
        {label && (
          <label className={classes.label} {...labelProps}>
            {label} {required && <span className={css({ color: 'negative.darker' })}>*</span>}
          </label>
        )}
        <HStack className={classes.inputContainer}>
          {typeIcon && {
            ...typeIcon,
            props: { ...typeIcon.props, className: classes.typeIcon, width: iconSize, height: iconSize },
          }}
          {prefixProps && <Text {...prefixProps} fontColor="text.tertiary" />}
          <input ref={ref} className={classes.input} {...mergeProps(inputProps, focusProps, hoverProps)} {...attr} />
          {suffixProps && <Text {...suffixProps} fontColor="text.tertiary" />}
          {actionIcon && {
            ...actionIcon,
            props: { ...actionIcon.props, className: classes.actionIcon, width: iconSize, height: iconSize },
          }}
          {actionButtonProps && (
            <Flex alignItems="center" justifyContent="center" className={classes.actionButton}>
              <Button {...actionButtonProps} variant="text" size={size} />
            </Flex>
          )}
        </HStack>
        {description && (
          <div className={classes.description} {...descriptionProps}>
            {description}
          </div>
        )}
        {isInvalid && (
          <Text variant="error" {...errorMessageProps} size={'sm'} fontWeight="normal">
            {validationErrors.length > 0 ? validationErrors.join(' ') : errorMessage}
          </Text>
        )}
      </VStack>
    );
  });
});

const Char = forwardRef<HTMLInputElement, CharProps>((props, forwardedRef) => {
  const { disabled, autoFocus, className = '', attr } = props;

  const internalRef = useRef(null);
  // forwardedRef is null until after first render
  const ref = forwardedRef || internalRef;

  const { inputProps } = useTextField({ ...props, isDisabled: disabled ?? false }, ref as RefObject<HTMLInputElement>);

  const { focusProps } = useFocusRing({ autoFocus: autoFocus ?? false });
  const { hoverProps } = useHover({ isDisabled: disabled ?? false });

  const classes = textInput({ char: true, disabled });

  return (
    <div className={cx(classes.container, classes.inputContainer, className)}>
      <input
        ref={ref}
        className={classes.input}
        {...mergeProps(inputProps, focusProps, hoverProps)}
        size={1}
        {...attr}
      />
    </div>
  );
});

export const TextInput = Object.assign(Component, {
  TypeIcon,
  ActionIcon,
  ActionButton,
  Char,
  Prefix,
  Suffix,
});

Component.displayName = 'TextInput';
Char.displayName = 'TextInputChar';
