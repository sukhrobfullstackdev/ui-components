import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const TokenEth = ({ title, titleId, ...props }: Props) => (
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
    <path d="M12.0603 1V1.45833L12.0603 16.1956L18.8129 12.2042L12.0603 1Z" fill="white" fillOpacity={0.78} />
    <path d="M12.0609 1L5.30835 12.2042L12.0609 16.1957V9.13496V1Z" fill="white" fillOpacity={0.45} />
    <path d="M12.0609 17.4737L12.0609 22.9998L18.8175 13.4843L12.0609 17.4737Z" fill="white" fillOpacity={0.78} />
    <path d="M12.0609 23V17.4739L5.30835 13.4845L12.0609 23Z" fill="white" fillOpacity={0.45} />
    <path d="M12.0609 16.1958L18.8134 12.2044L12.0609 9.13516V16.1958Z" fill="white" />
    <path d="M5.30835 12.2045L12.0608 16.1959V9.13524L5.30835 12.2045Z" fill="white" fillOpacity={0.5} />
  </svg>
);
export default TokenEth;
