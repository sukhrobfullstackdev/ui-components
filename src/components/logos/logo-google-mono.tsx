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
const LogoGoogleMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M22.556 12.2409C22.556 11.3365 22.4826 10.6766 22.3238 9.99219H11.9968V14.074H18.0585C17.9364 15.0884 17.2764 16.6161 15.8098 17.6426L15.7893 17.7793L19.0545 20.3088L19.2807 20.3314C21.3583 18.4126 22.556 15.5895 22.556 12.2409Z"
        fill="currentColor"
      />
      <path
        d="M11.9987 23C14.9684 23 17.4615 22.0223 19.2825 20.3358L15.8117 17.6471C14.8829 18.2948 13.6363 18.747 11.9987 18.747C9.09006 18.747 6.62139 16.8283 5.74137 14.1763L5.61238 14.1873L2.21719 16.8148L2.17279 16.9383C3.98152 20.5313 7.69678 23 11.9987 23Z"
        fill="currentColor"
      />
      <path
        d="M5.74179 14.1771C5.5096 13.4927 5.37521 12.7594 5.37521 12.0017C5.37521 11.2439 5.5096 10.5107 5.72958 9.82631L5.72343 9.68055L2.28569 7.01077L2.17321 7.06427C1.42775 8.55528 1 10.2296 1 12.0017C1 13.7738 1.42775 15.448 2.17321 16.939L5.74179 14.1771Z"
        fill="currentColor"
      />
      <path
        d="M11.9987 5.25296C14.0641 5.25296 15.4572 6.14511 16.2517 6.89066L19.3558 3.85977C17.4494 2.0877 14.9684 1 11.9987 1C7.69678 1 3.98152 3.46867 2.17279 7.06169L5.72916 9.82373C6.62139 7.17172 9.09006 5.25296 11.9987 5.25296Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoGoogleMono;
