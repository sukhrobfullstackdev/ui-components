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
const IcoShieldRejected = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M8.9109 9.91075C9.23635 9.5853 9.764 9.5853 10.0894 9.91075L12.0001 11.8214L13.9107 9.91075C14.2362 9.5853 14.7638 9.5853 15.0893 9.91075C15.4147 10.2362 15.4147 10.7638 15.0893 11.0893L13.1786 12.9999L15.0894 14.9107C15.4148 15.2361 15.4148 15.7638 15.0894 16.0892C14.7639 16.4146 14.2363 16.4146 13.9108 16.0892L12.0001 14.1785L10.0894 16.0892C9.76392 16.4146 9.23626 16.4146 8.91081 16.0892C8.58537 15.7638 8.58537 15.2361 8.91081 14.9107L10.8215 12.9999L8.9109 11.0893C8.58545 10.7638 8.58545 10.2362 8.9109 9.91075Z"
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
export default IcoShieldRejected;
