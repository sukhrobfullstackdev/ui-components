import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const BlcEthereum = ({ title, titleId, ...props }: Props) => (
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
      d="M15.9794 2.99999L15.8051 3.59245V20.7843L15.9794 20.9583L23.9597 16.2412L15.9794 2.99999Z"
      fill="#343434"
    />
    <path d="M15.9802 2.99999L7.99988 16.2412L15.9802 20.9584V12.614V2.99999Z" fill="#8C8C8C" />
    <path d="M15.9801 22.4687L15.8819 22.5885V28.7126L15.9801 28.9995L23.9651 17.754L15.9801 22.4687Z" fill="#3C3C3B" />
    <path d="M15.9802 28.9998V22.469L7.99988 17.7542L15.9802 28.9998Z" fill="#8C8C8C" />
    <path d="M15.9801 20.9585L23.9603 16.2415L15.9801 12.6142V20.9585Z" fill="#141414" />
    <path d="M7.99988 16.2416L15.98 20.9586V12.6143L7.99988 16.2416Z" fill="#393939" />
  </svg>
);
export default BlcEthereum;
