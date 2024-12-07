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
const LogoPayPalMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M9.86703 5.16542C9.57145 5.16542 9.31986 5.38057 9.2739 5.67218H9.27351L7.19182 18.8303H3.52371C3.20595 18.8303 2.94327 18.5411 3.01062 18.2011L5.64225 1.5512C5.69059 1.22948 5.96 1.01315 6.25161 1.00007H12.5743C15.3078 0.986206 17.6632 2.94467 17.6541 5.59412C16.9509 5.23119 16.0435 5.1674 15.0942 5.16542H9.86703Z"
        fill="currentColor"
      />
      <path
        d="M9.46329 11.838L9.46335 11.8376H12.3746C14.9437 11.8376 17.1244 9.96312 17.5226 7.42342C17.5527 7.23047 17.5693 6.92618 17.5729 6.73758C16.9199 6.39526 16.0364 6.31998 15.1976 6.31245H10.7882C10.4443 6.31245 10.2961 6.57712 10.2529 6.84179L9.46335 11.8376H9.46289L9.46329 11.838Z"
        fill="currentColor"
      />
      <path
        d="M18.6474 7.33903C18.6375 7.56566 18.6248 7.76892 18.5904 7.98762C18.1395 10.8625 15.637 12.9846 12.7288 12.9846H9.84325C9.52232 12.9842 9.24735 13.2188 9.19743 13.5369L7.79406 22.3859C7.74294 22.7084 7.99256 23 8.31904 23H11.4095C11.7427 23 12.0006 22.7559 12.0537 22.4592L12.8188 17.6623C12.8647 17.3703 13.1167 17.1551 13.4123 17.1551H15.2503C18.1585 17.1551 20.661 15.033 21.1118 12.1581C21.432 10.1173 20.4046 8.26022 18.6478 7.33942L18.6474 7.33903Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoPayPalMono;
