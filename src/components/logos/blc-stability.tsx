import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const BlcStability = ({ title, titleId, ...props }: Props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.99998 24.329L15.923 17.6353L27.8461 24.3463L15.923 30.9999L3.99998 24.329Z" fill="#0A0A0A" />
    <path d="M3.99998 7.69333L15.923 14.348V27.6031L3.99998 21.0742V7.69333Z" fill="#3E7CB1" />
    <path d="M27.8463 7.71103L15.9232 14.3646V27.6208L27.8463 21.0919V7.71103Z" fill="#30C5FF" />
    <path d="M3.99998 7.69368L15.923 0.999996L27.8461 7.71103L15.923 14.3646L3.99998 7.69368Z" fill="#41EEF9" />
  </svg>
);
export default BlcStability;
