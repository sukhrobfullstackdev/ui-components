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
const LogoRarichainMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M1.5 8.29979V5.36442C1.5 4.47278 2.39543 3.74997 3.49999 3.74997H7.13634C8.24091 3.74997 9.13634 4.47278 9.13634 5.36442V7.73484C9.13634 8.14355 9.33747 8.53553 9.6955 8.82454C10.441 9.42637 11.6498 9.42637 12.3954 8.82454L18.096 4.22283C18.4711 3.92006 18.9797 3.74997 19.5102 3.74997H20.4999C21.6045 3.74997 22.4999 4.47278 22.4999 5.36442V6.16338C22.4999 6.59156 22.2892 7.0022 21.9141 7.30497L16.2135 11.9067C15.4679 12.5085 15.4679 13.4842 16.2135 14.0861C16.5715 14.3751 17.0572 14.5374 17.5635 14.5374H20.4999C21.6045 14.5374 22.4999 15.2603 22.4999 16.1519V19.0872C22.4999 19.9789 21.6045 20.7017 20.4999 20.7017H16.8636C15.7591 20.7017 14.8636 19.9789 14.8636 19.0872V16.7168C14.8636 16.3081 14.6624 15.9161 14.3044 15.6272C13.5589 15.0253 12.3501 15.0253 11.6045 15.6272L5.90396 20.2288C5.52888 20.5316 5.02018 20.7017 4.48975 20.7017H3.5C2.39543 20.7017 1.5 19.9789 1.5 19.0872V18.2883C1.5 17.8601 1.71071 17.4494 2.08579 17.1467L7.78641 12.545C8.53195 11.9432 8.53195 10.9674 7.78641 10.3656C7.42839 10.0766 6.94281 9.91424 6.43648 9.91424H3.5C2.39543 9.91424 1.5 9.19142 1.5 8.29979Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoRarichainMono;
