import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconWarning = ({ title, titleId, ...props }: Props) => (
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
      d="M12.8786 5.72258L2.86809 24.0752C1.57572 26.4445 3.29062 29.3333 5.98949 29.3333H26.0105C28.7094 29.3333 30.4243 26.4445 29.1319 24.0752L19.1215 5.72258C17.7738 3.25195 14.2263 3.25195 12.8786 5.72258Z"
      fill="url(#paint0_linear_11179_10869)"
    />
    <path
      d="M12.8786 5.72258L2.86809 24.0752C1.57572 26.4445 3.29062 29.3333 5.98949 29.3333H26.0105C28.7094 29.3333 30.4243 26.4445 29.1319 24.0752L19.1215 5.72258C17.7738 3.25195 14.2263 3.25195 12.8786 5.72258Z"
      fill="url(#paint1_linear_11179_10869)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 11.3333C16.9205 11.3333 17.6667 12.0795 17.6667 13V18.3333C17.6667 19.2538 16.9205 20 16 20C15.0795 20 14.3333 19.2538 14.3333 18.3333V13C14.3333 12.0795 15.0795 11.3333 16 11.3333Z"
      fill="url(#paint2_linear_11179_10869)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 11.3333C16.9205 11.3333 17.6667 12.0795 17.6667 13V18.3333C17.6667 19.2538 16.9205 20 16 20C15.0795 20 14.3333 19.2538 14.3333 18.3333V13C14.3333 12.0795 15.0795 11.3333 16 11.3333Z"
      fill="url(#paint3_linear_11179_10869)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3262 23.1667C14.3262 22.2462 15.0724 21.5 15.9929 21.5H16.0054C16.9259 21.5 17.6721 22.2462 17.6721 23.1667C17.6721 24.0871 16.9259 24.8333 16.0054 24.8333H15.9929C15.0724 24.8333 14.3262 24.0871 14.3262 23.1667Z"
      fill="url(#paint4_linear_11179_10869)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.3262 23.1667C14.3262 22.2462 15.0724 21.5 15.9929 21.5H16.0054C16.9259 21.5 17.6721 22.2462 17.6721 23.1667C17.6721 24.0871 16.9259 24.8333 16.0054 24.8333H15.9929C15.0724 24.8333 14.3262 24.0871 14.3262 23.1667Z"
      fill="url(#paint5_linear_11179_10869)"
    />
    <defs>
      <linearGradient id="paint0_linear_11179_10869" x1={16} y1={0} x2={16} y2={29.3333} gradientUnits="userSpaceOnUse">
        <stop stopColor="#A799FF" />
        <stop offset={1} stopColor="#6851FF" />
      </linearGradient>
      <linearGradient id="paint1_linear_11179_10869" x1={16} y1={0} x2={16} y2={29.3333} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF9B80" />
        <stop offset={1} stopColor="#FC5C30" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_11179_10869"
        x1={16.3333}
        y1={13}
        x2={16.3333}
        y2={18.3333}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="#EDEBFF" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_11179_10869"
        x1={16.3333}
        y1={13}
        x2={16.3333}
        y2={18.3333}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="#FFEAE5" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_11179_10869"
        x1={15.9992}
        y1={21.3333}
        x2={15.9992}
        y2={25}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="#EDEBFF" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_11179_10869"
        x1={15.9992}
        y1={21.3333}
        x2={15.9992}
        y2={25}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="#FFEAE5" />
      </linearGradient>
    </defs>
  </svg>
);
export default IconWarning;
