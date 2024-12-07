import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const PayDiscover = ({ title, titleId, ...props }: Props) => (
  <svg
    width={35}
    height={24}
    viewBox="0 0 35 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <rect width={34.9998} height={23.9998} rx={4} fill="#232342" />
    <path d="M15.2501 23.9998L35 18.2499V21.9998C35 23.1044 34.1046 23.9998 33 23.9998H15.2501Z" fill="#FD6020" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.1855 9.61077C31.272 9.61077 31.8696 10.0943 31.8696 11.0077C31.924 11.7061 31.435 12.2971 30.7831 12.4046L32.2499 14.3924H31.1091L29.8595 12.4583H29.7509V14.3924H28.8273V9.61077H30.1855ZM29.7508 11.8136H30.0224C30.62 11.8136 30.8916 11.5449 30.8916 11.0614C30.8916 10.6316 30.62 10.363 30.0224 10.363H29.7508V11.8136ZM25.6219 14.3924H28.2296V13.5865H26.5455V12.2971H28.1753V11.4912H26.5455V10.4167H28.2296V9.61077H25.6219V14.3924ZM22.9056 12.8344L21.6561 9.61077H20.6782L22.6883 14.4999H23.1773L25.1874 9.61077H24.2095L22.9056 12.8344ZM11.8771 12.0285C11.8771 13.3716 12.9637 14.4999 14.3218 14.4999C14.7565 14.4999 15.1368 14.3924 15.5171 14.2313V13.1567C15.2454 13.4791 14.8651 13.694 14.4305 13.694C13.5613 13.694 12.855 13.0493 12.855 12.1897V12.0822C12.8007 11.2226 13.5069 10.4704 14.3762 10.4167C14.8108 10.4167 15.2454 10.6316 15.5171 10.9539V9.87942C15.1911 9.66451 14.7565 9.61078 14.3762 9.61078C12.9637 9.50333 11.8771 10.6316 11.8771 12.0285ZM10.193 11.4375C9.64975 11.2226 9.48677 11.1151 9.48677 10.8465C9.54109 10.5241 9.81273 10.2555 10.1387 10.3092C10.4103 10.3092 10.682 10.4704 10.8993 10.6853L11.3882 10.0406C11.0079 9.71823 10.519 9.50333 10.03 9.50333C9.26946 9.4496 8.61753 10.0406 8.5632 10.7928V10.8465C8.5632 11.4912 8.83484 11.8673 9.70407 12.1359C9.92138 12.1897 10.1387 12.2971 10.356 12.4046C10.519 12.512 10.6276 12.6732 10.6276 12.8881C10.6276 13.2642 10.3017 13.5865 9.97571 13.5865H9.92138C9.48677 13.5865 9.10647 13.3179 8.94349 12.9418L8.34589 13.5328C8.67185 14.1238 9.32378 14.4462 9.97571 14.4462C10.845 14.4999 11.5512 13.8552 11.6055 12.9956V12.8344C11.5512 12.1897 11.2796 11.8673 10.193 11.4375ZM7.04194 14.3924H7.96551V9.61077H7.04194V14.3924ZM2.7501 9.61077H4.10829H4.37993C5.68378 9.6645 6.71601 10.739 6.66168 12.0285C6.66168 12.7269 6.33571 13.3716 5.79244 13.8552C5.30349 14.2313 4.70589 14.4462 4.10829 14.3924H2.7501V9.61077ZM3.94544 13.5866C4.38006 13.6403 4.86901 13.4791 5.19497 13.2105C5.52094 12.8881 5.68392 12.4583 5.68392 11.9748C5.68392 11.545 5.52094 11.1152 5.19497 10.7928C4.86901 10.5242 4.38006 10.363 3.94544 10.4167H3.6738V13.5866H3.94544Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.2883 9.49993C16.9301 9.49993 15.7892 10.5745 15.7892 11.9714C15.7892 13.3145 16.8757 14.4428 18.2883 14.4965C19.7008 14.5502 20.7873 13.422 20.8416 12.0251C20.7873 10.6282 19.7008 9.49993 18.2883 9.49993V9.49993Z"
      fill="#FD6020"
    />
  </svg>
);
export default PayDiscover;
