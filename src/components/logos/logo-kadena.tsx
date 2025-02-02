import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoKadena = ({ title, titleId, ...props }: Props) => (
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
      d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM8.70714 13.7715V18L8.67143 17.9715L6.04286 15.9V15.8928L6 15.8643V8.13572L6.04286 8.10715V8.1L8.67143 6.02857L8.70714 6V10.2286V13.7715ZM14.1359 6H18.493L18.4573 6.02857L10.9144 12L8.70726 10.2286L14.1001 6.02857L14.1359 6ZM10.9144 12L18.4573 17.9715L18.493 18H14.1359L14.1001 17.9715L8.70726 13.7715L10.9144 12Z"
      fill="#4A9079"
    />
  </svg>
);
export default LogoKadena;
