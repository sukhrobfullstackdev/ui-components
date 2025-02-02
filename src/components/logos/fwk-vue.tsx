import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const FwkVue = ({ title, titleId, ...props }: Props) => (
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
    <g clipPath="url(#clip0_8941_276)">
      <path
        d="M14.5396 2.99995L11.9993 7.39984L9.45901 2.99995H0.999557L11.9993 22.0522L22.999 2.99995H14.5396Z"
        fill="#41B883"
      />
      <path
        d="M14.5397 2.99988L11.9994 7.39977L9.45912 2.99988H5.39955L11.9994 14.431L18.5992 2.99988H14.5397Z"
        fill="#34495E"
      />
    </g>
    <defs>
      <clipPath id="clip0_8941_276">
        <rect width={22} height={19.0525} fill="white" transform="translate(1 3)" />
      </clipPath>
    </defs>
  </svg>
);
export default FwkVue;
