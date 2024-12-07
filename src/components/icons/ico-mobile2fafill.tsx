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
const IcoMobile2fafill = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M8 0C5.23858 0 3 2.23858 3 5V19C3 21.7614 5.23858 24 8 24H16C18.7614 24 21 21.7614 21 19V5C21 2.23858 18.7614 0 16 0H8ZM9 19C9 18.4477 9.44772 18 10 18H14C14.5523 18 15 18.4477 15 19C15 19.5523 14.5523 20 14 20H10C9.44772 20 9 19.5523 9 19ZM11.9955 9.25C11.3051 9.25 10.7455 9.80964 10.7455 10.5C10.7455 11.1904 11.3051 11.75 11.9955 11.75H12.0045C12.6948 11.75 13.2545 11.1904 13.2545 10.5C13.2545 9.80964 12.6948 9.25 12.0045 9.25H11.9955ZM14.2445 10.5C14.2445 9.80964 14.8042 9.25 15.4945 9.25H15.5035C16.1938 9.25 16.7535 9.80964 16.7535 10.5C16.7535 11.1904 16.1938 11.75 15.5035 11.75H15.4945C14.8042 11.75 14.2445 11.1904 14.2445 10.5ZM8.49451 9.25C7.80415 9.25 7.24451 9.80964 7.24451 10.5C7.24451 11.1904 7.80415 11.75 8.49451 11.75H8.50349C9.19385 11.75 9.75349 11.1904 9.75349 10.5C9.75349 9.80964 9.19385 9.25 8.50349 9.25H8.49451Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoMobile2fafill;
