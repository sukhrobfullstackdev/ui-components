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
const IcoSocial = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M15 5C15 3.34315 16.3431 2 18 2C19.6569 2 21 3.34315 21 5C21 6.65685 19.6569 8 18 8C16.3431 8 15 6.65685 15 5ZM18 0C15.2386 0 13 2.23858 13 5C13 5.55243 13.0896 6.08393 13.255 6.58077L9.74486 8.68691C8.82881 7.65225 7.49058 7 6 7C3.23858 7 1 9.23858 1 12C1 14.7614 3.23858 17 6 17C7.47984 17 8.80953 16.3571 9.72501 15.3354L13.2534 17.4242C13.089 17.9196 13 18.4494 13 19C13 21.7614 15.2386 24 18 24C20.7614 24 23 21.7614 23 19C23 16.2386 20.7614 14 18 14C16.5075 14 15.1677 14.6539 14.2516 15.6909L10.7354 13.6093C10.9069 13.1043 11 12.563 11 12C11 11.4476 10.9104 10.9161 10.745 10.4192L14.2551 8.31309C15.1712 9.34775 16.5094 10 18 10C20.7614 10 23 7.76142 23 5C23 2.23858 20.7614 0 18 0ZM18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16ZM3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoSocial;
