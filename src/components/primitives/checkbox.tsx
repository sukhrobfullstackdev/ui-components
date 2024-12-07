import { IcoCheckmark } from '@components/icons';
import Text from '@components/primitives/text';
import { useToggleState } from '@hooks/useToggleState';
import { css } from '@styled/css';
import { Box } from '@styled/jsx';
import { Flex } from '@styled/jsx/flex';
import { token } from '@styled/tokens';
import { forwardRef, useEffect, useRef } from 'react';
import { VisuallyHidden, mergeProps, useCheckbox, useFocusRing, type AriaCheckboxProps } from 'react-aria';

export type CheckboxProps = AriaCheckboxProps & {
  label?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  checked?: boolean;
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, forwardedRef) => {
  const { label, indeterminate = false, disabled = false, checked, 'aria-label': ariaLabel, ...otherProps } = props;
  const state = useToggleState({ ...props, isSelected: checked });
  const internalRef = useRef<HTMLInputElement>(null);
  const ref = forwardedRef || internalRef;

  useEffect(() => {
    const currentRef = 'current' in ref ? ref.current : null;
    if (currentRef) {
      currentRef.indeterminate = !!indeterminate;
    }
  }, [indeterminate, ref]);

  const { inputProps } = useCheckbox(
    {
      ...otherProps,
      'aria-label': label || ariaLabel || 'Checkbox',
      isDisabled: disabled,
      isIndeterminate: indeterminate,
    },
    state,
    ref as React.RefObject<HTMLInputElement>,
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label
      className={css({
        display: 'flex',
        alignItems: 'center',
        rounded: 'sm',
        opacity: disabled ? 0.3 : 1,
      })}
    >
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={ref} />
      </VisuallyHidden>
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 5,
          height: 5,
          bg: state.isSelected ? 'brand.base' : 'transparent',
          borderWidth: 'thick',
          borderColor: state.isSelected || isFocusVisible ? 'brand.base' : 'text.tertiary',
          transition: 'background-color 0.2s ease, border-color 0.2s ease',
          _hover: {
            cursor: 'pointer',
            borderColor: 'brand.base',
          },
          pointerEvents: disabled ? 'none' : 'auto',
          rounded: 'sm',
          boxSizing: 'border-box',
          outlineColor: isFocusVisible ? 'brand.base' : 'transparent',
          outlineStyle: 'solid',
          outlineWidth: 'thick',
          outlineOffset: 0.5,
        })}
      >
        <span>
          {state.isSelected && !indeterminate && (
            <IcoCheckmark height={16} width={16} color={token('colors.surface.primary')} />
          )}
          {state.isSelected && !!indeterminate && (
            <Flex justifyContent="center" alignItems="center">
              <div
                className={css({
                  w: 2.5,
                  h: 0.5,
                  bg: 'surface.primary',
                })}
              />
            </Flex>
          )}
        </span>
      </div>
      {label && (
        <Box ml={3}>
          <Text fontWeight="medium" styles={{ lineHeight: 1 }}>
            {label}
          </Text>
        </Box>
      )}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
