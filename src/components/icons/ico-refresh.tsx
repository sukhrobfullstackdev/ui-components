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
const IcoRefresh = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M12 3C6.99489 3 3 7.02968 3 12C3 12.5523 2.55228 13 2 13C1.44772 13 1 12.5523 1 12C1 5.93033 5.88511 1 12 1C15.6319 1 18.3508 2.518 20.1418 4.01211C20.4554 4.27365 20.7414 4.53515 21 4.78871V2.56C21 2.00772 21.4477 1.56 22 1.56C22.5523 1.56 23 2.00772 23 2.56V7.56C23 8.11228 22.5523 8.56 22 8.56H17.56C17.0077 8.56 16.56 8.11228 16.56 7.56C16.56 7.00772 17.0077 6.56 17.56 6.56H19.9367C19.6339 6.23948 19.2751 5.89363 18.8607 5.54789C17.3192 4.262 15.0381 3 12 3ZM22 11C22.5523 11 23 11.4477 23 12C23 18.0723 18.0723 23 12 23C8.89272 23 6.44015 21.4364 4.81317 19.9607C4.56094 19.7319 4.32638 19.5034 4.11 19.2803V21.44C4.11 21.9923 3.66228 22.44 3.11 22.44C2.55772 22.44 2.11 21.9923 2.11 21.44V16.44C2.11 15.8877 2.55772 15.44 3.11 15.44H7.63C8.18228 15.44 8.63 15.8877 8.63 16.44C8.63 16.9923 8.18228 17.44 7.63 17.44H5.12977C5.42214 17.769 5.76564 18.1245 6.15683 18.4793C7.59485 19.7836 9.58728 21 12 21C16.9677 21 21 16.9677 21 12C21 11.4477 21.4477 11 22 11Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoRefresh;
