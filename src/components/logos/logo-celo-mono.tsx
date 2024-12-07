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
const LogoCeloMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M3 1C1.89543 1 1 1.89543 1 3V21C1 22.1046 1.89543 23 3 23H21C22.1046 23 23 22.1046 23 21V3C23 1.89543 22.1046 1 21 1H3ZM4 4H20V9.6768H17.3905C16.4748 7.59394 14.4146 6.12888 12.0112 6.12888C8.76082 6.12888 6.12856 8.76113 6.12856 11.9888C6.12856 15.2165 8.76082 17.8714 12.0112 17.8714C14.3689 17.8714 16.4291 16.4524 17.3444 14.4149H19.9997V20H4V4Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoCeloMono;
