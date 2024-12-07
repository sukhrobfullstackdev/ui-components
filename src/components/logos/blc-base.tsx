import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const BlcBase = ({ title, titleId, ...props }: Props) => (
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
    <path
      d="M15.9735 29.9999C23.7194 29.9999 29.9981 23.7324 29.9981 15.9999C29.9981 8.26749 23.7194 1.99999 15.9735 1.99999C8.62524 1.99999 2.59742 7.64253 1.99822 14.8228H20.5353V17.177H1.99822C2.59742 24.3573 8.62524 29.9999 15.9735 29.9999Z"
      fill="#2A5BF6"
    />
  </svg>
);
export default BlcBase;
