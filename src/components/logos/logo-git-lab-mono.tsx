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
const LogoGitLabMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M22.6346 9.38694L22.6037 9.3079L19.6092 1.4929C19.5483 1.33973 19.4404 1.2098 19.3011 1.12174C19.1616 1.03518 18.999 0.993493 18.8351 1.0023C18.6712 1.01111 18.514 1.06999 18.3846 1.171C18.2567 1.27491 18.1639 1.41571 18.1188 1.57424L16.0969 7.76025H7.90963L5.88772 1.57424C5.84387 1.41485 5.75087 1.27334 5.62196 1.16986C5.4926 1.06885 5.33536 1.00997 5.17148 1.00116C5.00759 0.992347 4.84495 1.03404 4.70551 1.1206C4.56647 1.20901 4.45869 1.33883 4.39735 1.49176L1.39714 9.30332L1.36735 9.38236C0.936283 10.5087 0.883074 11.7446 1.21575 12.9038C1.54843 14.063 2.24895 15.0826 3.2117 15.8089L3.22201 15.817L3.2495 15.8364L7.81111 19.2525L10.0679 20.9605L11.4425 21.9984C11.6033 22.1205 11.7997 22.1866 12.0016 22.1866C12.2035 22.1866 12.3998 22.1205 12.5606 21.9984L13.9353 20.9605L16.192 19.2525L20.7811 15.8158L20.7926 15.8066C21.7532 15.0802 22.4521 14.0616 22.7842 12.904C23.1164 11.7464 23.0639 10.5122 22.6346 9.38694Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default LogoGitLabMono;
