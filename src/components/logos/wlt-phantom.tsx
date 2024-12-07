import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const WltPhantom = ({ title, titleId, ...props }: Props) => (
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
    <mask
      id="mask0_10729_1440"
      style={{
        maskType: 'luminance',
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={1}
      width={30}
      height={30}
    >
      <path d="M31 1H1V31H31V1Z" fill="white" />
    </mask>
    <g mask="url(#mask0_10729_1440)">
      <path
        d="M24.5602 1H7.4398C3.8832 1 1 3.8832 1 7.4398V24.5602C1 28.1168 3.8832 31 7.4398 31H24.5602C28.1168 31 31 28.1168 31 24.5602V7.4398C31 3.8832 28.1168 1 24.5602 1Z"
        fill="#AB9FF2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9305 20.4953C12.7525 22.3003 10.7787 24.5844 8.15225 24.5844C6.91065 24.5844 5.7168 24.0733 5.7168 21.853C5.7168 16.1986 13.437 7.44531 20.6001 7.44531C24.6751 7.44531 26.2987 10.2725 26.2987 13.4831C26.2987 17.6042 23.6245 22.3163 20.9662 22.3163C20.1225 22.3163 19.7087 21.853 19.7087 21.1183C19.7087 20.9266 19.7405 20.719 19.8042 20.4953C18.8969 22.0447 17.1459 23.4823 15.5063 23.4823C14.3125 23.4823 13.7076 22.7316 13.7076 21.6773C13.7076 21.294 13.7872 20.8947 13.9305 20.4953ZM23.6091 13.3717C23.6091 14.3073 23.0571 14.775 22.4396 14.775C21.8128 14.775 21.2702 14.3073 21.2702 13.3717C21.2702 12.4362 21.8128 11.9684 22.4396 11.9684C23.0571 11.9684 23.6091 12.4362 23.6091 13.3717ZM20.1008 13.3718C20.1008 14.3073 19.5488 14.7751 18.9313 14.7751C18.3045 14.7751 17.7619 14.3073 17.7619 13.3718C17.7619 12.4362 18.3045 11.9685 18.9313 11.9685C19.5488 11.9685 20.1008 12.4362 20.1008 13.3718Z"
        fill="#FFFDF8"
      />
    </g>
  </svg>
);
export default WltPhantom;
