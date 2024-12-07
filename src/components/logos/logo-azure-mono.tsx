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
const LogoAzureMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M9.11135 3H14.5359L8.90469 19.6848C8.84681 19.8562 8.73662 20.0052 8.58963 20.1108C8.44265 20.2163 8.26626 20.2731 8.08531 20.2731H3.86364C3.72654 20.2731 3.5914 20.2405 3.46941 20.1779C3.34742 20.1154 3.24209 20.0246 3.16212 19.9133C3.08215 19.8019 3.02984 19.6731 3.00953 19.5375C2.98922 19.4019 3.00148 19.2635 3.04531 19.1335L8.29177 3.58833C8.34962 3.41681 8.45983 3.26776 8.60686 3.16218C8.75389 3.0566 8.93034 3.00001 9.11135 3Z"
        fill="currentColor"
        fillOpacity={0.4}
      />
      <path
        d="M16.9952 14.1916H8.3931C8.31313 14.1915 8.23498 14.2155 8.16885 14.2604C8.10271 14.3054 8.05164 14.3692 8.0223 14.4436C7.99296 14.518 7.9867 14.5995 8.00435 14.6775C8.022 14.7555 8.06272 14.8264 8.12123 14.8809L13.6487 20.0401C13.8097 20.1902 14.0216 20.2737 14.2416 20.2736H19.1125L16.9952 14.1916Z"
        fill="currentColor"
        fillOpacity={0.85}
      />
      <path
        d="M9.11285 3.00061C8.92986 2.99991 8.75144 3.05774 8.60365 3.16565C8.45586 3.27355 8.34645 3.42589 8.2914 3.6004L3.05327 19.12C3.0065 19.2504 2.99181 19.3901 3.01046 19.5273C3.02911 19.6646 3.08054 19.7954 3.1604 19.9085C3.24027 20.0217 3.34634 20.1144 3.46941 20.1779C3.59248 20.2415 3.72892 20.2741 3.86744 20.2737H8.19806C8.35935 20.2449 8.5101 20.1738 8.63492 20.0677C8.75973 19.9615 8.85413 19.8241 8.90848 19.6696L9.95306 16.591L13.6843 20.0712C13.8407 20.2006 14.0368 20.2721 14.2397 20.2737H19.0924L16.9641 14.1917L10.7597 14.1931L14.557 3.00061H9.11285Z"
        fill="url(#paint0_linear_11075_34681)"
      />
      <path
        d="M16.0394 3.58794C15.9816 3.4167 15.8715 3.2679 15.7247 3.1625C15.5779 3.0571 15.4017 3.00042 15.221 3.00044H9.1754C9.35611 3.00045 9.53228 3.05715 9.67908 3.16254C9.82588 3.26793 9.93593 3.41672 9.99373 3.58794L15.2404 19.1338C15.2843 19.2637 15.2965 19.4022 15.2763 19.5378C15.256 19.6735 15.2037 19.8023 15.1237 19.9137C15.0437 20.0251 14.9384 20.1159 14.8164 20.1785C14.6944 20.2411 14.5592 20.2738 14.4221 20.2738H20.4679C20.605 20.2737 20.7402 20.2411 20.8621 20.1784C20.9841 20.1158 21.0894 20.025 21.1694 19.9136C21.2493 19.8022 21.3016 19.6734 21.3219 19.5378C21.3422 19.4022 21.3299 19.2637 21.286 19.1338L16.0394 3.58794Z"
        fill="currentColor"
      />
      <defs>
        <linearGradient
          id="paint0_linear_11075_34681"
          x1={14.219}
          y1={12.0364}
          x2={12.7783}
          y2={12.5913}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopOpacity={0.3} />
          <stop offset={0.071} stopOpacity={0.2} />
          <stop offset={0.321} stopOpacity={0.1} />
          <stop offset={0.623} stopOpacity={0.05} />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default LogoAzureMono;
