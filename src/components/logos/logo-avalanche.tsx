import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoAvalanche = ({ title, titleId, ...props }: Props) => (
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
      d="M12.0002 23.2499C18.2133 23.2499 23.2501 18.2131 23.2501 12C23.2501 5.78678 18.2133 0.75 12.0002 0.75C5.78697 0.75 0.750198 5.78678 0.750198 12C0.750198 18.2131 5.78697 23.2499 12.0002 23.2499Z"
      fill="#E84142"
    />
    <path
      d="M15.3608 12.6617C15.6909 12.0886 16.2236 12.0886 16.5536 12.6617L18.6091 16.2884C18.9392 16.8614 18.6691 17.3289 18.009 17.3289H13.868C13.2153 17.3289 12.9453 16.8614 13.2678 16.2884L15.3608 12.6617ZM11.3849 5.67974C11.715 5.10671 12.2401 5.10671 12.5702 5.67974L13.0278 6.50913L14.108 8.41672C14.3706 8.95959 14.3706 9.60048 14.108 10.1434L10.4847 16.4542C10.1546 16.967 9.60696 17.2912 8.99931 17.3289H5.99108C5.33092 17.3289 5.06086 16.8689 5.39094 16.2884L11.3849 5.67974Z"
      fill="white"
    />
  </svg>
);
export default LogoAvalanche;
