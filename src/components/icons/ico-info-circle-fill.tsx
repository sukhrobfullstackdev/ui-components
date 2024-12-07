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
const IcoInfoCircleFill = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM10.5 7C10.5 6.17157 11.1716 5.5 12 5.5H12.009C12.8374 5.5 13.509 6.17157 13.509 7C13.509 7.82843 12.8374 8.5 12.009 8.5H12C11.1716 8.5 10.5 7.82843 10.5 7ZM12.0054 11C12.5577 11 13.0054 11.4477 13.0054 12V18C13.0054 18.5523 12.5577 19 12.0054 19C11.4531 19 11.0054 18.5523 11.0054 18V12C11.0054 11.4477 11.4531 11 12.0054 11Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoInfoCircleFill;
