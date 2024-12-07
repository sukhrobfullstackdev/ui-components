import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoBinance = ({ title, titleId, ...props }: Props) => (
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
      d="M8.21322 10.444L12.0003 6.65692L15.7891 10.4456L17.9926 8.24211L12.0003 2.24994L6.00988 8.24031L8.2133 10.4438L8.21322 10.444ZM2.2503 11.9999L4.45387 9.79602L6.65728 11.9994L4.45371 14.203L2.2503 11.9999ZM8.21322 13.5561L12.0003 17.3429L15.789 13.5543L17.9937 15.7566L17.9926 15.7578L12.0003 21.7499L6.00988 15.7595L6.00676 15.7564L8.21345 13.5558L8.21322 13.5561ZM17.3432 12.0008L19.5468 9.79727L21.7502 12.0007L19.5467 14.2042L17.3432 12.0008Z"
      fill="#F3BA2F"
    />
    <path
      d="M14.2364 11.9989H14.2374L12.0016 9.76297L10.349 11.4151L10.1592 11.605L9.76762 11.9967L9.7645 11.9997L9.76762 12.0029L12.0016 14.2372L14.2375 12.0013L14.2386 12L14.2366 11.9989"
      fill="#F3BA2F"
    />
  </svg>
);
export default LogoBinance;
