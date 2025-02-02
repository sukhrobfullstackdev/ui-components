import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconProfileDark = ({ title, titleId, ...props }: Props) => (
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
    <g clipPath="url(#clip0_9889_129)">
      <rect width={32} height={32} rx={16} fill="#2B2B2B" />
      <rect width={32} height={32} rx={16} fill="#A799FF" fillOpacity={0.2} />
      <ellipse cx={16.0004} cy={11.6826} rx={6.81818} ry={6.81818} fill="url(#paint0_radial_9889_129)" />
      <path
        d="M7.24209 32.1371H24.7573C27.4518 32.1371 29.6361 29.9528 29.6361 27.2584C29.6361 25.2634 28.4215 23.4695 26.5692 22.7286L19.9789 20.0924C17.4245 19.0707 14.5749 19.0707 12.0205 20.0924L5.43017 22.7286C3.57791 23.4695 2.36334 25.2634 2.36334 27.2584C2.36334 29.9528 4.54764 32.1371 7.24209 32.1371Z"
        fill="url(#paint1_linear_9889_129)"
      />
    </g>
    <defs>
      <radialGradient
        id="paint0_radial_9889_129"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(10.5458 2.81894) rotate(77.7352) scale(16.0481 16.0481)"
      >
        <stop stopColor="#EDEBFF" />
        <stop offset={1} stopColor="#6851FF" />
      </radialGradient>
      <linearGradient
        id="paint1_linear_9889_129"
        x1={15.9997}
        y1={14.8321}
        x2={15.9997}
        y2={29.3683}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BDB2FF" />
        <stop offset={1} stopColor="#6851FF" />
      </linearGradient>
      <clipPath id="clip0_9889_129">
        <rect width={32} height={32} rx={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default IconProfileDark;
