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
const IcoEyeOpened = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M2.25952 11.7415C3.2372 10.042 6.17389 6 12 6C17.8261 6 20.7628 10.042 21.7405 11.7415C21.8358 11.9072 21.8358 12.0928 21.7405 12.2585C20.7628 13.958 17.8261 18 12 18C6.17389 18 3.2372 13.958 2.25952 12.2585C2.16418 12.0928 2.16418 11.9072 2.25952 11.7415ZM12 4C5.09498 4 1.63186 8.82179 0.525923 10.7442C0.0753738 11.5273 0.0753741 12.4727 0.525923 13.2558C1.63186 15.1782 5.09498 20 12 20C18.905 20 22.3681 15.1782 23.4741 13.2558C23.9246 12.4727 23.9246 11.5273 23.4741 10.7442C22.3681 8.82179 18.905 4 12 4ZM11.973 9C10.3161 9 8.973 10.3431 8.973 12C8.973 13.6569 10.3161 15 11.973 15H12.027C13.6839 15 15.027 13.6569 15.027 12C15.027 10.3431 13.6839 9 12.027 9H11.973Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoEyeOpened;
