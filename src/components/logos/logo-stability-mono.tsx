import type { SVGProps } from 'react';
import { token } from '@styled/tokens';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {
  /**
   * Configures icon color on monochrome svgs.
   */
  color?: string;
}
const LogoStabilityMono = ({ color: customColor, title, titleId, ...props }: Props) => {
  // Utilize dynamic primary text color by default
  const color = customColor || token('colors.text.primary');
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M3.75 6.18533L12.0961 10.8436V20.1222L3.75 15.5519V6.18533Z" fill="currentColor" fillOpacity={0.4} />
      <path
        d="M20.4424 6.19775L12.0962 10.8553V20.1346L20.4424 15.5644V6.19775Z"
        fill="currentColor"
        fillOpacity={0.7}
      />
      <path
        d="M12.0962 20.1346L18.3908 16.6878L20.4423 17.8424L12.0961 22.4999L3.75 17.8303L5.80441 16.6769L12.0961 20.1222L12.0962 20.1346Z"
        fill="currentColor"
      />
      <path
        d="M3.75 6.18558L12.0961 1.5L20.4423 6.19772L12.0961 10.8552L3.75 6.18558Z"
        fill="currentColor"
        fillOpacity={0.85}
      />
    </svg>
  );
};
export default LogoStabilityMono;
