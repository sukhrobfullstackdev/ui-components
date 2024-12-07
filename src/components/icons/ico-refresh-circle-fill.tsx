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
const IcoRefreshCircleFill = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM13.9905 6.34611C14.8314 6.6459 15.5943 7.13078 16.2228 7.76493L16.7027 7.27754C17.1751 6.80516 17.9849 7.14258 17.9849 7.80992V10.5018C17.9849 10.9142 17.6475 11.2516 17.2351 11.2516H14.5432C13.8759 11.2516 13.546 10.4418 14.0183 9.96941L15.1506 8.83717C14.3408 8.01987 13.231 7.50249 11.9863 7.50249C11.3117 7.50311 10.6459 7.65538 10.038 7.94805C9.43022 8.24071 8.89596 8.66628 8.4748 9.19328C8.05363 9.72028 7.75633 10.3352 7.60489 10.9926C7.45344 11.65 7.45173 12.333 7.59987 12.9912C7.95228 14.6558 9.29447 16.013 10.9591 16.3804C11.9647 16.6155 13.0207 16.4971 13.9493 16.0451C14.8779 15.5931 15.6225 14.835 16.0579 13.8985C16.1778 13.651 16.4403 13.5011 16.7177 13.5011C17.2726 13.5011 17.6325 14.0784 17.3925 14.5808C16.9073 15.6039 16.1417 16.4682 15.1847 17.0735C14.2277 17.6787 13.1186 18 11.9863 18C8.43967 18 5.62784 14.9332 6.04024 11.2966C6.34767 8.54474 8.61213 6.31027 11.364 6.03284C12.2519 5.93925 13.1495 6.04631 13.9905 6.34611Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoRefreshCircleFill;
