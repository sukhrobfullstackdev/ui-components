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
const LogoFacebookMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M16.9214 13.3997L17.582 9.08834H13.4467V6.29096C13.4467 5.11245 14.0234 3.96121 15.8771 3.96121H17.7581V0.291481C17.7581 0.291481 16.0512 0 14.4197 0C11.0142 0 8.78718 2.06343 8.78718 5.80236V9.08834H5V13.3997H8.78718V23.8197C9.54629 23.9392 10.3243 24 11.1169 24C11.9096 24 12.6876 23.9371 13.4467 23.8197V13.3997H16.9214Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoFacebookMono;
