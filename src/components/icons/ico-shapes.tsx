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
const IcoShapes = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M9.5 1C8.11449 1 6.83084 1.72786 6.1195 2.91682L1.5031 10.6328C1.17387 11.1831 1 11.8123 1 12.4536C1 14.4122 2.58778 16 4.54641 16H9C9 19.866 12.134 23 16 23C19.866 23 23 19.866 23 16C23 12.313 20.1494 9.29171 16.5319 9.01991L12.8805 2.91682C12.1692 1.72786 10.8855 1 9.5 1ZM17.8213 11.3421C17.9392 11.6991 18 12.0743 18 12.4536C18 14.4122 16.4122 16 14.4536 16H11C11 18.7614 13.2386 21 16 21C18.7614 21 21 18.7614 21 16C21 13.8812 19.6821 12.0702 17.8213 11.3421ZM7.83578 3.94365C8.18597 3.35832 8.81791 3 9.5 3C10.1821 3 10.814 3.35832 11.1642 3.94365L15.7806 11.6596C15.9242 11.8996 16 12.174 16 12.4536C16 13.3076 15.3076 14 14.4536 14H4.54641C3.69235 14 3 13.3076 3 12.4536C3 12.174 3.07581 11.8996 3.21937 11.6596L2.36124 11.1462L3.21937 11.6596L7.83578 3.94365Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoShapes;
