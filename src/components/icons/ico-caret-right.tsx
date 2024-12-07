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
const IcoCaretRight = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M16.0164 14.1589C17.3279 12.9836 17.3279 11.0163 16.0164 9.84113L8.66738 3.25527C8.25608 2.88669 7.62386 2.92132 7.25528 3.33261C6.8867 3.74391 6.92132 4.37613 7.33262 4.74471L14.6817 11.3306C15.1061 11.7109 15.1061 12.2891 14.6817 12.6694L7.33262 19.2553C6.92132 19.6239 6.8867 20.2561 7.25528 20.6674C7.62386 21.0787 8.25608 21.1133 8.66738 20.7447L16.0164 14.1589Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoCaretRight;
