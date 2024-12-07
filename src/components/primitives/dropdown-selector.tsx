import { Tooltip } from '@components/feedback';
import { IcoCaretDown, IcoCaretUp, IcoCheckmark, IcoQuestionCircleFill } from '@components/icons';
import { Text } from '@components/primitives';
import { css } from '@styled/css';
import { Box, HStack, VStack } from '@styled/jsx';
import { token } from '@styled/tokens';
import {
  Children,
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { AriaButtonProps, mergeProps, useButton, useFocusRing, useKeyboard } from 'react-aria';

export interface DropdownSelectorProps extends AriaButtonProps {
  children: ReactNode;
  onSelect: (value: string) => void;
  label?: string;
  placeholder?: string;
  selectedValue?: string;
  size?: 'sm' | 'md' | 'lg';
  tooltipContent?: string;
  disabled?: boolean;
  viewMax?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export interface DropdownOptionProps {
  value: string;
  label: string;
  isFocused?: boolean;
  size?: DropdownSelectorProps['size'];
}

interface OptionData {
  value: string;
  label: string;
}

export interface DropdownContextType {
  selectedOption: OptionData | null;
  setSelectedOption: (option: OptionData) => void;
}

const SIZES = {
  sm: { caret: 16, check: 14, height: '2.625rem', top: 48, width: '0.75rem', mult: 2.25 },
  md: { caret: 17, check: 15, height: '2.8125rem', top: 52, width: '0.85rem', mult: 2.25 },
  lg: { caret: 18, check: 16, height: '3rem', top: 55, width: '1rem', mult: 2.5 },
};

const DropdownContext = createContext<DropdownContextType>({
  selectedOption: null,
  setSelectedOption: () => {},
});

export const DropdownOption = ({ value, label, size = 'lg', isFocused }: DropdownOptionProps) => {
  const { selectedOption, setSelectedOption } = useContext(DropdownContext);
  const isSelected = selectedOption?.value === value;
  const sizeProps = SIZES[size];

  const handleSelectOption = useCallback(() => {
    setSelectedOption({ value, label });
  }, [setSelectedOption, value, label]);

  return (
    <HStack
      py={1.5}
      gap={2}
      bg={isSelected ? 'brand.base' : isFocused ? 'brand.lightest' : ''}
      _hover={!isSelected ? { bg: 'brand.lightest' } : {}}
      onClick={handleSelectOption}
      style={{ paddingLeft: sizeProps.width, paddingRight: sizeProps.width }}
    >
      <Box style={{ minWidth: sizeProps.width }}>
        {isSelected && (
          <IcoCheckmark width={sizeProps.check} height={sizeProps.check} color={token('colors.text.quaternary')} />
        )}
      </Box>
      <Text
        size={size}
        fontWeight="medium"
        fontColor={isSelected ? 'text.quaternary' : 'text.primary'}
        styles={{ textAlign: 'left' }}
      >
        {label}
      </Text>
    </HStack>
  );
};

export const DropdownSelector = ({
  children,
  onSelect,
  label,
  placeholder = 'Select one',
  selectedValue,
  size = 'lg',
  tooltipContent,
  disabled,
  viewMax = 5,
  ...props
}: DropdownSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sizeProps = SIZES[size];
  const maxHeight = viewMax * sizeProps.mult + 1;

  const toggleDropdown = useCallback(() => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      setFocusedIndex(null);
      setTimeout(() => dropdownRef.current?.focus());
    }
  }, [isOpen]);

  const handleSelect = useCallback(
    (option: OptionData) => {
      onSelect(option.value);
      setIsOpen(false);
    },
    [onSelect],
  );

  const selectedLabel = useMemo(() => {
    const childElements = Children.toArray(children) as ReactElement<DropdownOptionProps>[];
    const matchedChild = childElements.find(child => child.props.value === selectedValue);
    return matchedChild ? matchedChild.props.label : placeholder;
  }, [selectedValue, children]);

  const { buttonProps } = useButton(
    {
      ...props,
      isDisabled: disabled,
      onPress: toggleDropdown,
    },
    buttonRef,
  );

  const { focusProps, isFocusVisible } = useFocusRing();

  const { keyboardProps } = useKeyboard({
    onKeyDown: event => {
      if (!isOpen) return;

      let newFocusedIndex = focusedIndex;
      const childArray = Children.toArray(children);

      switch (event.key) {
        case 'ArrowUp':
          event.preventDefault();
          if (focusedIndex === null) {
            setFocusedIndex(Children.count(children) - 1);
          } else {
            newFocusedIndex = focusedIndex > 0 ? focusedIndex - 1 : Children.count(children) - 1;
            setFocusedIndex(newFocusedIndex);
          }
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (focusedIndex === null) {
            setFocusedIndex(0);
          } else {
            newFocusedIndex = focusedIndex < Children.count(children) - 1 ? focusedIndex + 1 : 0;
            setFocusedIndex(newFocusedIndex);
          }
          break;
        case 'Enter':
          event.preventDefault();
          buttonRef.current?.focus();
          if (focusedIndex === null) return;
          if (focusedIndex >= 0 && focusedIndex < childArray.length) {
            const selectedChild = childArray[focusedIndex] as ReactElement<DropdownOptionProps>;
            if (selectedChild) {
              onSelect(selectedChild.props.value);
            }
          }
          break;
        case 'Escape':
          setIsOpen(false);
          buttonRef.current?.focus();
          break;
        default:
          break;
      }
    },
  });

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <DropdownContext.Provider
      value={{ selectedOption: { value: selectedValue ?? '', label: selectedLabel }, setSelectedOption: handleSelect }}
    >
      <VStack gap={2} w="full" alignItems="flex-start">
        {(label || tooltipContent) && (
          <HStack
            gap={2}
            pointerEvents={disabled ? 'none' : 'auto'}
            opacity={disabled ? 0.3 : ''}
            transition={'all linear 120ms'}
          >
            {label && (
              <Text size="sm" fontWeight="medium">
                {label}
              </Text>
            )}

            {tooltipContent && (
              <Tooltip content={tooltipContent}>
                <IcoQuestionCircleFill className={css({ w: 4, h: 4, color: 'neutral.primary' })} />
              </Tooltip>
            )}
          </HStack>
        )}

        <button
          className={css({
            w: 'full',
            h: 'fit-content',
            bg: 'surface.primary',
            borderWidth: 'thin',
            borderColor: 'neutral.secondary',
            rounded: 'xl',
            transition: 'all linear 120ms',
            position: 'relative',
            cursor: 'pointer',
            outlineColor: 'brand.base',
            outlineStyle: isFocusVisible ? 'solid' : 'none',
            outlineWidth: 'thick',
            outlineOffset: 0.5,
            _hover: { borderColor: 'neutral.primary' },
            _disabled: { opacity: 0.3, pointerEvents: 'none' },
          })}
          ref={buttonRef}
          {...mergeProps(buttonProps, focusProps, keyboardProps)}
        >
          <HStack w="full" p={4} justifyContent="space-between" style={{ height: sizeProps.height }}>
            <Text truncate size={size} fontColor={selectedValue ? 'text.primary' : 'text.tertiary'}>
              {selectedLabel}
            </Text>
            {isOpen ? (
              <IcoCaretUp width={sizeProps.caret} height={sizeProps.caret} color={token('colors.brand.base')} />
            ) : (
              <IcoCaretDown width={sizeProps.caret} height={sizeProps.caret} color={token('colors.brand.base')} />
            )}
          </HStack>

          {isOpen && (
            <Box
              ref={dropdownRef}
              tabIndex={-1}
              py={2}
              bg="surface.primary"
              position="absolute"
              w="full"
              rounded="input"
              boxShadow="4px 8px 20px 0px rgba(0, 0, 0, 0.15)"
              style={{ maxHeight: `${maxHeight}rem`, top: sizeProps.top }}
              overflowY="auto"
              outline="none"
              zIndex="max"
            >
              {Children.map(children, (child, index) =>
                cloneElement(child as ReactElement<DropdownOptionProps>, {
                  isFocused: index === focusedIndex,
                  size,
                }),
              )}
            </Box>
          )}
        </button>
      </VStack>
    </DropdownContext.Provider>
  );
};

DropdownOption.displayName = 'DropdownOption';
DropdownSelector.displayName = 'DropdownSelector';
