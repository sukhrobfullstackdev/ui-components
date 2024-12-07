import { useDisplayState } from '@hooks/useDisplayState';
import { modal } from '@recipes/modal';
import { VStack } from '@styled/jsx';
import { ComponentProps } from 'react';
export interface ModalProps extends ComponentProps<'div'> {
  animate?: boolean;
  paddingType?: 'none' | 'sm' | 'md' | 'lg';
  gap?: number;
  isOpen?: boolean;
  onAnimated?: () => void;
  onClosed?: () => void;
  showBorder?: boolean;
  fullscreen?: boolean;
}

const isMobile = () => {
  if (typeof navigator === 'undefined') {
    return false;
  }
  const ua = navigator.userAgent;
  return /Mobi|Android|iPhone|iPad/i.test(ua);
};

const isMobileBrowser = isMobile();

export const Modal = ({
  animate = true,
  paddingType = 'none',
  gap = 2.5,
  isOpen = true,
  onAnimated = () => {},
  onClosed = () => {},
  showBorder = true,
  fullscreen = false,
  children,
}: ModalProps) => {
  const classes = modal({ animate, isOpen, paddingType, showBorder, fullscreen, isMobileBrowser });
  const { displayed, onHide, onShow } = useDisplayState({
    animate,
    show: isOpen,
    onHidden: onClosed,
    onShown: onAnimated,
  });

  if (!displayed) {
    return null;
  }

  return (
    <div className={classes.wrapper} onAnimationEnd={isOpen ? onShow : onHide}>
      <VStack alignItems="center" gap={gap} className={classes.content}>
        {children}
      </VStack>
    </div>
  );
};

Modal.displayName = 'Modal';
