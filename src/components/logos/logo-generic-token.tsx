import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoGenericToken = ({ title, titleId, ...props }: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M12 0C18.6276 0 24 5.3724 24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0ZM11.1516 7.7568L7.7568 11.1516C7.53183 11.3766 7.40546 11.6818 7.40546 12C7.40546 12.3182 7.53183 12.6234 7.7568 12.8484L11.1516 16.2432C11.3766 16.4682 11.6818 16.5945 12 16.5945C12.3182 16.5945 12.6234 16.4682 12.8484 16.2432L16.2432 12.8484C16.4682 12.6234 16.5945 12.3182 16.5945 12C16.5945 11.6818 16.4682 11.3766 16.2432 11.1516L12.8484 7.7568C12.6234 7.53183 12.3182 7.40546 12 7.40546C11.6818 7.40546 11.3766 7.53183 11.1516 7.7568Z"
      fill="#C8CBFF"
      fillOpacity={0.17}
    />
  </svg>
);
export default LogoGenericToken;
