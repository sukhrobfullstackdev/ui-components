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
const LogoAuth0Mono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M17.2025 18.1795L15.1948 11.9997L20.4504 8.18139H13.9539L11.946 2.00179L11.9454 2.00012H18.4429L20.4513 8.18079L20.4514 8.18067L20.4531 8.17972C21.6194 11.7653 20.4182 15.8435 17.2025 18.1795ZM6.68905 18.1795L6.68738 18.1807L11.9444 22L17.2025 18.1797L11.946 14.3603L6.68905 18.1795ZM3.43982 8.17984C2.21205 11.9595 3.63726 15.9646 6.68797 18.1803L6.68845 18.1784L8.69644 11.9989L3.44196 8.18127H9.93696L11.945 2.00167L11.9454 2H5.44757L3.43982 8.17984Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoAuth0Mono;
