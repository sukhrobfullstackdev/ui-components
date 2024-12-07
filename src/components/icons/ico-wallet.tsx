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
const IcoWallet = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M14.9168 1.16268C15.4266 0.973122 15.9723 0.947752 16.4977 1.09429C17.0181 1.23945 17.4727 1.53976 17.8382 1.93149C18.1921 2.31076 18.4619 2.77404 18.6451 3.27558L19.5481 5.24427C21.5518 5.89605 23 7.7789 23 10V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V10V9.31378V9.31362C0.999897 8.50952 1.18891 7.70537 1.56387 7.02437C1.93771 6.34542 2.50441 5.78031 3.22913 5.51079L3.22931 5.51073L14.9166 1.16274L14.9168 1.16268ZM19 7.44803H4.42205C3.56851 7.97692 3 8.92207 3 10V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10C21 8.92207 20.4315 7.97692 19.578 7.44803H19ZM16.8095 4.07082L17.2357 5H10.3381L15.6138 3.03729L15.614 3.03723C15.7335 2.99284 15.8472 2.98918 15.9604 3.02076C16.0786 3.05374 16.2248 3.134 16.3759 3.29586C16.5279 3.45882 16.671 3.69089 16.7756 3.98707L16.7907 4.02971L16.8095 4.07082ZM15.4393 15.5607C15.7206 15.842 16.1022 16 16.5 16C16.8978 16 17.2794 15.842 17.5607 15.5607C17.842 15.2794 18 14.8978 18 14.5C18 14.1022 17.842 13.7206 17.5607 13.4393C17.2794 13.158 16.8978 13 16.5 13C16.1022 13 15.7206 13.158 15.4393 13.4393C15.158 13.7206 15 14.1022 15 14.5C15 14.8978 15.158 15.2794 15.4393 15.5607Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoWallet;
