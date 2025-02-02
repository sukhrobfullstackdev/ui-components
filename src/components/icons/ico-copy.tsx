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
const IcoCopy = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M9 5.39073C9.05751 3.78449 10.3778 2.5 11.998 2.5H14.053L14.0166 6.47252C14.0013 8.14005 15.3489 9.5 17.0165 9.5H20.998V13.5C20.998 15.1569 19.6549 16.5 17.998 16.5H16H11.998C10.3412 16.5 8.99805 15.1569 8.99805 13.5V7H9V5.39073ZM7.02273 5C7.2736 2.47334 9.40537 0.5 11.998 0.5H15.3412C16.6673 0.5 17.939 1.02678 18.8767 1.96446L21.5336 4.62132C22.4713 5.559 22.998 6.83077 22.998 8.15685V13.5C22.998 16.2614 20.7595 18.5 17.998 18.5H17.9753C17.7245 21.0267 15.5927 23 13 23H7C4.23858 23 2 20.7614 2 18V10C2 7.23858 4.23858 5 7 5H7.02273ZM6.99805 7C5.34209 7.00106 4 8.3438 4 10V18C4 19.6569 5.34315 21 7 21H13C14.4865 21 15.7205 19.9189 15.9585 18.5H11.998C9.23662 18.5 6.99805 16.2614 6.99805 13.5V7ZM16.0165 6.49084L16.0523 2.58548C16.5818 2.71468 17.0707 2.9869 17.4625 3.37868L20.1194 6.03553C20.5245 6.44065 20.8018 6.94969 20.9253 7.5H17.0165C16.4606 7.5 16.0114 7.04668 16.0165 6.49084Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoCopy;
