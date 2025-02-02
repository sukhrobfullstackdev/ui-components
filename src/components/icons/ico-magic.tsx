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
const IcoMagic = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M12 0C13.0957 1.27209 14.3042 2.45344 15.6111 3.53035C14.7403 6.20756 14.2715 9.05188 14.2715 12C14.2715 14.9481 14.7403 17.7924 15.6111 20.4697C14.3042 21.5466 13.0957 22.7279 12 24C10.9043 22.7279 9.69576 21.5466 8.3889 20.4697C9.25969 17.7924 9.72849 14.9481 9.72849 12C9.72849 9.05189 9.25969 6.20756 8.3889 3.53035C9.69576 2.45344 10.9043 1.27209 12 0Z"
        fill="currentColor"
      />
      <path
        d="M5.89098 18.6187C4.50765 17.6996 3.03955 16.8874 1.5 16.1947C1.92706 14.8678 2.1568 13.4593 2.1568 12C2.1568 10.5407 1.92706 9.13221 1.5 7.80534C3.03955 7.11259 4.50765 6.30037 5.89098 5.38131C6.41993 7.5061 6.69982 9.72207 6.69982 12C6.69982 14.2779 6.41993 16.4939 5.89098 18.6187Z"
        fill="currentColor"
      />
      <path
        d="M17.3002 12C17.3002 14.2779 17.5801 16.4939 18.109 18.6187C19.4923 17.6996 20.9604 16.8874 22.5 16.1947C22.0729 14.8678 21.8432 13.4593 21.8432 12C21.8432 10.5407 22.0729 9.13221 22.5 7.80533C20.9604 7.11259 19.4923 6.30037 18.109 5.3813C17.5801 7.50609 17.3002 9.72207 17.3002 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoMagic;
