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
const IcoSwatches = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M1 6C1 3.23858 3.23858 1 6 1H8C10.0181 1 11.7569 2.19556 12.5468 3.91702C14.2892 3.33208 16.2898 3.73352 17.6776 5.12133L19.0918 6.53554C20.4549 7.89863 20.8665 9.85294 20.3265 11.573C21.9161 12.4102 23 14.0785 23 16V18C23 20.7614 20.7614 23 18 23H8.37299C6.4385 23.428 4.33321 22.8896 2.82838 21.3848C2.33569 20.8921 1.94659 20.335 1.66109 19.7407C1.23852 18.9191 1 17.9874 1 17V17V6ZM13 6C13 5.96072 12.9995 5.92154 12.9986 5.88248C14.0851 5.43524 15.3808 5.65293 16.2634 6.53554L17.6776 7.94975C18.8492 9.12133 18.8492 11.0208 17.6776 12.1924L13 16.87V6ZM6 3C4.34315 3 3 4.34315 3 6V17C3 19.2091 4.79086 21 7 21C9.20914 21 11 19.2091 11 17V6C11 4.34315 9.65685 3 8 3H6ZM19.0918 13.6066C19.1839 13.5146 19.2716 13.4198 19.3549 13.3226C20.331 13.8176 21 14.8307 21 16V18C21 19.6568 19.6569 21 18 21H11.6985L19.0918 13.6066ZM6.991 15.5C6.16257 15.5 5.491 16.1716 5.491 17C5.491 17.8284 6.16257 18.5 6.991 18.5H7.009C7.83742 18.5 8.509 17.8284 8.509 17C8.509 16.1716 7.83742 15.5 7.009 15.5H6.991Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoSwatches;
