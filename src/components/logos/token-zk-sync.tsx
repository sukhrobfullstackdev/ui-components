import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const TokenZkSync = ({ title, titleId, ...props }: Props) => (
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
    <rect width={24} height={24} rx={12} fill="white" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.0788 9.48976L8.0788 6.76161L2.99942 11.841L8.0788 16.9204L8.0788 13.2733L13.1694 9.48976H8.0788Z"
      fill="#8C8DFC"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.9201 14.2598L15.9201 16.9204L20.9994 11.841L15.9201 6.76161L15.9201 10.4418L10.8294 14.2598L15.9201 14.2598Z"
      fill="#4E529A"
    />
  </svg>
);
export default TokenZkSync;
