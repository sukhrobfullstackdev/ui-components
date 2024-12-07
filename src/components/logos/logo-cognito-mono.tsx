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
const LogoCognitoMono = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M16.9823 5.88894L18.7085 5.44446L18.7213 5.46341L18.7649 15.8859L18.7085 15.9426L18.3528 15.9578L17.0025 15.7476L16.9823 15.6944V5.88894Z"
        fill="currentColor"
        fillOpacity={0.3}
      />
      <path
        d="M6.99937 16.6662L7.00574 16.6667L11.5622 17.9907L11.5738 17.9996L11.5936 18.0154L11.5872 21.9827L11.5738 21.9996L6.99937 19.7773V16.6662Z"
        fill="currentColor"
        fillOpacity={0.3}
      />
      <path
        d="M16.9823 15.6944L11.5813 16.988L8.86938 16.3334L6.99937 16.6662L11.5738 17.9996L18.6338 16.0887L18.7085 15.9426L16.9823 15.6944Z"
        fill="currentColor"
        fillOpacity={0.6}
      />
      <path
        d="M16.1473 7.33365L16.1032 7.28348L11.622 5.9814L11.5729 6.00036L11.5279 5.97738L4.47649 8.01068L4.43798 8.05777L4.49458 8.08878L6.10712 8.32522L6.16412 8.30586L11.5654 7.01242L14.2772 7.66701L16.1473 7.33365Z"
        fill="currentColor"
        fillOpacity={0.2}
      />
      <path
        d="M6.16588 18.1114L4.43975 18.5281L4.43673 18.5181L4.36875 8.13457L4.43975 8.05781L6.16588 8.3059V18.1114Z"
        fill="currentColor"
        fillOpacity={0.7}
      />
      <path
        d="M8.49659 14.083L11.575 14.4441L11.5981 14.4096L11.6106 9.59463L11.575 9.55518L8.49659 9.91633V14.083Z"
        fill="currentColor"
        fillOpacity={0.3}
      />
      <path d="M14.6526 14.083L11.575 14.4441V9.55518L14.6526 9.91633V14.083Z" fill="currentColor" fillOpacity={0.7} />
      <path d="M16.1486 7.33331L11.5742 6.00002V2L16.1486 4.22218V7.33331Z" fill="currentColor" fillOpacity={0.7} />
      <path
        d="M11.5742 2L3 6.13885V17.861L4.43853 18.5277L4.43798 8.05777L11.5729 6.00036L11.5742 2Z"
        fill="currentColor"
        fillOpacity={0.3}
      />
      <path
        d="M18.7085 5.44446V15.9426L11.5738 17.9996V21.9996L20.1476 17.861V6.13885L18.7085 5.44446Z"
        fill="currentColor"
        fillOpacity={0.7}
      />
    </svg>
  );
};
export default LogoCognitoMono;
