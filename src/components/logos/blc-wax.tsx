import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const BlcWax = ({ title, titleId, ...props }: Props) => (
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
      d="M15.9997 30.9999C24.2839 30.9999 30.9996 24.2842 30.9996 15.9999C30.9996 7.7157 24.2839 0.999996 15.9997 0.999996C7.71542 0.999996 0.999722 7.7157 0.999722 15.9999C0.999722 24.2842 7.71542 30.9999 15.9997 30.9999Z"
      fill="#F89022"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.2496 18.7768H25.0334L23.4612 17.4306L21.8946 18.7712H20.0215L19.1262 17.6837H16.04L16.8209 16.719H18.3387L17.1828 15.3053L13.1469 20.2187H11.2747L12.4428 18.7918H10.4919L9.43719 15.8349L8.39094 18.7693H6.41189L4.74971 14.1634H6.26845L7.38595 17.3002L8.49969 14.1774H10.3747L11.4856 17.2937L12.5956 14.1765H14.119L12.4428 18.7918L12.8159 18.3362L16.2397 14.169H18.124L20.9731 17.6452L22.3437 16.4668L18.0059 12.7187H20.2325L27.2496 18.7768ZM25.0512 15.9906L24.0059 15.0943L25.0493 14.2056L27.1587 14.2074L25.0512 15.9906Z"
      fill="white"
    />
  </svg>
);
export default BlcWax;
