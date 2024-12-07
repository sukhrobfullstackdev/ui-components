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
const LogoTwitterMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
      <g clipPath="url(#clip0_10091_39020)">
        <path
          d="M13.6408 10.4643L20.9224 2H19.1969L12.8743 9.34942L7.82442 2H2L9.63638 13.1136L2 21.9897H3.72561L10.4025 14.2285L15.7355 21.9897H21.5599L13.6404 10.4643H13.6408ZM11.2773 13.2115L10.5036 12.1049L4.34737 3.29901H6.9978L11.966 10.4056L12.7397 11.5123L19.1977 20.7498H16.5473L11.2773 13.212V13.2115Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_10091_39020">
          <rect width={19.5599} height={20} fill="currentColor" transform="translate(2 2)" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default LogoTwitterMono;
