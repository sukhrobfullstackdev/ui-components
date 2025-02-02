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
const LogoAppleMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M17.4523 11.6262C17.4417 9.82294 18.2587 8.46385 19.9087 7.46173C18.9859 6.13967 17.5898 5.41253 15.7495 5.27239C14.007 5.1349 12.1006 6.28774 11.4025 6.28774C10.6648 6.28774 8.97785 5.31999 7.6505 5.31999C4.91119 5.36229 2 7.50403 2 11.8616C2 13.1492 2.23533 14.4792 2.70598 15.8489C3.33528 17.6522 5.60395 22.0705 7.97044 21.9991C9.20789 21.9701 10.0831 21.1213 11.6934 21.1213C13.2561 21.1213 14.0652 21.9991 15.4454 21.9991C17.833 21.9648 19.8849 17.9483 20.4825 16.1398C17.2804 14.63 17.4523 11.7188 17.4523 11.6262ZM14.6733 3.56164C16.0139 1.96988 15.8923 0.520893 15.8526 0C14.668 0.0687473 13.2984 0.806459 12.5183 1.71339C11.659 2.68643 11.154 3.88951 11.2624 5.24595C12.5421 5.34378 13.7108 4.68539 14.6733 3.56164Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoAppleMono;
