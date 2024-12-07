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
const LogoZetachainMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
      <g clipPath="url(#clip0_10462_21100)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.2498 12C23.2498 18.2131 18.213 23.2499 11.9998 23.2499C5.78665 23.2499 0.749878 18.2131 0.749878 12C0.749878 5.78678 5.78665 0.75 11.9998 0.75C18.213 0.75 23.2498 5.78678 23.2498 12ZM14.9209 16.0061V14.4867L14.9215 14.488H16.6288V17.7147H6.9187V16.8613C6.9187 15.196 7.07596 13.7825 9.05396 12.0313L9.06524 12.0206L13.785 7.99257H8.62729V9.54137H6.91996V6.28523H16.6282V12.8176H14.9209V9.26695L10.178 13.3132C9.06211 14.3025 8.73944 15.0061 8.65298 16.0061H14.9209Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_10462_21100">
          <rect width={22.4999} height={22.4999} fill="currentColor" transform="translate(0.749878 0.75)" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default LogoZetachainMono;
