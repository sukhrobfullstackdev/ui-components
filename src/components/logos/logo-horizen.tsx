import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoHorizen = ({ title, titleId, ...props }: Props) => (
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
    <g clipPath="url(#clip0_10274_46162)">
      <path
        d="M21.4917 4.67673L18.8984 8.97002C19.3069 9.89783 19.5385 10.9211 19.5385 11.9999C19.5385 16.1632 16.1632 19.5383 12.0001 19.5383C10.6592 19.5383 9.40274 19.1845 8.3119 18.5708L10.3034 15.2774L12.0001 12.4721L13.7021 15.2793L13.7132 15.2609L15.6798 11.9999L13.6948 8.72244L11.9928 5.91228L5.76058 16.23L3.31981 20.2706C4.10747 21.0971 5.01071 21.809 6.00534 22.3846C7.77051 23.4058 9.81392 23.9998 12.0001 23.9998C18.6274 23.9998 24 18.6273 24 11.9999C24 9.23914 23.0601 6.70284 21.4917 4.67673Z"
        fill="url(#paint0_radial_10274_46162)"
      />
      <path d="M10.3034 15.2774L12.0056 18.0876L13.7021 15.2793L12.0001 12.4721L10.3034 15.2774Z" fill="#041742" />
      <path
        d="M17.9934 1.61453C16.2285 0.593628 14.1855 0 12.0001 0C5.37255 0 0 5.37262 0 11.9999C0 14.7579 0.937973 17.2919 2.50364 19.317L5.09807 15.0217C4.69188 14.096 4.46176 13.0756 4.46176 11.9999C4.46176 7.83656 7.83648 4.46151 12.0001 4.46151C13.3402 4.46151 14.5965 4.81505 15.6868 5.42835L13.6948 8.72247L15.6798 11.9999L18.2386 7.76869L20.6792 3.72821C19.8915 2.90184 18.9883 2.18996 17.9934 1.61453Z"
        fill="#041742"
      />
    </g>
    <defs>
      <radialGradient
        id="paint0_radial_10274_46162"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(10.2534 6.75694) scale(16.9915)"
      >
        <stop offset={0.0986} stopColor="#26DB8D" />
        <stop offset={0.2628} stopColor="#22D299" />
        <stop offset={0.5637} stopColor="#19BABA" />
        <stop offset={0.886} stopColor="#0E9DE5" />
      </radialGradient>
      <clipPath id="clip0_10274_46162">
        <rect width={24.0002} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default LogoHorizen;
