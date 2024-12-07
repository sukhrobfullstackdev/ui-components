import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoLinkedIn = ({ title, titleId, ...props }: Props) => (
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.2946 21H21.028L21.0296 14.4043C21.0296 11.1664 20.3319 8.6775 16.548 8.6775C15.1034 8.62385 13.6913 9.37184 12.9615 10.6195V8.97649H9.37758V20.9995H13.1109V15.0518C13.1109 13.4834 13.4084 11.9644 15.3529 11.9644C17.2697 11.9644 17.2946 13.7591 17.2946 15.1533V21ZM2.99811 5.16657C2.99811 6.3551 3.97657 7.33299 5.1651 7.33299C6.3534 7.33288 7.33118 6.35442 7.33118 5.16612C7.33096 3.97781 6.35306 3.00003 5.16464 3.00003C3.97611 3.00003 2.99811 3.97804 2.99811 5.16657ZM3.29451 21H7.03174V8.97649H3.29451V21Z"
      fill="#0A66C2"
    />
  </svg>
);
export default LogoLinkedIn;
