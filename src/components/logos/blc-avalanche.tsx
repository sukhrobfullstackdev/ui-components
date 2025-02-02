import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const BlcAvalanche = ({ title, titleId, ...props }: Props) => (
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
      d="M16.0002 30.9999C24.2845 30.9999 31.0002 24.2842 31.0002 15.9999C31.0002 7.7157 24.2845 0.999996 16.0002 0.999996C7.71597 0.999996 1.00027 7.7157 1.00027 15.9999C1.00027 24.2842 7.71597 30.9999 16.0002 30.9999Z"
      fill="#E84142"
    />
    <path
      d="M20.4811 16.8823C20.9213 16.1182 21.6314 16.1182 22.0715 16.8823L24.8122 21.7178C25.2523 22.4819 24.8922 23.1052 24.012 23.1052H18.4907C17.6205 23.1052 17.2604 22.4819 17.6905 21.7178L20.4811 16.8823ZM15.1799 7.573C15.62 6.80896 16.3201 6.80896 16.7602 7.573L17.3704 8.67885L18.8107 11.2223C19.1608 11.9461 19.1608 12.8007 18.8107 13.5245L13.9796 21.939C13.5395 22.6226 12.8093 23.0549 11.9991 23.1052H7.98812C7.10791 23.1052 6.74782 22.4919 7.18793 21.7178L15.1799 7.573Z"
      fill="white"
    />
  </svg>
);
export default BlcAvalanche;
