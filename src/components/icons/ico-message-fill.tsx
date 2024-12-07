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
const IcoMessageFill = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M6.86715 22.0183C6.93391 22.0425 7.01372 22.0708 7.10536 22.1022C7.39676 22.2021 7.80988 22.3342 8.30484 22.4662C9.28557 22.7278 10.629 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 13.6102 1.26818 14.9537 1.53848 15.8997C1.67379 16.3733 1.81022 16.7494 1.91527 17.012C1.92819 17.0443 1.94063 17.0749 1.95255 17.1037L1.17376 20.6083C0.952125 21.6057 1.77069 22.5279 2.7873 22.4263L6.86715 22.0183ZM6.24451 12.5C6.24451 11.8096 6.80415 11.25 7.49451 11.25H7.50349C8.19384 11.25 8.75349 11.8096 8.75349 12.5C8.75349 13.1904 8.19384 13.75 7.50349 13.75H7.49451C6.80415 13.75 6.24451 13.1904 6.24451 12.5ZM11.9955 11.25C11.3051 11.25 10.7455 11.8096 10.7455 12.5C10.7455 13.1904 11.3051 13.75 11.9955 13.75H12.0045C12.6948 13.75 13.2545 13.1904 13.2545 12.5C13.2545 11.8096 12.6948 11.25 12.0045 11.25H11.9955ZM16.4945 11.25C15.8042 11.25 15.2445 11.8096 15.2445 12.5C15.2445 13.1904 15.8042 13.75 16.4945 13.75H16.5035C17.1938 13.75 17.7535 13.1904 17.7535 12.5C17.7535 11.8096 17.1938 11.25 16.5035 11.25H16.4945Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoMessageFill;
