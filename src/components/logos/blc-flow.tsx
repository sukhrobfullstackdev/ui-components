import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const BlcFlow = ({ title, titleId, ...props }: Props) => (
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
      d="M15.9992 30.9999C24.2834 30.9999 30.9991 24.2842 30.9991 15.9999C30.9991 7.7157 24.2834 0.999996 15.9992 0.999996C7.71494 0.999996 0.999233 7.7157 0.999233 15.9999C0.999233 24.2842 7.71494 30.9999 15.9992 30.9999Z"
      fill="#00EF8B"
    />
    <path d="M22.8692 13.3599H18.6392V17.5899H22.8692V13.3599Z" fill="white" />
    <path
      d="M14.4092 19.1799C14.4092 20.0499 13.6892 20.7699 12.8192 20.7699C11.9492 20.7699 11.2292 20.0499 11.2292 19.1799C11.2292 18.3099 11.9492 17.5899 12.8192 17.5899H14.4092V13.3599H12.8192C9.60921 13.3599 6.99921 15.9699 6.99921 19.1799C6.99921 22.3899 9.60921 24.9999 12.8192 24.9999C16.0292 24.9999 18.6392 22.3899 18.6392 19.1799V17.5899H14.4092V19.1799Z"
      fill="white"
    />
    <path
      d="M20.2295 11.23H24.9995V6.99997H20.2295C17.0195 6.99997 14.4095 9.60997 14.4095 12.82V13.36H18.6395V12.82C18.6395 11.95 19.3595 11.23 20.2295 11.23Z"
      fill="white"
    />
    <path d="M18.6395 13.3599H14.4095V17.5899H18.6395V13.3599Z" fill="#16FF99" />
  </svg>
);
export default BlcFlow;
