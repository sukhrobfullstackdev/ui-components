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
const LogoAlgorandMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M6.61236 20.2499L9.00705 16.1176L11.4017 11.9999L13.7818 7.86765L14.1761 7.21289L14.3513 7.86765L15.0814 10.5885L14.2637 11.9999L11.869 16.1176L9.4889 20.2499H12.3508L14.7455 16.1176L15.9867 13.9787L16.5707 16.1176L17.6805 20.2499H20.2504L19.1406 16.1176L18.0309 11.9999L17.7389 10.9377L19.5203 7.86765H16.9212L16.8336 7.56209L15.9283 4.18645L15.8114 3.74994H13.3146L13.2561 3.83724L10.9199 7.86765L8.52519 11.9999L6.14511 16.1176L3.75043 20.2499H6.61236Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoAlgorandMono;
