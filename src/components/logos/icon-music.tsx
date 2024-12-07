import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconMusic = ({ title, titleId, ...props }: Props) => (
  <svg
    width={33}
    height={32}
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.6028 0.961573C6.48059 0.706553 6.17479 0.598886 5.91977 0.721093C5.66475 0.843299 5.55708 1.1491 5.67929 1.40412L9.33196 9.0265C8.7191 8.87431 8.05165 8.92628 7.43771 9.22048C6.0351 9.89261 5.44293 11.5745 6.11506 12.9771C6.7872 14.3797 8.46911 14.9719 9.87172 14.2998C11.2743 13.6276 11.8665 11.9457 11.1944 10.5431C11.1919 10.5379 11.1893 10.5327 11.1868 10.5275L6.6028 0.961573Z"
      fill="url(#paint0_radial_10465_20480)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.1022 20.311C27.1706 20.0556 27.019 19.7931 26.7636 19.7246C26.5083 19.6562 26.2457 19.8078 26.1773 20.0631L24.132 27.6962C23.7896 27.2154 23.2843 26.8463 22.6696 26.6816C21.2649 26.3052 19.8211 27.1388 19.4448 28.5434C19.0684 29.9481 19.902 31.3919 21.3066 31.7683C22.7113 32.1446 24.1551 31.3111 24.5314 29.9064C24.5352 29.8924 24.5388 29.8784 24.5423 29.8644L27.1022 20.311Z"
      fill="url(#paint1_radial_10465_20480)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.98629 19.5071C7.46549 19.4155 6.96904 19.7635 6.87744 20.2843L5.41275 28.612C5.41053 28.6259 5.4082 28.6397 5.40576 28.6536C5.15386 30.0858 3.78862 31.0427 2.35641 30.7908C0.924202 30.5389 -0.0326297 29.1736 0.219269 27.7414C0.471168 26.3092 1.83641 25.3524 3.26862 25.6043C3.89539 25.7145 4.43111 26.038 4.81433 26.4869L5.93444 20.1184C6.11764 19.0768 7.11054 18.3809 8.15215 18.5641L11.6884 19.1861C12.73 19.3693 13.4259 20.3622 13.2427 21.4038L12.1137 27.8229C12.1104 27.8443 12.1069 27.8657 12.1032 27.8872C11.8513 29.3194 10.486 30.2762 9.05383 30.0243C7.62162 29.7724 6.66478 28.4072 6.91668 26.975C7.16858 25.5428 8.53382 24.5859 9.96603 24.8378C10.5926 24.948 11.1282 25.2713 11.5114 25.72L12.2997 21.2379C12.3913 20.7171 12.0433 20.2207 11.5225 20.1291L7.98629 19.5071Z"
      fill="url(#paint2_radial_10465_20480)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.1486 4.59758C22.1486 3.18529 23.2934 2.04041 24.7057 2.04041H29.5004C30.9127 2.04041 32.0576 3.18529 32.0576 4.59758V6.7552V13.3567C32.0577 13.3673 32.0578 13.3778 32.0578 13.3884C32.0578 15.3303 30.4835 16.9045 28.5416 16.9045C26.5997 16.9045 25.0255 15.3303 25.0255 13.3884C25.0255 11.4465 26.5997 9.87225 28.5416 9.87225C29.3916 9.87225 30.1711 10.1738 30.779 10.6758V7.3945H23.4271L23.4271 15.9008L23.4274 15.9452C23.4274 17.8871 21.8532 19.4613 19.9113 19.4613C17.9694 19.4613 16.3952 17.8871 16.3952 15.9452C16.3952 14.0033 17.9694 12.4291 19.9113 12.4291C20.7612 12.4291 21.5407 12.7306 22.1486 13.2325V6.7552V4.59758ZM23.4271 6.11591H30.779V4.59758C30.779 3.89144 30.2066 3.31899 29.5004 3.31899H24.7057C23.9996 3.31899 23.4271 3.89144 23.4271 4.59758V6.11591Z"
      fill="url(#paint3_radial_10465_20480)"
    />
    <defs>
      <radialGradient
        id="paint0_radial_10465_20480"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.3631 10.2496) rotate(44.073) scale(3.68567)"
      >
        <stop stopColor="#A799FF" />
        <stop offset={1} stopColor="#6851FF" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_10465_20480"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(21.9903 27.3669) rotate(84.6769) scale(3.44599)"
      >
        <stop stopColor="#A799FF" />
        <stop offset={1} stopColor="#6851FF" />
      </radialGradient>
      <radialGradient
        id="paint2_radial_10465_20480"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(2.30377 23.4901) rotate(43.4607) scale(9.32798 5.16314)"
      >
        <stop stopColor="#A799FF" />
        <stop offset={1} stopColor="#6851FF" />
      </radialGradient>
      <radialGradient
        id="paint3_radial_10465_20480"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(17.6738 8.11375) rotate(51.1159) scale(12.7298 12.7298)"
      >
        <stop stopColor="#BAAFFF" />
        <stop offset={1} stopColor="#6851FF" />
      </radialGradient>
    </defs>
  </svg>
);
export default IconMusic;
