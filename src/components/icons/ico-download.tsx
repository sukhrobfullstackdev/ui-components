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
const IcoDownload = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M16.9928 10.079C17.3833 10.4695 17.3833 11.1027 16.9928 11.4932L13.2209 15.265C12.8304 15.6556 12.1972 15.6556 11.8067 15.265L8.03496 11.4933C7.64443 11.1027 7.64443 10.4696 8.03496 10.0791C8.42548 9.68854 9.05865 9.68854 9.44917 10.0791L11.5138 12.1437L11.5139 3.41411C11.5139 2.86182 11.9617 2.41412 12.514 2.41412C13.0662 2.41413 13.5139 2.86185 13.5139 3.41414L13.5138 12.1437L15.5786 10.079C15.9691 9.68844 16.6023 9.68844 16.9928 10.079ZM3 16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16V18C1 20.7614 3.23858 23 6 23H18C20.7614 23 23 20.7614 23 18V16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V16Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoDownload;
