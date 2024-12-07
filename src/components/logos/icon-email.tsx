import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconEmail = ({ title, titleId, ...props }: Props) => (
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
    <g filter="url(#filter0_i_11075_34701)">
      <path
        d="M30 10.3998V16.2098L16 21.5998L2 16.2098V10.3998C2 9.65721 2.295 8.94502 2.8201 8.41992C3.3452 7.89482 4.05739 7.59982 4.8 7.59982H27.2C27.9426 7.59982 28.6548 7.89482 29.1799 8.41992C29.705 8.94502 30 9.65721 30 10.3998Z"
        fill="url(#paint0_linear_11075_34701)"
      />
    </g>
    <path
      d="M24.4002 1.99982H7.60019C6.0538 1.99982 4.80019 3.32306 4.80019 4.95537V25.6442C4.80019 27.2765 6.0538 28.5998 7.60019 28.5998H24.4002C25.9466 28.5998 27.2002 27.2765 27.2002 25.6442V4.95537C27.2002 3.32306 25.9466 1.99982 24.4002 1.99982Z"
      fill="url(#paint1_linear_11075_34701)"
    />
    <path
      d="M30 16.2073V27.1972C30 27.9399 29.705 28.652 29.1799 29.1771C28.6548 29.7022 27.9426 29.9972 27.2 29.9972H4.8C4.05739 29.9972 3.3452 29.7022 2.8201 29.1771C2.295 28.652 2 27.9399 2 27.1972V16.2073L13.984 20.8273C15.2833 21.3174 16.7167 21.3174 18.016 20.8273L30 16.2073Z"
      fill="url(#paint2_linear_11075_34701)"
    />
    <path
      d="M8.30068 12.4998H18.1007"
      stroke="url(#paint3_linear_11075_34701)"
      strokeWidth={2.1}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M8.30068 8.30016H20.9007"
      stroke="url(#paint4_linear_11075_34701)"
      strokeWidth={2.1}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <defs>
      <filter
        id="filter0_i_11075_34701"
        x={2}
        y={7.59982}
        width={29.4}
        height={16.8}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={1.4} dy={2.8} />
        <feGaussianBlur stdDeviation={2.8} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_11075_34701" />
      </filter>
      <linearGradient
        id="paint0_linear_11075_34701"
        x1={16}
        y1={7.59982}
        x2={16}
        y2={21.5998}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BDB2FF" />
        <stop offset={0.40625} stopColor="#6851FF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_11075_34701"
        x1={16.0002}
        y1={1.99982}
        x2={16.0002}
        y2={28.5998}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={0.578125} stopColor="#BDB2FF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_11075_34701"
        x1={16}
        y1={12.4972}
        x2={16}
        y2={27.1972}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BDB2FF" />
        <stop offset={1} stopColor="#6851FF" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_11075_34701"
        x1={13.2007}
        y1={12.4998}
        x2={13.2007}
        y2={13.4998}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BDB2FF" />
        <stop offset={1} stopColor="#522FD4" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_11075_34701"
        x1={14.6007}
        y1={8.30016}
        x2={14.6007}
        y2={9.30016}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BDB2FF" />
        <stop offset={1} stopColor="#522FD4" />
      </linearGradient>
    </defs>
  </svg>
);
export default IconEmail;
