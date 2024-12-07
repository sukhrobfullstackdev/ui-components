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
const IcoEmail = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M6 3C3.23858 3 1 5.23858 1 8V16C1 18.7614 3.23858 21 6 21H18C20.7614 21 23 18.7614 23 16V8C23 5.23858 20.7614 3 18 3H6ZM4.7087 5.29136C5.0998 5.10457 5.53769 5 6 5H18C18.4623 5 18.9002 5.10457 19.2913 5.29136L12.6585 11.0951C12.2815 11.425 11.7185 11.425 11.3415 11.0951L4.7087 5.29136ZM3.29235 6.70663C3.10494 7.09825 3 7.53687 3 8V16C3 17.6569 4.34315 19 6 19H18C19.6569 19 21 17.6569 21 16V8C21 7.53687 20.8951 7.09825 20.7076 6.70662C20.6919 6.72237 20.6755 6.73771 20.6585 6.75259L13.9755 12.6002C12.8444 13.5899 11.1556 13.5899 10.0245 12.6002L3.34149 6.75259C3.32449 6.73771 3.3081 6.72238 3.29235 6.70663Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoEmail;
