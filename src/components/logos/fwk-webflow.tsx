import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const FwkWebflow = ({ title, titleId, ...props }: Props) => (
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
    <g clipPath="url(#clip0_8941_288)">
      <g clipPath="url(#clip1_8941_288)">
        <path d="M24 0V24H0V0H24Z" fill="#4353FF" />
        <path
          d="M16.2544 10.056C16.2544 10.056 15.0364 13.872 14.9464 14.196C14.9104 13.878 14.0224 7.02002 14.0224 7.02002C11.9464 7.02002 10.8424 8.49602 10.2544 10.056C10.2544 10.056 8.77237 13.884 8.65237 14.202C8.64637 13.902 8.42437 10.092 8.42437 10.092C8.29837 8.17802 6.55237 7.02002 5.13637 7.02002L6.84037 17.406C9.01237 17.4 10.1824 15.93 10.7944 14.364C10.7944 14.364 12.0964 10.986 12.1504 10.836C12.1624 10.98 13.0864 17.406 13.0864 17.406C15.2644 17.406 16.4404 16.032 17.0704 14.526L20.1244 7.02002C17.9704 7.02002 16.8364 8.49002 16.2544 10.056Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_8941_288">
        <rect width={24} height={24} rx={4} fill="white" />
      </clipPath>
      <clipPath id="clip1_8941_288">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default FwkWebflow;
