import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const BlcLoopring = ({ title, titleId, ...props }: Props) => (
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
      d="M30.5471 19.6286C28.5437 27.6643 20.4049 32.5547 12.3683 30.5508C4.33493 28.5474 -0.555476 20.4081 1.44887 12.3729C3.45134 4.33632 11.5901 -0.554547 19.6244 1.44886C27.6605 3.45227 32.5505 11.5925 30.5471 19.6286Z"
      fill="#1C60FF"
    />
    <path
      d="M18.0795 16.0533H28.9995V16.1399L11.9262 26.5399L20.4195 19.7799L18.0795 16.0533ZM11.6662 5.99998V26.7132L2.99959 19.7799L11.6662 5.99998Z"
      fill="white"
    />
  </svg>
);
export default BlcLoopring;
