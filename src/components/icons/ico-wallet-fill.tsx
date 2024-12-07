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
const IcoWalletFill = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M16.4977 1.09429C15.9723 0.947752 15.4266 0.973122 14.9168 1.16268L3.22913 5.51079C2.50441 5.78031 1.93771 6.34542 1.56387 7.02437C1.18891 7.70537 0.999897 8.50968 1 9.31378V10V18C1 20.7614 3.23858 23 6 23H18C20.7614 23 23 20.7614 23 18V10C23 7.7789 21.5518 5.89605 19.5481 5.24426L18.6451 3.27558C18.4619 2.77404 18.1921 2.31076 17.8382 1.93149C17.4727 1.53976 17.0181 1.23945 16.4977 1.09429ZM17.2357 5L16.7907 4.02971L16.7756 3.98707C16.671 3.69089 16.5279 3.45882 16.3759 3.29586C16.2248 3.134 16.0786 3.05374 15.9604 3.02076C15.8472 2.98918 15.7335 2.99284 15.614 3.03723L10.3381 5H17.2357ZM16.5 16C16.1022 16 15.7206 15.842 15.4393 15.5607C15.158 15.2794 15 14.8978 15 14.5C15 14.1022 15.158 13.7206 15.4393 13.4393C15.7206 13.158 16.1022 13 16.5 13C16.8978 13 17.2794 13.158 17.5607 13.4393C17.842 13.7206 18 14.1022 18 14.5C18 14.8978 17.842 15.2794 17.5607 15.5607C17.2794 15.842 16.8978 16 16.5 16Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoWalletFill;
