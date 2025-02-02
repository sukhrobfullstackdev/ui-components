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
const IcoShieldApproved = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M15.7127 11.7015C16.1001 11.3079 16.0951 10.6748 15.7015 10.2873C15.3079 9.89991 14.6748 9.9049 14.2873 10.2985L11.0461 13.5912L9.69615 12.2821C9.29966 11.8976 8.66657 11.9074 8.2821 12.3039C7.89763 12.7004 7.90737 13.3334 8.30386 13.7179L10.3664 15.7179C10.7607 16.1003 11.3898 16.093 11.7752 15.7015L15.7127 11.7015Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2043 2.08066C12.8335 1.31906 11.1665 1.31906 9.79565 2.08066L3.6426 5.49903C2.62877 6.06226 2 7.13087 2 8.29065V13C2 18.5228 6.47715 23 12 23C17.5228 23 22 18.5228 22 13V8.29065C22 7.13087 21.3712 6.06226 20.3574 5.49903L14.2043 2.08066ZM10.7669 3.82898C11.5338 3.40295 12.4662 3.40295 13.2331 3.82898L19.3861 7.24734C19.765 7.45784 20 7.85721 20 8.29065V13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13V8.29065C4 7.85721 4.23499 7.45784 4.61388 7.24734L10.7669 3.82898Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoShieldApproved;
