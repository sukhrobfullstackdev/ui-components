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
const IcoExternalLink = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M3 6C3 4.34315 4.34315 3 6 3H12C12.5523 3 13 2.55228 13 2C13 1.44772 12.5523 1 12 1H6C3.23858 1 1 3.23858 1 6V18C1 20.7614 3.23858 23 6 23H18C20.7614 23 23 20.7614 23 18V12C23 11.4477 22.5523 11 22 11C21.4477 11 21 11.4477 21 12V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6ZM16.2 2C16.2 1.44772 16.6477 1 17.2 1H22C22.5522 1 23 1.44772 23 2V6.8C23 7.35228 22.5522 7.8 22 7.8C21.4477 7.8 21 7.35228 21 6.8V4.41431L13.7071 11.7072C13.3166 12.0977 12.6834 12.0977 12.2929 11.7072C11.9024 11.3166 11.9024 10.6835 12.2929 10.2929L19.5858 3H17.2C16.6477 3 16.2 2.55228 16.2 2Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoExternalLink;
