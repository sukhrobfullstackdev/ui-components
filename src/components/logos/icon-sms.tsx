import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconSms = ({ title, titleId, ...props }: Props) => (
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
      d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.3519 2.57996 20.5684 3.60468 22.5142L2.33747 28.4279C2.178 29.1721 2.83302 29.8361 3.57935 29.6869L9.63917 28.4749C11.5477 29.45 13.7096 30 16 30Z"
      fill="url(#paint0_radial_11075_34702)"
    />
    <g filter="url(#filter0_d_11075_34702)">
      <circle cx={9.00051} cy={15.9982} r={2.33333} fill="url(#paint1_linear_11075_34702)" />
      <circle cx={16.0005} cy={15.9982} r={2.33333} fill="url(#paint2_linear_11075_34702)" />
      <circle cx={23.0005} cy={15.9982} r={2.33333} fill="url(#paint3_linear_11075_34702)" />
    </g>
    <defs>
      <filter
        id="filter0_d_11075_34702"
        x={3.86718}
        y={12.2649}
        width={24.2667}
        height={10.2667}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={1.4} />
        <feGaussianBlur stdDeviation={1.4} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11075_34702" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11075_34702" result="shape" />
      </filter>
      <radialGradient
        id="paint0_radial_11075_34702"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(4.8 -2.2) rotate(77.7352) scale(32.9521)"
      >
        <stop stopColor="#EDEBFF" />
        <stop offset={1} stopColor="#6851FF" />
      </radialGradient>
      <linearGradient
        id="paint1_linear_11075_34702"
        x1={9.00051}
        y1={13.6649}
        x2={9.00051}
        y2={18.3316}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint2_linear_11075_34702"
        x1={16.0005}
        y1={13.6649}
        x2={16.0005}
        y2={18.3316}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint3_linear_11075_34702"
        x1={23.0005}
        y1={13.6649}
        x2={23.0005}
        y2={18.3316}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default IconSms;
