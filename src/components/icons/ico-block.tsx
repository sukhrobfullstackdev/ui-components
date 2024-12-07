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
const IcoBlock = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M12.0001 1.99988C6.48009 1.99988 2.00009 6.47988 2.00009 11.9999C2.00009 17.5199 6.48009 21.9999 12.0001 21.9999C17.5201 21.9999 22.0001 17.5199 22.0001 11.9999C22.0001 6.47988 17.5201 1.99988 12.0001 1.99988ZM4.00009 11.9999C4.00009 7.57988 7.58009 3.99988 12.0001 3.99988C13.8501 3.99988 15.5501 4.62988 16.9001 5.68988L5.69009 16.8999C4.59186 15.503 3.99648 13.7768 4.00009 11.9999ZM12.0001 19.9999C10.1501 19.9999 8.45009 19.3699 7.10009 18.3099L18.3101 7.09988C19.4083 8.49674 20.0037 10.223 20.0001 11.9999C20.0001 16.4199 16.4201 19.9999 12.0001 19.9999Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoBlock;
