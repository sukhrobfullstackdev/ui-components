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
const IcoLockUnlocked = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M12 3C9.79086 3 8 4.79086 8 7V9H18C20.7614 9 23 11.2386 23 14V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V14C1 11.2386 3.23858 9 6 9V7C6 3.68629 8.68629 1 12 1H13C15.7614 1 18 3.23858 18 6C18 6.55228 17.5523 7 17 7C16.4477 7 16 6.55228 16 6C16 4.34315 14.6569 3 13 3H12ZM6 11H7H18C19.6569 11 21 12.3431 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V14C3 12.3431 4.34315 11 6 11ZM10 15C9.44771 15 9 15.4477 9 16C9 16.5523 9.44771 17 10 17H14C14.5523 17 15 16.5523 15 16C15 15.4477 14.5523 15 14 15H10Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoLockUnlocked;
