import { IcoCaretRight, IcoDismiss } from '@components/icons';
import { callout } from '@recipes/callout';
import { HStack, VStack } from '@styled/jsx';
import { token } from '@styled/tokens';
import { forwardRef, useRef, useState } from 'react';
import { useButton } from 'react-aria';
import { StatusIcon } from './status-icon';

interface BaseCalloutProps {
  label: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'branded' | 'success' | 'error' | 'warning' | 'neutral';
  icon?: boolean;
}

interface DefaultCalloutProps extends BaseCalloutProps {
  dismissible?: boolean;
  onPress?: never;
}

interface DismissibleCalloutProps extends BaseCalloutProps {
  dismissible: true;
  onPress?: never;
}

interface InteractiveCalloutProps extends BaseCalloutProps {
  dismissible?: false;
  onPress: () => void;
}

// Disallows `onPress` and `dismissible` to be set at the same time
export type CalloutProps = DefaultCalloutProps | DismissibleCalloutProps | InteractiveCalloutProps;

export const Callout = forwardRef<HTMLDivElement, CalloutProps>((props, forwardedRef) => {
  const { label, description, size = 'md', variant = 'branded', icon = false, dismissible = false, onPress } = props;
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  const iconSizes = {
    sm: token('spacing.4'),
    md: token('spacing.5'),
    lg: token('spacing.6'),
  };
  const iconSize = description ? iconSizes.sm : iconSizes[size];

  const classes = callout({
    size,
    variant,
    icon,
    description: !!description,
    isDismissed,
    dismissible,
    interactive: !!onPress,
  });

  const dismissCallout = () => {
    setIsDismissed(true);
  };

  const internalRef = useRef(null);
  const ref = forwardedRef || internalRef;

  const { buttonProps } = useButton({ onPress }, ref as React.RefObject<HTMLButtonElement>);

  const CalloutBase = () => {
    return (
      <HStack className={!onPress ? classes.container : ''} onAnimationEnd={() => setIsVisible(false)} ref={ref}>
        <VStack alignItems={'flex-start'} gap={1.5}>
          <HStack w={'full'} justifyContent={'space-between'}>
            <HStack alignItems={'center'}>
              {icon && <StatusIcon variant={variant} className={classes.icon} width={iconSize} height={iconSize} />}
              <p className={classes.label}>{label}</p>
            </HStack>

            {dismissible && (
              <button className={classes.button} onClick={dismissCallout} aria-label="dismiss callout">
                <IcoDismiss className={classes.button} width={iconSizes.sm} height={iconSizes.sm} />
              </button>
            )}
          </HStack>
          {!!description && <p className={classes.description}>{description}</p>}
        </VStack>
        {!!onPress && <IcoCaretRight className={classes.button} width={iconSizes.sm} height={iconSizes.sm} />}
      </HStack>
    );
  };

  if (!isVisible) {
    return null;
  }

  if (onPress) {
    return (
      <button {...buttonProps} className={classes.container}>
        <CalloutBase />
      </button>
    );
  }

  return <CalloutBase />;
});

Callout.displayName = 'Callout';
