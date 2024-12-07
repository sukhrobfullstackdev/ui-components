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
const LogoWalletConnectMono = ({ color: customColor, title, titleId, ...props }: Props) => {
  // Utilize dynamic primary text color by default
  const color = customColor || token('colors.text.primary');
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M4.91675 7.51605C8.83338 3.68134 15.1835 3.68134 19.1001 7.51605L19.5715 7.97756C19.7673 8.16929 19.7673 8.48016 19.5715 8.6719L17.959 10.2506C17.8611 10.3465 17.7024 10.3465 17.6044 10.2506L16.9558 9.61554C14.2234 6.94035 9.79343 6.94035 7.06109 9.61554L6.36643 10.2957C6.26851 10.3915 6.10976 10.3915 6.01184 10.2957L4.39937 8.71693C4.20354 8.5252 4.20354 8.21433 4.39937 8.0226L4.91675 7.51605ZM22.4349 10.7811L23.87 12.1861C24.0658 12.3779 24.0658 12.6887 23.87 12.8805L17.399 19.2162C17.2032 19.4079 16.8857 19.4079 16.6898 19.2162C16.6898 19.2162 16.6898 19.2162 16.6898 19.2162L12.0971 14.7196C12.0482 14.6716 11.9688 14.6716 11.9198 14.7196L7.32721 19.2162C7.13138 19.4079 6.81387 19.408 6.61804 19.2162C6.61804 19.2162 6.61804 19.2162 6.61804 19.2162L0.146874 12.8804C-0.0489579 12.6887 -0.0489579 12.3778 0.146874 12.1861L1.58198 10.781C1.77781 10.5892 2.09532 10.5892 2.29115 10.781L6.88392 15.2777C6.93288 15.3256 7.01226 15.3256 7.06122 15.2777C7.06121 15.2777 7.06122 15.2777 7.06122 15.2777L11.6538 10.781C11.8496 10.5892 12.1671 10.5892 12.3629 10.781C12.3629 10.781 12.3629 10.781 12.3629 10.781L16.9557 15.2777C17.0047 15.3256 17.084 15.3256 17.133 15.2777L21.7257 10.7811C21.9215 10.5893 22.239 10.5893 22.4349 10.7811Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoWalletConnectMono;
