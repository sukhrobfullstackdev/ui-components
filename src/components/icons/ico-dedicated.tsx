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
const IcoDedicated = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M0.391752 11.9197C0.136099 11.6204 0.136099 11.1797 0.391752 10.8804L6.03011 4.28041C6.1821 4.1025 6.40437 4.00005 6.63837 4.00005C6.87236 4.00005 7.09463 4.1025 7.24663 4.28041L9.30494 6.68978L11.3633 4.28041C11.5152 4.1025 11.7375 4.00005 11.9715 4.00005C12.2055 4.00005 12.4278 4.1025 12.5798 4.28041L14.6666 6.72314L16.7534 4.28041C16.9054 4.1025 17.1277 4.00005 17.3617 4.00005C17.5957 4.00005 17.8179 4.1025 17.9699 4.28041L23.6083 10.8804C23.8639 11.1797 23.8639 11.6204 23.6083 11.9197L17.9699 18.5197C17.8179 18.6976 17.5957 18.8 17.3617 18.8C17.1277 18.8 16.9054 18.6976 16.7534 18.5197L14.6666 16.077L12.5798 18.5197C12.4278 18.6976 12.2055 18.8 11.9715 18.8C11.7375 18.8 11.5152 18.6976 11.3633 18.5197L9.30494 16.1103L7.24663 18.5197C7.09463 18.6976 6.87236 18.8 6.63837 18.8C6.40437 18.8 6.1821 18.6976 6.03011 18.5197L0.391752 11.9197ZM10.3571 14.8787L11.9715 16.7684L16.5577 11.4L11.9715 6.03168L10.3571 7.92142L12.885 10.8804C13.1406 11.1797 13.1406 11.6204 12.885 11.9197L10.3571 14.8787ZM15.7188 14.8453L17.3617 16.7684L21.9478 11.4L17.3617 6.03168L15.7188 7.95478L18.2181 10.8804C18.4738 11.1797 18.4738 11.6204 18.2181 11.9197L15.7188 14.8453ZM6.63837 16.7684L11.2245 11.4L6.63837 6.03168L2.05219 11.4L6.63837 16.7684Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoDedicated;
