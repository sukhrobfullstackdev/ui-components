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
const LogoSoneiumMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
      <g clipPath="url(#clip0_11383_21140)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.3333 17.8893C11.3369 18.172 12.3961 18.1925 13.4098 17.9489L8.81429 22.5414C6.11197 21.7231 3.82754 19.8961 2.43389 17.4387C1.04024 14.9814 0.644096 12.0818 1.32745 9.34022C2.01 6.59841 3.72063 4.2246 6.10471 2.71093C8.4888 1.19725 11.3635 0.659804 14.1328 1.21C14.1328 1.21 10.408 4.89072 8.37952 6.9135C7.7401 7.52237 7.18186 8.21128 6.71863 8.96317C6.01296 10.1166 5.72322 11.477 5.89765 12.8182C6.07207 14.1593 6.70013 15.4002 7.67731 16.3344C8.41534 17.0713 9.32977 17.6067 10.3333 17.8893ZM13.657 6.11404C12.6535 5.83136 11.5942 5.81107 10.5806 6.05512L15.1652 1.45223C17.8726 2.26609 20.163 4.09197 21.561 6.55095C22.959 9.00994 23.3574 11.9132 22.6734 14.6583C21.9903 17.4036 20.2766 19.78 17.8883 21.2936C15.5001 22.8073 12.6209 23.3418 9.8491 22.7861C9.8491 22.7861 13.5739 19.103 15.603 17.0832C16.2417 16.4723 16.7998 15.7823 17.2639 15.0299C18.7153 12.6686 18.3227 9.68206 16.3125 7.66967C15.5749 6.93234 14.6606 6.39672 13.657 6.11404Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_11383_21140">
          <rect width={22} height={22} fill="currentColor" transform="translate(1 1)" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default LogoSoneiumMono;
