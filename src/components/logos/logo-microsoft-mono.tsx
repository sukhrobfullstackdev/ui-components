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
const LogoMicrosoftMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
      <g clipPath="url(#clip0_10091_39031)">
        <path d="M1.95654 1.95651H11.5218V11.5217H1.95654V1.95651Z" fill="currentColor" />
        <path d="M12.4782 1.95651H22.0435V11.5217H12.4782V1.95651Z" fill="currentColor" />
        <path d="M1.95654 12.4783H11.5218V22.0435H1.95654V12.4783Z" fill="currentColor" />
        <path d="M12.4782 12.4783H22.0435V22.0435H12.4782V12.4783Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_10091_39031">
          <rect width={22} height={22} fill="currentColor" transform="translate(1 1)" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default LogoMicrosoftMono;
