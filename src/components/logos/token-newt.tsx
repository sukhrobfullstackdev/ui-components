import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const TokenNewt = ({ title, titleId, ...props }: Props) => (
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
    <g clipPath="url(#clip0_11434_22223)">
      <g filter="url(#filter0_i_11434_22223)">
        <rect width={24} height={24} rx={12} fill="url(#paint0_radial_11434_22223)" />
        <path
          d="M11.2272 6.59985H8.33002L8.17675 7.13931L8.4124 7.22295C8.80094 7.36085 9.04958 7.62434 9.2612 7.97247L7.303 15.42C7.13477 16.0301 6.95563 16.3955 6.72906 16.6233C6.51145 16.8421 6.22054 16.9629 5.75497 17.0118L5.57562 17.0307L5.39999 17.6488H9.01673L9.18503 17.0565L8.88308 17.0131C8.42417 16.9472 8.23701 16.8341 8.15494 16.6836C8.06155 16.5124 8.04317 16.193 8.20696 15.5564L8.2071 15.5558L9.87203 9.20969L13.8889 17.799H14.3388L16.736 8.69359C16.8802 8.17231 17.0508 7.83754 17.2683 7.6204C17.4793 7.4097 17.7601 7.28448 18.1818 7.2366L18.3361 7.21908L18.6 6.59985H15.0028L14.7467 7.20069L15.1075 7.23697C15.6183 7.28834 15.8076 7.40962 15.8839 7.54547C15.9719 7.70196 15.9824 7.99039 15.8325 8.55578L15.8323 8.55655L14.4829 13.7077L11.2272 6.59985Z"
          fill="url(#paint1_linear_11434_22223)"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_i_11434_22223"
        x={0}
        y={0}
        width={24}
        height={24}
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
        <feOffset />
        <feGaussianBlur stdDeviation={3.6} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 0.887774 0 0 0 0 0.438867 0 0 0 0 1 0 0 0 0.85 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_11434_22223" />
      </filter>
      <radialGradient
        id="paint0_radial_11434_22223"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(12 7.79992) rotate(90) scale(17.1 41.0491)"
      >
        <stop offset={0.510653} />
        <stop offset={0.829163} stopColor="#801E99" stopOpacity={0.6} />
        <stop offset={1} stopColor="#DF61FF" stopOpacity={0.5} />
      </radialGradient>
      <linearGradient
        id="paint1_linear_11434_22223"
        x1={12}
        y1={6.59985}
        x2={12}
        y2={17.799}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="#CA97E3" />
      </linearGradient>
      <clipPath id="clip0_11434_22223">
        <rect width={24} height={24} rx={12} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default TokenNewt;
