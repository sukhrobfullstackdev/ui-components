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
const IcoLockLocked = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M10 15C9.44771 15 9 15.4477 9 16C9 16.5523 9.44771 17 10 17H14C14.5523 17 15 16.5523 15 16C15 15.4477 14.5523 15 14 15H10Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 7V9C3.23858 9 1 11.2386 1 14V18C1 20.7614 3.23858 23 6 23H18C20.7614 23 23 20.7614 23 18V14C23 11.2386 20.7614 9 18 9V7C18 3.68629 15.3137 1 12 1C8.68629 1 6 3.68629 6 7ZM12 3C9.79086 3 8 4.79086 8 7V9H16V7C16 4.79086 14.2091 3 12 3ZM6 11C4.34315 11 3 12.3431 3 14V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V14C21 12.3431 19.6569 11 18 11H6Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoLockLocked;
