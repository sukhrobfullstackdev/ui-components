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
const IcoDiamond = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M7.93675 1C7.04641 1 6.20207 1.39547 5.63209 2.07945L1.69534 6.80355C1.24605 7.34269 1 8.02229 1 8.7241V11.1716C1 11.9672 1.31607 12.7303 1.87868 13.2929L9.87868 21.2929C11.0503 22.4645 12.9497 22.4645 14.1213 21.2929L22.1213 13.2929C22.6839 12.7303 23 11.9672 23 11.1716V8.7241C23 8.02229 22.754 7.34269 22.3047 6.80355L18.3679 2.07945C17.7979 1.39547 16.9536 1 16.0633 1H7.93675ZM7.16853 3.35982C7.35852 3.13182 7.63997 3 7.93675 3H8.55698L6.30698 9H3V8.7241C3 8.49016 3.08202 8.26363 3.23178 8.08392L7.16853 3.35982ZM8.44298 9L10.693 3H13.307L15.557 9L8.44298 9ZM15.447 11L8.55299 11L12 18.5834L15.447 11ZM14.359 18.2267L17.6439 11H21V11.1716C21 11.4368 20.8946 11.6911 20.7071 11.8787L14.359 18.2267ZM17.693 9L15.443 3H16.0633C16.36 3 16.6415 3.13182 16.8315 3.35982L20.7682 8.08392C20.918 8.26363 21 8.49016 21 8.7241V9H17.693ZM3 11H6.35607L9.64096 18.2267L3.29289 11.8787C3.10536 11.6911 3 11.4368 3 11.1716V11Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoDiamond;
