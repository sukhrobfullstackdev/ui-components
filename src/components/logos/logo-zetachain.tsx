import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoZetachain = ({ title, titleId, ...props }: Props) => (
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
    <g clipPath="url(#clip0_10462_20825)">
      <path
        d="M11.9998 23.2499C18.213 23.2499 23.2498 18.2131 23.2498 12C23.2498 5.78678 18.213 0.75 11.9998 0.75C5.78665 0.75 0.749878 5.78678 0.749878 12C0.749878 18.2131 5.78665 23.2499 11.9998 23.2499Z"
        fill="#005741"
      />
      <path
        d="M14.9209 14.4867V16.0061H8.65298C8.73944 15.0061 9.06211 14.3025 10.178 13.3132L14.9209 9.26697V12.8176H16.6282V6.28525H6.91996V9.54139H8.62729V7.99259H13.785L9.06524 12.0206L9.05395 12.0313C7.07596 13.7825 6.9187 15.196 6.9187 16.8613V17.7147H16.6288V14.488H14.9215L14.9209 14.4867Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_10462_20825">
        <rect width={22.4999} height={22.4999} fill="white" transform="translate(0.749878 0.75)" />
      </clipPath>
    </defs>
  </svg>
);
export default LogoZetachain;
