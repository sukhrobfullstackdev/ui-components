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
const LogoTwitchMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
      <path
        d="M6.28571 0L2 4.28571V19.7143H7.14286V24L11.4286 19.7143H14.8571L22.5714 12V0H6.28571ZM20.8571 11.1429L17.4286 14.5714H14L11 17.5714V14.5714H7.14286V1.71429H20.8571V11.1429Z"
        fill="currentColor"
      />
      <path d="M18.2857 4.71429H16.5714V9.85715H18.2857V4.71429Z" fill="currentColor" />
      <path d="M13.5714 4.71429H11.8571V9.85715H13.5714V4.71429Z" fill="currentColor" />
    </svg>
  );
};
export default LogoTwitchMono;
