import { css } from '@styled/css';
import { Box, Flex } from '@styled/jsx';
import { createHost, createSlot } from 'create-slots';
import React, {
  Children,
  PropsWithChildren,
  RefObject,
  cloneElement,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { AriaButtonProps, mergeProps, useButton, useFocusRing, useHover } from 'react-aria';

export interface SegmentedControlProps extends PropsWithChildren {
  onChange: (value: string) => void;
  selectedTab: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export interface TabProps extends AriaButtonProps {
  label: string;
  id: string;
}

type TabRefs = {
  [key: string]: HTMLButtonElement | null;
};

const SegmentedControlContext = createContext<{
  currentTab: string | undefined;
  setCurrentTab: (id: string) => void;
  size?: 'sm' | 'md' | 'lg';
  tabRefs: RefObject<TabRefs>;
  disabled: boolean;
}>({
  currentTab: undefined,
  setCurrentTab: () => {},
  tabRefs: { current: {} },
  disabled: false,
});

const Icon = createSlot(({ children, ...props }) => {
  return (
    <Flex alignItems="center" justifyContent="center">
      {Children.map(children, child => {
        return cloneElement(child, props);
      })}
    </Flex>
  );
});

export const SegmentedControl = (props: SegmentedControlProps) => {
  const { children, onChange, selectedTab, size = 'md', disabled = false } = props;
  const [currentTab, setCurrentTab] = useState(selectedTab);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const observer = useRef<ResizeObserver>();
  const [indicatorStyle, setIndicatorStyle] = useState({ transform: 'translateX(4px)', width: '', height: '' });

  useEffect(() => {
    if (selectedTab !== undefined) {
      setCurrentTab(selectedTab);
    }
  }, [selectedTab]);

  useEffect(() => {
    if (!observer.current) {
      observer.current = new ResizeObserver(() => {
        const { offsetLeft, clientWidth, clientHeight } = tabRefs.current[currentTab]!;
        setIndicatorStyle({
          transform: `translateX(${offsetLeft}px)`,
          width: `${clientWidth}px`,
          height: `${clientHeight}px`,
        });
      });
    }

    observer.current.observe(tabRefs.current[currentTab]!);

    return () => {
      if (observer.current && tabRefs.current[currentTab]) {
        observer.current.unobserve(tabRefs.current[currentTab]!);
      }
    };
  }, []);

  useEffect(() => {
    if (currentTab && tabRefs.current[currentTab]) {
      const { offsetLeft, clientWidth, clientHeight } = tabRefs.current[currentTab]!;
      setIndicatorStyle({
        transform: `translateX(${offsetLeft}px)`,
        width: `${clientWidth}px`,
        height: `${clientHeight}px`,
      });
    }
  }, [currentTab, size]);

  const handleSelect = useCallback(
    (id: string) => {
      setCurrentTab(id);
      onChange(id);
    },
    [setCurrentTab, onChange],
  );

  return (
    <Flex
      w="full"
      role="tablist"
      p={1}
      rounded="full"
      bg="ink.10"
      _dark={{ bg: 'slate.2' }}
      aria-label="Segmented Control"
      position="relative"
    >
      <Box
        position="absolute"
        bg="paper"
        _dark={{ bg: 'slate.4' }}
        boxShadow="0px 4px 20px 0px {colors.ink.90/10}"
        transition="transform 0.2s ease"
        rounded="inherit"
        ml={-1}
        style={{ ...indicatorStyle }}
      />
      <SegmentedControlContext.Provider value={{ currentTab, setCurrentTab: handleSelect, size, tabRefs, disabled }}>
        {children}
      </SegmentedControlContext.Provider>
    </Flex>
  );
};

const TabComponent = forwardRef<HTMLButtonElement, TabProps>((props, forwardedRef) => {
  const { label, id } = props;
  const { currentTab, setCurrentTab, tabRefs, size, disabled } = useContext(SegmentedControlContext);

  const isSelected = currentTab === id;
  const height = size === 'sm' ? 8 : size === 'md' ? 10 : 13;
  const iconSize = size === 'sm' ? 16 : 20;

  const internalRef = useRef<HTMLButtonElement>(null);
  const ref = forwardedRef || internalRef;

  useEffect(() => {
    if (typeof ref === 'object' && tabRefs.current) {
      tabRefs.current[id] = ref.current;
    }
  }, [id]);

  const handlePress = useCallback(() => {
    setCurrentTab(id);
  }, [setCurrentTab, id]);

  const { buttonProps, isPressed } = useButton(
    { onPress: handlePress, isDisabled: disabled },
    ref as React.RefObject<HTMLButtonElement>,
  );
  const { hoverProps } = useHover({});
  const { isFocusVisible, focusProps } = useFocusRing();

  return createHost(props.children, slots => {
    const icon = slots.get(Icon);

    return (
      <button
        className={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          h: height,
          w: 'full',
          rounded: 'button',
          zIndex: 0,
          cursor: 'pointer',
          color: isSelected ? 'text.primary' : 'text.secondary',
          fontSize: size,
          fontWeight: 'semibold',
          whiteSpace: 'nowrap',
          bg: 'transparent',
          outlineColor: isFocusVisible ? 'brand.base' : 'transparent',
          outlineStyle: 'solid',
          outlineWidth: 'thick',
          transition: isSelected ? 'background 0s' : 'background 0.2s ease',
          _disabled: { opacity: '0.3', pointerEvents: 'none' },
          _hover: {
            bg: isSelected ? 'transparent' : 'ink.20',
            _dark: { bg: isSelected ? 'transparent' : 'slate.1' },
          },
        })}
        ref={ref}
        {...mergeProps(buttonProps, hoverProps, focusProps)}
        disabled={disabled}
      >
        <Flex opacity={isPressed && !isSelected ? 0.5 : 1} align="center" justify="center">
          {icon && {
            ...icon,
            props: {
              ...icon.props,
              className: css({ mr: 1, color: isSelected ? 'text.primary' : 'text.secondary' }),
              width: iconSize,
              height: iconSize,
            },
          }}
          {label}
        </Flex>
      </button>
    );
  });
});

export const Tab = Object.assign(TabComponent, {
  Icon,
});

TabComponent.displayName = 'Tab';
SegmentedControl.displayName = 'SegmentedControl';
