import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const FwkFauna = ({ title, titleId, ...props }: Props) => (
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
      d="M16.984 6.19535C15.7478 6.60832 15.1526 7.3491 14.7471 8.50277C14.6424 8.8109 14.3808 9.15174 14.0865 9.38116L15.1003 10.4694L11.8822 8.21439L3 2C3 2 3.64099 6.1691 3.86337 7.70303C4.02035 8.78464 4.28852 9.26974 5.13881 9.76142L5.47892 9.94497L6.94404 10.7185L6.07413 10.2661L10.0901 12.4621L10.064 12.5212L5.74055 10.5152C5.96948 11.3019 6.41424 12.8161 6.60392 13.4848C6.80668 14.2058 7.03561 14.4681 7.73546 14.7237L9.02397 15.1957L9.82194 14.881L8.80813 15.5562L3.7391 22C7.10755 18.8666 9.9593 17.7522 12.0458 16.841C14.7079 15.6873 16.3103 14.9466 17.3568 12.2852C18.1024 10.4169 18.6846 8.02426 19.4237 7.09994L21 5.08096C21 5.08096 17.7362 5.94626 16.984 6.19535Z"
      fill="#3F00A5"
    />
  </svg>
);
export default FwkFauna;
