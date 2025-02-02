import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const TokenBase = ({ title, titleId, ...props }: Props) => (
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
    <rect width={24} height={24} rx={12} fill="#2A5BF6" />
    <path
      d="M11.9851 19.875C16.3422 19.875 19.874 16.3495 19.874 12C19.874 7.65048 16.3422 4.125 11.9851 4.125C7.8517 4.125 4.46104 7.29894 4.12399 11.3379H14.5511V12.6621H4.12399C4.46104 16.7011 7.8517 19.875 11.9851 19.875Z"
      fill="white"
    />
  </svg>
);
export default TokenBase;
