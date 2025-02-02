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
const IcoCreditCard = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M6 3C3.23858 3 1 5.23858 1 8V16C1 18.7614 3.23858 21 6 21H18C20.7614 21 23 18.7614 23 16V8C23 5.23858 20.7614 3 18 3H6ZM3.04148 7.5C3.27952 6.08114 4.5135 5 6 5H18C19.4865 5 20.7205 6.08114 20.9585 7.5L3.04148 7.5ZM3 10.5L3 16C3 17.6569 4.34315 19 6 19H18C19.6569 19 21 17.6569 21 16V10.5L3 10.5ZM6 14C5.44772 14 5 14.4477 5 15C5 15.5523 5.44772 16 6 16H8C8.55228 16 9 15.5523 9 15C9 14.4477 8.55228 14 8 14H6ZM10 15C10 14.4477 10.4477 14 11 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H11C10.4477 16 10 15.5523 10 15Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoCreditCard;
