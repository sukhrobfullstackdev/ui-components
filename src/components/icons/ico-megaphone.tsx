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
const IcoMegaphone = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M12.7772 15.4857H13.644L17.5989 18.6032C18.6859 19.462 20 18.8218 20 17.4364V12.4863C21.1046 12.4863 22 11.5909 22 10.4863C22 9.38176 21.1046 8.48633 20 8.48633V3.55511C20 2.17027 18.6854 1.53107 17.5953 2.38791L13.6974 5.48572H6.99764C4.24026 5.48572 2 7.7257 2 10.4857C2 12.7855 3.55647 14.7263 5.67311 15.3079L7.01579 20.7417C7.25826 21.723 8.21475 22.4734 9.22647 22.4734H12.2269C13.4322 22.4734 14.2458 21.4292 13.9574 20.2619L12.7772 15.4857ZM10.7171 15.4857H7.77721L8.95739 20.2619C8.97942 20.3511 9.13533 20.4734 9.22647 20.486H11.9526L10.7171 15.4857ZM18 10.4863C18 10.4648 18.0003 10.4433 18.001 10.4219L18 4.63422L14.618 7.27193C14.4418 7.41043 14.2241 7.48572 14 7.48572H12.5V13.4857H14C14.225 13.4857 14.4434 13.5616 14.6199 13.701L18.0021 16.373L18.001 10.5515C18.0003 10.5298 18 10.5081 18 10.4863ZM10.5 7.48572H6.99764C5.34477 7.48572 4 8.83033 4 10.4857C4 12.1399 5.34394 13.4857 6.99764 13.4857H10.5V7.48572Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoMegaphone;
