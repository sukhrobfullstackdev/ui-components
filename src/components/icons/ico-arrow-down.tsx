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
const IcoArrowDown = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M17.2407 13.3492C17.6001 12.9299 18.2314 12.8813 18.6508 13.2407C19.0701 13.6002 19.1187 14.2315 18.7592 14.6508L12.7592 21.6508C12.5693 21.8724 12.2919 22 12 22C11.7081 22 11.4307 21.8724 11.2407 21.6508L5.24073 14.6508C4.8813 14.2315 4.92987 13.6002 5.34919 13.2407C5.76852 12.8813 6.39982 12.9299 6.75924 13.3492L11 18.2968L11 3C11 2.44772 11.4477 2 12 2C12.5523 2 13 2.44772 13 3L13 18.2967L17.2407 13.3492Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoArrowDown;
