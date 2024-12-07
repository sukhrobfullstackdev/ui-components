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
const IcoLoginForm = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M2 5C2 2.23858 4.23858 0 7 0H17C19.7614 0 22 2.23858 22 5V19C22 21.7614 19.7614 24 17 24H7C4.23858 24 2 21.7614 2 19V5ZM7 2C5.34315 2 4 3.34315 4 5V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V5C20 3.34315 18.6569 2 17 2H7ZM7 18C7 17.4477 7.44772 17 8 17H16C16.5523 17 17 17.4477 17 18C17 18.5523 16.5523 19 16 19H8C7.44772 19 7 18.5523 7 18ZM8 13C7.44772 13 7 13.4477 7 14C7 14.5523 7.44772 15 8 15H16C16.5523 15 17 14.5523 17 14C17 13.4477 16.5523 13 16 13H8ZM9 9C9 8.44771 9.44772 8 10 8H14C14.5523 8 15 8.44771 15 9C15 9.55229 14.5523 10 14 10H10C9.44772 10 9 9.55229 9 9ZM11.991 4.75C11.3006 4.75 10.741 5.30964 10.741 6C10.741 6.69036 11.3006 7.25 11.991 7.25H12.009C12.6994 7.25 13.259 6.69036 13.259 6C13.259 5.30964 12.6994 4.75 12.009 4.75H11.991Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoLoginForm;
