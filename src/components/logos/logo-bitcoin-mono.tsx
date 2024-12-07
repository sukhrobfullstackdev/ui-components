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
const LogoBitcoinMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M10.5838 14.9112C11.5909 15.1772 13.7921 15.7586 14.142 14.3523C14.5006 12.9144 12.3658 12.4354 11.3242 12.2017C11.2078 12.1755 11.105 12.1525 11.0209 12.1315L10.3431 14.8487C10.4122 14.8658 10.4931 14.8872 10.5838 14.9112Z"
        fill="currentColor"
      />
      <path
        d="M11.5335 10.9407C12.3732 11.1648 14.2048 11.6536 14.5238 10.3755C14.8496 9.06814 13.0695 8.67405 12.2001 8.48159C12.1023 8.45994 12.016 8.44084 11.9455 8.42328L11.331 10.8877C11.389 10.9022 11.4572 10.9203 11.5335 10.9407Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.27628 22.9131C15.3037 24.416 21.4078 20.7482 22.9104 14.7215C24.4129 8.69435 20.7455 2.58921 14.7184 1.08665C8.6927 -0.415907 2.58859 3.25224 1.08674 9.2797C-0.41652 15.3061 3.25128 21.4105 9.27628 22.9131ZM14.488 7.55915C16.0464 8.09598 17.1862 8.90069 16.9622 10.3976C16.8002 11.4934 16.1927 12.0239 15.3862 12.2099C16.4936 12.7865 17.0572 13.6706 16.5203 15.2034C15.8541 17.1071 14.2714 17.2678 12.1666 16.8694L11.6558 18.9166L10.4215 18.609L10.9256 16.5893C10.6057 16.5098 10.2788 16.4254 9.94199 16.334L9.4361 18.3632L8.20319 18.0556L8.71399 16.0046C8.5988 15.9751 8.48287 15.9449 8.36612 15.9144C8.19072 15.8687 8.01346 15.8225 7.83405 15.7775L6.22778 15.3771L6.84055 13.9642C6.84055 13.9642 7.75003 14.206 7.73773 14.1881C8.08718 14.2746 8.24221 14.0468 8.30338 13.8949L9.11056 10.6588C9.1408 10.6661 9.17042 10.6735 9.199 10.6807C9.21327 10.6843 9.22729 10.6878 9.24099 10.6912C9.19177 10.6715 9.14712 10.6588 9.11266 10.65L9.68851 8.33995C9.70363 8.07769 9.61329 7.74687 9.11337 7.62207C9.13271 7.60906 8.2169 7.39918 8.2169 7.39918L8.54525 6.08084L10.2475 6.50588L10.2461 6.51221C10.502 6.57584 10.7657 6.6363 11.0343 6.69747L11.5402 4.67039L12.7738 4.97801L12.2781 6.96537C12.6093 7.04095 12.9425 7.11724 13.267 7.19809L13.7592 5.22375L14.9935 5.53136L14.488 7.55915Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoBitcoinMono;
