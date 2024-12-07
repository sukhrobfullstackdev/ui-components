import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoCelo = ({ title, titleId, ...props }: Props) => (
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
    <rect x={1} y={1} width={22} height={22} rx={2} fill="#FDFE71" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 4H4V20H19.9997V14.4149H17.3444C16.4291 16.4524 14.3689 17.8714 12.0112 17.8714C8.76082 17.8714 6.12856 15.2165 6.12856 11.9888C6.12856 8.76113 8.76082 6.12888 12.0112 6.12888C14.4146 6.12888 16.4748 7.59394 17.3905 9.6768H20V4Z"
      fill="black"
    />
  </svg>
);
export default LogoCelo;
