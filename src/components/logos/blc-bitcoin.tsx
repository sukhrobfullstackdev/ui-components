import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const BlcBitcoin = ({ title, titleId, ...props }: Props) => (
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
      d="M30.5472 19.6286C28.5438 27.6643 20.405 32.5547 12.3684 30.5508C4.33505 28.5474 -0.555354 20.4081 1.44899 12.3729C3.45147 4.33632 11.5903 -0.554547 19.6245 1.44886C27.6607 3.45227 32.5506 11.5925 30.5472 19.6286Z"
      fill="#F7931A"
    />
    <path
      d="M22.6163 13.8635C22.9149 11.8675 21.3952 10.7946 19.3173 10.0788L19.9914 7.3751L18.3456 6.96495L17.6894 9.59742C17.2567 9.4896 16.8123 9.38789 16.3708 9.28711L17.0317 6.6373L15.3869 6.22715L14.7124 8.92992C14.3543 8.84836 14.0027 8.76775 13.6614 8.6829L13.6633 8.67446L11.3937 8.10774L10.9559 9.86553C10.9559 9.86553 12.1769 10.1454 12.1512 10.1627C12.8177 10.3291 12.9382 10.7702 12.918 11.1199L12.1502 14.2C12.1962 14.2117 12.2557 14.2286 12.3213 14.2549C12.2665 14.2413 12.2079 14.2263 12.1474 14.2117L11.0712 18.5265C10.9896 18.729 10.7829 19.0328 10.317 18.9174C10.3334 18.9413 9.12074 18.6189 9.12074 18.6189L8.30371 20.5027L10.4454 21.0366C10.8438 21.1365 11.2343 21.241 11.6187 21.3394L10.9376 24.0741L12.5815 24.4842L13.256 21.7787C13.705 21.9005 14.141 22.013 14.5675 22.119L13.8954 24.8119L15.5411 25.222L16.2222 22.4926C19.0286 23.0236 21.1388 22.8094 22.0271 20.2712C22.7429 18.2275 21.9915 17.0486 20.5149 16.2798C21.5902 16.0319 22.4002 15.3245 22.6163 13.8635ZM18.8561 19.1363C18.3475 21.1801 14.9064 20.0752 13.7908 19.7982L14.6946 16.1753C15.8102 16.4537 19.3876 17.005 18.8561 19.1363ZM19.3651 13.8339C18.9011 15.693 16.037 14.7484 15.108 14.5169L15.9274 11.231C16.8564 11.4626 19.8484 11.8947 19.3651 13.8339Z"
      fill="white"
    />
  </svg>
);
export default BlcBitcoin;
