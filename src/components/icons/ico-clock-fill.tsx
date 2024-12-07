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
const IcoClockFill = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M12 0C5.38338 0 0 5.38338 0 12C0 18.6166 5.38338 24 12 24C18.6166 24 24 18.6166 24 12C24 5.38338 18.6166 0 12 0ZM16.4603 14.9735C16.2818 15.2406 15.9889 15.3846 15.6911 15.3846C15.5151 15.3846 15.3378 15.3342 15.1803 15.2295L11.488 12.768C11.2308 12.5969 11.0769 12.3089 11.0769 12V7.07692C11.0769 6.56738 11.4905 6.15385 12 6.15385C12.5095 6.15385 12.9231 6.56738 12.9231 7.07692V11.5065L16.2043 13.6935C16.6289 13.9766 16.7434 14.5489 16.4603 14.9735Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoClockFill;
