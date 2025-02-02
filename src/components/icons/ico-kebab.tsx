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
const IcoKebab = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M11.8666 5.73325C11.3716 5.73325 10.8968 5.53659 10.5467 5.18653C10.1967 4.83647 10 4.36169 10 3.86663C10 3.37157 10.1967 2.89678 10.5467 2.54672C10.8968 2.19666 11.3716 2 11.8666 2C12.3617 2 12.8365 2.19666 13.1865 2.54672C13.5366 2.89678 13.7333 3.37157 13.7333 3.86663C13.7333 4.36169 13.5366 4.83647 13.1865 5.18653C12.8365 5.53659 12.3617 5.73325 11.8666 5.73325Z"
        fill="currentColor"
      />
      <path
        d="M11.8666 13.8665C11.3716 13.8665 10.8968 13.6699 10.5467 13.3198C10.1967 12.9697 10 12.495 10 11.9999C10 11.5048 10.1967 11.0301 10.5467 10.68C10.8968 10.3299 11.3716 10.1333 11.8666 10.1333C12.3617 10.1333 12.8365 10.3299 13.1865 10.68C13.5366 11.0301 13.7333 11.5048 13.7333 11.9999C13.7333 12.495 13.5366 12.9697 13.1865 13.3198C12.8365 13.6699 12.3617 13.8665 11.8666 13.8665Z"
        fill="currentColor"
      />
      <path
        d="M10 20.1334C10 20.6284 10.1967 21.1032 10.5467 21.4533C10.8968 21.8033 11.3716 22 11.8666 22C12.3617 22 12.8365 21.8033 13.1865 21.4533C13.5366 21.1032 13.7333 20.6284 13.7333 20.1334C13.7333 19.6383 13.5366 19.1635 13.1865 18.8135C12.8365 18.4634 12.3617 18.2668 11.8666 18.2668C11.3716 18.2668 10.8968 18.4634 10.5467 18.8135C10.1967 19.1635 10 19.6383 10 20.1334Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoKebab;
