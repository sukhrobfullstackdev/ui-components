import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoEthereum = ({ title, titleId, ...props }: Props) => (
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
    <path d="M12.3658 0V0.362608L12.3658 16.577L19.7323 12.2228L12.3658 0Z" fill="#62688F" />
    <path d="M12.3665 0L5 12.2228L12.3665 16.5771V8.87451V0Z" fill="#8A92B2" />
    <path d="M12.3664 17.9713L12.3664 23.9998L19.7373 13.6192L12.3664 17.9713Z" fill="#62688F" />
    <path d="M12.3665 24V17.9715L5 13.6194L12.3665 24Z" fill="#8A92B2" />
    <path d="M12.3665 16.5772L19.7328 12.223L12.3665 8.87473V16.5772Z" fill="#454A75" />
    <path d="M5 12.2231L12.3663 16.5773V8.87482L5 12.2231Z" fill="#62688F" />
  </svg>
);
export default LogoEthereum;
