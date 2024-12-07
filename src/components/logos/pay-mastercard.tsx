import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const PayMastercard = ({ title, titleId, ...props }: Props) => (
  <svg
    width={35}
    height={24}
    viewBox="0 0 35 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <rect width={35} height={24} rx={4} fill="black" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.75 17.157C16.5584 18.1852 15.0127 18.806 13.3238 18.806C9.55511 18.806 6.5 15.7154 6.5 11.903C6.5 8.09057 9.55511 5 13.3238 5C15.0127 5 16.5584 5.62074 17.75 6.64901C18.9415 5.62074 20.4872 5 22.1762 5C25.9449 5 29 8.09057 29 11.903C29 15.7154 25.9449 18.806 22.1762 18.806C20.4872 18.806 18.9415 18.1852 17.75 17.157Z"
      fill="#ED0006"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.75 17.157C19.2172 15.8908 20.1476 14.0068 20.1476 11.903C20.1476 9.79916 19.2172 7.91515 17.75 6.64901C18.9416 5.62074 20.4872 5 22.1762 5C25.9449 5 29 8.09057 29 11.903C29 15.7154 25.9449 18.806 22.1762 18.806C20.4872 18.806 18.9416 18.1852 17.75 17.157Z"
      fill="#F9A000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.75 17.1569C19.2172 15.8908 20.1475 14.0068 20.1475 11.903C20.1475 9.79917 19.2172 7.91518 17.75 6.64905C16.2829 7.91518 15.3525 9.79917 15.3525 11.903C15.3525 14.0068 16.2829 15.8908 17.75 17.1569Z"
      fill="#FF5E00"
    />
  </svg>
);
export default PayMastercard;
