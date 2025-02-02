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
const IcoUsers = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M8.36364 7.45455C8.36364 5.44624 9.99169 3.81818 12 3.81818C14.0083 3.81818 15.6364 5.44624 15.6364 7.45455C15.6364 9.46285 14.0083 11.0909 12 11.0909C9.99169 11.0909 8.36364 9.46285 8.36364 7.45455ZM12 2C8.98754 2 6.54545 4.44208 6.54545 7.45455C6.54545 10.467 8.98754 12.9091 12 12.9091C15.0125 12.9091 17.4545 10.467 17.4545 7.45455C17.4545 4.44208 15.0125 2 12 2ZM3.81818 17.9091C3.81818 16.6539 4.83572 15.6364 6.09091 15.6364H17.9091C19.1643 15.6364 20.1818 16.6539 20.1818 17.9091C20.1818 19.1643 19.1643 20.1818 17.9091 20.1818H6.09091C4.83572 20.1818 3.81818 19.1643 3.81818 17.9091ZM6.09091 13.8182C3.83156 13.8182 2 15.6497 2 17.9091C2 20.1684 3.83156 22 6.09091 22H17.9091C20.1684 22 22 20.1684 22 17.9091C22 15.6497 20.1684 13.8182 17.9091 13.8182H6.09091Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoUsers;
