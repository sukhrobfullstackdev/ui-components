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
const LogoAvalancheMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M23.2501 12C23.2501 18.2131 18.2133 23.2499 12.0001 23.2499C5.78696 23.2499 0.750183 18.2131 0.750183 12C0.750183 5.78678 5.78696 0.75 12.0001 0.75C18.2133 0.75 23.2501 5.78678 23.2501 12ZM16.5536 12.6617C16.2235 12.0886 15.6909 12.0886 15.3608 12.6617L13.2678 16.2884C12.9453 16.8614 13.2153 17.3289 13.868 17.3289H18.009C18.6691 17.3289 18.9392 16.8614 18.6091 16.2884L16.5536 12.6617ZM12.5702 5.67974C12.2401 5.10671 11.715 5.10671 11.3849 5.67974L5.39093 16.2884C5.06085 16.8689 5.33091 17.3289 5.99107 17.3289H8.9993C9.60695 17.2912 10.1546 16.967 10.4847 16.4542L14.108 10.1434C14.3706 9.60048 14.3706 8.95959 14.108 8.41672L13.0278 6.50913L12.5702 5.67974Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoAvalancheMono;
