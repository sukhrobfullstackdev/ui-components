import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const FwkBinanceFill = ({ title, titleId, ...props }: Props) => (
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
    <rect width={24} height={24} rx={4} fill="#333333" />
    <path
      d="M8.89267 10.7233L12 7.616L15.1088 10.7247L16.9168 8.91667L12 4L7.0848 8.9152L8.89274 10.7232L8.89267 10.7233ZM4 12L5.80806 10.1917L7.616 11.9996L5.80794 13.8077L4 12ZM8.89267 13.2769L12 16.384L15.1087 13.2754L16.9177 15.0824L16.9168 15.0834L12 20L7.0848 15.0848L7.08224 15.0822L8.89286 13.2767L8.89267 13.2769ZM16.384 12.0008L18.1921 10.1927L20 12.0006L18.192 13.8087L16.384 12.0008Z"
      fill="#F3BA2F"
    />
  </svg>
);
export default FwkBinanceFill;
