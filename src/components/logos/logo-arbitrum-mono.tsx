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
const LogoArbitrumMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
      <g clipPath="url(#clip0_10462_20915)">
        <mask
          id="mask0_10462_20915"
          style={{
            maskType: 'luminance',
          }}
          maskUnits="userSpaceOnUse"
          x={1}
          y={0}
          width={22}
          height={24}
        >
          <path d="M22.75 0H1V24H22.75V0Z" fill="currentColor" />
        </mask>
        <g mask="url(#mask0_10462_20915)">
          <path
            d="M13.6977 13.8237L12.5078 17.0096C12.4727 17.098 12.4727 17.1961 12.5078 17.2845L14.5512 22.7679L16.916 21.4326L14.0793 13.8237C14.014 13.647 13.763 13.647 13.6977 13.8237Z"
            fill="currentColor"
          />
          <path
            d="M16.0773 8.46309C16.0121 8.28639 15.761 8.28639 15.6958 8.46309L14.5058 11.649C14.4707 11.7374 14.4707 11.8356 14.5058 11.924L17.8547 20.9025L20.2195 19.5672L16.0773 8.46309Z"
            fill="currentColor"
          />
          <path
            d="M11.875 1.48742C11.9352 1.48742 11.9905 1.50215 12.0457 1.53161L21.063 6.62222C21.1685 6.68112 21.2337 6.78912 21.2337 6.90694V17.0882C21.2337 17.206 21.1685 17.314 21.063 17.3728L12.0457 22.4684C11.9955 22.4978 11.9352 22.5126 11.875 22.5126C11.8148 22.5126 11.7595 22.4978 11.7043 22.4684L2.692 17.3778C2.58657 17.3188 2.52129 17.2108 2.52129 17.0931V6.90694C2.52129 6.78912 2.58657 6.68112 2.692 6.62222L11.7093 1.53161C11.7595 1.50215 11.8198 1.48742 11.875 1.48742ZM11.875 0C11.5537 0 11.2323 0.0834525 10.9461 0.245449L1.92884 5.33606C1.35647 5.66006 1 6.25895 1 6.90694V17.0882C1 17.7362 1.35647 18.34 1.92884 18.664L10.9461 23.7545C11.2323 23.9165 11.5537 24 11.875 24C12.1963 24 12.5177 23.9165 12.8039 23.7545L21.8211 18.664C22.3986 18.34 22.75 17.741 22.75 17.0882V6.90694C22.75 6.25895 22.3935 5.65514 21.8211 5.33115L12.8089 0.245449C12.5177 0.0834525 12.1963 0 11.875 0Z"
            fill="currentColor"
          />
          <path
            d="M5.91602 20.9123L6.74444 18.6935L8.41134 20.0483L6.8549 21.4424L5.91602 20.9123Z"
            fill="currentColor"
          />
          <path
            d="M11.1166 6.18036H8.83218C8.66148 6.18036 8.50578 6.28345 8.45057 6.44053L3.55029 19.5769L5.91508 20.9122L11.3124 6.44545C11.3576 6.31781 11.2622 6.18036 11.1166 6.18036Z"
            fill="currentColor"
          />
          <path
            d="M15.1177 6.18036H12.8333C12.6626 6.18036 12.5069 6.28345 12.4517 6.44053L6.85352 21.4423L9.21827 22.7776L15.3085 6.45035C15.3587 6.31781 15.2583 6.18036 15.1177 6.18036Z"
            fill="currentColor"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_10462_20915">
          <rect width={21.75} height={24} fill="currentColor" transform="translate(1)" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default LogoArbitrumMono;
