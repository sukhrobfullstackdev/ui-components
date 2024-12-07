import { useDisplayState } from '@hooks/useDisplayState';
import { css } from '@styled/css';
import { Center } from '@styled/jsx';

export interface AnimatedSpinnerProps {
  size?: 'lg' | 'sm';
  isVisible?: boolean;
  onShown?: () => void;
  onHidden?: () => void;
}

const spinnerSpecs = {
  lg: {
    size: 56,
    radius: 28,
    strokeWidth: 5,
    animation: 'animateSpinnerLarge',
  },
  sm: {
    size: 20,
    radius: 10,
    strokeWidth: 3,
    animation: 'animateSpinnerSmall',
  },
};

export const AnimatedSpinner = ({
  size = 'lg',
  isVisible = true,
  onShown = () => {},
  onHidden = () => {},
}: AnimatedSpinnerProps) => {
  const { size: spinnerSize, radius, strokeWidth, animation } = spinnerSpecs[size];
  const { onHide, onShow } = useDisplayState({
    animate: true,
    show: isVisible,
    onHidden,
    onShown,
  });

  return (
    <Center
      inline
      animation={isVisible ? 'popIn 150ms' : 'popOut 150ms'}
      animationFillMode="forwards"
      onAnimationEnd={isVisible ? onShow : onHide}
    >
      <svg
        width={spinnerSize}
        height={spinnerSize}
        viewBox={`0 0 ${spinnerSize} ${spinnerSize}`}
        fill="none"
        stroke="none"
        xmlns="http://www.w3.org/2000/svg"
        className={css({ animation: 'spin 1.5s linear infinite' })}
      >
        <circle
          className={css({
            stroke: 'text.primary',
            transformOrigin: 'center center',
          })}
          style={{ animation: `${animation} 2s ease-in-out infinite` }}
          cx="50%"
          cy="50%"
          r={radius - strokeWidth / 2}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </svg>
    </Center>
  );
};
