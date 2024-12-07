import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconMagicLogo = ({ title, titleId, ...props }: Props) => (
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
    <rect width={32} height={32} rx={16} fill="url(#paint0_linear_10292_20358)" />
    <path
      d="M16 6.66667C16.8523 7.65607 17.7922 8.5749 18.8087 9.4125C18.1314 11.4948 17.7668 13.707 17.7668 16C17.7668 18.293 18.1314 20.5052 18.8087 22.5875C17.7922 23.4251 16.8523 24.3439 16 25.3333C15.1478 24.3439 14.2079 23.4251 13.1914 22.5875C13.8687 20.5052 14.2333 18.293 14.2333 16C14.2333 13.707 13.8687 11.4948 13.1914 9.4125C14.2079 8.5749 15.1478 7.65607 16 6.66667Z"
      fill="white"
    />
    <path
      d="M11.2486 21.1479C10.1727 20.4331 9.0308 19.8013 7.83338 19.2625C8.16553 18.2305 8.34422 17.135 8.34422 16C8.34422 14.865 8.16553 13.7695 7.83337 12.7375C9.0308 12.1987 10.1727 11.567 11.2486 10.8521C11.66 12.5047 11.8777 14.2283 11.8777 16C11.8777 17.7717 11.66 19.4953 11.2486 21.1479Z"
      fill="white"
    />
    <path
      d="M20.1224 16C20.1224 17.7717 20.3401 19.4953 20.7515 21.1479C21.8274 20.4331 22.9693 19.8013 24.1667 19.2625C23.8345 18.2305 23.6559 17.135 23.6559 16C23.6559 14.865 23.8345 13.7695 24.1667 12.7375C22.9693 12.1987 21.8274 11.567 20.7515 10.8521C20.3401 12.5047 20.1224 14.2283 20.1224 16Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_10292_20358"
        x1={-0.880001}
        y1={-8.36563}
        x2={41.1926}
        y2={10.0506}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.059584} stopColor="#3728B7" />
        <stop offset={0.512856} stopColor="#6851FF" />
        <stop offset={1} stopColor="#C970FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default IconMagicLogo;
