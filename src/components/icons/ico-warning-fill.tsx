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
const IcoWarningFill = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M9.36635 3.74008C10.5034 1.65549 13.4967 1.65548 14.6337 3.74008L23.2646 19.5634C24.355 21.5626 22.9081 24 20.6309 24H3.36909C1.09191 24 -0.355028 21.5625 0.735407 19.5634L9.36635 3.74008L10.2442 4.21893L9.36635 3.74008ZM12 9C12.5523 9 13 9.44772 13 10V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V10C11 9.44772 11.4477 9 12 9ZM10.4946 19C10.4946 18.1716 11.1662 17.5 11.9946 17.5H12.0036C12.832 17.5 13.5036 18.1716 13.5036 19C13.5036 19.8284 12.832 20.5 12.0036 20.5H11.9946C11.1662 20.5 10.4946 19.8284 10.4946 19Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoWarningFill;
