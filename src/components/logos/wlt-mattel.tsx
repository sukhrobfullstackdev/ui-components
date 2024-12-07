import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const WltMattel = ({ title, titleId, ...props }: Props) => (
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
    <path d="M1.63398 19.6505L0.657593 20.6272L1.98345 21.0641L1.63398 19.6505Z" fill="#E3000B" />
    <path d="M2.11646 21.5538L1.36472 22.6245L2.44574 22.6978L2.11646 21.5538Z" fill="#E3000B" />
    <path d="M1.13713 17.8348L0.143433 18.7063L1.50452 19.2133L1.13713 17.8348Z" fill="#E3000B" />
    <path
      d="M3.20106 22.7574L0.9728 17.163L0 16.6557L1.48006 15.7184L0.052192 14.6201L1.62675 13.8437L0.297344 12.6469L2.03264 12.1015L0.846976 10.7506L2.60282 10.3619L1.648 8.87539L3.40058 8.69706L2.61389 7.06707L4.45709 7.11568L3.92502 5.50291L5.73046 5.6535L5.35299 3.99878L7.04557 4.50243L6.91645 2.72893L8.59933 3.44579L8.72189 1.73885L10.2436 2.69021L10.5197 0.93408L11.9153 2.03238L12.4477 0.39184L13.6862 1.65446L14.3822 0.108192L15.4877 1.46221L16.366 0L17.2928 1.48006L18.3285 0.153888L19.0353 1.73501L20.3154 0.503648L20.809 2.21821L22.2046 1.16867L22.5091 2.90339L23.9852 2.06726L24.0446 3.8657L25.6681 3.16621L25.5207 4.99885L27.2775 4.5441L26.8156 6.2377L28.5229 6.07312L27.921 7.66822L29.7437 7.73866L28.8831 9.25363L30.608 9.38586L29.5371 10.7718L31.245 11.2751L30.0828 12.538L31.6642 13.2871L30.3664 14.3924L31.8569 15.3755L30.4713 16.1838L31.8533 17.2963L30.3107 18.0204L31.5908 19.3501L29.9364 19.8783L30.9927 21.2743L29.3206 21.6551L30.2966 23.2997L28.4423 23.2961L29.1947 24.902L27.4383 24.8426L27.9804 26.5179L26.2878 26.1476L26.6653 27.9002L24.9228 27.3962L25.0493 29.0787L23.4324 28.4143L23.3975 30.2369L21.9041 29.3062L21.5784 30.961L20.186 29.9292L19.6328 31.5697L18.3356 30.342L17.7019 31.8987L16.5299 30.5516L15.6553 32L14.7072 30.4958L13.637 31.8285L12.9338 30.174L11.7022 31.4611L11.174 29.7301L9.74682 30.8628L9.5121 29.0755L8.064 29.9818L8.05357 28.2044L6.38112 28.8799L6.59437 27.1234L4.80989 27.5677L5.28646 25.9058L3.52998 26.1228L4.11414 24.4781L2.32314 24.3908L3.20106 22.7574Z"
      fill="#E3000B"
    />
    <path
      d="M0.808563 16.6388L2.31624 16.2329L5.32133 20.6724L5.34191 20.6649L5.67116 15.3266L7.16127 14.928L8.84053 21.1797L7.82277 21.4559L6.52789 16.6248L6.507 16.6317L6.10146 21.9174L5.22354 22.1522L2.2286 17.7857H2.21128L3.50514 22.6141L2.48418 22.8867L0.808563 16.6388Z"
      fill="white"
    />
    <path
      d="M9.86543 14.1997L11.0097 13.8994L15.047 19.5108L13.8994 19.8183L12.8781 18.3217L10.4327 18.9756L10.299 20.791L9.19394 21.085L9.86543 14.1997ZM10.5025 18.0657L12.3737 17.5621L10.7297 15.124H10.7225L10.7052 15.1307L10.5025 18.0657Z"
      fill="white"
    />
    <path
      d="M11.8007 13.6823L16.761 12.3457L17.0166 13.2905L15.0678 13.8157L16.4953 19.1188L15.4211 19.4092L13.994 14.1054L12.0559 14.6271L11.8007 13.6823Z"
      fill="white"
    />
    <path
      d="M15.8691 12.5877L20.8335 11.2583L21.0851 12.2027L19.1367 12.724L20.5642 18.0273L19.4897 18.3145L18.066 13.0144L16.1279 13.5353L15.8691 12.5877Z"
      fill="white"
    />
    <path
      d="M21.2318 11.1528L25.4937 9.99817L25.7486 10.9432L22.5541 11.8068L22.9955 13.4447L25.9409 12.6502L26.1789 13.5425L23.2368 14.3363L23.7264 16.1625L26.9764 15.2847L27.2355 16.2327L22.9111 17.3975L21.2318 11.1528Z"
      fill="white"
    />
    <path
      d="M26.0426 9.85509L27.1133 9.56812L28.5401 14.8716L31.6541 14.0354L31.9129 14.9801L27.7183 16.1064L26.0426 9.85509Z"
      fill="white"
    />
  </svg>
);
export default WltMattel;
