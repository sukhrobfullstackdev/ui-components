import { useDisplayState } from '@hooks/useDisplayState';
import { overlay } from '@recipes/overlay';
import { VStack } from '@styled/jsx';
import { ComponentProps } from 'react';
export interface OverlayProps extends ComponentProps<'div'> {
  animate?: boolean;
  backgroundType?: 'none' | 'blurred' | 'transparent' | 'solid';
  hide?: boolean;
  fullscreen?: boolean;
  onAnimated?: () => void;
  onHidden?: () => void;
}

export const Overlay = ({
  animate = true,
  backgroundType = 'none',
  hide = false,
  fullscreen = false,
  onAnimated = () => {},
  onHidden = () => {},
  children,
}: OverlayProps) => {
  const classes = overlay({ animate, backgroundType, hide, fullscreen });
  const { displayed, onHide, onShow } = useDisplayState({
    animate,
    show: !hide,
    onHidden,
    onShown: onAnimated,
  });

  if (!displayed) {
    return null;
  }

  const hasBackground = backgroundType !== 'none';

  return (
    <VStack alignItems="center" className={classes.container}>
      {hasBackground && <div className={classes.bg} onAnimationEnd={!hide ? onShow : onHide} />}
      {children}
    </VStack>
  );
};

Overlay.displayName = 'Overlay';
