import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconEmailGlobe = ({ title, titleId, ...props }: Props) => (
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
    <ellipse cx={16.0008} cy={16} rx={15.0003} ry={15} fill="url(#paint0_radial_11179_269)" />
    <mask
      id="mask0_11179_269"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={1}
      y={1}
      width={31}
      height={30}
    >
      <ellipse cx={16.0008} cy={16} rx={15.0003} ry={15} fill="url(#paint1_radial_11179_269)" />
    </mask>
    <g mask="url(#mask0_11179_269)">
      <path
        d="M20.512 9.15815C20.312 7.35815 22.7442 5.11426 25.2621 4.15815C31.0636 1.95517 35.5436 23.5785 31.7622 18.6581C31.036 17.7132 30.0122 17.5581 30.0122 16.1581C30.0122 14.4081 25.2621 17.9081 24.0121 16.1581C22.762 14.4081 25.2621 13.1581 25.2621 11.6581C25.2621 10.1581 20.762 11.4081 20.512 9.15815Z"
        fill="url(#paint2_linear_11179_269)"
      />
      <path
        d="M8.96521 5.37783C8.499 3.62778 10.5694 1.04629 12.9165 -0.274629C18.3246 -3.31813 20.1292 4.03985 16.6683 4.5618C15.4898 4.73953 18.9207 7.76167 15.9542 8.20909C14.2237 8.47009 11.408 13.1928 9.911 11.6488C8.41396 10.1047 11.2199 8.67026 10.9962 7.18703C10.7725 5.70381 9.54797 7.56539 8.96521 5.37783Z"
        fill="url(#paint3_linear_11179_269)"
      />
      <path
        d="M-0.533911 19.4056C-0.9973 18.2305 0.621608 15.4809 2.90346 14.6597C5.54842 13.7079 13.4033 14.9098 12.1541 18.6597C10.9049 22.4097 8.65433 18.1597 8.01467 23.2423C7.77739 25.1276 4.33599 24.4167 3.15416 23.4702C1.97232 22.5237 0.653691 23.4702 0.653691 23.4702C0.653691 23.4702 0.0453248 20.8745 -0.533911 19.4056Z"
        fill="url(#paint4_linear_11179_269)"
      />
      <path
        d="M24.6658 23.2661C29.9159 25.6577 22.1596 34.588 20.4571 36.675C16.5344 41.4835 1.84268 24.9971 7.57771 27.3676C8.67909 27.8229 9.64329 27.4452 10.3433 28.6577C11.2183 30.1732 13.582 24.7671 15.5396 25.6577C17.4971 26.5482 15.957 28.8808 16.7071 30.1798C17.4571 31.4788 22.6056 22.3276 24.6658 23.2661Z"
        fill="url(#paint5_linear_11179_269)"
      />
      <g filter="url(#filter0_d_11179_269)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.70231 17.5213C7.68906 8.70445 18.3323 6.22616 27.1142 8.75765C27.5002 8.86891 27.7229 9.272 27.6116 9.65798C27.5003 10.044 27.0972 10.2667 26.7113 10.1554C18.3278 7.73879 8.6054 10.2086 5.02778 18.1206C4.86227 18.4866 4.43139 18.6492 4.06537 18.4837C3.69935 18.3182 3.53681 17.8873 3.70231 17.5213Z"
          fill="url(#paint6_linear_11179_269)"
        />
      </g>
      <g filter="url(#filter1_d_11179_269)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.665 3.55296C13.9119 3.86982 13.8552 4.32684 13.5383 4.57373C12.4625 5.41198 11.6359 6.79697 11.1059 8.59504C10.5778 10.3864 10.3614 12.5329 10.4632 14.8129C10.6673 19.3834 12.1433 24.364 14.7684 27.9347C15.0063 28.2583 14.9368 28.7136 14.6132 28.9515C14.2895 29.1895 13.8343 29.12 13.5964 28.7963C10.7664 24.9469 9.22405 19.6716 9.00996 14.8778C8.90268 12.4756 9.12717 10.1628 9.71054 8.18374C10.2919 6.21139 11.2472 4.5148 12.6442 3.42626C12.9611 3.17937 13.4181 3.23609 13.665 3.55296Z"
          fill="url(#paint7_linear_11179_269)"
        />
      </g>
    </g>
    <g filter="url(#filter2_b_11179_269)">
      <ellipse cx={25.3327} cy={24.3334} rx={6.66681} ry={6.66667} fill="url(#paint8_linear_11179_269)" />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.8 22.3334C21.8 21.8731 22.1731 21.5 22.6334 21.5H27.9666C28.4269 21.5 28.8 21.8731 28.8 22.3334V26.3333C28.8 26.7936 28.4269 27.1667 27.9666 27.1667H22.6334C22.1731 27.1667 21.8 26.7936 21.8 26.3333V22.3334ZM22.6109 22.2959C22.4981 22.2162 22.3421 22.2431 22.2625 22.3559C22.1829 22.4687 22.2098 22.6247 22.3226 22.7043L24.7714 24.4329C25.0883 24.6566 25.5117 24.6566 25.8286 24.4329L28.2773 22.7043C28.3901 22.6247 28.417 22.4687 28.3374 22.3559C28.2578 22.2431 28.1018 22.2162 27.989 22.2959L25.5402 24.0244C25.3962 24.1261 25.2037 24.1261 25.0597 24.0244L22.6109 22.2959Z"
      fill="#B6B4BA"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.8 22.3334C21.8 21.8731 22.1731 21.5 22.6334 21.5H27.9666C28.4269 21.5 28.8 21.8731 28.8 22.3334V26.3333C28.8 26.7936 28.4269 27.1667 27.9666 27.1667H22.6334C22.1731 27.1667 21.8 26.7936 21.8 26.3333V22.3334ZM22.6109 22.2959C22.4981 22.2162 22.3421 22.2431 22.2625 22.3559C22.1829 22.4687 22.2098 22.6247 22.3226 22.7043L24.7714 24.4329C25.0883 24.6566 25.5117 24.6566 25.8286 24.4329L28.2773 22.7043C28.3901 22.6247 28.417 22.4687 28.3374 22.3559C28.2578 22.2431 28.1018 22.2162 27.989 22.2959L25.5402 24.0244C25.3962 24.1261 25.2037 24.1261 25.0597 24.0244L22.6109 22.2959Z"
      fill="url(#paint9_linear_11179_269)"
    />
    <defs>
      <filter
        id="filter0_d_11179_269"
        x={0.728182}
        y={7.81868}
        width={29.8214}
        height={16.5485}
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
        <feOffset dy={2.90935} />
        <feGaussianBlur stdDeviation={1.45467} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.207843 0 0 0 0 0.0705882 0 0 0 0 0.698039 0 0 0 0.6 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11179_269" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11179_269" result="shape" />
      </filter>
      <filter
        id="filter1_d_11179_269"
        x={6.07471}
        y={3.27263}
        width={11.7444}
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
        <feOffset dy={2.90935} />
        <feGaussianBlur stdDeviation={1.45467} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.207843 0 0 0 0 0.0705882 0 0 0 0 0.698039 0 0 0 0.6 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11179_269" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11179_269" result="shape" />
      </filter>
      <filter
        id="filter2_b_11179_269"
        x={13.6658}
        y={12.6667}
        width={23.3337}
        height={23.3334}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={2.50003} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_11179_269" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_11179_269" result="shape" />
      </filter>
      <radialGradient
        id="paint0_radial_11179_269"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.42917 9.03571) rotate(55.1537) scale(25.7841 25.7843)"
      >
        <stop stopColor="#DEDAFF" />
        <stop offset={1} stopColor="#6851FF" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_11179_269"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.96489 9.03571) rotate(69.9044) scale(23.3881 6.12179)"
      >
        <stop stopColor="#BDB2FF" />
        <stop offset={1} stopColor="#6851FF" />
      </radialGradient>
      <linearGradient
        id="paint2_linear_11179_269"
        x1={26.8295}
        y1={4}
        x2={26.8295}
        y2={19.3888}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6E58FF" />
        <stop offset={1} stopColor="#7C68FF" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_11179_269"
        x1={14.4428}
        y1={-0.66476}
        x2={16.7377}
        y2={14.552}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6550F1" />
        <stop offset={1} stopColor="#8F7EFF" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_11179_269"
        x1={2.00053}
        y1={19.9996}
        x2={12.5007}
        y2={16.9994}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#725DFF" />
        <stop offset={1} stopColor="#816EFF" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_11179_269"
        x1={13.1655}
        y1={23.2662}
        x2={14.6655}
        y2={31.7662}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5B45F1" />
        <stop offset={1} stopColor="#644EFB" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_11179_269"
        x1={15.6389}
        y1={7.25068}
        x2={15.6389}
        y2={17.8209}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EDEBFF" />
        <stop offset={1} stopColor="#A799FF" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_11179_269"
        x1={11.8546}
        y1={4}
        x2={11.8546}
        y2={28.3655}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EDEBFF" />
        <stop offset={1} stopColor="#A799FF" />
      </linearGradient>
      <linearGradient
        id="paint8_linear_11179_269"
        x1={19.9369}
        y1={19.254}
        x2={31.3655}
        y2={31.3175}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="#C6BDFF" stopOpacity={0.65} />
      </linearGradient>
      <linearGradient
        id="paint9_linear_11179_269"
        x1={20.6649}
        y1={22.2083}
        x2={26.1953}
        y2={26.6397}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3512B2" />
        <stop offset={1} stopColor="#6851FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default IconEmailGlobe;
