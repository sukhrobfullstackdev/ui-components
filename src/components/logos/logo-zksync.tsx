import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoZksync = ({ title, titleId, ...props }: Props) => (
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.77227 8.65272L6.77227 5.01532L0 11.7876L6.77227 18.5599L6.77227 13.6973L13.5595 8.65272L6.77227 8.65272Z"
      fill="#8C8DFC"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.2269 15.0125L17.2269 18.5599L23.9992 11.7876L17.2269 5.01532L17.2269 9.92205L10.4396 15.0125L17.2269 15.0125Z"
      fill="#4E529A"
    />
  </svg>
);
export default LogoZksync;
