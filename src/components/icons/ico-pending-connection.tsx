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
const IcoPendingConnection = ({ color: customColor, title, titleId, ...props }: Props) => {
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
      <circle cx={2.25} cy={12.25} r={1.25} fill="currentColor" />
      <circle cx={8.75} cy={12.25} r={1.25} fill="currentColor" />
      <circle cx={15.25} cy={12.25} r={1.25} fill="currentColor" />
      <circle cx={21.75} cy={12.25} r={1.25} fill="currentColor" />
    </svg>
  );
};
export default IcoPendingConnection;
