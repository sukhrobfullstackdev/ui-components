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
const IcoCheckmarkCircle = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM17.7731 8.63425C18.1234 8.20725 18.0612 7.57715 17.6342 7.22688C17.2072 6.87661 16.5771 6.93881 16.2268 7.36581L10.4197 14.445L7.75841 11.3483C7.39844 10.9294 6.76708 10.8817 6.34822 11.2416C5.92936 11.6016 5.88161 12.233 6.24157 12.6518L9.67907 16.6518C9.87165 16.8759 10.1535 17.0033 10.4489 17C10.7444 16.9966 11.0232 16.8627 11.2106 16.6343L17.7731 8.63425Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoCheckmarkCircle;
