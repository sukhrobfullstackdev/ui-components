import { css, cx } from '@styled/css';
import { VStack } from '@styled/jsx';
import { token } from '@styled/tokens';
import { MouseEventHandler, PropsWithChildren, TouchEventHandler, forwardRef, useRef } from 'react';
import { mergeProps, useButton, useFocusRing, useHover, type AriaButtonProps } from 'react-aria';

export interface ButtonContainerProps extends AriaButtonProps, PropsWithChildren {
  className?: string;
  borderRadius?: string | number;
  disabled?: boolean;
  expand?: boolean;
  onHover?: MouseEventHandler<HTMLButtonElement> | TouchEventHandler<HTMLButtonElement>;
  shadow?: boolean;
}

export const ButtonContainer = forwardRef<HTMLButtonElement, ButtonContainerProps>(
  ({ children, className, borderRadius, disabled, expand, onHover, shadow, ...props }, forwardedRef) => {
    const internalRef = useRef(null);
    const ref = forwardedRef || internalRef;

    const { buttonProps } = useButton(
      { ...props, isDisabled: disabled ?? false },
      ref as React.RefObject<HTMLButtonElement>,
    );
    const { hoverProps } = useHover({ isDisabled: disabled ?? false });
    const { isFocusVisible, focusProps } = useFocusRing();
    const dimensions = expand ? { w: 'full' } : {};
    const shadowStyles = shadow
      ? {
          _before: {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'inherit',
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))',
            _dark: { backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))` },
            opacity: 0,
            transition: 'opacity 0.1s ease',
          },
          _hover: {
            _before: {
              opacity: 1,
            },
          },
        }
      : {};

    return (
      <button
        ref={ref}
        className={cx(
          css({
            _active: { transform: 'scale(0.95)' },
            _disabled: { opacity: '0.8', pointerEvents: 'none' },
            cursor: 'pointer',
            h: 'auto',
            outline: 'none',
            position: 'relative',
            transition: 'all 0.1s ease',
            willChange: 'transform, opacity',
            ...dimensions,
            ...shadowStyles,
          }),
          isFocusVisible &&
            css({ outlineColor: 'brand.base', outlineStyle: 'solid', outlineWidth: 'thick', outlineOffset: 0.5 }),
          className,
        )}
        style={{ borderRadius: borderRadius ?? token('radii.button') }}
        {...mergeProps(buttonProps, hoverProps, focusProps)}
        aria-disabled={disabled}
        onMouseEnter={onHover as MouseEventHandler}
        onTouchStart={onHover as TouchEventHandler}
      >
        <VStack>{children}</VStack>
      </button>
    );
  },
);

ButtonContainer.displayName = 'ButtonContainer';
