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
const IcoEmailOpen = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M8 6C8 5.44772 8.44772 5 9 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H9C8.44772 7 8 6.55228 8 6Z"
        fill="currentColor"
      />
      <path
        d="M9 9C8.44772 9 8 9.44772 8 10C8 10.5523 8.44772 11 9 11H15C15.5523 11 16 10.5523 16 10C16 9.44772 15.5523 9 15 9H9Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1C4.44772 1 4 1.44772 4 2V5.12602C2.27477 5.57006 1 7.13616 1 9V18C1 20.7614 3.23858 23 6 23H18C20.7614 23 23 20.7614 23 18V9C23 7.13616 21.7252 5.57006 20 5.12602V2C20 1.44772 19.5523 1 19 1H5ZM20 7.26756V12C20 12.4 19.7616 12.7616 19.3939 12.9191L12.3939 15.9191C12.1424 16.027 11.8576 16.027 11.6061 15.9191L4.60608 12.9191C4.2384 12.7616 4 12.4 4 12V7.26756C3.4022 7.61337 3 8.25972 3 9V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V9C21 8.25972 20.5978 7.61337 20 7.26756ZM6 11.3406V3H18V11.3406L12 13.912L6 11.3406Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoEmailOpen;
