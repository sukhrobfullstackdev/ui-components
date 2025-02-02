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
const IcoEyeClosed = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M2.70711 1.29289C2.31659 0.902369 1.68343 0.902369 1.2929 1.29289C0.902377 1.68342 0.902377 2.31658 1.2929 2.70711L21.2929 22.7071C21.6834 23.0976 22.3166 23.0976 22.7071 22.7071C23.0976 22.3166 23.0976 21.6834 22.7071 21.2929L2.70711 1.29289ZM0.52593 10.7442C0.982752 9.95011 1.84176 8.66134 3.17941 7.42204L4.59382 8.83645C3.42496 9.9028 2.66977 11.0284 2.25952 11.7415C2.16418 11.9072 2.16418 12.0928 2.25952 12.2585C3.23721 13.958 6.1739 18 12 18C12.5763 18 13.1243 17.9605 13.6449 17.8875L15.3474 19.5901C14.3353 19.8491 13.2215 20 12 20C5.09499 20 1.63187 15.1782 0.525931 13.2558C0.0753818 12.4727 0.0753814 11.5273 0.52593 10.7442ZM21.7405 12.2585C21.3302 12.9716 20.5751 14.0972 19.4062 15.1635L20.8206 16.578C22.1583 15.3387 23.0173 14.0499 23.4741 13.2558C23.9246 12.4727 23.9246 11.5273 23.4741 10.7442C22.3682 8.82179 18.905 4 12 4C10.7785 4 9.66469 4.1509 8.65259 4.40994L10.3551 6.11246C10.8757 6.03955 11.4237 6 12 6C17.8261 6 20.7628 10.042 21.7405 11.7415C21.8358 11.9072 21.8358 12.0928 21.7405 12.2585Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoEyeClosed;
