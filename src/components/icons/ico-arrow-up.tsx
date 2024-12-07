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
const IcoArrowUp = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M17.2407 10.6508C17.6001 11.0701 18.2314 11.1187 18.6508 10.7593C19.0701 10.3998 19.1187 9.76853 18.7592 9.34921L12.7592 2.34921C12.5693 2.12756 12.2919 2 12 2C11.7081 2 11.4307 2.12756 11.2407 2.34921L5.24073 9.34921C4.8813 9.76853 4.92987 10.3998 5.34919 10.7593C5.76852 11.1187 6.39982 11.0701 6.75924 10.6508L11 5.70324L11 21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21L13 5.70328L17.2407 10.6508Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoArrowUp;
