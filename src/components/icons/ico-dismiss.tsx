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
const IcoDismiss = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M19.7069 5.70735C20.0974 5.31683 20.0974 4.68366 19.7069 4.29314C19.3163 3.90261 18.6832 3.90261 18.2926 4.29314L12 10.5858L5.70735 4.29314C5.31682 3.90261 4.68366 3.90261 4.29314 4.29314C3.90261 4.68366 3.90261 5.31683 4.29314 5.70735L10.5858 12L4.29295 18.2928C3.90242 18.6834 3.90242 19.3165 4.29295 19.7071C4.68347 20.0976 5.31664 20.0976 5.70716 19.7071L12 13.4142L18.2928 19.7071C18.6834 20.0976 19.3165 20.0976 19.707 19.7071C20.0976 19.3165 20.0976 18.6834 19.707 18.2928L13.4142 12L19.7069 5.70735Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoDismiss;
