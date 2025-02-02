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
const LogoSuiMono = ({ color: customColor, title, titleId, ...props }: Props) => {
  // Utilize dynamic primary text color by default
  const color = customColor || token('colors.text.primary');
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M11.6531 5.11875L10.575 6.99375C10.2937 7.63125 9.81559 9.01875 10.2656 10.2937C10.6125 11.2781 11.4843 12.0469 12.8531 12.5625C14.8406 13.3125 16.1437 14.4281 16.7156 15.8812C16.8093 16.1156 16.8843 16.35 16.9312 16.575C17.4093 15.1687 17.2593 13.6406 16.5 12.3187L12.3468 5.11875C12.1968 4.85625 11.8031 4.85625 11.6531 5.11875Z"
        fill="currentColor"
      />
      <path
        d="M7.49997 12.3187L8.7281 10.1812C8.77497 10.3781 8.82185 10.575 8.88747 10.7719C9.39372 12.1781 10.5562 13.2375 12.3375 13.9125C13.9218 14.5125 14.9343 15.3469 15.3562 16.3969C15.8156 17.5312 15.45 18.6281 15.3281 18.9281C14.4093 19.6875 13.2468 20.1187 12 20.1187C10.125 20.1187 8.43747 19.1531 7.49997 17.5219C6.56247 15.8906 6.56247 13.95 7.49997 12.3187Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 21.5719C9.59997 21.5719 7.44372 20.325 6.24372 18.2437C5.03435 16.1625 5.03435 13.6781 6.24372 11.5969L11.3062 2.82187C11.6156 2.2875 12.3843 2.2875 12.6937 2.82187L17.7562 11.5969C18.9562 13.6781 18.9562 16.1625 17.7562 18.2437C16.5562 20.325 14.4 21.5719 12 21.5719Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoSuiMono;
