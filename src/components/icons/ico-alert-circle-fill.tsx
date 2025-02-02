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
const IcoAlertCircleFill = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 4.69686e-07 18.6274 1.04907e-06 12C1.62846e-06 5.37258 5.37259 -1.62846e-06 12 -1.04907e-06C18.6274 -4.69686e-07 24 5.37258 24 12ZM13.5 17C13.5 17.8284 12.8284 18.5 12 18.5L11.991 18.5C11.1626 18.5 10.491 17.8284 10.491 17C10.491 16.1716 11.1626 15.5 11.991 15.5L12 15.5C12.8284 15.5 13.5 16.1716 13.5 17ZM11.9946 13C11.4423 13 10.9946 12.5523 10.9946 12L10.9946 6C10.9946 5.44771 11.4423 5 11.9946 5C12.5469 5 12.9946 5.44771 12.9946 6L12.9946 12C12.9946 12.5523 12.5469 13 11.9946 13Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoAlertCircleFill;
