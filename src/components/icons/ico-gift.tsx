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
const IcoGift = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M4 2C4 1.44772 4.44772 1 5 1H6C8.54633 1 10.7751 2.35958 12 4.39242C13.2249 2.35958 15.4537 1 18 1H19C19.5523 1 20 1.44772 20 2C20 3.95869 19.1955 5.72948 17.899 7H20C21.6569 7 23 8.34315 23 10V12C23 13.3062 22.1652 14.4175 21 14.8293V20C21 21.6569 19.6569 23 18 23H15H9H6C4.34315 23 3 21.6569 3 20V14.8293C1.83481 14.4175 1 13.3062 1 12V10C1 8.34315 2.34315 7 4 7H6.10102C4.80447 5.72948 4 3.95869 4 2ZM13 9H12H11V13H13V9ZM10.8998 6.99901C8.52583 6.95234 6.55745 5.25114 6.10022 3.00098C8.47417 3.04766 10.4425 4.74885 10.8998 6.99901ZM13 21V15H11V21H13ZM9 15V21H6C5.44772 21 5 20.5523 5 20V15H9ZM9 9V13H4C3.44772 13 3 12.5523 3 12V10C3 9.44772 3.44772 9 4 9H9ZM15 9V13H20C20.5523 13 21 12.5523 21 12V10C21 9.44772 20.5523 9 20 9H15ZM15 15V21H18C18.5523 21 19 20.5523 19 20V15H15ZM13.1002 6.99901C15.4742 6.95234 17.4426 5.25114 17.8998 3.00098C15.5258 3.04766 13.5575 4.74885 13.1002 6.99901Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoGift;
