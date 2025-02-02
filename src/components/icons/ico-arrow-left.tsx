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
const IcoArrowLeft = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M10.6508 6.75927C11.0701 6.39985 11.1187 5.76855 10.7593 5.34923C10.3998 4.9299 9.76853 4.88134 9.34921 5.24076L2.34921 11.2408C2.12756 11.4307 2 11.7081 2 12C2 12.2919 2.12756 12.5693 2.34921 12.7593L9.34921 18.7593C9.76853 19.1187 10.3998 19.0701 10.7593 18.6508C11.1187 18.2315 11.0701 17.6002 10.6508 17.2408L5.70324 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H5.70328L10.6508 6.75927Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoArrowLeft;
