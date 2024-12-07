import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const FwkStripe = ({ title, titleId, ...props }: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#clip0_8941_356)">
      <g clipPath="url(#clip1_8941_356)">
        <rect width={28} height={28} transform="translate(-2 -2)" fill="#6772E5" />
        <path
          d="M19.7153 -2H4.28472C0.813767 -2 -2 0.813767 -2 4.28472V19.7153C-2 23.1862 0.813767 26 4.28472 26H19.7153C23.1862 26 26 23.1862 26 19.7153V4.28472C26 0.813767 23.1862 -2 19.7153 -2Z"
          fill="#6772E5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8991 8.86245C10.8991 8.19324 11.4519 7.89259 12.3442 7.89259C13.8228 7.92456 15.2738 8.29975 16.5825 8.98853V5.02179C15.236 4.49374 13.8002 4.2303 12.3539 4.24589C8.9012 4.24589 6.59293 6.04984 6.59293 9.09522C6.59293 13.8088 13.0716 13.0426 13.0716 15.0793C13.0716 15.8649 12.383 16.117 11.4422 16.117C9.78492 16.0257 8.17142 15.5509 6.72871 14.7301V18.7939C8.19879 19.4291 9.7826 19.7591 11.3841 19.7637C14.9241 19.7637 17.3681 18.018 17.3681 14.9144C17.3972 9.86141 10.8991 10.7731 10.8991 8.86245Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_8941_356">
        <rect width={24} height={24} rx={4} fill="white" />
      </clipPath>
      <clipPath id="clip1_8941_356">
        <rect width={28} height={28} fill="white" transform="translate(-2 -2)" />
      </clipPath>
    </defs>
  </svg>
);
export default FwkStripe;
