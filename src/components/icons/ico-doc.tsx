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
const IcoDoc = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M8 3C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V10H15C13.3431 10 12 8.65685 12 7V3H8ZM14 3V7C14 7.55228 14.4477 8 15 8H19V7.65685C19 6.86121 18.6839 6.09814 18.1213 5.53553L16.4645 3.87868C15.9019 3.31607 15.1388 3 14.3431 3H14ZM3 6C3 3.23858 5.23858 1 8 1H14.3431C15.6692 1 16.941 1.52678 17.8787 2.46446L19.5355 4.12132C20.4732 5.059 21 6.33077 21 7.65685V18C21 20.7614 18.7614 23 16 23H8C5.23858 23 3 20.7614 3 18V6ZM7 13C7 12.4477 7.44772 12 8 12L16 12C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14L8 14C7.44772 14 7 13.5523 7 13ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H16C16.5523 18 17 17.5523 17 17C17 16.4477 16.5523 16 16 16L8 16Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoDoc;
