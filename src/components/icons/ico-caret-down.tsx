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
const IcoCaretDown = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M9.84115 16.0164C11.0164 17.3279 12.9837 17.3279 14.1589 16.0164L20.7447 8.66738C21.1133 8.25608 21.0787 7.62386 20.6674 7.25528C20.2561 6.8867 19.6239 6.92132 19.2553 7.33262L12.6694 14.6817C12.2891 15.1061 11.7109 15.1061 11.3306 14.6817L4.74473 7.33262C4.37614 6.92132 3.74393 6.8867 3.33263 7.25528C2.92133 7.62386 2.88671 8.25608 3.25529 8.66738L9.84115 16.0164Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoCaretDown;
