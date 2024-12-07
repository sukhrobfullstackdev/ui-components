import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoLoopring = ({ title, titleId, ...props }: Props) => (
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
      d="M22.9103 14.7215C21.4077 20.7482 15.3036 24.416 9.27619 22.9131C3.25119 21.4105 -0.416611 15.3061 1.08665 9.2797C2.5885 3.25224 8.6926 -0.415907 14.7183 1.08665C20.7454 2.58921 24.4129 8.69435 22.9103 14.7215Z"
      fill="#1C60FF"
    />
    <path
      d="M13.5596 12.0399H21.7496V12.1049L8.94467 19.9049L15.3146 14.8349L13.5596 12.0399ZM8.74967 4.49997V20.0349L2.24969 14.8349L8.74967 4.49997Z"
      fill="white"
    />
  </svg>
);
export default LogoLoopring;
