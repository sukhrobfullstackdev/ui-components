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
const LogoLoopringMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M9.27619 22.9131C15.3036 24.416 21.4077 20.7482 22.9103 14.7215C24.4129 8.69435 20.7454 2.58921 14.7183 1.08665C8.6926 -0.415907 2.5885 3.25224 1.08665 9.2797C-0.416611 15.3061 3.25119 21.4105 9.27619 22.9131ZM21.7496 12.04H13.5596L15.3146 14.8349L8.94467 19.9049L21.7496 12.105V12.04ZM8.74967 20.0349V4.49998L2.24969 14.8349L8.74967 20.0349Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoLoopringMono;
