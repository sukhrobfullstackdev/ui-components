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
const LogoIconMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M20.0677 5.61199C20.9962 5.61199 21.7488 4.85937 21.7488 3.93097C21.7488 3.00256 20.9962 2.24994 20.0677 2.24994C19.1393 2.24994 18.3867 3.00256 18.3867 3.93097C18.3867 4.85937 19.1393 5.61199 20.0677 5.61199Z"
        fill="currentColor"
      />
      <path
        d="M7.14627 14.8851C6.51316 13.8104 6.25503 12.5557 6.41243 11.3183C6.56983 10.081 7.13385 8.93091 8.01587 8.04889C8.89789 7.16687 10.0479 6.60285 11.2853 6.44545C12.5227 6.28805 13.7773 6.54618 14.8521 7.17929L16.1969 5.83447L16.1297 5.78067C14.6832 4.82723 12.951 4.40465 11.2279 4.58488C9.5049 4.76511 7.89761 5.53701 6.67975 6.76914C5.46189 8.00127 4.70877 9.61745 4.54862 11.3425C4.38848 13.0675 4.83122 14.7947 5.80145 16.2299L7.14627 14.8851Z"
        fill="currentColor"
      />
      <path
        d="M16.8543 9.1894C17.4874 10.2641 17.7455 11.5188 17.5881 12.7562C17.4307 13.9936 16.8667 15.1436 15.9847 16.0256C15.1027 16.9076 13.9526 17.4717 12.7152 17.6291C11.4778 17.7865 10.2232 17.5283 9.14847 16.8952L7.80365 18.24C9.244 19.2179 10.9802 19.663 12.7134 19.4988C14.4465 19.3346 16.0682 18.5712 17.2993 17.3402C18.5303 16.1092 19.2936 14.4875 19.4579 12.7543C19.6221 11.0211 19.177 9.28493 18.1991 7.84457L16.8543 9.1894Z"
        fill="currentColor"
      />
      <path
        d="M3.93072 21.7498C4.85913 21.7498 5.61175 20.9971 5.61175 20.0687C5.61175 19.1403 4.85913 18.3877 3.93072 18.3877C3.00232 18.3877 2.24969 19.1403 2.24969 20.0687C2.24969 20.9971 3.00232 21.7498 3.93072 21.7498Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoIconMono;
