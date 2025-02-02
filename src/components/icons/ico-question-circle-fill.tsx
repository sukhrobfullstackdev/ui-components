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
const IcoQuestionCircleFill = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM12.0248 7C10.9095 7 10 7.9061 10 9V9.5C10 10.0523 9.55228 10.5 9 10.5C8.44771 10.5 8 10.0523 8 9.5V9C8 6.78019 9.82639 5 12.0248 5C14.1982 5 16 6.76512 16 8.95565C16 10.8064 14.7234 12.3651 13 12.7883V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V11.9605C11 11.3757 11.4741 10.9016 12.0588 10.9016C13.1288 10.9016 14 10.0299 14 8.95565C14 7.8868 13.1108 7 12.0248 7ZM10.75 18C10.75 17.3096 11.3096 16.75 12 16.75H12.009C12.6993 16.75 13.259 17.3096 13.259 18C13.259 18.6904 12.6993 19.25 12.009 19.25H12C11.3096 19.25 10.75 18.6904 10.75 18Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoQuestionCircleFill;
