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
const IcoStar = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M10.211 3.3417C10.948 1.86758 13.0516 1.86754 13.7887 3.34162L15.6601 7.08416L20.1615 7.72722C21.7931 7.9603 22.4583 9.95596 21.2929 11.1213L18.1075 14.3068L19.4018 19.4841C19.829 21.1928 17.9985 22.5795 16.4692 21.7056L12 19.1518L7.53078 21.7056C6.00148 22.5795 4.17102 21.1928 4.59821 19.4841L5.89254 14.3068L2.70711 11.1213C1.54173 9.95596 2.20696 7.9603 3.83848 7.72722L8.33988 7.08417L10.211 3.3417ZM13.8713 7.97863L11.9999 4.23608L10.1288 7.97855C9.83526 8.56558 9.27243 8.97125 8.62272 9.06407L4.12132 9.70712L7.30675 12.8926C7.80351 13.3893 8.00321 14.1103 7.83282 14.7918L6.5385 19.9691L11.0077 17.4153C11.6226 17.0639 12.3774 17.0639 12.9923 17.4153L17.4615 19.9691L16.1672 14.7918C15.9968 14.1103 16.1965 13.3893 16.6932 12.8926L19.8787 9.70712L15.3773 9.06406C14.7276 8.97125 14.1648 8.56561 13.8713 7.97863Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoStar;
