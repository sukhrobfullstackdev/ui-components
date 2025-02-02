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
const LogoFlareMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M21.9234 2.00004H7.01365C4.29633 1.98911 2.07107 4.15422 2.00546 6.87155C2.00546 6.94263 2.06014 7.00277 2.13122 7.00277H17.0464C19.7638 7.0137 21.989 4.84859 22.0601 2.13126C22.0601 2.06018 22 2.00004 21.9289 2.00004H21.9234ZM16.9098 9.51234H7.01366C4.29633 9.50141 2.07108 11.6611 2 14.3784C2 14.4495 2.05467 14.5096 2.13122 14.5096H12.0273C14.7446 14.5205 16.9699 12.3554 17.041 9.63809C17.041 9.56702 16.9808 9.50687 16.9098 9.50687V9.51234ZM7.01913 19.4905C7.01913 20.8764 5.89556 22 4.50956 22C3.12357 22 2 20.8764 2 19.4905C2 18.1045 3.12357 16.9809 4.50956 16.9809C5.89556 16.9809 7.01913 18.1045 7.01913 19.4905Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoFlareMono;
