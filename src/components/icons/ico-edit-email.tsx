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
const IcoEditEmail = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M21.3914 1.71058C20.3741 0.740802 18.7669 0.766869 17.7815 1.76913L12.3582 7.28574C12.1927 7.45406 12.1 7.68065 12.1 7.91669V9.23034C12.0671 9.22707 12.0337 9.2254 12 9.2254H7C6.44772 9.2254 6 9.67312 6 10.2254C6 10.7777 6.44772 11.2254 7 11.2254H12C12.2228 11.2254 12.4286 11.1525 12.5949 11.0293C12.7166 11.0908 12.8543 11.1254 13 11.1254H15.4218C15.6632 11.1254 15.8944 11.0285 16.0636 10.8564L21.4509 5.37645C22.4579 4.35215 22.4311 2.70169 21.3914 1.71058ZM19.0651 3.03102C19.3611 2.72998 19.8439 2.72215 20.1494 3.01344C20.4617 3.31114 20.4698 3.80689 20.1673 4.11456L15.0445 9.32541H13.9V8.28499L19.0651 3.03102ZM6 2.2254C3.23858 2.2254 1 4.46398 1 7.2254V21.1448C1 22.8218 2.93986 23.7541 4.24939 22.7065L6.52904 20.8828C7.06098 20.4572 7.72191 20.2254 8.40312 20.2254H18C20.7614 20.2254 23 17.9868 23 15.2254V11.2254C23 10.6731 22.5523 10.2254 22 10.2254C21.4477 10.2254 21 10.6731 21 11.2254V15.2254C21 16.8823 19.6569 18.2254 18 18.2254H8.40312C7.26777 18.2254 6.16621 18.6118 5.27965 19.3211L3 21.1448V7.2254C3 5.56855 4.34315 4.2254 6 4.2254H12C12.5523 4.2254 13 3.77769 13 3.2254C13 2.67312 12.5523 2.2254 12 2.2254H6ZM7 13.2254C6.44772 13.2254 6 13.6731 6 14.2254C6 14.7777 6.44772 15.2254 7 15.2254H17C17.5523 15.2254 18 14.7777 18 14.2254C18 13.6731 17.5523 13.2254 17 13.2254H7Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoEditEmail;
