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
const IcoDismissCircle = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM7.24423 7.24408C7.56967 6.91864 8.09732 6.91864 8.42276 7.24408L12.0001 10.8214L15.5774 7.24408C15.9028 6.91864 16.4305 6.91864 16.7559 7.24408C17.0814 7.56952 17.0814 8.09717 16.7559 8.42261L13.1786 11.9999L16.7561 15.5774C17.0815 15.9028 17.0815 16.4305 16.7561 16.7559C16.4306 17.0814 15.903 17.0814 15.5775 16.7559L12.0001 13.1785L8.42261 16.7559C8.09717 17.0814 7.56952 17.0814 7.24408 16.7559C6.91864 16.4305 6.91864 15.9028 7.24408 15.5774L10.8215 11.9999L7.24423 8.42261C6.91879 8.09717 6.91879 7.56952 7.24423 7.24408Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoDismissCircle;
