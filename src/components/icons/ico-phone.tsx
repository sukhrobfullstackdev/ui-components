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
const IcoPhone = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M8.49451 4.25C7.80415 4.25 7.24451 4.80964 7.24451 5.5C7.24451 6.19036 7.80415 6.75 8.49451 6.75H8.50349C9.19384 6.75 9.75349 6.19036 9.75349 5.5C9.75349 4.80964 9.19384 4.25 8.50349 4.25H8.49451Z"
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
export default IcoPhone;
