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
const LogoEthereumMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
      <path d="M12.0658 0V0.5L12.0658 16.577L19.4323 12.2228L12.0658 0Z" fill="currentColor" fillOpacity={0.78} />
      <path d="M12.0665 0L4.7 12.2228L12.0665 16.5771V8.87451V0Z" fill="currentColor" fillOpacity={0.45} />
      <path
        d="M12.0664 17.9713L12.0664 23.9998L19.4373 13.6192L12.0664 17.9713Z"
        fill="currentColor"
        fillOpacity={0.78}
      />
      <path d="M12.0665 24V17.9715L4.7 13.6194L12.0665 24Z" fill="currentColor" fillOpacity={0.45} />
      <path d="M12.0665 16.5772L19.4328 12.223L12.0665 8.87473V16.5772Z" fill="currentColor" />
      <path d="M4.7 12.2231L12.0663 16.5773V8.87482L4.7 12.2231Z" fill="currentColor" fillOpacity={0.5} />
    </svg>
  );
};
export default LogoEthereumMono;
