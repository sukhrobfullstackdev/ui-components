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
const IcoEmailFill = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M1 8C1 5.23858 3.23858 3 6 3H18C20.7614 3 23 5.23858 23 8V16C23 18.7614 20.7614 21 18 21H6C3.23858 21 1 18.7614 1 16V8ZM5.65079 6.24076C5.23147 5.88134 4.60017 5.9299 4.24075 6.34923C3.88132 6.76855 3.92989 7.39985 4.34921 7.75927L10.0476 12.6436C11.1711 13.6066 12.8289 13.6066 13.9524 12.6436L19.6508 7.75927C20.0701 7.39985 20.1187 6.76855 19.7593 6.34923C19.3998 5.9299 18.7685 5.88134 18.3492 6.24076L12.6508 11.1251C12.2763 11.4461 11.7237 11.4461 11.3492 11.1251L5.65079 6.24076Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoEmailFill;
