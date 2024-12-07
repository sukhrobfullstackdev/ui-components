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
const IcoAsterisk = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M12 3C12.5523 3 13 3.44772 13 4V10.2679L18.428 7.13409C18.9063 6.85795 19.5179 7.02183 19.794 7.50012C20.0702 7.97841 19.9063 8.59 19.428 8.86615L13.9999 12.0001L19.4282 15.1341C19.9065 15.4102 20.0704 16.0218 19.7942 16.5001C19.5181 16.9784 18.9065 17.1423 18.4282 16.8661L13 13.7322V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V13.732L5.57158 16.8661C5.09328 17.1423 4.4817 16.9784 4.20555 16.5001C3.92941 16.0218 4.09328 15.4102 4.57158 15.1341L9.99988 12.0001L4.57178 8.86615C4.09349 8.59 3.92961 7.97841 4.20575 7.50012C4.4819 7.02183 5.09349 6.85795 5.57178 7.13409L11 10.2681V4C11 3.44772 11.4477 3 12 3Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoAsterisk;
