import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoPoa = ({ title, titleId, ...props }: Props) => (
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
    <circle cx={12} cy={12} r={11} fill="#5B2DA7" />
    <path d="M8.61815 6H6V8.57143H8.61815V6Z" fill="white" />
    <path d="M18 6H15.3819V8.57143H18V6Z" fill="white" />
    <path
      d="M10.8001 6H13.4182V10.7143H18V18H15.3819V13.2857H13.4182V15.4286H10.8001V13.2857H8.61817V10.7143H10.8001V6Z"
      fill="white"
    />
    <path d="M8.61817 10.7143L6 10.7143V18H8.61815L8.61817 10.7143Z" fill="white" />
  </svg>
);
export default LogoPoa;
