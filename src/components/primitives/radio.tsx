import Text from '@components/primitives/text';
import { Box, Circle, Flex } from '@styled/jsx';
import { flex } from '@styled/patterns';
import { PropsWithChildren, createContext, forwardRef, useCallback, useContext, useRef } from 'react';
import {
  AriaRadioGroupProps,
  AriaRadioProps,
  VisuallyHidden,
  mergeProps,
  useFocusRing,
  useHover,
  usePress,
} from 'react-aria';

export interface RadioGroupProps extends AriaRadioGroupProps, PropsWithChildren {
  onChange: (value: string) => void;
  selectedValue?: string;
  vertical?: boolean;
}

export interface RadioProps extends AriaRadioProps {
  label?: string;
}

const RadioContext = createContext<{
  selectedValue: string | undefined;
  setSelectedValue: (value: string) => void;
}>({
  selectedValue: undefined,
  setSelectedValue: () => {},
});

export const RadioGroup = (props: RadioGroupProps) => {
  const { children, onChange, selectedValue, vertical } = props;

  const handleSelect = useCallback(
    (value: string) => {
      onChange(value);
    },
    [onChange],
  );

  return (
    <Flex direction={vertical ? 'column' : 'row'} gap={vertical ? 5 : 10} role="radiogroup">
      <RadioContext.Provider value={{ selectedValue, setSelectedValue: handleSelect }}>
        {children}
      </RadioContext.Provider>
    </Flex>
  );
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props, forwardedRef) => {
  const { label, value } = props;
  const state = useContext(RadioContext);

  const internalRef = useRef<HTMLInputElement>(null);
  const ref = forwardedRef || internalRef;

  const handlePress = useCallback(() => {
    state.setSelectedValue(value);
  }, [state, value]);

  const { hoverProps } = useHover({});
  const { focusProps, isFocusVisible } = useFocusRing();
  const { pressProps } = usePress({
    onPress: handlePress,
  });

  const isSelected = state.selectedValue === value;

  const tabIndex = isSelected ? 0 : -1;

  return (
    <label className={flex({ alignItems: 'center' })}>
      <VisuallyHidden>
        <input
          {...mergeProps(pressProps, focusProps, hoverProps)}
          ref={ref}
          type="radio"
          checked={isSelected}
          tabIndex={tabIndex}
          readOnly
        />
      </VisuallyHidden>
      <Flex
        justifyContent="center"
        alignItems="center"
        borderWidth="thick"
        borderColor={isFocusVisible || isSelected ? 'brand.base' : 'text.tertiary'}
        transition="border-color 0.2s ease"
        outlineColor="brand.base"
        outlineStyle={isFocusVisible ? 'solid' : 'none'}
        outlineWidth="thick"
        outlineOffset={0.5}
        _hover={{ borderColor: 'brand.base' }}
        cursor="pointer"
        w={6}
        h={6}
        rounded="full"
        aria-hidden="true"
      >
        {isSelected && <Circle size={3} bg="brand.base" />}
      </Flex>
      <Box ml={3}>
        <Text size="lg" fontWeight="medium">
          {label}
        </Text>
      </Box>
    </label>
  );
});

RadioGroup.displayName = 'RadioGroup';
Radio.displayName = 'Radio';
