import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoWax = ({ title, titleId, ...props }: Props) => (
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
      d="M11.9998 23.2499C18.2129 23.2499 23.2497 18.2131 23.2497 12C23.2497 5.78678 18.2129 0.75 11.9998 0.75C5.78659 0.75 0.749817 5.78678 0.749817 12C0.749817 18.2131 5.78659 23.2499 11.9998 23.2499Z"
      fill="#F89022"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.4372 14.0826H18.7751L17.5959 13.0729L16.421 14.0784H15.0162L14.3447 13.2628H12.03L12.6157 12.5393H13.7541L12.8871 11.4789L9.86018 15.164H8.45605L9.33214 14.0939H7.86894L7.07793 11.8762L6.29324 14.077H4.80895L3.56232 10.6225H4.70137L5.5395 12.9752L6.37481 10.6331H7.78105L8.61425 12.9703L9.44675 10.6324H10.5893L9.33214 14.0939L9.61198 13.7521L12.1798 10.6268H13.5931L15.7298 13.2339L16.7578 12.3501L13.5045 9.53903H15.1744L20.4372 14.0826ZM18.7884 11.9929L18.0044 11.3207L18.787 10.6542L20.369 10.6556L18.7884 11.9929Z"
      fill="white"
    />
  </svg>
);
export default LogoWax;
