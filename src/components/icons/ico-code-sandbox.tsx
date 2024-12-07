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
const IcoCodeSandbox = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M14.624 1.5867C13.8462 1.17688 12.893 0.99857 11.9943 1.00001C11.0971 1.00144 10.1444 1.18222 9.36907 1.60013L3.81779 4.5597C2.9968 4.99704 2.30421 5.72802 1.81934 6.51892C1.3355 7.30813 0.999756 8.25274 0.999756 9.1735V14.8253C0.999756 15.746 1.3355 16.6906 1.81934 17.4798C2.30416 18.2706 2.99625 19.0013 3.81711 19.4387L9.36998 22.4091L9.37233 22.4104C10.1472 22.8222 11.1021 23 11.9998 23C12.8975 23 13.8523 22.8222 14.6272 22.4104L20.1817 19.4391C21.0026 19.0017 21.6953 18.2706 22.1802 17.4798C22.664 16.6906 22.9998 15.746 22.9998 14.8253V9.1735C22.9998 8.25274 22.664 7.30813 22.1802 6.51892C21.6954 5.72818 21.0034 4.99754 20.1826 4.56016L14.6295 1.58964L14.624 1.5867ZM10.3168 3.36133C10.7267 3.14 11.3329 3.00107 11.9975 3.00001C12.6601 2.99895 13.271 3.13518 13.6892 3.35479L13.6917 3.35611L14.9805 4.04554L12 5.83384L9.02606 4.04947L10.3121 3.36383L10.3168 3.36133ZM6.96771 5.14685L4.7583 6.32476C4.61019 6.40364 4.46004 6.50699 4.31335 6.63076L11.9999 11.3281L19.6863 6.63084C19.5395 6.50704 19.3897 6.40386 19.2416 6.32497L17.0356 5.14488L12.5145 7.85752C12.1978 8.04753 11.8022 8.04753 11.4855 7.85752L6.96771 5.14685ZM20.8232 8.27993L12.9994 13.0611L12.9948 20.892C13.2597 20.8311 13.4956 20.7468 13.6878 20.6447L15.9998 19.408V15.5352C15.9998 14.8665 16.334 14.2421 16.8904 13.8711L20.9451 11.168C20.9631 11.156 20.9813 11.1447 20.9998 11.134V9.1735C20.9998 8.90818 20.9401 8.60081 20.8232 8.27993ZM20.9998 13.5352L17.9998 15.5352V18.3381L19.24 17.6747L19.2416 17.6738C19.6789 17.4409 20.1306 16.9964 20.4751 16.4345C20.8207 15.8708 20.9998 15.2849 20.9998 14.8253V13.5352ZM10.9948 20.8897L10.9994 13.0606L3.17636 8.27982C3.05943 8.60074 2.99976 8.90815 2.99976 9.1735V11.1337L6.97128 13.3401C7.60621 13.6929 8 14.3621 8 15.0885V19.4081L10.311 20.6443C10.5008 20.7451 10.7339 20.829 10.9948 20.8897ZM6 18.3382V15.0885L2.99976 13.4217V14.8253C2.99976 15.2849 3.17883 15.8708 3.52442 16.4345C3.86891 16.9964 4.32061 17.4409 4.75791 17.6738L4.75953 17.6747L6 18.3382Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoCodeSandbox;
