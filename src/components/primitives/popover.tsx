import { Button, ButtonProps } from '@components/primitives';
import { useToggleState } from '@hooks/useToggleState';
import { cx } from '@styled/css';
import { Box, Center } from '@styled/jsx';
import { vstack } from '@styled/patterns';
import { token } from '@styled/tokens';
import { createHost, createSlot } from 'create-slots';
import {
  Children,
  ComponentProps,
  PropsWithChildren,
  cloneElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
} from 'react';
import type { AriaPopoverProps, Placement } from 'react-aria';
import { Overlay, mergeProps, useOverlayTrigger, usePopover } from 'react-aria';

interface OverlayTriggerProps extends ButtonProps {
  isOpen?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  placement?: Placement;
  trigger?: 'click' | 'hover';
}

interface OverlayTriggerState {
  readonly isOpen: boolean;
  setOpen(isOpen: boolean): void;
  open(): void;
  close(): void;
  toggle(): void;
}

type PopoverContentProps = Omit<AriaPopoverProps, 'popoverRef' | 'triggerRef'> & {
  children?: ReactNode;
  state?: OverlayTriggerState;
} & ComponentProps<'div'>;

export const DEFAULT_PLACEMENT: Placement = 'bottom left';
export const DEFAULT_OFFSET = 8;

const DEFAULT_TRIGGER: string = 'hover';

const PopoverContent = createSlot(({ children }: PopoverContentProps) => <>{children}</>);

const Trigger = createSlot(({ children, ...props }) => {
  const { onPress, ...restProps } = props;
  return (
    <Center>
      {Children.map(children, child => {
        return cloneElement(child, restProps);
      })}
    </Center>
  );
});

const LeadingIcon = createSlot(props => <Button.LeadingIcon {...props} />);

const TrailingIcon = createSlot(props => <Button.TrailingIcon {...props} />);

export type PopoverProps = PropsWithChildren<OverlayTriggerProps>;

export const PopoverHost = ({ children, ...props }: PopoverProps) => {
  return createHost(children, slots => {
    const { isOpen, defaultOpen, onOpenChange, trigger = DEFAULT_TRIGGER, iconSize, onPress, ...restProps } = props;
    const { isSelected, setSelected: setOpen } = useToggleState({
      isOpen: isOpen,
      defaultSelected: defaultOpen,
      onChange: onOpenChange,
      ...props,
    });

    const isPopoverOpen = isOpen !== undefined ? isOpen : isSelected;
    const safeZoneRadius = 24;

    const state = useMemo(
      () => ({
        isOpen: isPopoverOpen,
        open: () => {
          setOpen(true);
        },
        close: () => {
          setOpen(false);
        },
        setOpen(value: boolean) {
          setOpen(value);
        },
        toggle() {},
      }),
      [isPopoverOpen],
    );

    const popoverContentProps = slots.getProps(PopoverContent);

    const triggerRef = useRef<HTMLDivElement>(null);
    const { triggerProps, overlayProps } = useOverlayTrigger({ type: 'dialog' }, state, triggerRef);

    const contentRef = useRef<HTMLDivElement>(null);
    const { popoverProps, underlayProps } = usePopover(
      {
        placement: props.placement || DEFAULT_PLACEMENT,
        offset: DEFAULT_OFFSET,
        popoverRef: contentRef,
        triggerRef,
        ...popoverContentProps,
      },
      state,
    );

    const contentProps = mergeProps(popoverContentProps, popoverProps);

    // Need to override zIndex set by react-aria so popover displays over iframe
    if (contentProps?.style?.zIndex) {
      contentProps.style.zIndex = token('zIndex.max');
    }

    const handleTrigger = useCallback(() => {
      state.open();
    }, [state]);

    const handleMouseLeave = useCallback(
      (event: MouseEvent) => {
        const buttonRect = triggerRef.current?.getBoundingClientRect();
        const popoverRect = contentRef.current?.getBoundingClientRect();

        if (buttonRect && popoverRect) {
          const withinButtonSafeZone =
            event.clientX >= buttonRect.left - safeZoneRadius &&
            event.clientX <= buttonRect.right + safeZoneRadius &&
            event.clientY >= buttonRect.top - safeZoneRadius &&
            event.clientY <= buttonRect.bottom + safeZoneRadius;

          const withinPopoverSafeZone =
            event.clientX >= popoverRect.left - safeZoneRadius &&
            event.clientX <= popoverRect.right + safeZoneRadius &&
            event.clientY >= popoverRect.top - safeZoneRadius &&
            event.clientY <= popoverRect.bottom + safeZoneRadius;

          if (!withinButtonSafeZone && !withinPopoverSafeZone) {
            state.close();
          }
        }
      },
      [state],
    );

    const focusFirstInteractiveElement = () => {
      if (contentRef.current) {
        const interactiveElements = contentRef.current.querySelectorAll(
          'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (interactiveElements.length > 0) {
          (interactiveElements[0] as HTMLElement).focus();
        }
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        if (isOpen) {
          state.close();
        } else {
          state.open();
          setTimeout(focusFirstInteractiveElement, 0);
        }
      }
    };

    useEffect(() => {
      document.addEventListener('mousemove', handleMouseLeave);
      return () => {
        document.removeEventListener('mousemove', handleMouseLeave);
      };
    }, [handleMouseLeave]);

    const triggerEle = slots.get(Trigger);
    const leadingIconProps = slots.getProps(LeadingIcon);
    const trailingIconProps = slots.getProps(TrailingIcon);
    const customIconSize = iconSize ? { height: iconSize, width: iconSize } : {};

    return (
      <>
        {triggerEle ? (
          <Box display="inline-block" ref={triggerRef} {...restProps}>
            {triggerEle && { ...triggerEle, props: { ...triggerEle.props, ...triggerProps } }}
          </Box>
        ) : (
          <Box display="inline-block" ref={triggerRef}>
            <Button
              {...mergeProps(triggerProps, restProps)}
              onKeyDown={handleKeyDown}
              onHover={() => trigger === 'hover' && handleTrigger()}
              onPress={() => trigger === 'click' && handleTrigger()}
            >
              {leadingIconProps && <Button.LeadingIcon {...leadingIconProps} {...customIconSize} />}
              {trailingIconProps && <Button.TrailingIcon {...trailingIconProps} {...customIconSize} />}
            </Button>
          </Box>
        )}
        {isPopoverOpen && (
          <Overlay {...overlayProps}>
            <div {...underlayProps} className="underlay" />
            <div
              ref={contentRef}
              {...contentProps}
              className={cx(
                vstack({
                  bg: 'surface.secondary',
                  p: 3,
                  gap: 0,
                  color: 'text.secondary',
                  borderWidth: 1,
                  borderColor: 'neutral.secondary',
                  borderRadius: 'xl',
                  boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.10)',
                  maxW: 52,
                  alignItems: 'start',
                }),
                contentProps.className,
              )}
            >
              {slots.get(PopoverContent)}
            </div>
          </Overlay>
        )}
      </>
    );
  });
};

export const Popover = Object.assign(PopoverHost, {
  Trigger,
  LeadingIcon,
  TrailingIcon,
  Content: PopoverContent,
});

export default Popover;
