import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoFacebook = ({ title, titleId, ...props }: Props) => (
  <svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M17.9214 14.3997L18.582 10.0883H14.4467V7.29096C14.4467 6.11245 15.0234 4.96121 16.8771 4.96121H18.7581V1.29148C18.7581 1.29148 17.0512 1 15.4197 1C12.0142 1 9.78718 3.06343 9.78718 6.80236V10.0883H6V14.3997H9.78718V24.8197C10.5463 24.9392 11.3243 25 12.1169 25C12.9096 25 13.6876 24.9371 14.4467 24.8197V14.3997H17.9214Z"
      fill="#1977F3"
    />
  </svg>
);
export default LogoFacebook;
