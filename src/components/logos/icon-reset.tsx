import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconReset = ({ title, titleId, ...props }: Props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <circle cx={16.0032} cy={16} r={14.6667} fill="#D9D9D9" />
    <circle cx={16.0032} cy={16} r={14.6667} fill="url(#paint0_linear_11179_10889)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0011 9.77778C12.5405 9.77778 9.77886 12.5633 9.77886 16C9.77886 16.4909 9.38089 16.8889 8.88997 16.8889C8.39905 16.8889 8.00108 16.4909 8.00108 16C8.00108 11.5861 11.5541 8 16.0011 8C18.6366 8 20.6089 9.10223 21.9047 10.1832C22.0157 10.2758 22.1219 10.3683 22.2233 10.4602V9.28711C22.2233 8.79619 22.6213 8.39822 23.1122 8.39822C23.6031 8.39822 24.0011 8.79619 24.0011 9.28711V12.8427C24.0011 13.3336 23.6031 13.7316 23.1122 13.7316H19.9549C19.4639 13.7316 19.066 13.3336 19.066 12.8427C19.066 12.3517 19.4639 11.9538 19.9549 11.9538H21.2184C21.08 11.8207 20.9291 11.6845 20.7659 11.5483C19.6919 10.6524 18.1087 9.77778 16.0011 9.77778ZM23.1122 15.1111C23.6031 15.1111 24.0011 15.5091 24.0011 16C24.0011 20.4163 20.4173 24 16.0011 24C13.7297 24 11.9448 22.8572 10.771 21.7926C10.7015 21.7296 10.6339 21.6666 10.5682 21.6039V22.7129C10.5682 23.2038 10.1702 23.6018 9.67931 23.6018C9.18839 23.6018 8.79042 23.2038 8.79042 22.7129V19.1573C8.79042 18.6664 9.18839 18.2684 9.67931 18.2684H12.8935C13.3844 18.2684 13.7824 18.6664 13.7824 19.1573C13.7824 19.6483 13.3844 20.0462 12.8935 20.0462H11.5225C11.6586 20.1871 11.8063 20.3316 11.9654 20.4758C12.9712 21.3881 14.3471 22.2222 16.0011 22.2222C19.4355 22.2222 22.2233 19.4344 22.2233 16C22.2233 15.5091 22.6213 15.1111 23.1122 15.1111Z"
      fill="url(#paint1_linear_11179_10889)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_11179_10889"
        x1={16.0032}
        y1={1.33333}
        x2={16.0032}
        y2={30.6667}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9B80" />
        <stop offset={1} stopColor="#FC5C30" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_11179_10889"
        x1={16.0011}
        y1={8.88889}
        x2={16.0011}
        y2={23.1111}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="#FFEAE5" />
      </linearGradient>
    </defs>
  </svg>
);
export default IconReset;
