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
const LogoWaxMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M23.2497 12C23.2497 18.2131 18.2129 23.2499 11.9998 23.2499C5.78659 23.2499 0.749817 18.2131 0.749817 12C0.749817 5.78678 5.78659 0.75 11.9998 0.75C18.2129 0.75 23.2497 5.78678 23.2497 12ZM18.7751 14.0826H20.4372L15.1744 9.53902H13.5045L16.7578 12.3501L15.7298 13.2339L13.5931 10.6267H12.1798L9.61198 13.7521L9.33214 14.0938L10.5893 10.6324H9.44675L8.61425 12.9703L7.78105 10.6331H6.37481L5.5395 12.9752L4.70137 10.6225H3.56232L4.80895 14.077H6.29324L7.07793 11.8762L7.86894 14.0938H9.33214L8.45605 15.164H9.86018L12.8871 11.4789L13.7541 12.5392H12.6157L12.03 13.2628H14.3447L15.0162 14.0784H16.421L17.5959 13.0729L18.7751 14.0826ZM18.0044 11.3207L18.7884 11.9929L20.369 10.6556L18.787 10.6542L18.0044 11.3207Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoWaxMono;
