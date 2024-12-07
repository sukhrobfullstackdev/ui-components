import { css } from '@styled/css';
import { Center } from '@styled/jsx';

export interface LoadingSpinnerProps {
  inverted?: boolean;
  neutral?: boolean;
  progress?: number;
  size?: number;
  strokeWidth?: number;
}

export const LoadingSpinner = ({
  inverted,
  neutral,
  progress = 30,
  size = 64,
  strokeWidth = 6,
}: LoadingSpinnerProps) => {
  const radius = size / 2;
  const dashProgress = Math.abs(progress) / 100;
  const dashSize = 2 * Math.PI * radius;
  const strokeColor = inverted ? 'surface.primary' : neutral ? 'text.primary' : 'brand.base';

  return (
    <Center inline>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        stroke="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className={css({ stroke: strokeColor, strokeOpacity: 0.12 })}
          cx="50%"
          cy="50%"
          r={radius - strokeWidth / 2}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <circle
          className={css({
            animation: 'spin 1s linear infinite',
            stroke: strokeColor,
            transformOrigin: 'center center',
          })}
          cx="50%"
          cy="50%"
          r={radius - strokeWidth / 2}
          strokeDasharray={dashSize}
          strokeDashoffset={dashSize - dashSize * dashProgress + strokeWidth * 4}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </svg>
    </Center>
  );
};
