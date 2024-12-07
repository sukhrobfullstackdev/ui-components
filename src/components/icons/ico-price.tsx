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
const IcoPrice = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM10 9.17811C10 8.31058 10.5303 8 10.7451 8H11.9998H11.9999H13.003C13.359 8 14 8.44659 14 9.5C14 10.0523 14.4477 10.5 15 10.5C15.5523 10.5 16 10.0523 16 9.5C16 7.78517 14.8599 6 13.003 6H12.9999L13 5.00006C13 4.44778 12.5523 4.00003 12.0001 4C11.4478 3.99997 11 4.44765 11 4.99994L10.9999 6H10.7451C9.03495 6 8 7.64221 8 9.17811C8 9.94475 8.13834 10.6035 8.49153 11.141C8.85106 11.688 9.34867 11.9801 9.79801 12.17L13.4262 13.6734C13.6853 13.7833 13.7808 13.8718 13.8371 13.9575C13.9 14.0531 14 14.2795 14 14.8219C14 15.6894 13.4697 16 13.2549 16H12.0001C12 16 12 16 11.9999 16H10.997C10.641 16 10 15.5534 10 14.5C10 13.9477 9.55229 13.5 9 13.5C8.44771 13.5 8 13.9477 8 14.5C8 16.2148 9.14013 18 10.997 18H11.0001L11.0002 19.0001C11.0003 19.5524 11.4481 20.0001 12.0004 20C12.5527 19.9999 13.0003 19.5522 13.0002 18.9999L13.0001 18H13.2549C14.965 18 16 16.3578 16 14.8219C16 14.0553 15.8617 13.3965 15.5085 12.859C15.1489 12.312 14.6513 12.0199 14.202 11.83L10.5738 10.3266C10.3147 10.2167 10.2192 10.1282 10.1629 10.0425C10.1 9.94689 10 9.72049 10 9.17811Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoPrice;
