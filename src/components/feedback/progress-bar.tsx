import { Box } from '@styled/jsx';
import { token } from '@styled/tokens';
import { useMemo } from 'react';

const WARNING_THRESHOLD = 75;
const ERROR_THRESHOLD = 90;

const BRAND_COLOR = token('colors.brand.lighter');
const ERROR_COLOR = token('colors.negative.lighter');
const NEUTRAL_COLOR = token('colors.neutral.secondary');
const SUCCESS_COLOR = token('colors.positive.lighter');
const WARN_COLOR = token('colors.warning.lighter');

export interface ProgressBarProps {
  autoTarget?: 'min' | 'max';
  current?: number;
  total?: number;
  strokeWidth?: number;
  variant?: 'auto' | 'branded' | 'success' | 'error' | 'warning' | 'neutral';
}

const autoFillColor = ({ autoTarget = 'min', progress = 0 }) => {
  if (autoTarget === 'min') {
    if (progress > ERROR_THRESHOLD) {
      return ERROR_COLOR;
    } else if (progress > WARNING_THRESHOLD) {
      return WARN_COLOR;
    }
    return BRAND_COLOR;
  } else {
    if (progress <= 100 - ERROR_THRESHOLD) {
      return ERROR_COLOR;
    } else if (progress <= 100 - WARNING_THRESHOLD) {
      return WARN_COLOR;
    } else if (progress === 100) {
      return SUCCESS_COLOR;
    }
    return BRAND_COLOR;
  }
};

export const ProgressBar = ({
  autoTarget,
  current = 0,
  strokeWidth = 8,
  total = 100,
  variant = 'auto',
}: ProgressBarProps) => {
  const progress = useMemo(() => {
    return (Math.min(current, total) / total) * 100;
  }, [current, total]);

  const fillColor = useMemo(() => {
    switch (variant) {
      case 'branded':
        return BRAND_COLOR;
      case 'success':
        return SUCCESS_COLOR;
      case 'error':
        return ERROR_COLOR;
      case 'warning':
        return WARN_COLOR;
      case 'neutral':
        return NEUTRAL_COLOR;
      default:
        return autoFillColor({ autoTarget, progress });
    }
  }, [progress, variant]);

  return (
    <Box
      bgColor="surface.tertiary"
      borderRadius="2rem"
      position="relative"
      w="full"
      style={{
        height: `${strokeWidth}px`,
      }}
    >
      <Box
        position="absolute"
        borderRadius="2rem"
        borderStyle="solid"
        borderWidth="thick"
        borderColor="surface.primary"
        style={{
          height: `${strokeWidth}px`,
          minWidth: `${strokeWidth}px`,
          width: `${progress}%`,
          background: fillColor,
        }}
      />
    </Box>
  );
};
