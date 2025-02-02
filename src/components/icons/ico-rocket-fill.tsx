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
const IcoRocketFill = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M11.2625 0.24827C11.4758 0.0870459 11.7344 0 12 0C12.2656 0 12.5242 0.0870459 12.7375 0.24827C14.2625 1.36858 17.625 4.81861 17.625 13.1445C17.625 15.8944 16.65 19.2044 15.925 21.2286C15.75 21.7251 15.2875 22.0561 14.7625 22.0561H9.25C8.725 22.0561 8.25 21.7251 8.075 21.2286C7.35 19.2044 6.375 15.8944 6.375 13.1445C6.375 4.81861 9.7375 1.36858 11.2625 0.24827ZM14.5 10.5984C14.5 9.19799 13.375 8.05222 12 8.05222C10.625 8.05222 9.5 9.19799 9.5 10.5984C9.5 11.9988 10.625 13.1445 12 13.1445C13.375 13.1445 14.5 11.9988 14.5 10.5984ZM6.6125 22.7181C6.0125 21.1522 4.7125 17.4093 4.525 13.972L3.1125 14.9268C2.4125 15.4106 2 16.1999 2 17.0529V22.7181C2 23.6219 2.8875 24.233 3.7125 23.902L6.6125 22.7181ZM22 22.7181V17.0529C22 16.1999 21.5875 15.4106 20.8875 14.9396L19.475 13.9848C19.2875 17.4093 17.975 21.1649 17.3875 22.7308L20.2875 23.9147C21.1125 24.233 22 23.6219 22 22.7181Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoRocketFill;
