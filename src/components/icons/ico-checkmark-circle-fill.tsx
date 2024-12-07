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
const IcoCheckmarkCircleFill = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM17.7731 8.63425C18.1234 8.20725 18.0612 7.57715 17.6342 7.22688C17.2072 6.87661 16.5771 6.93881 16.2268 7.36581L10.4197 14.445L7.75841 11.3483C7.39844 10.9294 6.76708 10.8817 6.34822 11.2416C5.92936 11.6016 5.88161 12.233 6.24157 12.6518L9.67907 16.6518C9.87165 16.8759 10.1535 17.0033 10.4489 17C10.7444 16.9966 11.0232 16.8627 11.2106 16.6343L17.7731 8.63425Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoCheckmarkCircleFill;
