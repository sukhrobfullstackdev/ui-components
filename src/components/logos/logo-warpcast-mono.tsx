import type { SVGProps } from 'react';
import { token } from '@styled/tokens';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {
  /**
   * Configures icon color on monochrome svgs.
   */
  color?: string;
}
const LogoWarpcastMono = ({ color: customColor, title, titleId, ...props }: Props) => {
  // Utilize dynamic primary text color by default
  const color = customColor || token('colors.text.primary');
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.450346 2.1561C0 3.02306 0 4.16204 0 6.44V17.56C0 19.838 0 20.9769 0.450346 21.8439C0.829848 22.5745 1.42553 23.1702 2.1561 23.5497C3.02306 24 4.16204 24 6.44 24H17.56C19.838 24 20.9769 24 21.8439 23.5497C22.5745 23.1702 23.1702 22.5745 23.5497 21.8439C24 20.9769 24 19.838 24 17.56V6.44C24 4.16204 24 3.02306 23.5497 2.1561C23.1702 1.42553 22.5745 0.829848 21.8439 0.450346C20.9769 0 19.838 0 17.56 0H6.44C4.16204 0 3.02306 0 2.1561 0.450346C1.42553 0.829848 0.829848 1.42553 0.450346 2.1561ZM6.18667 3.73334H17.8133V6.08H21.12L20.4267 8.42667H19.84V17.92C20.1346 17.92 20.3733 18.1588 20.3733 18.4533V19.0933H20.48C20.7746 19.0933 21.0133 19.3321 21.0133 19.6267V20.2667H15.04V19.6267C15.04 19.3321 15.2788 19.0933 15.5733 19.0933H15.68V18.4533C15.68 18.1953 15.8632 17.9801 16.1067 17.9307V12.6933H16.0899C15.9013 10.6002 14.1422 8.96 12 8.96C9.8578 8.96 8.0987 10.6002 7.91008 12.6933H7.89334V17.92H8C8.29456 17.92 8.53334 18.1588 8.53334 18.4533V19.0933H8.64C8.93456 19.0933 9.17334 19.3321 9.17334 19.6267V20.2667H3.2V19.6267C3.2 19.3321 3.43879 19.0933 3.73334 19.0933H3.84V18.4533C3.84 18.1588 4.07879 17.92 4.37334 17.92V8.42667H3.78667L3.09334 6.08H6.18667V3.73334Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoWarpcastMono;
