import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const BlcCelo = ({ title, titleId, ...props }: Props) => (
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
    <rect x={0.999599} y={0.999996} width={29.9999} height={29.9999} rx={15} fill="#FDFE71" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.9995 7.99997H7.99957V23.9999H23.9992V18.4148H21.3439C20.4286 20.4523 18.3684 21.8714 16.0107 21.8714C12.7604 21.8714 10.1281 19.2164 10.1281 15.9887C10.1281 12.7611 12.7604 10.1288 16.0107 10.1288C18.4141 10.1288 20.4743 11.5939 21.39 13.6767H23.9995V7.99997Z"
      fill="black"
    />
  </svg>
);
export default BlcCelo;
