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
const IcoWarning = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M12 9C12.5523 9 13 9.44772 13 10V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V10C11 9.44772 11.4477 9 12 9Z"
        fill="currentColor"
      />
      <path
        d="M11.9946 16.75C11.3043 16.75 10.7446 17.3096 10.7446 18C10.7446 18.6904 11.3043 19.25 11.9946 19.25H12.0036C12.694 19.25 13.2536 18.6904 13.2536 18C13.2536 17.3096 12.694 16.75 12.0036 16.75H11.9946Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.36633 3.74008C10.5034 1.65549 13.4967 1.65548 14.6337 3.74008L23.2646 19.5634C24.355 21.5626 22.9081 24 20.6309 24H3.36908C1.0919 24 -0.355043 21.5625 0.735391 19.5634L9.36633 3.74008ZM12.8779 4.69778C12.4989 4.00292 11.5011 4.00292 11.1221 4.69778L2.49118 20.5211C2.1277 21.1875 2.61002 22 3.36908 22H20.6309C21.39 22 21.8723 21.1875 21.5088 20.5211L12.8779 4.69778Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoWarning;
