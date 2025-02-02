import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoEthereumCircle = ({ title, titleId, ...props }: Props) => (
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
    <circle cx={12} cy={12} r={12} fill="#C8CBFF" fillOpacity={0.5} />
    <path d="M12.156 4V4.25383L12.156 15.6039L17.3125 12.5559L12.156 4Z" fill="#62688F" />
    <path d="M12.1565 4L7 12.5559L12.1565 15.604V10.2122V4Z" fill="#8A92B2" />
    <path d="M12.1566 16.5799L12.1566 20.7999L17.3162 13.5334L12.1566 16.5799Z" fill="#62688F" />
    <path d="M12.1565 20.8V16.5801L7 13.5336L12.1565 20.8Z" fill="#8A92B2" />
    <path d="M12.1566 15.6041L17.3131 12.5561L12.1566 10.2123V15.6041Z" fill="#454A75" />
    <path d="M7 12.5561L12.1564 15.6041V10.2124L7 12.5561Z" fill="#62688F" />
  </svg>
);
export default LogoEthereumCircle;
