import { Text } from '@components/primitives';
import { useClickAway } from '@hooks/useClickAway';
import { useToggleState } from '@hooks/useToggleState';
import { tooltip } from '@recipes/tooltip';
import { Box } from '@styled/jsx';
import { PropsWithChildren, ReactElement, ReactNode, cloneElement, forwardRef, useMemo, useRef, useState } from 'react';
import { TooltipTriggerProps, mergeProps, useTooltipTrigger } from 'react-aria';

type Position = 'top' | 'bottom' | 'left' | 'right';

type Placement =
  | 'top'
  | 'top right'
  | 'top left'
  | 'left'
  | 'left top'
  | 'left bottom'
  | 'right'
  | 'right top'
  | 'right bottom'
  | 'bottom'
  | 'bottom right'
  | 'bottom left';

export type TooltipProps = PropsWithChildren<
  {
    content: ReactNode;
    width?: number | string;
    placement?: Placement;
    expand?: boolean;
  } & TooltipTriggerProps
>;

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, forwardedRef) => {
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0;

  const {
    children,
    content,
    width = 288,
    closeDelay = 2500,
    defaultOpen,
    placement = 'top',
    expand = false,
    ...restProps
  } = props;
  const [isClicked, setIsClicked] = useState(false);

  const { isSelected: isOpen, setSelected: setOpen } = useToggleState({
    isOpen: props.isOpen,
    defaultSelected: defaultOpen,
    onChange(open) {
      if (!open) {
        setIsClicked(false);
      }
    },
    ...props,
  });

  const state = useMemo(
    () => ({
      isOpen,
      open: () => {
        setOpen(true);
      },
      close: (immediate?: boolean) => {
        if (immediate) {
          setOpen(false);
          return;
        }
        if (!isTouchDevice) {
          if (isClicked) {
            setTimeout(() => {
              setOpen(false);
              setIsClicked(false);
            }, closeDelay);
          }
          if (!isClicked) {
            setOpen(false);
          }
        } else {
          setOpen(false);
        }
      },
    }),
    [isOpen, isClicked],
  );

  const triggerRef = useRef<HTMLDivElement>(null);
  const { triggerProps, tooltipProps } = useTooltipTrigger(props, state, triggerRef);

  triggerProps.onClick = () => {
    state.open();
    setIsClicked(true);
  };

  const clickAwayRef = useClickAway<HTMLDivElement>(() => {
    state.close(true);
  });

  const position = placement.split(' ')[0] as Position;
  const classes = tooltip({ expand, isOpen: state.isOpen, placement, position });

  return (
    <Box
      ref={clickAwayRef}
      className={classes.trigger}
      onMouseLeave={() => {
        state.close();
      }}
      onFocus={() => {
        state.open();
      }}
      onBlur={() => {
        state.close();
      }}
    >
      {cloneElement(children as ReactElement, {
        ...triggerProps,
        tabIndex: 0,
      })}
      <Box
        ref={forwardedRef}
        aria-describedby="tooltip"
        role="tooltip"
        className={classes.content}
        style={{ width }}
        onMouseEnter={() => {
          state.open();
        }}
        {...mergeProps(tooltipProps, restProps)}
      >
        <Text size="sm">{content}</Text>
        {state.isOpen && (
          <Box
            onMouseEnter={() => {
              state.open();
            }}
            className={classes.spacer}
          />
        )}
      </Box>
    </Box>
  );
});

Tooltip.displayName = 'Tooltip';

export default Tooltip;
