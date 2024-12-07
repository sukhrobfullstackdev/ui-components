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
const IcoGuide = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M2 6C2 3.23858 4.23858 1 7 1H19C20.6569 1 22 2.34315 22 4V16.945C22 17.1809 21.9269 17.4097 21.7927 17.6007L21.797 17.604C21.081 18.5487 20.9683 19.7976 21.4589 20.8381L21.7682 21.3404C22.1864 22.0195 21.7557 22.8817 21 22.9889V23H20.8412H5.5H5C3.34315 23 2 21.6569 2 20V19.5V6ZM6 3.17071C4.83481 3.58254 4 4.69378 4 6V16.3368C4.45463 16.1208 4.9632 16 5.5 16H6L6 3.17071ZM8 16L8 3H19C19.5523 3 20 3.44772 20 4V16H8ZM7 18H5.5C4.67157 18 4 18.6716 4 19.5C4 20.3284 4.67157 21 5.5 21H19.3114C18.9497 20.0272 18.9385 18.9672 19.2601 18H7ZM10 7C10 6.44772 10.4477 6 11 6L17 6C17.5523 6 18 6.44771 18 7C18 7.55228 17.5523 8 17 8L11 8C10.4477 8 10 7.55228 10 7ZM11 10C10.4477 10 10 10.4477 10 11C10 11.5523 10.4477 12 11 12L17 12C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10L11 10Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoGuide;
