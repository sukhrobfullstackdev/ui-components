import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoArbitrumOne = ({ title, titleId, ...props }: Props) => (
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
    <path
      d="M11.6842 1.48796C11.7425 1.48796 11.7979 1.50255 11.8505 1.53172L20.6498 6.65206C20.752 6.71041 20.8132 6.82128 20.8132 6.93798L20.7811 17.1174C20.7811 17.2341 20.7169 17.3449 20.6148 17.4033L11.7804 22.4653C11.7308 22.4945 11.6725 22.509 11.6141 22.509C11.5558 22.509 11.5003 22.4945 11.4478 22.4653L2.65136 17.3449C2.54925 17.2866 2.48798 17.1757 2.48798 17.059L2.52007 6.87963C2.52007 6.76293 2.58426 6.65206 2.68637 6.59371L11.5208 1.53172C11.5704 1.50255 11.6258 1.48796 11.6842 1.48796ZM11.69 0C11.3749 0 11.0627 0.0787743 10.7797 0.239241L1.94531 5.30122C1.38222 5.62507 1.03211 6.22317 1.03211 6.87379L1.00002 17.0532C0.997101 17.7038 1.34137 18.3048 1.90446 18.6316L10.7039 23.7519C10.9839 23.9153 11.299 23.997 11.6112 23.9999C11.9234 24.0028 12.2385 23.9212 12.5215 23.7607L21.3559 18.6987C21.919 18.3749 22.2691 17.7767 22.2691 17.1261L22.3012 6.94673C22.3041 6.29611 21.9598 5.6951 21.3967 5.36833L12.5974 0.247993C12.3173 0.0846095 12.0051 0 11.69 0Z"
      fill="#1B4ADD"
    />
    <path
      d="M13.4726 5.54922H12.1831C12.0868 5.54922 11.9993 5.61049 11.9672 5.70094L7.8184 17.0707C7.79214 17.1466 7.84757 17.2253 7.92635 17.2253H9.21591C9.31219 17.2253 9.39972 17.1641 9.43181 17.0736L13.5806 5.70386C13.6069 5.628 13.5514 5.54922 13.4726 5.54922ZM11.2174 5.54922H9.9278C9.83152 5.54922 9.74399 5.61049 9.7119 5.70094L5.56311 17.0707C5.53686 17.1466 5.59229 17.2253 5.67106 17.2253H6.96063C7.05691 17.2253 7.14444 17.1641 7.17653 17.0736L11.3253 5.70386C11.3516 5.628 11.2961 5.54922 11.2174 5.54922ZM12.8862 9.95767C12.8483 9.85556 12.7053 9.85556 12.6703 9.95767L11.9993 11.7957C11.9818 11.8453 11.9818 11.9037 11.9993 11.9533L13.8665 17.0736C13.8986 17.1641 13.9861 17.2253 14.0824 17.2253H15.372C15.4508 17.2253 15.5062 17.1466 15.4799 17.0707L12.8862 9.95767ZM17.7381 17.0707L14.0153 6.86797C13.9774 6.76585 13.8344 6.76585 13.7994 6.86797L13.1284 8.70604C13.1109 8.75563 13.1109 8.81399 13.1284 8.86358L16.1247 17.0765C16.1568 17.167 16.2443 17.2283 16.3406 17.2283H17.6302C17.709 17.2253 17.7644 17.1466 17.7381 17.0707Z"
      fill="#1B4ADD"
    />
  </svg>
);
export default LogoArbitrumOne;
