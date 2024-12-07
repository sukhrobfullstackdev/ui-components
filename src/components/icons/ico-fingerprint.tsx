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
const IcoFingerprint = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.80741 3.49653C5.40845 4.65503 2.78356 7.75422 3.01417 12.1583C3.04305 12.7098 2.61936 13.1803 2.06783 13.2092C1.5163 13.2381 1.04579 12.8144 1.01691 12.2629C0.73492 6.87755 4.00288 3.02113 8.16218 1.60347C12.3111 0.189342 17.3761 1.18629 20.7328 5.40518C21.0767 5.83736 21.0051 6.46647 20.5729 6.81033C20.1407 7.15419 19.5116 7.08259 19.1678 6.65041C16.3754 3.14086 12.2167 2.33451 8.80741 3.49653ZM13.6566 6.71947C12.528 6.37903 11.1476 6.38709 9.52741 6.9689C9.00763 7.15555 8.43494 6.88549 8.24829 6.3657C8.06164 5.84592 8.3317 5.27323 8.85149 5.08658C10.8182 4.38034 12.6405 4.32399 14.2342 4.80469C15.8251 5.28457 17.1188 6.27891 18.0644 7.55884C19.941 10.0989 20.4794 13.7924 19.3623 17.1624C19.1885 17.6866 18.6226 17.9707 18.0984 17.7969C17.5742 17.6231 17.2901 17.0573 17.4639 16.533C18.3964 13.72 17.91 10.7155 16.4558 8.74729C15.7361 7.77308 14.7879 7.06074 13.6566 6.71947ZM11.7513 9.604C10.7924 9.604 10.0557 10.1983 9.62592 11.4948C9.4219 12.1102 9.25954 13.2443 9.10368 14.6126C9.06169 14.9812 9.02045 15.3637 8.97895 15.7484C8.87319 16.7292 8.7658 17.7249 8.64037 18.5447C8.55684 19.0906 8.04656 19.4655 7.50063 19.3819C6.9547 19.2984 6.57985 18.7881 6.66338 18.2422C6.78167 17.469 6.88127 16.5455 6.98492 15.5842C7.02758 15.1886 7.07092 14.7867 7.11653 14.3863C7.26615 13.0727 7.44541 11.7165 7.72752 10.8655C8.32256 9.07059 9.63552 7.604 11.7513 7.604C14.3584 7.604 16.3382 9.60258 16.3382 12.2106C16.3382 13.8168 16.0404 15.4518 15.6852 17.402C15.5604 18.0873 15.4285 18.8117 15.2999 19.5874C15.2096 20.1323 14.6947 20.5008 14.1498 20.4104C13.605 20.3201 13.2365 19.8052 13.3268 19.2604C13.4734 18.3762 13.6162 17.5914 13.7461 16.8773C14.0863 15.0073 14.3382 13.6226 14.3382 12.2106C14.3382 10.6968 13.2435 9.604 11.7513 9.604ZM12.7497 12.2725C12.7839 11.7213 12.3649 11.2467 11.8136 11.2124C11.2624 11.1781 10.7878 11.5972 10.7535 12.1484C10.6697 13.4968 10.468 15.5973 10.1385 17.5014C9.97349 18.4551 9.78043 19.3354 9.56201 20.0383C9.32792 20.7918 9.11325 21.1737 8.99287 21.2947C8.60341 21.6863 8.60514 22.3195 8.99673 22.709C9.38832 23.0984 10.0215 23.0967 10.4109 22.7051C10.9055 22.2078 11.2331 21.4005 11.4719 20.6318C11.7264 19.8127 11.9369 18.8381 12.1092 17.8425C12.4544 15.848 12.6627 13.672 12.7497 12.2725ZM6.66751 7.77054C7.12781 8.07574 7.25354 8.69629 6.94835 9.15659C6.56346 9.73709 6.20361 10.9637 5.94732 12.4455C5.69954 13.878 5.57764 15.3664 5.57764 16.3325C5.57764 16.8848 5.12992 17.3325 4.57764 17.3325C4.02535 17.3325 3.57764 16.8848 3.57764 16.3325C3.57764 15.2377 3.71195 13.6346 3.97658 12.1046C4.23272 10.6237 4.6415 9.01659 5.28146 8.05139C5.58665 7.59109 6.20721 7.46535 6.66751 7.77054ZM22.4492 9.18535C22.2754 8.66112 21.7096 8.37704 21.1853 8.55083C20.6611 8.72462 20.377 9.29047 20.5508 9.8147C20.7752 10.4916 20.8901 11.2183 20.947 11.7915C20.9752 12.0745 20.9884 12.3121 20.9946 12.4769C20.9977 12.5591 20.999 12.6227 20.9996 12.6642L21 12.7191C20.9962 13.2711 21.4405 13.7218 21.9926 13.7259C22.5448 13.73 22.9958 13.2853 22.9999 12.733C23.0001 12.7011 22.9998 12.6692 22.9994 12.6372C22.9986 12.5808 22.9969 12.5011 22.9932 12.4016C22.9857 12.203 22.9701 11.924 22.9372 11.5937C22.8723 10.9404 22.7372 10.0541 22.4492 9.18535Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoFingerprint;
