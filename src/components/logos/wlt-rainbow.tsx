import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const WltRainbow = ({ title, titleId, ...props }: Props) => (
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
      d="M1 14.6C1 9.83955 1 7.45933 1.92644 5.64108C2.74137 4.0417 4.0417 2.74137 5.64108 1.92644C7.45933 1 9.83955 1 14.6 1H17.4C22.1604 1 24.5407 1 26.3589 1.92644C27.9583 2.74137 29.2586 4.0417 30.0736 5.64108C31 7.45933 31 9.83955 31 14.6V17.4C31 22.1604 31 24.5407 30.0736 26.3589C29.2586 27.9583 27.9583 29.2586 26.3589 30.0736C24.5407 31 22.1604 31 17.4 31H14.6C9.83955 31 7.45933 31 5.64108 30.0736C4.0417 29.2586 2.74137 27.9583 1.92644 26.3589C1 24.5407 1 22.1604 1 17.4V14.6Z"
      fill="url(#paint0_linear_10729_1349)"
    />
    <path
      d="M5.6875 10.5H7.1875C14.9195 10.5 21.1875 16.768 21.1875 24.5V26H24.1875C25.0159 26 25.6875 25.3284 25.6875 24.5C25.6875 14.2827 17.4048 6 7.1875 6C6.35907 6 5.6875 6.67157 5.6875 7.5V10.5Z"
      fill="url(#paint1_radial_10729_1349)"
    />
    <path
      d="M21.6875 24.5H25.6875C25.6875 25.3284 25.0159 26 24.1875 26H21.6875V24.5Z"
      fill="url(#paint2_linear_10729_1349)"
    />
    <path
      d="M7.1875 6L7.1875 10H5.6875L5.6875 7.5C5.6875 6.67157 6.35907 6 7.1875 6Z"
      fill="url(#paint3_linear_10729_1349)"
    />
    <path
      d="M5.6875 10H7.1875C15.1956 10 21.6875 16.4919 21.6875 24.5V26H17.1875V24.5C17.1875 18.9772 12.7103 14.5 7.1875 14.5H5.6875V10Z"
      fill="url(#paint4_radial_10729_1349)"
    />
    <path d="M17.6875 24.5H21.6875V26H17.6875V24.5Z" fill="url(#paint5_linear_10729_1349)" />
    <path d="M5.6875 14L5.6875 10L7.1875 10L7.1875 14H5.6875Z" fill="url(#paint6_linear_10729_1349)" />
    <path
      d="M5.6875 16.5C5.6875 17.3284 6.35907 18 7.1875 18C10.7774 18 13.6875 20.9101 13.6875 24.5C13.6875 25.3284 14.3591 26 15.1875 26H17.6875V24.5C17.6875 18.701 12.9865 14 7.1875 14H5.6875V16.5Z"
      fill="url(#paint7_radial_10729_1349)"
    />
    <path
      d="M13.6875 24.5H17.6875V26H15.1875C14.3591 26 13.6875 25.3284 13.6875 24.5Z"
      fill="url(#paint8_radial_10729_1349)"
    />
    <path
      d="M7.1875 18C6.35907 18 5.6875 17.3284 5.6875 16.5L5.6875 14L7.1875 14L7.1875 18Z"
      fill="url(#paint9_radial_10729_1349)"
    />
    <defs>
      <linearGradient id="paint0_linear_10729_1349" x1={16} y1={1} x2={16} y2={31} gradientUnits="userSpaceOnUse">
        <stop stopColor="#174299" />
        <stop offset={1} stopColor="#001E59" />
      </linearGradient>
      <radialGradient
        id="paint1_radial_10729_1349"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.1875 24.5) rotate(-90) scale(18.5)"
      >
        <stop offset={0.770277} stopColor="#FF4000" />
        <stop offset={1} stopColor="#8754C9" />
      </radialGradient>
      <linearGradient
        id="paint2_linear_10729_1349"
        x1={21.4375}
        y1={25.25}
        x2={25.6875}
        y2={25.25}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF4000" />
        <stop offset={1} stopColor="#8754C9" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_10729_1349"
        x1={6.4375}
        y1={6}
        x2={6.4375}
        y2={10.25}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8754C9" />
        <stop offset={1} stopColor="#FF4000" />
      </linearGradient>
      <radialGradient
        id="paint4_radial_10729_1349"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.1875 24.5) rotate(-90) scale(14.5)"
      >
        <stop offset={0.723929} stopColor="#FFF700" />
        <stop offset={1} stopColor="#FF9901" />
      </radialGradient>
      <linearGradient
        id="paint5_linear_10729_1349"
        x1={17.6875}
        y1={25.25}
        x2={21.6875}
        y2={25.25}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF700" />
        <stop offset={1} stopColor="#FF9901" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_10729_1349"
        x1={6.4375}
        y1={14}
        x2={6.4375}
        y2={10}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFF700" />
        <stop offset={1} stopColor="#FF9901" />
      </linearGradient>
      <radialGradient
        id="paint7_radial_10729_1349"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.1875 24.5) rotate(-90) scale(10.5)"
      >
        <stop offset={0.59513} stopColor="#00AAFF" />
        <stop offset={1} stopColor="#01DA40" />
      </radialGradient>
      <radialGradient
        id="paint8_radial_10729_1349"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(13.4375 25.25) scale(4.25 11.3333)"
      >
        <stop stopColor="#00AAFF" />
        <stop offset={1} stopColor="#01DA40" />
      </radialGradient>
      <radialGradient
        id="paint9_radial_10729_1349"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(6.4375 18.25) rotate(-90) scale(4.25 80.5926)"
      >
        <stop stopColor="#00AAFF" />
        <stop offset={1} stopColor="#01DA40" />
      </radialGradient>
    </defs>
  </svg>
);
export default WltRainbow;
