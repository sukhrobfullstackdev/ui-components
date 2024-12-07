import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconWarningShield = ({ title, titleId, ...props }: Props) => (
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
    <path
      d="M4.00323 8.67022C4.00323 7.18895 4.98074 5.88538 6.40268 5.47038L15.0749 2.93937C15.685 2.76129 16.3334 2.76138 16.9435 2.93962L25.6046 5.46993C27.0262 5.88522 28.0032 7.18859 28.0032 8.66952V13.356C28.0032 17.0385 26.8444 20.6276 24.691 23.6148C22.7546 26.301 20.1022 28.3781 17.047 29.6159C16.3789 29.8865 15.6316 29.8866 14.9634 29.616C11.9071 28.3783 9.25377 26.3009 7.31664 23.614C5.16251 20.6261 4.00329 17.0361 4.00323 13.3527V8.67022Z"
      fill="url(#paint0_linear_11179_10852)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.0032 9.33333C16.9237 9.33333 17.6699 10.0795 17.6699 11V16.3333C17.6699 17.2538 16.9237 18 16.0032 18C15.0828 18 14.3366 17.2538 14.3366 16.3333V11C14.3366 10.0795 15.0828 9.33333 16.0032 9.33333Z"
      fill="url(#paint1_linear_11179_10852)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3294 21.1667C14.3294 20.2462 15.0756 19.5 15.9961 19.5H16.0085C16.929 19.5 17.6752 20.2462 17.6752 21.1667C17.6752 22.0871 16.929 22.8333 16.0085 22.8333H15.9961C15.0756 22.8333 14.3294 22.0871 14.3294 21.1667Z"
      fill="url(#paint2_linear_11179_10852)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_11179_10852"
        x1={16.0032}
        y1={2.66667}
        x2={16.0032}
        y2={30}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF9B80" />
        <stop offset={1} stopColor="#FC5C30" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_11179_10852"
        x1={16.3366}
        y1={11}
        x2={16.3366}
        y2={16.3333}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="#FFEAE5" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_11179_10852"
        x1={16.0023}
        y1={19.3333}
        x2={16.0023}
        y2={23}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="#FFEAE5" />
      </linearGradient>
    </defs>
  </svg>
);
export default IconWarningShield;
