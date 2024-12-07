import {
  IcoAlertCircleFill,
  IcoCheckmarkCircleFill,
  IcoInfoCircleFill,
  IcoLightbulbFill,
  IcoWarningFill,
} from '@components/icons';
import { HStack } from '@styled/jsx';

const svgIcon = {
  branded: IcoLightbulbFill,
  success: IcoCheckmarkCircleFill,
  error: IcoAlertCircleFill,
  warning: IcoWarningFill,
  neutral: IcoInfoCircleFill,
};

export interface StatusIconProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  variant?: 'branded' | 'success' | 'error' | 'warning' | 'neutral';
}

export const StatusIcon = (props: StatusIconProps) => {
  const { variant = 'branded', ...iconProps } = props;
  const IconComponent = svgIcon[variant];

  return (
    <HStack>
      <IconComponent {...iconProps} />
    </HStack>
  );
};
