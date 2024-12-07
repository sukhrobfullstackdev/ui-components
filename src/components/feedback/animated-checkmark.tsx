import { IcoCheckmark } from '@components/icons';
import { useDisplayState } from '@hooks/useDisplayState';
import { Circle } from '@styled/jsx';
import { token } from '@styled/tokens';

export interface AnimatedCheckmarkProps {
  size?: 'lg' | 'sm';
  isVisible?: boolean;
  onShown?: () => void;
  onHidden?: () => void;
}

const checkmarkSpecs = {
  lg: {
    circleSize: 14,
    checkmarkSize: 30,
  },
  sm: {
    circleSize: 5,
    checkmarkSize: 12,
  },
};

export const AnimatedCheckmark = ({
  size = 'lg',
  isVisible = true,
  onShown = () => {},
  onHidden = () => {},
}: AnimatedCheckmarkProps) => {
  const { circleSize, checkmarkSize } = checkmarkSpecs[size];
  const { onHide, onShow } = useDisplayState({
    animate: true,
    show: isVisible,
    onHidden,
    onShown,
  });

  return (
    <Circle
      size={circleSize}
      bg="positive.lightest"
      animation={isVisible ? 'popIn 150ms' : 'popOut 150ms'}
      animationFillMode="forwards"
      onAnimationEnd={isVisible ? onShow : onHide}
    >
      <IcoCheckmark width={checkmarkSize} height={checkmarkSize} color={token('colors.positive.base')} />
    </Circle>
  );
};
