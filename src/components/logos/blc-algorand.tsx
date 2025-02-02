import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const BlcAlgorand = ({ title, titleId, ...props }: Props) => (
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
      d="M8.81651 26.9999L12.0094 21.4902L15.2023 15.9999L18.3758 10.4903L18.9014 9.61725L19.1351 10.4903L20.1085 14.1181L19.0182 15.9999L15.8253 21.4902L12.6519 26.9999H16.4678L19.6607 21.4902L21.3156 18.6384L22.0943 21.4902L23.574 26.9999H27.0005L25.5209 21.4902L24.0412 15.9999L23.6519 14.5837L26.0271 10.4903H22.5616L22.4448 10.0829L21.2377 5.58199L21.082 4.99998H17.7528L17.6749 5.11638L14.5598 10.4903L11.3669 15.9999L8.1935 21.4902L5.00059 26.9999H8.81651Z"
      fill="black"
    />
  </svg>
);
export default BlcAlgorand;
