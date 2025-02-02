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
const IcoAstronaut = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M12 3C8.13401 3 5 6.13401 5 10C5 13.866 8.13401 17 12 17C15.866 17 19 13.866 19 10C19 6.13401 15.866 3 12 3ZM3 13C3.17045 13 3.33094 12.9574 3.47139 12.8821C3.8173 13.9061 4.34246 14.8475 5.00953 15.6691C2.63945 16.7906 1 19.2038 1 22V23H3V22C3 19.7252 4.51903 17.8053 6.59805 17.1992C8.10257 18.3299 9.97303 19 12 19C14.027 19 15.8974 18.3299 17.402 17.1992C19.481 17.8053 21 19.7252 21 22V23H23V22C23 19.2038 21.3606 16.7906 18.9905 15.6691C19.6575 14.8475 20.1827 13.9061 20.5286 12.8821C20.6691 12.9574 20.8295 13 21 13C21.5523 13 22 12.5523 22 12V8C22 7.44772 21.5523 7 21 7C20.8295 7 20.6691 7.04265 20.5286 7.11785C19.327 3.56085 15.9626 1 12 1C8.03744 1 4.67301 3.56085 3.47139 7.11785C3.33094 7.04265 3.17045 7 3 7C2.44771 7 2 7.44772 2 8L2 12C2 12.5523 2.44772 13 3 13ZM5 21C5 20.4477 5.44772 20 6 20H12C12.5523 20 13 20.4477 13 21C13 21.5523 12.5523 22 12 22H6C5.44772 22 5 21.5523 5 21ZM15 21C15 20.4477 15.4477 20 16 20H18C18.5523 20 19 20.4477 19 21C19 21.5523 18.5523 22 18 22H16C15.4477 22 15 21.5523 15 21ZM9.66667 6C7.64162 6 6 7.64162 6 9.66667V10C6 13.3137 8.68629 16 12 16C15.3137 16 18 13.3137 18 10V9.66667C18 7.64162 16.3584 6 14.3333 6H9.66667ZM8 9.66667C8 8.74619 8.74619 8 9.66667 8H14.3333C15.2538 8 16 8.74619 16 9.66667V10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10V9.66667Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoAstronaut;
