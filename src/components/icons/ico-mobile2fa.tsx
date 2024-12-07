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
const IcoMobile2fa = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M9 19C9 18.4477 9.44772 18 10 18H14C14.5523 18 15 18.4477 15 19C15 19.5523 14.5523 20 14 20H10C9.44772 20 9 19.5523 9 19Z"
        fill="currentColor"
      />
      <path
        d="M7.24451 10.5C7.24451 9.80964 7.80415 9.25 8.49451 9.25H8.50349C9.19384 9.25 9.75349 9.80964 9.75349 10.5C9.75349 11.1904 9.19384 11.75 8.50349 11.75H8.49451C7.80415 11.75 7.24451 11.1904 7.24451 10.5Z"
        fill="currentColor"
      />
      <path
        d="M11.9955 9.25C11.3051 9.25 10.7455 9.80964 10.7455 10.5C10.7455 11.1904 11.3051 11.75 11.9955 11.75H12.0045C12.6948 11.75 13.2545 11.1904 13.2545 10.5C13.2545 9.80964 12.6948 9.25 12.0045 9.25H11.9955Z"
        fill="currentColor"
      />
      <path
        d="M15.4945 9.25C14.8042 9.25 14.2445 9.80964 14.2445 10.5C14.2445 11.1904 14.8042 11.75 15.4945 11.75H15.5035C16.1938 11.75 16.7535 11.1904 16.7535 10.5C16.7535 9.80964 16.1938 9.25 15.5035 9.25H15.4945Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5C3 2.23858 5.23858 0 8 0H16C18.7614 0 21 2.23858 21 5V19C21 21.7614 18.7614 24 16 24H8C5.23858 24 3 21.7614 3 19V5ZM8 2C6.34315 2 5 3.34315 5 5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V5C19 3.34315 17.6569 2 16 2H8Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoMobile2fa;
