import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoBitBucket = ({ title, titleId, ...props }: Props) => (
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
      d="M1.71397 2.00006C1.6111 1.99873 1.50919 2.01994 1.41539 2.06219C1.32159 2.10444 1.23817 2.16672 1.171 2.24464C1.10382 2.32256 1.05452 2.41424 1.02655 2.51324C0.998581 2.61225 0.992621 2.71617 1.00909 2.81772L4.00132 20.9826C4.03861 21.2049 4.15302 21.4069 4.32447 21.5532C4.49592 21.6995 4.71344 21.7808 4.93882 21.7826H19.2938C19.4627 21.7848 19.6269 21.7262 19.7562 21.6175C19.8856 21.5089 19.9717 21.3573 19.9987 21.1905L22.9909 2.82125C23.0074 2.7197 23.0014 2.61577 22.9734 2.51677C22.9455 2.41776 22.8962 2.32608 22.829 2.24816C22.7618 2.17024 22.6784 2.10797 22.5846 2.06572C22.4908 2.02346 22.3889 2.00226 22.286 2.00358L1.71397 2.00006ZM14.3138 15.1285H9.73203L8.49144 8.64712H15.424L14.3138 15.1285Z"
      fill="#2684FF"
    />
    <path
      d="M22.0389 8.64706H15.4236L14.3134 15.1285H9.73166L4.32167 21.55C4.49314 21.6982 4.71176 21.7807 4.93844 21.7826H19.2969C19.4659 21.7848 19.63 21.7262 19.7594 21.6175C19.8888 21.5088 19.9748 21.3573 20.0018 21.1905L22.0389 8.64706Z"
      fill="url(#paint0_linear_8934_282)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_8934_282"
        x1={23.5685}
        y1={10.4621}
        x2={12.6358}
        y2={18.9948}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.18} stopColor="#0052CC" />
        <stop offset={1} stopColor="#2684FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default LogoBitBucket;
