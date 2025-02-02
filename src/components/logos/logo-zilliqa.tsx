import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoZilliqa = ({ title, titleId, ...props }: Props) => (
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
      d="M19.0279 10.3083L16.2195 11.5604L8.76937 15.3526L16.2195 18.9345V13.0138L19.0279 11.7482V20.4952L16.2195 21.7474L5.25 16.4974V13.7069L12.8433 9.98183L5.25 6.33277V3.50207L8.10306 2.24994L19.0279 7.50887V10.3083Z"
      fill="#49C1BF"
    />
    <path d="M5.25 3.50207L16.2195 8.761L19.0279 7.50887L8.10306 2.24994L5.25 3.50207Z" fill="#077A8F" />
    <path d="M16.22 8.74911L19.0284 7.49698V10.2964L16.22 11.5485V8.74911Z" fill="#298E97" />
    <path
      d="M5.25 3.50455V6.33525L12.8433 9.98431L5.25 13.7094V16.4998L16.2195 21.7498V18.9415L8.76937 15.355L16.2195 11.5629V8.76348L5.25 3.50455Z"
      fill="#49C1BF"
    />
    <path d="M16.22 21.729L19.0284 20.4769V11.7299L16.22 12.9954V21.729Z" fill="#298E97" />
  </svg>
);
export default LogoZilliqa;
