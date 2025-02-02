import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconArt = ({ title, titleId, ...props }: Props) => (
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
    <rect x={0.5} y={9.55302} width={29.9292} height={22.4469} rx={4.40922} fill="url(#paint0_linear_10465_20436)" />
    <path
      d="M7.70692 20.5526L4.40017 24.7853L3.49505 25.9438C2.92965 26.6675 3.44531 27.7248 4.36369 27.7248H26.5662C27.4846 27.7248 28.0003 26.6675 27.4349 25.9438L20.509 17.0787C20.0677 16.5138 19.213 16.5138 18.7717 17.0787L13.6196 23.6734C13.1783 24.2383 12.3236 24.2383 11.8823 23.6734L9.4442 20.5526C9.00287 19.9877 8.14825 19.9877 7.70692 20.5526Z"
      fill="url(#paint1_linear_10465_20436)"
    />
    <path
      d="M3.17188 29.3277C3.17188 28.7374 3.65044 28.2588 4.24078 28.2588H21.3432C21.9335 28.2588 22.4121 28.7374 22.4121 29.3277C22.4121 29.918 21.9335 30.3966 21.3432 30.3966H4.24078C3.65044 30.3966 3.17188 29.918 3.17188 29.3277Z"
      fill="url(#paint2_linear_10465_20436)"
    />
    <path
      d="M27.4865 1.80695C27.7569 0.919309 28.6823 0.405795 29.5786 0.64596C30.4749 0.886124 31.0195 1.79352 30.8099 2.69746L25.6493 24.9532L20.8278 23.6613L27.4865 1.80695Z"
      fill="url(#paint3_linear_10465_20436)"
    />
    <rect
      x={20.8241}
      y={23.66}
      width={4.99283}
      height={1.16647}
      transform="rotate(15 20.8241 23.66)"
      fill="url(#paint4_linear_10465_20436)"
    />
    <path
      d="M20.5147 24.786L25.3357 26.0629C25.7234 26.4927 25.7908 26.9709 25.7908 27.7822C25.7908 29.3246 24.1136 30.0439 22.5255 30.0439H19.6473H14.2525C13.6598 30.0439 13.4724 29.2109 14.0038 28.9484C16.479 27.7253 20.1199 25.7868 20.5147 24.786Z"
      fill="url(#paint5_linear_10465_20436)"
    />
    <circle cx={6.37858} cy={15.4323} r={3.2067} fill="url(#paint6_linear_10465_20436)" />
    <defs>
      <linearGradient
        id="paint0_linear_10465_20436"
        x1={15.4646}
        y1={9.55302}
        x2={15.4646}
        y2={32}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EDEBFF" />
        <stop offset={1} stopColor="#A799FF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_10465_20436"
        x1={15.465}
        y1={15.9669}
        x2={15.465}
        y2={27.7248}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3512B2" />
        <stop offset={1} stopColor="#3512B2" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint2_linear_10465_20436"
        x1={3.17188}
        y1={29.5281}
        x2={22.1022}
        y2={29.4605}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6851FF" stopOpacity={0} />
        <stop offset={1} stopColor="#6851FF" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_10465_20436"
        x1={28.4131}
        y1={14.0309}
        x2={24.1835}
        y2={12.8688}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3512B2" />
        <stop offset={0.618581} stopColor="#A799FF" />
        <stop offset={1} stopColor="#6851FF" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_10465_20436"
        x1={23.3205}
        y1={23.66}
        x2={23.3205}
        y2={24.8265}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="#EDEBFF" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_10465_20436"
        x1={20.9783}
        y1={25.4645}
        x2={20.9124}
        y2={30.0284}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#522FD4" />
        <stop offset={0.541667} stopColor="#6851FF" />
        <stop offset={1} stopColor="#522FD4" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_10465_20436"
        x1={6.37858}
        y1={12.2256}
        x2={6.37858}
        y2={18.639}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3512B2" />
        <stop offset={1} stopColor="#3512B2" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default IconArt;
