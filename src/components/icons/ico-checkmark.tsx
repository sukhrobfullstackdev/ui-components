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
const IcoCheckmark = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M21.6449 4.23573C22.067 4.59188 22.1204 5.22279 21.7643 5.64489L9.95179 19.6449C9.76438 19.867 9.48961 19.9966 9.19901 20C8.9084 20.0033 8.63072 19.8801 8.43825 19.6623L2.25075 12.6623C1.88498 12.2485 1.92391 11.6166 2.33771 11.2508C2.75151 10.885 3.38348 10.924 3.74925 11.3378L9.1699 17.4702L20.2357 4.35515C20.5919 3.93304 21.2228 3.87958 21.6449 4.23573Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoCheckmark;
