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
const LogoEthereumCircleMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
      <circle cx={12} cy={12} r={12} fill="currentColor" fillOpacity={0.12} />
      <path
        d="M12.0459 3.60001V3.95001L12.0459 15.2039L17.2024 12.1559L12.0459 3.60001Z"
        fill="currentColor"
        fillOpacity={0.78}
      />
      <path
        d="M12.0464 3.60001L6.88989 12.1559L12.0464 15.204V9.81216V3.60001Z"
        fill="currentColor"
        fillOpacity={0.45}
      />
      <path
        d="M12.0464 16.1799L12.0464 20.3998L17.206 13.1334L12.0464 16.1799Z"
        fill="currentColor"
        fillOpacity={0.78}
      />
      <path d="M12.0464 20.4V16.1801L6.88989 13.1336L12.0464 20.4Z" fill="currentColor" fillOpacity={0.45} />
      <path d="M12.0464 15.2041L17.2028 12.1561L12.0464 9.81232V15.2041Z" fill="currentColor" />
      <path d="M6.88989 12.1562L12.0463 15.2041V9.81238L6.88989 12.1562Z" fill="currentColor" fillOpacity={0.5} />
    </svg>
  );
};
export default LogoEthereumCircleMono;
