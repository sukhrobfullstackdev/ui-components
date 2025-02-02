import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const BlcZksync = ({ title, titleId, ...props }: Props) => (
  <svg
    width={33}
    height={32}
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.03001 11.5373L9.03001 6.68726L0 15.7173L9.03001 24.7473L9.03001 18.2636L18.08 11.5373L9.03001 11.5373Z"
      fill="#8C8DFC"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.97 20.0173L22.97 24.7473L32 15.7173L22.97 6.68726L22.97 13.2298L13.92 20.0173L22.97 20.0173Z"
      fill="#4E529A"
    />
  </svg>
);
export default BlcZksync;
