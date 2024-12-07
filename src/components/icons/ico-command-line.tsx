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
const IcoCommandLine = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M1 6C1 3.23858 3.23858 1 6 1H8H18C20.7614 1 23 3.23858 23 6V8V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V8V6ZM7 3H6C4.34315 3 3 4.34315 3 6H7L7 3ZM9 6L9 3H18C19.6569 3 21 4.34315 21 6H9ZM8 8H3V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V8H8ZM18 16C18 16.5523 17.5523 17 17 17H14C13.4477 17 13 16.5523 13 16C13 15.4477 13.4477 15 14 15H17C17.5523 15 18 15.4477 18 16ZM6.35984 16.2318C5.93556 16.5853 5.87824 17.2159 6.2318 17.6402C6.58537 18.0644 7.21593 18.1218 7.64021 17.7682L10.6402 15.2682C10.8682 15.0782 11 14.7968 11 14.5C11 14.2032 10.8682 13.9217 10.6402 13.7318L7.64021 11.2318C7.21593 10.8782 6.58537 10.9355 6.2318 11.3598C5.87824 11.7841 5.93556 12.4146 6.35984 12.7682L8.43797 14.5L6.35984 16.2318Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoCommandLine;
