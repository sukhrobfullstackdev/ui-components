import { IcoDismiss } from '@components/icons';
import { useDisplayState } from '@hooks/useDisplayState';
import { Circle } from '@styled/jsx';
import { token } from '@styled/tokens';

export interface AnimatedDismissProps {
  size?: 'lg' | 'sm';
  isVisible?: boolean;
  onShown?: () => void;
  onHidden?: () => void;
}

const dismissSpecs = {
  lg: {
    circleSize: 14,
    dismissSize: 30,
  },
  sm: {
    circleSize: 5,
    dismissSize: 12,
  },
};

export const AnimatedDismiss = ({
  size = 'lg',
  isVisible = true,
  onShown = () => {},
  onHidden = () => {},
}: AnimatedDismissProps) => {
  const { circleSize, dismissSize } = dismissSpecs[size];
  const { onHide, onShow } = useDisplayState({
    animate: true,
    show: isVisible,
    onHidden,
    onShown,
  });

  return (
    <Circle
      size={circleSize}
      bg="negative.lightest"
      animation={isVisible ? 'popIn 150ms' : 'popOut 150ms'}
      animationFillMode="forwards"
      onAnimationEnd={isVisible ? onShow : onHide}
    >
      <IcoDismiss width={dismissSize} height={dismissSize} color={token('colors.negative.base')} />
    </Circle>
  );
};
