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
const IcoArrowRight = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M13.3492 6.75927C12.9299 6.39985 12.8813 5.76855 13.2407 5.34923C13.6002 4.9299 14.2315 4.88134 14.6508 5.24076L21.6508 11.2408C21.8724 11.4307 22 11.7081 22 12C22 12.2919 21.8724 12.5693 21.6508 12.7593L14.6508 18.7593C14.2315 19.1187 13.6002 19.0701 13.2407 18.6508C12.8813 18.2315 12.9299 17.6002 13.3492 17.2408L18.2968 13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H18.2967L13.3492 6.75927Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoArrowRight;
