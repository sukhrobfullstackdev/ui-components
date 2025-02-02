import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const WebsiteMagic = ({ title, titleId, ...props }: Props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath="url(#clip0_3464_71)">
      <path
        d="M8 0C8.73048 0.848057 9.53616 1.63563 10.4074 2.35356C9.82687 4.13837 9.51434 6.03459 9.51434 8C9.51434 9.96541 9.82687 11.8616 10.4074 13.6464C9.53616 14.3644 8.73048 15.1519 8 16C7.26952 15.1519 6.46384 14.3644 5.5926 13.6464C6.17313 11.8616 6.48566 9.96541 6.48566 8C6.48566 6.03459 6.17313 4.13837 5.5926 2.35357C6.46384 1.63563 7.26952 0.848058 8 0Z"
        fill="#6851FF"
      />
      <path
        d="M3.92732 12.4125C3.0051 11.7998 2.02637 11.2583 1 10.7964C1.28471 9.91186 1.43787 8.97289 1.43787 8C1.43787 7.02712 1.28471 6.08814 1 5.20356C2.02637 4.74173 3.0051 4.20025 3.92732 3.58754C4.27995 5.00407 4.46654 6.48138 4.46654 8C4.46654 9.51862 4.27995 10.9959 3.92732 12.4125Z"
        fill="#6851FF"
      />
      <path
        d="M11.5335 8C11.5335 9.51863 11.72 10.9959 12.0727 12.4125C12.9949 11.7998 13.9736 11.2583 15 10.7964C14.7153 9.91186 14.5621 8.97289 14.5621 8C14.5621 7.02712 14.7153 6.08814 15 5.20356C13.9736 4.74173 12.9949 4.20024 12.0727 3.58754C11.72 5.00406 11.5335 6.48138 11.5335 8Z"
        fill="#6851FF"
      />
    </g>
    <defs>
      <clipPath id="clip0_3464_71">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default WebsiteMagic;
