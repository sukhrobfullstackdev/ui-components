import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconGameControllerDark = ({ title, titleId, ...props }: Props) => (
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
      d="M15.7451 11.2718V8.98919C15.7451 7.90864 16.6211 7.03267 17.7016 7.03267H18.0277C19.4685 7.03267 20.6364 5.86472 20.6364 4.42398V3.11963"
      stroke="url(#paint0_radial_10465_20606)"
      strokeWidth={1.76087}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M29.9403 18.5065C28.6146 13.1774 26.6195 10.3331 23.6599 9.55613C23.0378 9.39388 22.3925 9.31282 21.7442 9.31549C20.8873 9.31549 20.141 9.50111 19.3515 9.69785C18.4002 9.93515 17.3195 10.2047 15.7438 10.2047C14.1681 10.2047 13.0868 9.93571 12.1336 9.6984C11.3436 9.50111 10.5979 9.31549 9.74348 9.31549C9.07309 9.31343 8.40562 9.39423 7.76025 9.55558C4.81633 10.3292 2.82246 13.1724 1.47738 18.5031C0.0310509 24.2396 0.742967 27.8614 3.47375 28.7017C3.84807 28.819 4.24192 28.8795 4.63882 28.8806C6.50955 28.8806 8.00963 27.4952 9.03469 26.3609C10.1929 25.0771 11.5486 24.4258 15.7438 24.4258C19.4909 24.4258 21.0416 24.8776 22.3811 26.3609C23.223 27.2934 24.0187 27.9459 24.8125 28.3566C25.8682 28.9023 26.9232 29.0235 27.9477 28.7106C29.5615 28.221 30.4866 26.9266 30.6978 24.8626C30.8584 23.2798 30.6109 21.2007 29.9403 18.5065Z"
      fill="url(#paint1_radial_10465_20606)"
    />
    <g filter="url(#filter0_i_10465_20606)">
      <path
        d="M10.9796 18.2447H12.9863C13.2524 18.2447 13.5076 18.139 13.6958 17.9509C13.8839 17.7627 13.9896 17.5075 13.9896 17.2414C13.9896 16.9753 13.8839 16.7201 13.6958 16.5319C13.5076 16.3438 13.2524 16.2381 12.9863 16.2381H10.9796V14.2314C10.9796 13.9653 10.8739 13.7101 10.6857 13.5219C10.4976 13.3337 10.2424 13.228 9.97627 13.228C9.71016 13.228 9.45496 13.3337 9.2668 13.5219C9.07863 13.7101 8.97292 13.9653 8.97292 14.2314V16.2381H6.96624C6.70013 16.2381 6.44493 16.3438 6.25676 16.5319C6.0686 16.7201 5.96289 16.9753 5.96289 17.2414C5.96289 17.5075 6.0686 17.7627 6.25676 17.9509C6.44493 18.139 6.70013 18.2447 6.96624 18.2447H8.97292V20.2514C8.97292 20.5175 9.07863 20.7727 9.2668 20.9609C9.45496 21.1491 9.71016 21.2548 9.97627 21.2548C10.2424 21.2548 10.4976 21.1491 10.6857 20.9609C10.8739 20.7727 10.9796 20.5175 10.9796 20.2514V18.2447Z"
        fill="url(#paint2_linear_10465_20606)"
      />
    </g>
    <g filter="url(#filter1_i_10465_20606)">
      <circle cx={21.8157} cy={17.1412} r={3.26087} fill="url(#paint3_linear_10465_20606)" />
    </g>
    <defs>
      <filter
        id="filter0_i_10465_20606"
        x={5.96289}
        y={12.9019}
        width={8.02676}
        height={8.35285}
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
        <feOffset dy={-0.652174} />
        <feGaussianBlur stdDeviation={0.163043} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 0.532256 0 0 0 0 0.463469 0 0 0 0 1 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10465_20606" />
      </filter>
      <filter
        id="filter1_i_10465_20606"
        x={18.5548}
        y={13.5543}
        width={6.52173}
        height={6.84783}
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
        <feOffset dy={-0.652174} />
        <feGaussianBlur stdDeviation={0.163043} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix type="matrix" values="0 0 0 0 0.49231 0 0 0 0 0.419321 0 0 0 0 0.974856 0 0 0 1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10465_20606" />
      </filter>
      <radialGradient
        id="paint0_radial_10465_20606"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(17.7016 2.14137) rotate(87.8789) scale(8.81038 5.44344)"
      >
        <stop stopColor="#A799FF" />
        <stop offset={1} stopColor="#372F6C" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_10465_20606"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(0.999998 1.5) rotate(54.4623) scale(30.1081 43.5128)"
      >
        <stop stopColor="#A799FF" />
        <stop offset={1} stopColor="#3D3959" />
      </radialGradient>
      <linearGradient
        id="paint2_linear_10465_20606"
        x1={9.97627}
        y1={14.432}
        x2={9.97627}
        y2={22.0575}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A799FF" />
        <stop offset={1} stopColor="#5F5980" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_10465_20606"
        x1={21.8157}
        y1={13.8804}
        x2={21.8157}
        y2={20.4021}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A799FF" />
        <stop offset={1} stopColor="#5747BF" />
      </linearGradient>
    </defs>
  </svg>
);
export default IconGameControllerDark;
