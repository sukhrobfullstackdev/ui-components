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
const LogoXdcMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M21.6514 3L14.5297 11.9954L22 21.4992H17.8315C16.9697 21.4992 16.2193 21.0973 15.5851 20.2888L11.6538 15.2682L7.71774 20.2888C7.07867 21.0973 6.33309 21.4992 5.47131 21.4992H2.72137C2.29049 21.4992 2.05326 21.3055 2 20.9182C2 20.7294 2.09199 20.5212 2.27112 20.2888L8.77318 11.9954L2.64391 4.22973C2.46478 4.00218 2.37279 3.794 2.37279 3.5955C2.37279 3.1985 2.61002 3 3.08448 3H5.86347C6.72041 3 7.47567 3.40668 8.11958 4.22488L11.6538 8.7129L15.1881 4.22488C15.8223 3.41636 16.5727 3.00968 17.4442 3H21.6514Z"
        fill="currentColor"
      />
      <path d="M19.5406 16.7013L15.8466 12.0099L19.5406 7.31857V16.7013Z" fill="currentColor" />
    </svg>
  );
};
export default LogoXdcMono;
