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
const IcoQuestionCircle = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM10.75 18C10.75 17.3096 11.3096 16.75 12 16.75H12.009C12.6993 16.75 13.259 17.3096 13.259 18C13.259 18.6904 12.6993 19.25 12.009 19.25H12C11.3096 19.25 10.75 18.6904 10.75 18ZM10 9C10 7.9061 10.9095 7 12.0248 7C13.1108 7 14 7.8868 14 8.95565C14 10.0299 13.1288 10.9016 12.0588 10.9016C11.4741 10.9016 11 11.3757 11 11.9605V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V12.7883C14.7234 12.3651 16 10.8064 16 8.95565C16 6.76512 14.1982 5 12.0248 5C9.82639 5 8 6.78019 8 9V9.5C8 10.0523 8.44771 10.5 9 10.5C9.55229 10.5 10 10.0523 10 9.5V9Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoQuestionCircle;
