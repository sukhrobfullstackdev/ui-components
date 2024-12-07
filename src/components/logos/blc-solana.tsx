import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const BlcSolana = ({ title, titleId, ...props }: Props) => (
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
      d="M7.14437 21.2647C7.29836 21.1107 7.5101 21.0209 7.73468 21.0209H28.1002C28.4724 21.0209 28.6584 21.4701 28.3954 21.7331L24.3723 25.7562C24.2183 25.9102 24.0066 26 23.782 26H3.41646C3.04431 26 2.85824 25.5509 3.12131 25.2878L7.14437 21.2647Z"
      fill="url(#paint0_linear_8934_402)"
    />
    <path
      d="M7.14437 6.24392C7.30478 6.08993 7.51652 6.0001 7.73468 6.0001H28.1002C28.4724 6.0001 28.6584 6.44924 28.3954 6.71231L24.3723 10.7354C24.2183 10.8894 24.0066 10.9792 23.782 10.9792H3.41646C3.04431 10.9792 2.85824 10.5301 3.12131 10.267L7.14437 6.24392Z"
      fill="url(#paint1_linear_8934_402)"
    />
    <path
      d="M24.3723 13.7062C24.2183 13.5522 24.0066 13.4623 23.782 13.4623H3.41646C3.04431 13.4623 2.85824 13.9115 3.12131 14.1746L7.14437 18.1976C7.29836 18.3516 7.5101 18.4414 7.73468 18.4414H28.1002C28.4724 18.4414 28.6584 17.9923 28.3954 17.7292L24.3723 13.7062Z"
      fill="url(#paint2_linear_8934_402)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_8934_402"
        x1={26.1547}
        y1={3.59692}
        x2={12.0601}
        y2={30.5937}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset={1} stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_8934_402"
        x1={19.9918}
        y1={0.379268}
        x2={5.89721}
        y2={27.3761}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset={1} stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_8934_402"
        x1={23.0536}
        y1={1.97783}
        x2={8.95906}
        y2={28.9746}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset={1} stopColor="#DC1FFF" />
      </linearGradient>
    </defs>
  </svg>
);
export default BlcSolana;
