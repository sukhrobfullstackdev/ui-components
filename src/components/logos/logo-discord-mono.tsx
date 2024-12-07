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
const LogoDiscordMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M20.3303 4.52336C18.7535 3.80145 17.0888 3.2893 15.3789 3C15.1449 3.41829 14.9332 3.84865 14.7446 4.28928C12.9232 4.01482 11.071 4.01482 9.24961 4.28928C9.06095 3.84869 8.84924 3.41834 8.61535 3C6.90433 3.29174 5.2386 3.80511 3.66019 4.52713C0.526644 9.16327 -0.322811 13.6843 0.101917 18.1411C1.937 19.4969 3.99098 20.5281 6.17458 21.1897C6.66626 20.5284 7.10134 19.8268 7.47519 19.0925C6.76511 18.8273 6.07975 18.5001 5.42706 18.1146C5.59884 17.9901 5.76684 17.8617 5.92918 17.7371C7.82837 18.6303 9.90124 19.0933 12 19.0933C14.0987 19.0933 16.1715 18.6303 18.0707 17.7371C18.235 17.8711 18.403 17.9995 18.5729 18.1146C17.9189 18.5007 17.2323 18.8285 16.5209 19.0944C16.8943 19.8284 17.3294 20.5293 17.8216 21.1897C20.007 20.5307 22.0626 19.5001 23.898 18.143C24.3963 12.9745 23.0467 8.49503 20.3303 4.52336ZM8.01318 15.4002C6.82961 15.4002 5.85179 14.3261 5.85179 13.0047C5.85179 11.6833 6.79563 10.5998 8.0094 10.5998C9.22318 10.5998 10.1934 11.6833 10.1727 13.0047C10.1519 14.3261 9.21941 15.4002 8.01318 15.4002ZM15.9867 15.4002C14.8013 15.4002 13.8272 14.3261 13.8272 13.0047C13.8272 11.6833 14.7711 10.5998 15.9867 10.5998C17.2024 10.5998 18.1651 11.6833 18.1444 13.0047C18.1236 14.3261 17.193 15.4002 15.9867 15.4002Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoDiscordMono;
