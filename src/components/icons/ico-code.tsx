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
const IcoCode = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M7 2C4.23858 2 2 4.23858 2 7V15H1C0.447715 15 0 15.4477 0 16V17C0 19.7614 2.23858 22 5 22H19C21.7614 22 24 19.7614 24 17V16C24 15.4477 23.5523 15 23 15H22V7C22 4.23858 19.7614 2 17 2H7ZM20 15V7C20 5.34315 18.6569 4 17 4H7C5.34315 4 4 5.34315 4 7V15H7.5C7.70188 15 7.89903 15.0611 8.06553 15.1753L9.30432 16.0247C9.47082 16.1389 9.66797 16.2 9.86985 16.2H14.2984C14.5255 16.2 14.7458 16.1227 14.9231 15.9809L15.8753 15.2191C16.0526 15.0773 16.2729 15 16.5 15H20ZM5 20C3.34315 20 2 18.6569 2 17H7.19008L8.17326 17.6742C8.67275 18.0167 9.26421 18.2 9.86985 18.2H14.2984C14.9797 18.2 15.6406 17.9682 16.1725 17.5426L16.8508 17H22C22 18.6569 20.6569 20 19 20H5ZM10.8321 12.5547C11.1384 12.0952 11.0142 11.4743 10.5547 11.168L8.80278 10L10.5547 8.83207C11.0142 8.52571 11.1384 7.90484 10.8321 7.44532C10.5257 6.98579 9.90483 6.86161 9.4453 7.16797L6.4453 9.16797C6.1671 9.35343 6 9.66566 6 10C6 10.3344 6.1671 10.6466 6.4453 10.8321L9.4453 12.8321C9.90483 13.1384 10.5257 13.0142 10.8321 12.5547ZM13.4453 11.168C12.9858 11.4743 12.8616 12.0952 13.1679 12.5547C13.4743 13.0142 14.0952 13.1384 14.5547 12.8321L17.5547 10.8321C17.8329 10.6466 18 10.3344 18 10C18 9.66566 17.8329 9.35343 17.5547 9.16797L14.5547 7.16797C14.0952 6.86161 13.4743 6.98579 13.1679 7.44532C12.8616 7.90484 12.9858 8.52571 13.4453 8.83207L15.1972 10L13.4453 11.168Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoCode;
