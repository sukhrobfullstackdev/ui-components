import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoMicrosoft = ({ title, titleId, ...props }: Props) => (
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
    <g clipPath="url(#clip0_8934_233)">
      <path d="M1.95654 1.95651H11.5218V11.5217H1.95654V1.95651Z" fill="#F35325" />
      <path d="M12.4782 1.95651H22.0435V11.5217H12.4782V1.95651Z" fill="#81BC06" />
      <path d="M1.95654 12.4783H11.5218V22.0435H1.95654V12.4783Z" fill="#05A6F0" />
      <path d="M12.4782 12.4783H22.0435V22.0435H12.4782V12.4783Z" fill="#FFBA08" />
    </g>
    <defs>
      <clipPath id="clip0_8934_233">
        <rect width={22} height={22} fill="white" transform="translate(1 1)" />
      </clipPath>
    </defs>
  </svg>
);
export default LogoMicrosoft;
