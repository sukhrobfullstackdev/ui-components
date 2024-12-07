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
const IcoCodeEditor = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M9.7682 17.6402C10.1218 17.2159 10.0644 16.5853 9.64016 16.2318L7.56203 14.5L9.64016 12.7682C10.0644 12.4146 10.1218 11.7841 9.7682 11.3598C9.41463 10.9355 8.78407 10.8782 8.35979 11.2318L5.35979 13.7318C5.1318 13.9217 4.99997 14.2032 4.99997 14.5C4.99997 14.7968 5.1318 15.0782 5.35979 15.2682L8.35979 17.7682C8.78407 18.1218 9.41463 18.0644 9.7682 17.6402Z"
        fill="currentColor"
      />
      <path
        d="M14.3598 16.2318C13.9356 16.5853 13.8782 17.2159 14.2318 17.6402C14.5854 18.0644 15.2159 18.1218 15.6402 17.7682L18.6402 15.2682C18.8682 15.0782 19 14.7968 19 14.5C19 14.2032 18.8682 13.9217 18.6402 13.7318L15.6402 11.2318C15.2159 10.8782 14.5854 10.9355 14.2318 11.3598C13.8782 11.7841 13.9356 12.4146 14.3598 12.7682L16.438 14.5L14.3598 16.2318Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 6C1 3.23858 3.23858 1 6 1H18C20.7614 1 23 3.23858 23 6V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V6ZM7 3H6C4.34315 3 3 4.34315 3 6H7L7 3ZM9 6L9 3H18C19.6569 3 21 4.34315 21 6H9ZM3 8V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V8H3Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoCodeEditor;
