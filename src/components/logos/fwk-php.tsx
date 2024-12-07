import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const FwkPhp = ({ title, titleId, ...props }: Props) => (
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
    <g clipPath="url(#clip0_8941_280)">
      <path
        d="M0.337463 12.4725C0.337463 15.8607 5.55907 18.6074 12 18.6074C18.4409 18.6074 23.6625 15.8607 23.6625 12.4725C23.6625 9.08434 18.4409 6.33756 12 6.33756C5.55907 6.33756 0.337463 9.08434 0.337463 12.4725Z"
        fill="url(#paint0_radial_8941_280)"
      />
      <path
        d="M12 18.152C18.1893 18.152 23.2069 15.6092 23.2069 12.4725C23.2069 9.33591 18.1893 6.79308 12 6.79308C5.81064 6.79308 0.79303 9.33591 0.79303 12.4725C0.79303 15.6092 5.81064 18.152 12 18.152Z"
        fill="#777BB3"
      />
      <path
        d="M6.67367 13.1766C7.1826 13.1766 7.56253 13.0827 7.80293 12.8977C8.04075 12.7146 8.20501 12.3974 8.2911 11.9548C8.37137 11.5412 8.34079 11.2524 8.20024 11.0965C8.05653 10.9373 7.74581 10.8566 7.27675 10.8566H6.46343L6.01255 13.1766H6.67367ZM4.01354 16.0344C3.97578 16.0344 3.93993 16.0176 3.91593 15.9884C3.89188 15.9592 3.88214 15.9208 3.88935 15.8837L5.08429 9.73566C5.09585 9.67622 5.14794 9.63328 5.20851 9.63328H7.7839C8.59329 9.63328 9.19574 9.85305 9.57441 10.2866C9.9551 10.7223 10.0727 11.3315 9.9238 12.0971C9.86323 12.409 9.75904 12.6986 9.61414 12.958C9.46908 13.2176 9.27736 13.4578 9.04422 13.6721C8.76514 13.9333 8.44928 14.1227 8.10626 14.2341C7.76868 14.3441 7.33513 14.3999 6.81768 14.3999H5.77485L5.47705 15.932C5.46549 15.9915 5.41343 16.0344 5.35286 16.0344H4.01354Z"
        fill="black"
      />
      <path
        d="M6.56778 10.9832H7.27678C7.84291 10.9832 8.03957 11.1074 8.10638 11.1814C8.21724 11.3043 8.23816 11.5635 8.16691 11.9309C8.08685 12.3421 7.93846 12.6337 7.72577 12.7975C7.50803 12.9651 7.15403 13.0501 6.6737 13.0501H6.16608L6.56778 10.9832ZM7.78394 9.50678H5.2085C5.08736 9.50678 4.98321 9.59266 4.96009 9.71157L3.76515 15.8597C3.75073 15.9339 3.77022 16.0106 3.81826 16.0689C3.86635 16.1273 3.93797 16.161 4.01356 16.161H5.35285C5.47404 16.161 5.57819 16.0751 5.6013 15.9562L5.8792 14.5265H6.81771C7.34845 14.5265 7.79525 14.4686 8.14557 14.3545C8.50585 14.2374 8.83732 14.039 9.13069 13.7646C9.37333 13.5414 9.57319 13.2908 9.72462 13.0198C9.8761 12.7487 9.98493 12.4464 10.0481 12.1212C10.2048 11.3154 10.0775 10.6701 9.66974 10.2034C9.26597 9.74114 8.63147 9.50678 7.78394 9.50678ZM5.85904 13.3032H6.6737C7.21368 13.3032 7.61589 13.2015 7.88016 12.998C8.14447 12.7945 8.32274 12.4549 8.41537 11.979C8.50399 11.5221 8.46362 11.1997 8.29426 11.0118C8.12469 10.824 7.78559 10.7301 7.27678 10.7301H6.35915L5.85904 13.3032ZM7.78394 9.75987C8.5587 9.75987 9.1239 9.96319 9.47916 10.3699C9.83438 10.7765 9.94135 11.3442 9.79962 12.073C9.74128 12.3732 9.64262 12.6477 9.50371 12.8963C9.36464 13.1452 9.18304 13.3727 8.95863 13.579C8.6912 13.8293 8.39411 14.0076 8.0672 14.1138C7.74028 14.2203 7.3239 14.2734 6.81771 14.2734H5.67053L5.35285 15.9079H4.01356L5.2085 9.75987H7.78394Z"
        fill="white"
      />
      <path
        d="M12.9942 14.3998C12.9564 14.3998 12.9206 14.3829 12.8966 14.3537C12.8725 14.3246 12.8627 14.2862 12.8699 14.2491L13.3985 11.5288C13.4488 11.2701 13.4364 11.0844 13.3636 11.006C13.3191 10.958 13.1853 10.8776 12.7897 10.8776H11.832L11.1675 14.2974C11.1559 14.3568 11.1038 14.3998 11.0432 14.3998H9.71451C9.67671 14.3998 9.6409 14.3829 9.61685 14.3537C9.59281 14.3246 9.58307 14.2862 9.59028 14.2491L10.7852 8.101C10.7968 8.04156 10.8489 7.99862 10.9094 7.99862H12.2382C12.276 7.99862 12.3118 8.0155 12.3358 8.04464C12.3599 8.07383 12.3696 8.11218 12.3624 8.1493L12.074 9.63319H13.1042C13.889 9.63319 14.4212 9.77154 14.7311 10.0562C15.0471 10.3466 15.1457 10.8109 15.0242 11.4364L14.4682 14.2974C14.4567 14.3568 14.4046 14.3998 14.344 14.3998H12.9942Z"
        fill="black"
      />
      <path
        d="M12.2391 7.87225H10.9103C10.7891 7.87225 10.685 7.95814 10.6619 8.07705L9.46694 14.2251C9.45251 14.2993 9.472 14.3761 9.52008 14.4344C9.56817 14.4927 9.6398 14.5265 9.71539 14.5265H11.0441C11.1653 14.5265 11.2695 14.4406 11.2926 14.3217L11.9372 11.0043H12.7906C13.1855 11.0043 13.2684 11.0886 13.2717 11.0923C13.2957 11.118 13.3272 11.2374 13.2752 11.5049L12.7466 14.2251C12.7322 14.2993 12.7517 14.3761 12.7997 14.4344C12.8478 14.4927 12.9195 14.5265 12.9951 14.5265H14.3449C14.466 14.5265 14.5702 14.4406 14.5933 14.3217L15.1493 11.4607C15.2797 10.7891 15.1681 10.2853 14.8177 9.96322C14.4832 9.6561 13.9231 9.50681 13.1051 9.50681H12.2284L12.4875 8.17365C12.5019 8.09945 12.4825 8.02268 12.4344 7.96438C12.3863 7.90604 12.3147 7.87225 12.2391 7.87225ZM12.2391 8.12535L11.9214 9.75991H13.1051C13.8499 9.75991 14.3637 9.88991 14.6464 10.1496C14.9291 10.4094 15.0138 10.8304 14.9008 11.4124L14.3449 14.2734H12.9951L13.5236 11.5532C13.5838 11.2437 13.5617 11.0326 13.4572 10.9201C13.3528 10.8075 13.1305 10.7512 12.7906 10.7512H11.7286L11.0441 14.2734H9.71539L10.9103 8.12535H12.2391Z"
        fill="white"
      />
      <path
        d="M17.1269 13.1766C17.6358 13.1766 18.0158 13.0827 18.2562 12.8977C18.494 12.7146 18.6582 12.3974 18.7444 11.9548C18.8247 11.5412 18.7941 11.2524 18.6535 11.0965C18.5098 10.9373 18.1991 10.8566 17.73 10.8566H16.9167L16.4658 13.1766H17.1269ZM14.4668 16.0344C14.4291 16.0344 14.3932 16.0176 14.3692 15.9884C14.3452 15.9592 14.3354 15.9208 14.3426 15.8837L15.5375 9.73566C15.5491 9.67622 15.6012 9.63328 15.6618 9.63328H18.2371C19.0466 9.63328 19.649 9.85305 20.0277 10.2866C20.4084 10.7223 20.5259 11.3315 20.3771 12.0971C20.3164 12.409 20.2123 12.6986 20.0674 12.958C19.9223 13.2176 19.7306 13.4578 19.4975 13.6721C19.2184 13.9333 18.9025 14.1227 18.5595 14.2341C18.2219 14.3441 17.7884 14.3999 17.2709 14.3999H16.2281L15.9304 15.932C15.9188 15.9915 15.8667 16.0344 15.8061 16.0344H14.4668Z"
        fill="black"
      />
      <path
        d="M17.0213 10.9832H17.7303C18.2964 10.9832 18.493 11.1074 18.5599 11.1814C18.6708 11.3043 18.6917 11.5635 18.6204 11.9308C18.5403 12.3421 18.3919 12.6337 18.1792 12.7975C17.9615 12.9651 17.6075 13.0501 17.1272 13.0501H16.6196L17.0213 10.9832ZM18.2374 9.50678H15.662C15.5409 9.50678 15.4367 9.59266 15.4136 9.71157L14.2186 15.8597C14.2042 15.9339 14.2237 16.0106 14.2718 16.0689C14.3198 16.1273 14.3915 16.161 14.4671 16.161H15.8064C15.9275 16.161 16.0317 16.0751 16.0548 15.9562L16.3327 14.5265H17.2712C17.8019 14.5265 18.2487 14.4686 18.599 14.3545C18.9593 14.2374 19.2909 14.0389 19.5843 13.7645C19.8269 13.5413 20.0267 13.2908 20.1781 13.0198C20.3296 12.7487 20.4384 12.4464 20.5016 12.1212C20.6583 11.3153 20.531 10.67 20.1232 10.2033C19.7195 9.74114 19.085 9.50678 18.2374 9.50678ZM16.3125 13.3032H17.1272C17.6672 13.3032 18.0694 13.2015 18.3336 12.998C18.598 12.7945 18.7762 12.4549 18.8688 11.979C18.9575 11.5221 18.9171 11.1997 18.7477 11.0118C18.5782 10.824 18.2391 10.7301 17.7303 10.7301H16.8126L16.3125 13.3032ZM18.2374 9.75987C19.0122 9.75987 19.5774 9.96319 19.9327 10.3699C20.2879 10.7765 20.3948 11.3442 20.2531 12.073C20.1948 12.3732 20.0961 12.6477 19.9572 12.8963C19.8181 13.1452 19.6365 13.3727 19.4121 13.579C19.1447 13.8293 18.8476 14.0076 18.5207 14.1138C18.1938 14.2203 17.7774 14.2734 17.2712 14.2734H16.124L15.8064 15.9079H14.4671L15.662 9.75987H18.2374Z"
        fill="white"
      />
    </g>
    <defs>
      <radialGradient
        id="paint0_radial_8941_280"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(7.3397 8.49441) scale(15.3146 15.3146)"
      >
        <stop stopColor="#AEB2D5" />
        <stop offset={0.3} stopColor="#AEB2D5" />
        <stop offset={0.75} stopColor="#484C89" />
        <stop offset={1} stopColor="#484C89" />
      </radialGradient>
      <clipPath id="clip0_8941_280">
        <rect width={24} height={12.9448} fill="white" transform="translate(0 6)" />
      </clipPath>
    </defs>
  </svg>
);
export default FwkPhp;
