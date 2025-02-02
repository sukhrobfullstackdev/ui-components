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
const LogoBitBucketMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M22.6567 9H16.063L14.964 15.484H10.3849L5 21.8946C5 21.8946 5.25641 22.1144 5.62274 22.1144H19.9826C20.3123 22.1144 20.6054 21.858 20.6786 21.5283L22.6567 9Z"
        fill="url(#paint0_linear_10091_39065)"
      />
      <path
        d="M1.70621 2C1.26661 2 0.936962 2.40296 1.01022 2.80592L3.97746 20.9757C4.01409 21.1955 4.124 21.4153 4.30716 21.5618C4.30716 21.5618 4.56358 21.7816 4.9299 21.7816L10.4981 15.1145H9.72879L8.51989 8.63053H15.4435H22.0373L22.9898 2.80592C23.0631 2.36633 22.7334 2 22.2937 2H1.70621Z"
        fill="currentColor"
      />
      <defs>
        <linearGradient
          id="paint0_linear_10091_39065"
          x1={23.5265}
          y1={11.8913}
          x2={13.1864}
          y2={18.8903}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.0718327} stopColor="currentColor" stopOpacity={0.4} />
          <stop offset={1} stopColor="currentColor" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default LogoBitBucketMono;
