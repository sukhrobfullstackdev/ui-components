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
const IcoLockUnlockedFill = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M8.1875 7.1875C8.1875 5.28828 9.72578 3.75 11.625 3.75C12.9957 3.75 14.1773 4.54922 14.7316 5.71367C15.0582 6.40117 15.8789 6.69336 16.5621 6.3668C17.2453 6.04023 17.5418 5.21953 17.2152 4.53633C16.2227 2.44805 14.0957 1 11.625 1C8.20898 1 5.4375 3.77148 5.4375 7.1875V10.1667H4.75C3.2332 10.1667 2 11.3999 2 12.9167V20.25C2 21.7668 3.2332 23 4.75 23H18.5C20.0168 23 21.25 21.7668 21.25 20.25V12.9167C21.25 11.3999 20.0168 10.1667 18.5 10.1667H8.1875V7.1875Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoLockUnlockedFill;
