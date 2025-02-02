import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconPassport = ({ title, titleId, ...props }: Props) => (
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
      d="M20.6674 10.4009C15.4266 10.4718 11.2 14.7423 11.2 20C11.2 20.5448 11.2454 21.079 11.3326 21.5991C11.2884 21.5997 11.2442 21.6 11.2 21.6C5.89804 21.6 1.59998 17.3019 1.59998 12C1.59998 6.69806 5.89804 2.39999 11.2 2.39999C15.9571 2.39999 19.906 5.86011 20.6674 10.4009Z"
      fill="#8472FD"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3326 21.5998C16.5734 21.5288 20.8 17.2583 20.8 12.0007C20.8 11.4558 20.7546 10.9216 20.6674 10.4016C15.4266 10.4725 11.2 14.743 11.2 20.0006C11.2 20.5455 11.2454 21.0797 11.3326 21.5998Z"
      fill="url(#paint0_linear_11442_21163)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3336 21.5991C16.5744 21.5282 20.801 17.2577 20.801 12C20.801 11.4552 20.7556 10.9209 20.6684 10.4009C20.7125 10.4003 20.7567 10.4 20.801 10.4C26.1029 10.4 30.401 14.6981 30.401 20C30.401 25.3019 26.1029 29.6 20.801 29.6C16.0439 29.6 12.0949 26.1399 11.3336 21.5991Z"
      fill="#31D4A3"
    />
    <defs>
      <linearGradient
        id="paint0_linear_11442_21163"
        x1={9.19998}
        y1={8.40065}
        x2={18.4}
        y2={18.4006}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7199E0" />
        <stop offset={1} stopColor="#3E537A" />
      </linearGradient>
    </defs>
  </svg>
);
export default IconPassport;
