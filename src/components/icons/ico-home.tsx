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
const IcoHome = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M12 14.9999C12.5523 14.9999 13 15.4476 13 15.9999V17.9999C13 18.5522 12.5523 18.9999 12 18.9999C11.4477 18.9999 11 18.5522 11 17.9999V15.9999C11 15.4476 11.4477 14.9999 12 14.9999Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.42472 1.81852C10.1779 1.28596 11.0777 0.999994 12.0002 0.999994C12.9226 0.999994 13.8224 1.28598 14.5757 1.81856L17.9999 4.23982V1.99999C17.9999 1.44771 18.4477 0.999994 18.9999 0.999994C19.5522 0.999994 19.9999 1.44771 19.9999 1.99999V5.65398L23.5773 8.18344C23.9329 8.43493 24.0849 8.88771 23.9529 9.30284C23.821 9.71797 23.4355 9.99994 22.9999 9.99994L21.9999 9.99994V17.9999C21.9999 20.7613 19.7614 22.9999 17 22.9999H7.00003C4.23862 22.9999 2.00006 20.7613 2.00006 17.9999V9.99994H1.00007C0.564469 9.99994 0.178983 9.71797 0.0470455 9.30283C-0.0848923 8.8877 0.0670738 8.43491 0.422745 8.18343L9.42472 1.81852ZM3.71746 8.3033C3.89236 8.48337 4.00005 8.72908 4.00005 8.99994V17.9999C4.00005 19.6567 5.34318 20.9999 7.00003 20.9999H17C18.6568 20.9999 19.9999 19.6567 19.9999 17.9999V8.99994C19.9999 8.73961 20.1015 8.48974 20.2826 8.30326L13.421 3.45156C13.0055 3.15775 12.5091 2.99998 12.0002 2.99998C11.4913 2.99998 10.9949 3.15774 10.5794 3.45154L3.71746 8.3033Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoHome;
