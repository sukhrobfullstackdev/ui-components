import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoFlow = ({ title, titleId, ...props }: Props) => (
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
      d="M11.9993 23.2499C18.2125 23.2499 23.2493 18.2131 23.2493 12C23.2493 5.78678 18.2125 0.75 11.9993 0.75C5.78617 0.75 0.74939 5.78678 0.74939 12C0.74939 18.2131 5.78617 23.2499 11.9993 23.2499Z"
      fill="#00EF8B"
    />
    <path d="M17.1519 10.0199H13.9794V13.1924H17.1519V10.0199Z" fill="white" />
    <path
      d="M10.8069 14.3849C10.8069 15.0374 10.2669 15.5774 9.61439 15.5774C8.96189 15.5774 8.42189 15.0374 8.42189 14.3849C8.42189 13.7324 8.96189 13.1924 9.61439 13.1924H10.8069V10.0199H9.61439C7.20689 10.0199 5.24939 11.9774 5.24939 14.3849C5.24939 16.7924 7.20689 18.7499 9.61439 18.7499C12.0219 18.7499 13.9794 16.7924 13.9794 14.3849V13.1924H10.8069V14.3849Z"
      fill="white"
    />
    <path
      d="M15.1721 8.42247H18.7496V5.24997H15.1721C12.7646 5.24997 10.8071 7.20747 10.8071 9.61497V10.02H13.9796V9.61497C13.9796 8.96247 14.5196 8.42247 15.1721 8.42247Z"
      fill="white"
    />
    <path d="M13.9796 10.0199H10.8071V13.1924H13.9796V10.0199Z" fill="#16FF99" />
  </svg>
);
export default LogoFlow;
