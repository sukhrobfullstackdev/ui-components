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
const IcoLockPassword = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M6 6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6H6ZM4 6.10002V6C4 2.68629 6.68629 0 10 0C13.3137 0 16 2.68629 16 6V6.10002C17.9591 6.4977 19.5023 8.04087 19.9 10H17.8293C17.4175 8.83481 16.3062 8 15 8H14H6H5C3.34315 8 2 9.34315 2 11V15C2 16.3062 2.83481 17.4175 4 17.8293V19.9C1.71776 19.4367 0 17.419 0 15V11C0 8.58104 1.71776 6.56329 4 6.10002ZM10 12C7.79086 12 6 13.7909 6 16V20C6 22.2091 7.79086 24 10 24H20C22.2091 24 24 22.2091 24 20V16C24 13.7909 22.2091 12 20 12H10ZM8 16C8 14.8954 8.89543 14 10 14H20C21.1046 14 22 14.8954 22 16V20C22 21.1046 21.1046 22 20 22H10C8.89543 22 8 21.1046 8 20V16ZM13.741 18C13.741 17.3096 14.3006 16.75 14.991 16.75H15.009C15.6994 16.75 16.259 17.3096 16.259 18C16.259 18.6904 15.6994 19.25 15.009 19.25H14.991C14.3006 19.25 13.741 18.6904 13.741 18ZM18.991 16.75C18.3006 16.75 17.741 17.3096 17.741 18C17.741 18.6904 18.3006 19.25 18.991 19.25H19.009C19.6994 19.25 20.259 18.6904 20.259 18C20.259 17.3096 19.6994 16.75 19.009 16.75H18.991ZM9.741 18C9.741 17.3096 10.3006 16.75 10.991 16.75H11.009C11.6994 16.75 12.259 17.3096 12.259 18C12.259 18.6904 11.6994 19.25 11.009 19.25H10.991C10.3006 19.25 9.741 18.6904 9.741 18Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoLockPassword;
