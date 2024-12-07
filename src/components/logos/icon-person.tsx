import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconPerson = ({ title, titleId, ...props }: Props) => (
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
    <circle cx={16} cy={8.72727} r={7.27273} fill="url(#paint0_radial_11175_21190)" />
    <path
      d="M6.65869 30.5455H25.3416C28.2157 30.5455 30.5456 28.2155 30.5456 25.3415C30.5456 23.2135 29.2501 21.3 27.2743 20.5097L21.7296 18.2918C18.0516 16.8206 13.9487 16.8206 10.2707 18.2918L4.72597 20.5097C2.75023 21.3 1.45469 23.2135 1.45469 25.3415C1.45469 28.2155 3.7846 30.5455 6.65869 30.5455Z"
      fill="url(#paint1_linear_11175_21190)"
    />
    <line
      x1={21.2363}
      y1={24.6545}
      x2={23.8545}
      y2={24.6545}
      stroke="url(#paint2_linear_11175_21190)"
      strokeWidth={3.2}
      strokeLinecap="round"
    />
    <defs>
      <radialGradient
        id="paint0_radial_11175_21190"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(10.1818 -0.727273) rotate(77.7352) scale(17.118)"
      >
        <stop stopColor="#EDEBFF" />
        <stop offset={1} stopColor="#6851FF" />
      </radialGradient>
      <linearGradient
        id="paint1_linear_11175_21190"
        x1={16.0001}
        y1={12.0867}
        x2={16.0001}
        y2={27.592}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BDB2FF" />
        <stop offset={1} stopColor="#6851FF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_11175_21190"
        x1={22.5454}
        y1={23.2545}
        x2={22.5454}
        y2={26.2545}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EDEBFF" />
        <stop offset={1} stopColor="#EDEBFF" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default IconPerson;
