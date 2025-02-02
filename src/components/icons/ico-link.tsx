import type { SVGProps } from 'react';
import { token } from '@styled/tokens';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {
  /**
   * Configures icon color on monochrome svgs.
   */
  color?: string;
}
const IcoLink = ({ color: customColor, title, titleId, ...props }: Props) => {
  // Utilize dynamic primary text color by default
  const color = customColor || token('colors.text.primary');
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.3122 3.32846C1.57283 5.06782 1.50777 7.88799 3.24673 9.62694L6.86083 13.241C7.25135 13.6316 7.88452 13.6316 8.27504 13.241C8.66556 12.8505 8.66556 12.2174 8.27504 11.8268L4.66094 8.21273C3.73854 7.29033 3.73211 5.73697 4.72641 4.74267C5.72071 3.74837 7.27407 3.7548 8.19647 4.6772L12.4075 8.88825L12.4129 8.89367C13.3353 9.81607 13.3417 11.3694 12.3474 12.3637C11.9569 12.7543 11.9569 13.3874 12.3474 13.7779C12.738 14.1685 13.3711 14.1685 13.7616 13.7779C15.499 12.0406 15.5659 9.22506 13.8333 7.48562L13.8271 7.47943L9.61069 3.26298C7.87174 1.52403 5.05157 1.58909 3.3122 3.32846ZM20.7072 20.7071C18.9678 22.4465 16.1476 22.5115 14.4087 20.7726L10.1922 16.5561C10.1813 16.5452 10.1706 16.534 10.1602 16.5227C10.1489 16.5123 10.1377 16.5016 10.1267 16.4906C8.38776 14.7517 8.45281 11.9315 10.1922 10.1921C10.5827 9.80162 11.2159 9.80162 11.6064 10.1921C11.9969 10.5827 11.9969 11.2158 11.6064 11.6064C10.6121 12.6007 10.6185 14.154 11.5409 15.0764C11.5519 15.0874 11.5625 15.0985 11.5729 15.1099C11.5843 15.1203 11.5954 15.1309 11.6064 15.1419L15.8229 19.3584C16.7453 20.2808 18.2986 20.2872 19.2929 19.2929C20.2872 18.2986 20.2808 16.7452 19.3584 15.8228L15.7443 12.2087C15.3538 11.8182 15.3538 11.1851 15.7443 10.7945C16.1348 10.404 16.768 10.404 17.1585 10.7945L20.7726 14.4086C22.5116 16.1476 22.4465 18.9678 20.7072 20.7071Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoLink;
