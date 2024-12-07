import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconDedicated = ({ title, titleId, ...props }: Props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.53333 21.043V23.4837C8.53333 24.9841 8.53333 25.7344 8.99947 26.2005C9.46561 26.6667 10.2159 26.6667 11.7163 26.6667H27.217C28.7175 26.6667 29.4677 26.6667 29.9339 26.2005C30.4 25.7344 30.4 24.9841 30.4 23.4837V13.8497C30.4 12.3492 30.4 11.599 29.9339 11.1328C29.4677 10.6667 28.7175 10.6667 27.217 10.6667H19.0543V17.8599C19.0543 19.3604 19.0543 20.1107 18.5881 20.5768C18.122 21.043 17.3718 21.043 15.8713 21.043H8.53333Z"
      fill="#F8B8A6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.06615 5.79948C1.60001 6.26563 1.60001 7.01587 1.60001 8.51635V17.8594C1.60001 19.3599 1.60001 20.1102 2.06615 20.5763C2.53229 21.0424 3.28253 21.0424 4.78302 21.0424H8.53334V13.8497C8.53334 12.3492 8.53334 11.599 8.99948 11.1328C9.46562 10.6667 10.2159 10.6667 11.7163 10.6667H19.0546V8.51635C19.0546 7.01587 19.0546 6.26563 18.5884 5.79948C18.1223 5.33334 17.372 5.33334 15.8715 5.33334H4.78302C3.28253 5.33334 2.53229 5.33334 2.06615 5.79948Z"
      fill="#EBD5B3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.0543 10.6667V17.8599C19.0543 19.3604 19.0543 20.1107 18.5881 20.5768C18.122 21.043 17.3718 21.043 15.8713 21.043H8.53333V13.8497C8.53333 12.3492 8.53333 11.599 8.99947 11.1328C9.46561 10.6667 10.2158 10.6667 11.7163 10.6667H19.0543Z"
      fill="url(#paint0_linear_11442_21148)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_11442_21148"
        x1={7.19997}
        y1={9.33338}
        x2={19.2005}
        y2={21.7332}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EBD4B3" />
        <stop offset={1} stopColor="#B77250" />
      </linearGradient>
    </defs>
  </svg>
);
export default IconDedicated;
