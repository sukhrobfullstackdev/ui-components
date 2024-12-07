import type { SVGProps } from 'react';
import { token } from '@styled/tokens';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {
  /**
   * Configures icon color on monochrome svgs.
   */
  color?: string;
}
const LogoPolkadotMono = ({ color: customColor, title, titleId, ...props }: Props) => {
  // Utilize dynamic primary text color by default
  const color = customColor || token('colors.text.primary');
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color={color}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M12.0682 3C8.3085 3.0151 5.26437 6.05923 5.24927 9.8189C5.24927 10.5718 5.3708 11.3197 5.60884 12.0339C5.78647 12.52 6.3136 12.7818 6.80837 12.6315C7.2866 12.4481 7.54045 11.9253 7.38799 11.4362C7.18592 10.8796 7.09602 10.2892 7.12263 9.69808C7.20461 6.98261 9.47207 4.84747 12.1875 4.92946C14.903 5.01144 17.0382 7.27889 16.9562 9.99437C16.8792 12.5365 14.8771 14.6012 12.3378 14.7558C12.3378 14.7558 11.3807 14.8141 10.9046 14.8723C10.7291 14.8975 10.5551 14.932 10.3832 14.9759C10.3588 15.001 10.3192 15.001 10.294 14.9766L10.2933 14.9759C10.2761 14.9536 10.2761 14.9219 10.2933 14.8996L10.4415 14.0913L11.3404 10.0483C11.4483 9.54347 11.1268 9.04654 10.622 8.93867C10.1171 8.8308 9.62021 9.15226 9.51234 9.65709C9.51234 9.65709 7.37433 19.5532 7.37433 19.6431C7.25208 20.1242 7.54261 20.6132 8.02372 20.7355C8.02875 20.7369 8.0345 20.7383 8.03954 20.7391H8.08916C8.56954 20.8635 9.06 20.5744 9.18369 20.094C9.18585 20.0861 9.18801 20.0782 9.18944 20.0695C9.18801 20.0544 9.18801 20.0393 9.18944 20.025C9.21605 19.9085 9.48573 18.5917 9.48573 18.5917C9.68997 17.5979 10.4911 16.8363 11.4936 16.6824C11.7 16.6507 12.5673 16.5925 12.5673 16.5925C16.3125 16.2193 19.046 12.8803 18.672 9.135C18.3312 5.71907 15.5013 3.08917 12.0682 3Z"
        fill="currentColor"
      />
      <path
        d="M12.4787 18.7227C11.8639 18.5947 11.2626 18.9895 11.1346 19.6037C11.1332 19.6094 11.1325 19.6152 11.131 19.6209C10.998 20.2315 11.3849 20.8348 11.9962 20.9679C11.9969 20.9679 11.9976 20.9679 11.9983 20.9686H12.03C12.6283 21.1131 13.2302 20.7449 13.374 20.1473C13.3755 20.143 13.3762 20.138 13.3776 20.1337V20.0711C13.4834 19.4541 13.0893 18.8622 12.4787 18.7227Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoPolkadotMono;
