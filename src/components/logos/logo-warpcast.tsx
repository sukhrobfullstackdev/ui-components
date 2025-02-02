import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoWarpcast = ({ title, titleId, ...props }: Props) => (
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
    <rect width={24} height={24} rx={4} fill="#855DCD" />
    <path
      d="M6.18667 3.73334H17.8133V20.2667H16.1067V12.6933H16.0899C15.9013 10.6002 14.1422 8.96 12 8.96C9.8578 8.96 8.0987 10.6002 7.91008 12.6933H7.89334V20.2667H6.18667V3.73334Z"
      fill="white"
    />
    <path
      d="M3.09334 6.08L3.78667 8.42667H4.37334V17.92C4.07879 17.92 3.84 18.1588 3.84 18.4533V19.0933H3.73334C3.43879 19.0933 3.2 19.3321 3.2 19.6267V20.2667H9.17334V19.6267C9.17334 19.3321 8.93456 19.0933 8.64 19.0933H8.53334V18.4533C8.53334 18.1588 8.29456 17.92 8 17.92H7.36V6.08H3.09334Z"
      fill="white"
    />
    <path
      d="M16.2133 17.92C15.9188 17.92 15.68 18.1588 15.68 18.4533V19.0933H15.5733C15.2788 19.0933 15.04 19.3321 15.04 19.6267V20.2667H21.0133V19.6267C21.0133 19.3321 20.7746 19.0933 20.48 19.0933H20.3733V18.4533C20.3733 18.1588 20.1346 17.92 19.84 17.92V8.42667H20.4267L21.12 6.08H16.8533V17.92H16.2133Z"
      fill="white"
    />
  </svg>
);
export default LogoWarpcast;
