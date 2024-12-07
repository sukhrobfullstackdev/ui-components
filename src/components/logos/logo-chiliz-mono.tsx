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
const LogoChilizMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
      <g clipPath="url(#clip0_10462_21005)">
        <path
          d="M10.2717 9.31819C10.8135 8.97396 11.4486 8.57133 11.7766 8.3638V8.36504C11.8773 8.30166 12.0078 8.31409 12.0935 8.39487C16.3162 12.3665 14.2919 15.3627 12.8478 16.6091C12.5073 16.9024 11.9916 16.5967 12.091 16.1592L12.3209 15.1514C12.5844 14.0131 12.2725 12.8201 11.4871 11.9564L10.1164 10.372C9.83555 10.0464 9.90887 9.54809 10.2717 9.31819Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9998 23.2499C18.213 23.2499 23.2498 18.2131 23.2498 12C23.2498 5.78678 18.213 0.75 11.9998 0.75C5.78665 0.75 0.749878 5.78678 0.749878 12C0.749878 18.2131 5.78665 23.2499 11.9998 23.2499ZM9.23654 7.93013L11.3118 6.64891C11.4945 6.54576 11.4945 6.33202 11.3628 6.20154L9.62924 4.52513C9.59568 4.49158 9.53976 4.49158 9.50621 4.52513L9.34217 4.69041C9.13216 4.90167 9.1334 5.24217 9.34466 5.45219L10.0219 6.07727C10.1375 6.1916 10.1151 6.38297 9.97719 6.46872L9.1682 6.96455C8.91593 7.11989 8.83764 7.45169 8.99422 7.70396L9.116 7.90155C9.14086 7.94256 9.19553 7.95498 9.23654 7.93013ZM10.6992 12.7306C11.2087 13.2911 11.41 14.0653 11.2398 14.8022L11.241 14.801C11.241 14.801 11.1416 15.7728 10.5725 18.027C10.4134 18.6546 11.026 19.2076 11.6312 18.9777C15.7495 17.4131 15.7458 13.2314 15.7458 13.2314C15.8676 10.5385 13.1374 7.93134 12.3532 7.20809C12.2327 7.09749 12.0513 7.08134 11.9133 7.16957L9.76844 8.54026C8.8389 9.13427 8.65871 10.4167 9.38818 11.2444L10.6992 12.7306Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_10462_21005">
          <rect width={22.4999} height={22.4999} fill="currentColor" transform="translate(0.749878 0.75)" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default LogoChilizMono;
