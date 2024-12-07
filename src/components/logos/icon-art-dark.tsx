import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconArtDark = ({ title, titleId, ...props }: Props) => (
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
    <rect
      x={0.745114}
      y={9.55318}
      width={29.9291}
      height={22.4468}
      rx={4.40922}
      fill="url(#paint0_linear_10465_20590)"
    />
    <path
      d="M7.95182 20.5525L4.64508 24.7851L3.73997 25.9437C3.17457 26.6674 3.69023 27.7246 4.6086 27.7246H26.811C27.7294 27.7246 28.2451 26.6674 27.6797 25.9437L20.7538 17.0786C20.3125 16.5137 19.4579 16.5137 19.0166 17.0786L13.8645 23.6733C13.4231 24.2382 12.5685 24.2382 12.1272 23.6733L9.68909 20.5525C9.24776 19.9876 8.39314 19.9876 7.95182 20.5525Z"
      fill="url(#paint1_linear_10465_20590)"
    />
    <path
      d="M3.41698 29.3276C3.41698 28.7372 3.89554 28.2587 4.48587 28.2587H21.5882C22.1785 28.2587 22.6571 28.7372 22.6571 29.3276C22.6571 29.9179 22.1785 30.3964 21.5882 30.3964H4.48587C3.89554 30.3964 3.41698 29.9179 3.41698 29.3276Z"
      fill="url(#paint2_linear_10465_20590)"
    />
    <path
      d="M27.7315 1.80694C28.0019 0.919305 28.9273 0.405793 29.8236 0.645957C30.7199 0.88612 31.2645 1.79351 31.0549 2.69745L25.8943 24.9531L21.0728 23.6612L27.7315 1.80694Z"
      fill="url(#paint3_linear_10465_20590)"
    />
    <rect
      x={21.0691}
      y={23.6599}
      width={4.9928}
      height={1.16647}
      transform="rotate(15 21.0691 23.6599)"
      fill="#3F3A5C"
    />
    <path
      d="M20.7597 24.7859L25.5807 26.0627C25.9684 26.4926 26.0358 26.9707 26.0358 27.7821C26.0358 29.3245 24.3586 30.0438 22.7705 30.0438H19.8923H14.4975C13.9049 30.0438 13.7175 29.2108 14.2488 28.9482C16.7241 27.7252 20.3649 25.7867 20.7597 24.7859Z"
      fill="url(#paint4_linear_10465_20590)"
    />
    <circle cx={6.62366} cy={15.4322} r={3.20669} fill="url(#paint5_linear_10465_20590)" />
    <defs>
      <linearGradient
        id="paint0_linear_10465_20590"
        x1={15.7097}
        y1={9.55318}
        x2={15.7097}
        y2={32}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3D395A" />
        <stop offset={1} stopColor="#4F4979" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_10465_20590"
        x1={15.7098}
        y1={15.9667}
        x2={15.7098}
        y2={27.7246}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A799FF" />
        <stop offset={1} stopColor="#423D67" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_10465_20590"
        x1={3.41698}
        y1={29.528}
        x2={22.3473}
        y2={29.4604}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A799FF" stopOpacity={0} />
        <stop offset={1} stopColor="#A799FF" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_10465_20590"
        x1={28.6581}
        y1={14.0309}
        x2={24.4285}
        y2={12.8687}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6256B0" />
        <stop offset={0.520833} stopColor="#3F3674" />
        <stop offset={1} stopColor="#A799FF" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_10465_20590"
        x1={21.2233}
        y1={25.4643}
        x2={21.1574}
        y2={30.0282}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A799FF" />
        <stop offset={0.541667} stopColor="#7566D3" />
        <stop offset={1} stopColor="#46389A" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_10465_20590"
        x1={6.62365}
        y1={12.2255}
        x2={6.62365}
        y2={18.6388}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A799FF" />
        <stop offset={1} stopColor="#A799FF" stopOpacity={0.3} />
      </linearGradient>
    </defs>
  </svg>
);
export default IconArtDark;
