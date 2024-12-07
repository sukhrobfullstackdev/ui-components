import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const BlcAptos = ({ title, titleId, ...props }: Props) => (
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
    <g clipPath="url(#clip0_8934_423)">
      <path
        d="M23.5878 11.3682H21.1219C20.8369 11.3682 20.5636 11.246 20.3717 11.0307L19.3714 9.9019C19.2202 9.73316 19.0108 9.63424 18.784 9.63424C18.5572 9.63424 18.3478 9.73316 18.1966 9.9019L17.3359 10.8736C17.0567 11.1879 16.6496 11.3741 16.2309 11.3741H2.7325C2.34866 12.4622 2.09859 13.6201 1.99972 14.8246H14.742C14.9688 14.8246 15.1782 14.7315 15.3352 14.5686L16.5217 13.3292C16.667 13.172 16.8764 13.0848 17.0858 13.0848H17.1323C17.3591 13.0848 17.5685 13.1837 17.7197 13.3524L18.72 14.4813C18.9119 14.6966 19.1853 14.8188 19.4702 14.8188H29.8688C29.7699 13.6201 29.5199 12.4563 29.136 11.3624L23.5878 11.3682Z"
        fill="black"
      />
      <path
        d="M9.71141 22.0863C9.93822 22.0863 10.1476 21.9932 10.3046 21.8303L11.491 20.5909C11.6422 20.4338 11.8458 20.3465 12.061 20.3465H12.1075C12.3343 20.3465 12.5495 20.4454 12.6949 20.6083L13.6952 21.7372C13.8871 21.9525 14.1605 22.0747 14.4454 22.0747H28.5428C29.072 20.9807 29.4559 19.8112 29.6885 18.5834H16.1553C15.8703 18.5834 15.5969 18.4612 15.405 18.2459L14.4047 17.1287C14.2535 16.96 14.0441 16.8669 13.8173 16.8669C13.5905 16.8669 13.3753 16.9658 13.2299 17.1287L12.3692 18.1005C12.0901 18.4205 11.6829 18.6009 11.2584 18.6009H2.19164C2.42427 19.8286 2.80811 20.9982 3.33735 22.0921L9.71141 22.0863Z"
        fill="black"
      />
      <path
        d="M19.7087 7.59183C19.9355 7.59183 20.1449 7.49872 20.3019 7.3358L21.4883 6.0964C21.6337 5.9393 21.8431 5.85201 22.0582 5.85201H22.1048C22.3316 5.85201 22.5409 5.95093 22.6922 6.11968L23.6925 7.25434C23.8844 7.46963 24.1577 7.59183 24.4427 7.59183H27.1238C24.5706 4.19367 20.5112 1.99999 15.9401 1.99999C11.3689 1.99999 7.30368 4.19367 4.75056 7.59183H19.7087Z"
        fill="black"
      />
      <path
        d="M14.3291 25.5485H10.6652C10.3802 25.5485 10.1069 25.4263 9.91494 25.211L8.91463 24.0822C8.76342 23.9134 8.55406 23.8203 8.32724 23.8203C8.10043 23.8203 7.88524 23.9193 7.73985 24.0822L6.87912 25.0539C6.59996 25.374 6.19286 25.5543 5.76831 25.5543H5.71015C8.26327 28.2892 11.8981 30.0057 15.9401 30.0057C19.982 30.0057 23.611 28.2892 26.17 25.5543L14.3291 25.5485Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_8934_423">
        <rect width={27.875} height={28} fill="white" transform="translate(1.99972 1.99999)" />
      </clipPath>
    </defs>
  </svg>
);
export default BlcAptos;
