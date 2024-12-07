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
const IcoAlertCircle = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M13.2554 17C13.2554 17.6904 12.6957 18.25 12.0054 18.25L11.9964 18.25C11.306 18.25 10.7464 17.6904 10.7464 17C10.7464 16.3096 11.306 15.75 11.9964 15.75L12.0054 15.75C12.6957 15.75 13.2554 16.3096 13.2554 17Z"
        fill="currentColor"
      />
      <path
        d="M12 14C11.4477 14 11 13.5523 11 13L11 7C11 6.44771 11.4477 6 12 6C12.5523 6 13 6.44771 13 7L13 13C13 13.5523 12.5523 14 12 14Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 -4.69686e-07 12 -1.04907e-06C5.37259 -1.62846e-06 1.62846e-06 5.37258 1.04907e-06 12C4.69686e-07 18.6274 5.37258 24 12 24ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoAlertCircle;
