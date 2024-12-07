import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconMagicGlobe = ({ title, titleId, ...props }: Props) => (
  <svg
    width={38}
    height={39}
    viewBox="0 0 38 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M31.0001 16.0001C31.0001 24.2843 24.2843 31.0001 16.0001 31.0001C7.7158 31.0001 1.00008 24.2843 1.00008 16.0001C1.00008 7.7158 7.7158 1.00008 16.0001 1.00008C24.2843 1.00008 31.0001 7.7158 31.0001 16.0001Z"
      fill="url(#paint0_radial_11075_34571)"
    />
    <mask
      id="mask0_11075_34571"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={1}
      width={30}
      height={30}
    >
      <path
        d="M31.0001 16.0001C31.0001 24.2843 24.2843 31.0001 16.0001 31.0001C7.7158 31.0001 1.00008 24.2843 1.00008 16.0001C1.00008 7.7158 7.7158 1.00008 16.0001 1.00008C24.2843 1.00008 31.0001 7.7158 31.0001 16.0001Z"
        fill="url(#paint1_radial_11075_34571)"
      />
    </mask>
    <g mask="url(#mask0_11075_34571)">
      <path
        d="M20.5116 9.15822C20.3116 7.35822 22.7438 5.11434 25.2616 4.15822C31.063 1.95525 35.5429 23.5786 31.7616 18.6582C31.0354 17.7133 30.0116 17.5582 30.0116 16.1582C30.0116 14.4082 25.2616 17.9082 24.0116 16.1582C22.7616 14.4082 25.2616 13.1582 25.2616 11.6582C25.2616 10.1582 20.7616 11.4082 20.5116 9.15822Z"
        fill="url(#paint2_linear_11075_34571)"
      />
      <path
        d="M8.96351 5.3792C8.49731 3.62916 10.5676 1.04766 12.9147 -0.273256C18.3227 -3.31675 20.1273 4.04122 16.6664 4.56318C15.488 4.7409 18.9188 7.76304 15.9523 8.21046C14.2219 8.47146 11.4063 13.1942 9.90928 11.6501C8.41227 10.1061 11.2182 8.67163 10.9945 7.18841C10.7708 5.70518 9.54625 7.56676 8.96351 5.3792Z"
        fill="url(#paint3_linear_11075_34571)"
      />
      <path
        d="M-0.534435 19.4068C-0.997814 18.2317 0.621059 15.482 2.90287 14.6609C5.54777 13.709 13.4025 14.911 12.1533 18.6609C10.9041 22.4108 8.65361 18.1609 8.01396 23.2435C7.77669 25.1288 4.33536 24.4179 3.15355 23.4713C1.97175 22.5248 0.653141 23.4714 0.653141 23.4714C0.653141 23.4714 0.0447882 20.8757 -0.534435 19.4068Z"
        fill="url(#paint4_linear_11075_34571)"
      />
      <path
        d="M24.6643 23.2675C29.9142 25.6591 22.1581 34.5894 20.4557 36.6764C16.533 41.4849 1.84158 24.9985 7.5765 27.369C8.67786 27.8242 9.64204 27.4466 10.342 28.6591C11.217 30.1746 13.5807 24.7685 15.5382 25.6591C17.4957 26.5496 15.9557 28.8821 16.7057 30.1812C17.4557 31.4802 22.6041 22.329 24.6643 23.2675Z"
        fill="url(#paint5_linear_11075_34571)"
      />
      <g filter="url(#filter0_d_11075_34571)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.70063 17.5174C7.6873 8.70064 18.3303 6.22235 27.112 8.75383C27.498 8.8651 27.7207 9.26819 27.6094 9.65416C27.4981 10.0401 27.0951 10.2628 26.7091 10.1516C18.3259 7.73497 8.60363 10.2048 5.02608 18.1168C4.86058 18.4828 4.42971 18.6453 4.06369 18.4798C3.69768 18.3143 3.53513 17.8835 3.70063 17.5174Z"
          fill="url(#paint6_linear_11075_34571)"
        />
      </g>
      <g filter="url(#filter1_d_11075_34571)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.6646 3.55304C13.9114 3.8699 13.8547 4.32691 13.5379 4.57381C12.4621 5.41205 11.6355 6.79704 11.1055 8.59512C10.5774 10.3865 10.361 12.5329 10.4628 14.813C10.6669 19.3834 12.1429 24.3641 14.7679 27.9348C15.0058 28.2584 14.9364 28.7137 14.6127 28.9516C14.2891 29.1895 13.8338 29.12 13.5959 28.7964C10.766 24.947 9.22368 19.6717 9.00959 14.8779C8.90231 12.4757 9.1268 10.1629 9.71016 8.18383C10.2915 6.21148 11.2468 4.51489 12.6438 3.42636C12.9606 3.17946 13.4177 3.23618 13.6646 3.55304Z"
          fill="url(#paint7_linear_11075_34571)"
        />
      </g>
    </g>
    <g filter="url(#filter2_d_11075_34571)">
      <g filter="url(#filter3_b_11075_34571)">
        <path
          d="M32 24.0039C32 27.8699 28.866 31.0039 25 31.0039C21.134 31.0039 18 27.8699 18 24.0039C18 20.1379 21.134 17.0039 25 17.0039C28.866 17.0039 32 20.1379 32 24.0039Z"
          fill="url(#paint8_linear_11075_34571)"
        />
      </g>
      <g filter="url(#filter4_d_11075_34571)">
        <path
          d="M25 19C25.4565 19.53 25.9601 20.0223 26.5046 20.471C26.1418 21.5865 25.9465 22.7716 25.9465 24C25.9465 25.2284 26.1418 26.4135 26.5046 27.529C25.9601 27.9777 25.4565 28.47 25 29C24.5435 28.47 24.0399 27.9777 23.4954 27.529C23.8582 26.4135 24.0535 25.2284 24.0535 24C24.0535 22.7716 23.8582 21.5865 23.4954 20.471C24.0399 20.0223 24.5435 19.53 25 19Z"
          fill="#6851FF"
        />
        <path
          d="M22.4546 26.7578C21.8782 26.3748 21.2665 26.0364 20.625 25.7478C20.8029 25.1949 20.8987 24.6081 20.8987 24C20.8987 23.3919 20.8029 22.8051 20.625 22.2522C21.2665 21.9636 21.8782 21.6252 22.4546 21.2422C22.675 22.1275 22.7916 23.0509 22.7916 24C22.7916 24.9491 22.675 25.8725 22.4546 26.7578Z"
          fill="#6851FF"
        />
        <path
          d="M27.2084 24C27.2084 24.9491 27.325 25.8725 27.5454 26.7578C28.1218 26.3748 28.7335 26.0364 29.375 25.7478C29.1971 25.1949 29.1013 24.6081 29.1013 24C29.1013 23.3919 29.1971 22.8051 29.375 22.2522C28.7335 21.9636 28.1218 21.6252 27.5454 21.2422C27.325 22.1275 27.2084 23.0509 27.2084 24Z"
          fill="#6851FF"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_11075_34571"
        x={0.726535}
        y={7.81487}
        width={29.8208}
        height={16.5484}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2.90931} />
        <feGaussianBlur stdDeviation={1.45466} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.207843 0 0 0 0 0.0705882 0 0 0 0 0.698039 0 0 0 0.6 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11075_34571" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11075_34571" result="shape" />
      </filter>
      <filter
        id="filter1_d_11075_34571"
        x={6.07437}
        y={3.27272}
        width={11.7442}
        height={31.6389}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={2.90931} />
        <feGaussianBlur stdDeviation={1.45466} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.207843 0 0 0 0 0.0705882 0 0 0 0 0.698039 0 0 0 0.6 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11075_34571" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11075_34571" result="shape" />
      </filter>
      <filter
        id="filter2_d_11075_34571"
        x={14}
        y={14.0039}
        width={24}
        height={24}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={1} dy={2} />
        <feGaussianBlur stdDeviation={2.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11075_34571" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11075_34571" result="shape" />
      </filter>
      <filter
        id="filter3_b_11075_34571"
        x={13}
        y={12.0039}
        width={24}
        height={24}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={2.5} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11075_34571" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11075_34571" result="shape" />
      </filter>
      <filter
        id="filter4_d_11075_34571"
        x={18.1333}
        y={18.3778}
        width={14.9778}
        height={14.9778}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.622222} dy={1.86667} />
        <feGaussianBlur stdDeviation={1.24444} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11075_34571" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11075_34571" result="shape" />
      </filter>
      <radialGradient
        id="paint0_radial_11075_34571"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.42865 9.03579) rotate(55.1543) scale(25.7839)"
      >
        <stop stopColor="#DEDAFF" />
        <stop offset={1} stopColor="#6851FF" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_11075_34571"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.96436 9.03579) rotate(69.9048) scale(23.3881 6.12167)"
      >
        <stop stopColor="#BDB2FF" />
        <stop offset={1} stopColor="#6851FF" />
      </radialGradient>
      <linearGradient
        id="paint2_linear_11075_34571"
        x1={26.829}
        y1={4.00008}
        x2={26.829}
        y2={19.3889}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6E58FF" />
        <stop offset={1} stopColor="#7C68FF" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_11075_34571"
        x1={14.441}
        y1={-0.663387}
        x2={16.7359}
        y2={14.5533}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6550F1" />
        <stop offset={1} stopColor="#8F7EFF" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_11075_34571"
        x1={1.99995}
        y1={20.0007}
        x2={12.5}
        y2={17.0007}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#725DFF" />
        <stop offset={1} stopColor="#816EFF" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_11075_34571"
        x1={13.1642}
        y1={23.2675}
        x2={14.6642}
        y2={31.7675}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5B45F1" />
        <stop offset={1} stopColor="#644EFB" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_11075_34571"
        x1={15.637}
        y1={7.24686}
        x2={15.637}
        y2={17.8171}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EDEBFF" />
        <stop offset={1} stopColor="#A799FF" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_11075_34571"
        x1={11.8541}
        y1={4.00008}
        x2={11.8541}
        y2={28.3656}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EDEBFF" />
        <stop offset={1} stopColor="#A799FF" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_11075_34571"
        x1={25}
        y1={17.0039}
        x2={25}
        y2={31.0039}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0.58} />
      </linearGradient>
    </defs>
  </svg>
);
export default IconMagicGlobe;
