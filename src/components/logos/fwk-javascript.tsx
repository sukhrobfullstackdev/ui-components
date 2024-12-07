import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const FwkJavascript = ({ title, titleId, ...props }: Props) => (
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
    <g clipPath="url(#clip0_8941_296)">
      <g clipPath="url(#clip1_8941_296)">
        <path d="M24 0H0V24H24V0Z" fill="#F7DF1E" />
        <path
          d="M16.122 18.7499C16.6055 19.5393 17.2344 20.1194 18.3468 20.1194C19.2813 20.1194 19.8782 19.6524 19.8782 19.0071C19.8782 18.2337 19.2649 17.9598 18.2363 17.5099L17.6725 17.268C16.0451 16.5747 14.9639 15.7061 14.9639 13.8699C14.9639 12.1785 16.2527 10.8909 18.2668 10.8909C19.7007 10.8909 20.7316 11.3899 21.4744 12.6966L19.7182 13.8242C19.3316 13.1309 18.9144 12.8577 18.2668 12.8577C17.6062 12.8577 17.1876 13.2768 17.1876 13.8242C17.1876 14.5008 17.6066 14.7747 18.5742 15.1937L19.138 15.4352C21.0542 16.257 22.1361 17.0947 22.1361 18.9781C22.1361 21.0086 20.5411 22.121 18.399 22.121C16.3045 22.121 14.9514 21.1229 14.2893 19.8147L16.122 18.7499ZM8.15518 18.9453C8.50946 19.5739 8.83175 20.1053 9.6066 20.1053C10.3476 20.1053 10.815 19.8154 10.815 18.6882V11.0196H13.0702V18.7187C13.0702 21.0539 11.7011 22.1168 9.7026 22.1168C7.89689 22.1168 6.85118 21.1823 6.31937 20.0568L8.15518 18.9453Z"
          fill="black"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_8941_296">
        <rect width={24} height={24} rx={4} fill="white" />
      </clipPath>
      <clipPath id="clip1_8941_296">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default FwkJavascript;
