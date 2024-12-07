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
const IcoHomeFill = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M14.1003 1.61316C13.6305 1.21718 13.0358 1 12.4213 1C11.8068 1 11.2122 1.21718 10.7423 1.61316L2.92634 8.20753C2.63623 8.45203 2.40303 8.75695 2.24302 9.10095C2.08302 9.44496 2.00008 9.81976 2 10.1992V20.9736C2 22.0922 2.90781 23 4.02637 23H7.50013C8.03756 23 8.55297 22.7865 8.93299 22.4065C9.31301 22.0265 9.5265 21.5111 9.5265 20.9736V16.3385C9.5265 15.5511 10.1541 14.9119 10.9357 14.8911H13.9069C14.2841 14.901 14.6425 15.0579 14.9058 15.3283C15.169 15.5986 15.3162 15.9611 15.3161 16.3385V20.9736C15.3161 22.0922 16.2239 23 17.3425 23H20.8162C21.3537 23 21.8691 22.7865 22.2491 22.4065C22.6291 22.0265 22.8426 21.5111 22.8426 20.9736V10.198C22.8425 9.81861 22.7596 9.4438 22.5996 9.09979C22.4396 8.75579 22.2064 8.45088 21.9163 8.20638L14.1003 1.61316Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoHomeFill;
