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
const IcoShield = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M13 13.235C13.6003 12.8898 14.0045 12.2421 14.0045 11.5C14.0045 10.3954 13.109 9.49999 12.0045 9.49999H11.9955C10.8909 9.49999 9.99548 10.3954 9.99548 11.5C9.99548 12.2421 10.3997 12.8899 11 13.235V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V13.235Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.79565 2.08066C11.1665 1.31906 12.8335 1.31906 14.2043 2.08066L20.3574 5.49903C21.3712 6.06226 22 7.13087 22 8.29065V13C22 18.5228 17.5228 23 12 23C6.47715 23 2 18.5228 2 13V8.29065C2 7.13087 2.62877 6.06226 3.6426 5.49903L9.79565 2.08066ZM13.2331 3.82898C12.4662 3.40295 11.5338 3.40295 10.7669 3.82898L4.61388 7.24734C4.23499 7.45784 4 7.85721 4 8.29065V13C4 17.4183 7.58172 21 12 21C16.4183 21 20 17.4183 20 13V8.29065C20 7.85721 19.765 7.45784 19.3861 7.24734L13.2331 3.82898Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoShield;
