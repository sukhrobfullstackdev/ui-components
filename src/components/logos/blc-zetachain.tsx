import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const BlcZetachain = ({ title, titleId, ...props }: Props) => (
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
    <g clipPath="url(#clip0_10462_20364)">
      <path
        d="M15.9998 30.9999C24.2841 30.9999 30.9998 24.2842 30.9998 15.9999C30.9998 7.7157 24.2841 0.999996 15.9998 0.999996C7.71558 0.999996 0.999874 7.7157 0.999874 15.9999C0.999874 24.2842 7.71558 30.9999 15.9998 30.9999Z"
        fill="#005741"
      />
      <path
        d="M19.8946 19.3156V21.3415H11.5374C11.6526 20.0082 12.0829 19.0701 13.5707 17.7509L19.8946 12.356V17.0901H22.171V8.38034H9.22669V12.7219H11.5031V10.6568H18.3801L12.0871 16.0275L12.072 16.0417C9.43468 18.3767 9.225 20.2613 9.225 22.4818V23.6196H22.1719V19.3173H19.8954L19.8946 19.3156Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_10462_20364">
        <rect width={30} height={30} fill="white" transform="translate(0.999874 0.999996)" />
      </clipPath>
    </defs>
  </svg>
);
export default BlcZetachain;
