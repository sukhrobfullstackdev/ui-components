import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconGameController = ({ title, titleId, ...props }: Props) => (
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
      d="M20.8913 2.11957C21.3776 2.11957 21.7717 2.51375 21.7717 3V4.30435C21.7717 6.23134 20.2096 7.79348 18.2826 7.79348H17.9565C17.3622 7.79348 16.8804 8.27526 16.8804 8.86957V11.1522C16.8804 11.6384 16.4863 12.0326 16 12.0326C15.5138 12.0326 15.1196 11.6384 15.1196 11.1522V8.86957C15.1196 7.30276 16.3897 6.03261 17.9565 6.03261H18.2826C19.2371 6.03261 20.0109 5.25884 20.0109 4.30435V3C20.0109 2.51375 20.4051 2.11957 20.8913 2.11957Z"
      fill="url(#paint0_radial_10465_20457)"
    />
    <path
      d="M30.1952 18.3868C28.8695 13.0578 26.8743 10.2134 23.9148 9.4365C23.2927 9.27425 22.6474 9.19319 21.9991 9.19586C21.1421 9.19586 20.3958 9.38148 19.6064 9.57822C18.6551 9.81552 17.5744 10.0851 15.9987 10.0851C14.423 10.0851 13.3417 9.81608 12.3885 9.57878C11.5985 9.38148 10.8528 9.19586 9.99837 9.19586C9.32797 9.1938 8.6605 9.2746 8.01513 9.43595C5.07121 10.2096 3.07734 13.0528 1.73227 18.3835C0.285934 24.12 0.99785 27.7418 3.72863 28.5821C4.10295 28.6994 4.4968 28.7599 4.8937 28.761C6.76443 28.761 8.26452 27.3755 9.28958 26.2412C10.4478 24.9575 11.8035 24.3061 15.9987 24.3061C19.7458 24.3061 21.2965 24.758 22.636 26.2412C23.4779 27.1738 24.2736 27.8262 25.0674 28.2369C26.123 28.7827 27.1781 28.9038 28.2025 28.591C29.8164 28.1013 30.7414 26.807 30.9527 24.7429C31.1133 23.1602 30.8658 21.0811 30.1952 18.3868Z"
      fill="url(#paint1_radial_10465_20457)"
    />
    <g filter="url(#filter0_i_10465_20457)">
      <path
        d="M11.2341 18.1252H13.2408C13.5069 18.1252 13.7621 18.0195 13.9503 17.8314C14.1385 17.6432 14.2442 17.388 14.2442 17.1219C14.2442 16.8558 14.1385 16.6006 13.9503 16.4124C13.7621 16.2243 13.5069 16.1186 13.2408 16.1186H11.2341V14.1119C11.2341 13.8458 11.1284 13.5906 10.9403 13.4024C10.7521 13.2142 10.4969 13.1085 10.2308 13.1085C9.96468 13.1085 9.70948 13.2142 9.52131 13.4024C9.33315 13.5906 9.22744 13.8458 9.22744 14.1119V16.1186H7.22075C6.95465 16.1186 6.69944 16.2243 6.51128 16.4124C6.32312 16.6006 6.21741 16.8558 6.21741 17.1219C6.21741 17.388 6.32312 17.6432 6.51128 17.8314C6.69944 18.0195 6.95465 18.1252 7.22075 18.1252H9.22744V20.1319C9.22744 20.398 9.33315 20.6532 9.52131 20.8414C9.70948 21.0296 9.96468 21.1353 10.2308 21.1353C10.4969 21.1353 10.7521 21.0296 10.9403 20.8414C11.1284 20.6532 11.2341 20.398 11.2341 20.1319V18.1252Z"
        fill="url(#paint2_linear_10465_20457)"
      />
    </g>
    <g filter="url(#filter1_i_10465_20457)">
      <circle cx={22.0702} cy={17.0217} r={3.26087} fill="url(#paint3_linear_10465_20457)" />
    </g>
    <defs>
      <filter
        id="filter0_i_10465_20457"
        x={6.21741}
        y={12.7824}
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
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10465_20457" />
      </filter>
      <filter
        id="filter1_i_10465_20457"
        x={18.8093}
        y={13.4348}
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
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_10465_20457" />
      </filter>
      <radialGradient
        id="paint0_radial_10465_20457"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(17.9565 2.02174) rotate(87.8789) scale(8.81039 5.44344)"
      >
        <stop stopColor="#EDEBFF" />
        <stop offset={1} stopColor="#6851FF" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_10465_20457"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(4 6.26102) rotate(71.565) scale(23.7171 34.2763)"
      >
        <stop stopColor="#EDEBFF" />
        <stop offset={1} stopColor="#6851FF" />
      </radialGradient>
      <linearGradient
        id="paint2_linear_10465_20457"
        x1={10.2308}
        y1={14.3125}
        x2={10.2308}
        y2={21.938}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EDEBFF" />
        <stop offset={1} stopColor="#EDEBFF" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint3_linear_10465_20457"
        x1={22.0702}
        y1={13.7609}
        x2={22.0702}
        y2={20.2826}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EDEBFF" />
        <stop offset={1} stopColor="#EDEBFF" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default IconGameController;
