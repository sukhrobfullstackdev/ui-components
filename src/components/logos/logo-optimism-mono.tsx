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
const LogoOptimismMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
      <g clipPath="url(#clip0_10462_20903)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.25 23.5C18.4632 23.5 23.5 18.4632 23.5 12.25C23.5 6.0368 18.4632 1 12.25 1C6.0368 1 1 6.0368 1 12.25C1 18.4632 6.0368 23.5 12.25 23.5ZM8.01595 15.3401C8.32375 15.437 8.6572 15.4855 9.0163 15.4855C9.84281 15.4855 10.5012 15.2946 10.9913 14.9126C11.4815 14.5251 11.8235 13.9408 12.0173 13.1599C12.0744 12.9148 12.1285 12.6697 12.1798 12.4246C12.2368 12.1795 12.2852 11.9315 12.3251 11.6807C12.3935 11.2932 12.3822 10.954 12.2909 10.6633C12.2054 10.3726 12.0544 10.1275 11.8378 9.928C11.6269 9.72851 11.3675 9.58028 11.0597 9.4834C10.7577 9.3808 10.427 9.3295 10.0679 9.3295C9.23576 9.3295 8.57453 9.52899 8.08435 9.928C7.59416 10.327 7.255 10.9113 7.0669 11.6807C7.00988 11.9315 6.95291 12.1795 6.8959 12.4246C6.8446 12.6697 6.79613 12.9148 6.75055 13.1599C6.68786 13.5475 6.69925 13.8867 6.78475 14.1774C6.87596 14.4681 7.02699 14.7103 7.2379 14.9041C7.44881 15.0979 7.70815 15.2433 8.01595 15.3401ZM9.9397 13.9807C9.70601 14.1631 9.43525 14.2543 9.12745 14.2543C8.81394 14.2543 8.5888 14.1631 8.452 13.9807C8.3152 13.7983 8.281 13.5076 8.3494 13.1086C8.39499 12.8578 8.44061 12.6212 8.4862 12.3989C8.5375 12.1766 8.59452 11.9458 8.6572 11.7064C8.75409 11.3074 8.91654 11.0167 9.14455 10.8343C9.37823 10.6519 9.649 10.5607 9.9568 10.5607C10.2646 10.5607 10.4897 10.6519 10.6322 10.8343C10.7748 11.0167 10.809 11.3074 10.7348 11.7064C10.6949 11.9458 10.6494 12.1766 10.5981 12.3989C10.5525 12.6212 10.4983 12.8578 10.4356 13.1086C10.3387 13.5076 10.1734 13.7983 9.9397 13.9807ZM12.5382 15.3401C12.5724 15.3801 12.618 15.4 12.675 15.4H13.8378C13.9005 15.4 13.9546 15.3801 14.0002 15.3401C14.0515 15.3002 14.0828 15.2489 14.0943 15.1862L14.4876 13.3138H15.6418C16.3771 13.3138 16.9614 13.1571 17.3946 12.8435C17.8335 12.53 18.1242 12.0456 18.2667 11.39C18.3351 11.0594 18.3322 10.7716 18.2581 10.5265C18.184 10.2757 18.0529 10.0676 17.8648 9.90235C17.6767 9.73707 17.4402 9.61448 17.1552 9.5347C16.8759 9.45492 16.5623 9.415 16.2147 9.415H13.9404C13.8834 9.415 13.8292 9.43493 13.7779 9.47485C13.7266 9.51476 13.6953 9.56606 13.6839 9.62875L12.504 15.1862C12.4925 15.2489 12.504 15.3002 12.5382 15.3401ZM15.6931 12.1339H14.7099L15.0433 10.6034H16.0693C16.2745 10.6034 16.4255 10.6376 16.5225 10.706C16.6251 10.7745 16.6849 10.8657 16.702 10.9796C16.7191 11.0936 16.7134 11.2248 16.6849 11.3729C16.6279 11.6294 16.5054 11.8204 16.3173 11.9458C16.1348 12.0712 15.9268 12.1339 15.6931 12.1339Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_10462_20903">
          <rect width={22.5} height={22.5} fill="currentColor" transform="translate(1 1)" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default LogoOptimismMono;
