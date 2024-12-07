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
const IcoCaretUp = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M9.84115 7.98355C11.0164 6.67215 12.9837 6.67215 14.1589 7.98355L20.7447 15.3326C21.1133 15.7439 21.0787 16.3761 20.6674 16.7447C20.2561 17.1133 19.6239 17.0787 19.2553 16.6674L12.6694 9.31831C12.2891 8.8939 11.7109 8.8939 11.3306 9.31831L4.74473 16.6674C4.37614 17.0787 3.74393 17.1133 3.33263 16.7447C2.92133 16.3761 2.88671 15.7439 3.25529 15.3326L9.84115 7.98355Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoCaretUp;
