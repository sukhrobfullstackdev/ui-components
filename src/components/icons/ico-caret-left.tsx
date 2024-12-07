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
const IcoCaretLeft = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M7.98355 14.1589C6.67215 12.9836 6.67215 11.0163 7.98355 9.84113L15.3326 3.25527C15.7439 2.88669 16.3761 2.92132 16.7447 3.33261C17.1133 3.74391 17.0787 4.37613 16.6674 4.74471L9.31831 11.3306C8.8939 11.7109 8.8939 12.2891 9.31831 12.6694L16.6674 19.2553C17.0787 19.6239 17.1133 20.2561 16.7447 20.6674C16.3761 21.0787 15.7439 21.1133 15.3326 20.7447L7.98355 14.1589Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoCaretLeft;
