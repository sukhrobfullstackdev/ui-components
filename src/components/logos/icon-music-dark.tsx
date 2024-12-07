import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const IconMusicDark = ({ title, titleId, ...props }: Props) => (
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
      d="M6.42378 0.961771C6.30157 0.706751 5.99577 0.599085 5.74075 0.721291C5.48573 0.843497 5.37807 1.1493 5.50027 1.40432L9.15294 9.0267C8.54008 8.87451 7.87263 8.92648 7.25869 9.22068C5.85608 9.89281 5.26392 11.5747 5.93605 12.9773C6.60818 14.3799 8.29009 14.9721 9.6927 14.3C11.0953 13.6278 11.6875 11.9459 11.0153 10.5433C11.0128 10.5381 11.0103 10.5329 11.0078 10.5277L6.42378 0.961771Z"
      fill="url(#paint0_radial_10465_20628)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.9231 20.3112C26.9916 20.0558 26.84 19.7933 26.5846 19.7248C26.3292 19.6564 26.0667 19.808 25.9983 20.0633L23.953 27.6964C23.6106 27.2156 23.1053 26.8465 22.4906 26.6818C21.0859 26.3054 19.6421 27.139 19.2657 28.5436C18.8894 29.9483 19.723 31.3921 21.1276 31.7685C22.5322 32.1448 23.976 31.3113 24.3524 29.9066C24.3562 29.8926 24.3598 29.8786 24.3633 29.8646L26.9231 20.3112Z"
      fill="url(#paint1_radial_10465_20628)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.80727 19.5073C7.28647 19.4157 6.79002 19.7637 6.69842 20.2845L5.23373 28.6122C5.23152 28.6261 5.22919 28.6399 5.22675 28.6538C4.97485 30.086 3.60961 31.0429 2.1774 30.791C0.745186 30.5391 -0.211646 29.1738 0.0402532 27.7416C0.292152 26.3094 1.65739 25.3526 3.0896 25.6045C3.71637 25.7147 4.2521 26.0382 4.63532 26.4871L5.75542 20.1186C5.93862 19.077 6.93152 18.3811 7.97313 18.5643L11.5094 19.1863C12.551 19.3695 13.2469 20.3624 13.0637 21.404L11.9347 27.8231C11.9314 27.8445 11.9279 27.8659 11.9242 27.8874C11.6723 29.3196 10.307 30.2764 8.87481 30.0245C7.4426 29.7726 6.48577 28.4074 6.73767 26.9752C6.98957 25.543 8.35481 24.5861 9.78702 24.838C10.4136 24.9482 10.9492 25.2715 11.3323 25.7202L12.1207 21.2381C12.2123 20.7173 11.8643 20.2209 11.3435 20.1293L7.80727 19.5073Z"
      fill="url(#paint2_radial_10465_20628)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.9695 4.59777C21.9695 3.18548 23.1144 2.04059 24.5267 2.04059H29.3214C30.7337 2.04059 31.8786 3.18548 31.8786 4.59777V6.75539V13.3569C31.8787 13.3675 31.8787 13.378 31.8787 13.3886C31.8787 15.3305 30.3045 16.9047 28.3626 16.9047C26.4207 16.9047 24.8465 15.3305 24.8465 13.3886C24.8465 11.4467 26.4207 9.87243 28.3626 9.87243C29.2126 9.87243 29.9921 10.174 30.6 10.676V7.39468H23.2481L23.2481 15.901L23.2484 15.9454C23.2484 17.8873 21.6742 19.4615 19.7323 19.4615C17.7904 19.4615 16.2162 17.8873 16.2162 15.9454C16.2162 14.0035 17.7904 12.4293 19.7323 12.4293C20.5822 12.4293 21.3616 12.7308 21.9695 13.2327V6.75539V4.59777ZM23.2481 6.11609H30.6V4.59777C30.6 3.89162 30.0276 3.31918 29.3214 3.31918H24.5267C23.8206 3.31918 23.2481 3.89162 23.2481 4.59777V6.11609Z"
      fill="url(#paint3_radial_10465_20628)"
    />
    <defs>
      <radialGradient
        id="paint0_radial_10465_20628"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.18408 10.2498) rotate(44.073) scale(3.68567)"
      >
        <stop stopColor="#A799FF" />
        <stop offset={1} stopColor="#413B67" />
      </radialGradient>
      <radialGradient
        id="paint1_radial_10465_20628"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(21.8113 27.3671) rotate(84.6769) scale(3.44599)"
      >
        <stop stopColor="#A799FF" />
        <stop offset={1} stopColor="#413B67" />
      </radialGradient>
      <radialGradient
        id="paint2_radial_10465_20628"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(2.12476 23.4903) rotate(43.4607) scale(9.32798 5.16314)"
      >
        <stop stopColor="#A799FF" />
        <stop offset={1} stopColor="#4D4675" />
      </radialGradient>
      <radialGradient
        id="paint3_radial_10465_20628"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(17.4947 8.11393) rotate(51.1159) scale(12.7298 12.7298)"
      >
        <stop stopColor="#A799FF" />
        <stop offset={1} stopColor="#524B81" />
      </radialGradient>
    </defs>
  </svg>
);
export default IconMusicDark;
