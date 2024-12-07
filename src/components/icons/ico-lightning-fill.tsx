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
const IcoLightningFill = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M15.8393 1.18633C16.0191 1.62165 16.0904 2.13337 16.0904 2.67308V9.59219H18.4874C19.3815 9.59219 20.4183 9.86546 20.8417 10.8036C21.2652 11.7417 20.7838 12.6983 20.1937 13.3654L20.1926 13.3668L11.8726 22.8234C11.5162 23.2281 11.1246 23.5652 10.7026 23.7735C10.2763 23.9838 9.741 24.0959 9.20231 23.8936C8.66315 23.6911 8.3341 23.2538 8.15233 22.8137C7.97254 22.3783 7.90123 21.8666 7.90123 21.3269V14.4078H5.50425C4.61648 14.4078 3.58277 14.1378 3.15874 13.2018C2.73585 12.2683 3.21019 11.312 3.79247 10.6408L3.79704 10.6355L12.119 1.17665C12.4754 0.771879 12.8671 0.434796 13.2891 0.226544C13.7154 0.0161889 14.2507 -0.0959383 14.7893 0.106398C15.3285 0.308914 15.6576 0.746213 15.8393 1.18633Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoLightningFill;
