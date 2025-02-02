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
const LogoLinkedInMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.2947 20.9999H21.0281L21.0297 14.4043C21.0297 11.1663 20.332 8.67747 16.5481 8.67747C15.1035 8.62382 13.6914 9.37181 12.9617 10.6195V8.97646H9.37771V20.9995H13.111V15.0518C13.111 13.4833 13.4085 11.9644 15.353 11.9644C17.2698 11.9644 17.2947 13.7591 17.2947 15.1533V20.9999ZM2.99823 5.16654C2.99823 6.35507 3.97669 7.33296 5.16522 7.33296C6.35352 7.33285 7.3313 6.35439 7.3313 5.16609C7.33108 3.97778 6.35318 3 5.16477 3C3.97624 3 2.99823 3.97801 2.99823 5.16654ZM3.29463 20.9999H7.03186V8.97646H3.29463V20.9999Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoLinkedInMono;
