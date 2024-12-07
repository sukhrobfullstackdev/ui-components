import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoSolana = ({ title, titleId, ...props }: Props) => (
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
      d="M5.3583 15.9485C5.47379 15.833 5.6326 15.7656 5.80103 15.7656H21.0752C21.3543 15.7656 21.4939 16.1025 21.2966 16.2998L18.2793 19.3171C18.1638 19.4326 18.005 19.5 17.8365 19.5H2.56236C2.28325 19.5 2.1437 19.1631 2.341 18.9658L5.3583 15.9485Z"
      fill="url(#paint0_linear_10462_20708)"
    />
    <path
      d="M5.3583 4.6829C5.4786 4.5674 5.63741 4.50003 5.80103 4.50003H21.0752C21.3543 4.50003 21.4939 4.83689 21.2966 5.03419L18.2793 8.05149C18.1638 8.16699 18.005 8.23436 17.8365 8.23436H2.56236C2.28325 8.23436 2.1437 7.8975 2.341 7.70019L5.3583 4.6829Z"
      fill="url(#paint1_linear_10462_20708)"
    />
    <path
      d="M18.2793 10.2796C18.1638 10.1641 18.005 10.0967 17.8365 10.0967H2.56236C2.28325 10.0967 2.1437 10.4336 2.341 10.6309L5.3583 13.6482C5.47379 13.7637 5.6326 13.8311 5.80103 13.8311H21.0752C21.3543 13.8311 21.4939 13.4942 21.2966 13.2969L18.2793 10.2796Z"
      fill="url(#paint2_linear_10462_20708)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_10462_20708"
        x1={19.6161}
        y1={2.69763}
        x2={9.04511}
        y2={22.9452}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset={1} stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_10462_20708"
        x1={14.9939}
        y1={0.284408}
        x2={4.42293}
        y2={20.532}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset={1} stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_10462_20708"
        x1={17.2903}
        y1={1.48335}
        x2={6.71932}
        y2={21.7309}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset={1} stopColor="#DC1FFF" />
      </linearGradient>
    </defs>
  </svg>
);
export default LogoSolana;
