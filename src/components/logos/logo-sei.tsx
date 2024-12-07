import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoSei = ({ title, titleId, ...props }: Props) => (
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
      d="M11.972 23C15.2398 23 18.1757 21.5822 20.195 19.3299C19.2558 18.5155 17.84 18.466 16.84 19.2709L16.6489 19.4247C14.8178 20.8985 12.1497 20.6808 10.583 18.9299C9.72849 17.9749 8.26511 17.8775 7.29088 18.7106L5.08806 20.5943C6.97475 22.0998 9.36796 23 11.972 23ZM15.5476 17.6734C17.2917 16.2697 19.7432 16.32 21.4206 17.6758C22.4232 16.0188 23 14.0766 23 12C23 9.69256 22.2878 7.5511 21.0707 5.78237C20.286 5.61567 19.4353 5.81036 18.7898 6.38102L18.6061 6.54344C16.8451 8.09995 14.1697 8.00535 12.5237 6.32844C11.6259 5.41383 10.1596 5.38379 9.22494 6.26087L6.66152 8.66636L5.25135 7.17127L7.81477 4.76578C9.56559 3.12281 12.3125 3.17906 13.9942 4.89234C14.8729 5.78754 16.3011 5.83804 17.2412 5.00712L17.4249 4.8447C17.9955 4.34032 18.6558 4.00029 19.3469 3.82146C17.3932 2.06745 14.8076 1 11.972 1C6.37372 1 1.74975 5.16082 1.03873 10.5512C2.73915 9.73731 4.8366 10.0505 6.22306 11.4667C7.09834 12.3607 8.50765 12.4551 9.49488 11.6858L10.9281 10.5689C12.7294 9.16524 15.2757 9.23317 16.9991 10.7309L19.7896 13.1558L18.4376 14.7035L15.6473 12.2786C14.6673 11.427 13.2194 11.3883 12.1951 12.1865L10.7619 13.3034C8.94806 14.7168 6.35876 14.5434 4.75065 12.9008C3.81555 11.9457 2.28618 11.9124 1.31015 12.8259L1 13.1161C1.23211 15.4137 2.17301 17.5025 3.60128 19.1618L5.95137 17.1522C7.77637 15.5915 10.5177 15.7742 12.1184 17.5631C12.9548 18.4977 14.3791 18.6139 15.3566 17.8272L15.5476 17.6734Z"
      fill="#9E1F19"
    />
  </svg>
);
export default LogoSei;
