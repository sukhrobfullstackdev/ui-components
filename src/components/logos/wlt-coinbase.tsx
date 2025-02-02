import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const WltCoinbase = ({ title, titleId, ...props }: Props) => (
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
    <circle cx={16} cy={16} r={16} fill="url(#paint0_linear_8941_733)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0013 26.666C21.8924 26.666 26.668 21.8903 26.668 15.9993C26.668 10.1083 21.8924 5.33264 16.0013 5.33264C10.1103 5.33264 5.33466 10.1083 5.33466 15.9993C5.33466 21.8903 10.1103 26.666 16.0013 26.666ZM13.8659 12.8613C13.3136 12.8613 12.8659 13.309 12.8659 13.8613V18.1358C12.8659 18.6881 13.3136 19.1358 13.8659 19.1358H18.1404C18.6927 19.1358 19.1404 18.6881 19.1404 18.1358V13.8613C19.1404 13.309 18.6927 12.8613 18.1404 12.8613H13.8659Z"
      fill="white"
    />
    <defs>
      <linearGradient id="paint0_linear_8941_733" x1={6.5} y1={3.5} x2={26} y2={29.5} gradientUnits="userSpaceOnUse">
        <stop stopColor="#2A62F5" />
        <stop offset={1} stopColor="#164EE0" />
      </linearGradient>
    </defs>
  </svg>
);
export default WltCoinbase;
