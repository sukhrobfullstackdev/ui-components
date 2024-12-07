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
const LogoBaseMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M11.9801 22.4999C17.7896 22.4999 22.4986 17.7993 22.4986 12C22.4986 6.20062 17.7896 1.5 11.9801 1.5C6.46892 1.5 1.94806 5.7319 1.49866 11.1171H15.4014V12.8828H1.49866C1.94806 18.268 6.46892 22.4999 11.9801 22.4999Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoBaseMono;
