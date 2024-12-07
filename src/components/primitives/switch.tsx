import Text from '@components/primitives/text';
import { useToggleState } from '@hooks/useToggleState';
import { css } from '@styled/css';
import { Box } from '@styled/jsx';
import { Flex } from '@styled/jsx/flex';
import { circle } from '@styled/patterns';
import { forwardRef, useRef } from 'react';
import { mergeProps, useFocusRing, useToggleButton, type AriaToggleButtonProps } from 'react-aria';

export type SwitchProps = AriaToggleButtonProps & {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
};

const Switch = forwardRef<HTMLButtonElement, SwitchProps>((props, forwardedRef) => {
  const { checked, disabled = false, label, ...otherProps } = props;

  const internalRef = useRef(null);
  const ref = forwardedRef || internalRef;

  const state = useToggleState({ ...props, isSelected: checked });

  const { buttonProps } = useToggleButton(
    { ...otherProps, isDisabled: disabled },
    state,
    ref as React.RefObject<HTMLButtonElement>,
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <Flex alignItems="center">
      {label && (
        <Box mr={2}>
          <Text fontWeight="medium" styles={{ lineHeight: 1 }}>
            {label}
          </Text>
        </Box>
      )}
      <button
        {...mergeProps(buttonProps, focusProps)}
        className={css({
          px: 0.5,
          h: 5,
          width: 11,
          _disabled: {
            opacity: 0.3,
            pointerEvents: 'none',
          },
          bg: state.isSelected ? 'brand.base' : 'neutral.primary',
          _hover: {
            bg: !state.isSelected ? 'ink.70' : 'brand.base',
            _dark: {
              bg: !state.isSelected ? 'slate.4' : 'brand.base',
            },
          },
          transition: 'background-color 0.2s ease',
          rounded: 'full',
          outlineColor: isFocusVisible ? 'brand.base' : 'transparent',
          outlineStyle: 'solid',
          outlineWidth: 'thick',
          outlineOffset: 0.5,
          cursor: 'pointer',
        })}
      >
        <span
          className={circle({
            h: 4,
            w: 4,
            bg: 'paper',
            position: 'relative',
            left: state.isSelected ? 6 : 0,
            transition: 'left 0.2s ease',
          })}
        />
      </button>
    </Flex>
  );
});

Switch.displayName = 'Switch';

export default Switch;
