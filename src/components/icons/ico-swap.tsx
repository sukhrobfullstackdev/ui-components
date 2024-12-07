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
const IcoSwap = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M23.6591 16.0996C24.1136 15.6451 24.1136 14.9081 23.6591 14.4535C23.2045 13.999 22.4675 13.999 22.013 14.4535L19.6096 16.8569L19.6097 5.16392C19.6097 4.52107 19.0886 3.99993 18.4458 3.99992C17.8029 3.99991 17.2818 4.52104 17.2818 5.16389L17.2816 16.8568L14.8784 14.4536C14.4238 13.9991 13.6868 13.9991 13.2323 14.4536C12.7777 14.9082 12.7777 15.6452 13.2323 16.0998L17.6225 20.49C18.0771 20.9446 18.8141 20.9446 19.2687 20.49L23.6591 16.0996Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7677 8.74592C11.2223 9.20048 11.2223 9.93748 10.7677 10.392C10.3132 10.8466 9.57618 10.8466 9.12161 10.392L6.71823 7.98866L6.71839 19.6816C6.7184 20.3245 6.19727 20.8456 5.55442 20.8456C4.91156 20.8457 4.39042 20.3245 4.39041 19.6817L4.39025 7.98873L1.98705 10.3919C1.53249 10.8465 0.795489 10.8465 0.340924 10.3919C-0.113641 9.93737 -0.113642 9.20037 0.340923 8.74581L4.73121 4.35552C5.18577 3.90095 5.92277 3.90096 6.37734 4.35552L10.7677 8.74592Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoSwap;
