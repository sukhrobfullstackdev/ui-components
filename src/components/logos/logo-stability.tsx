import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoStability = ({ title, titleId, ...props }: Props) => (
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
    <path d="M3.75 17.8303L12.0961 13.1447L20.4423 17.8424L12.0961 22.4999L3.75 17.8303Z" fill="#0A0A0A" />
    <path d="M3.75 6.18533L12.0961 10.8436V20.1222L3.75 15.5519V6.18533Z" fill="#3E7CB1" />
    <path d="M20.4424 6.19775L12.0962 10.8553V20.1346L20.4424 15.5644V6.19775Z" fill="#30C5FF" />
    <path d="M3.75 6.18558L12.0961 1.5L20.4423 6.19772L12.0961 10.8552L3.75 6.18558Z" fill="#41EEF9" />
  </svg>
);
export default LogoStability;
