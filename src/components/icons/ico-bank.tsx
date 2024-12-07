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
const IcoBank = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M13.5895 3.43414C12.6188 2.8219 11.3811 2.8219 10.4105 3.43414L3.57325 7.74681H20.4267L13.5895 3.43414ZM20.6901 9.72177H21.1007C21.9101 9.72177 22.6007 9.2659 22.876 8.57519C23.1637 7.85358 22.9339 7.01043 22.2003 6.52849L22.1849 6.51857L14.6491 1.7653C13.0314 0.744902 10.9686 0.744899 9.35083 1.7653L1.81508 6.51857L1.79968 6.52849C1.06602 7.01043 0.836204 7.85358 1.12389 8.57519C1.39925 9.2659 2.08983 9.72177 2.89926 9.72177H3.30979V16.1881H2.76067C2.29371 16.1881 1.84586 16.373 1.51567 16.7021C1.18547 17.0312 0.999969 17.4775 0.999969 17.943V20.2451C0.999969 20.7106 1.18547 21.1569 1.51567 21.486C1.84587 21.8151 2.29371 22 2.76067 22H21.2393C21.7062 22 22.1541 21.8151 22.4843 21.486C22.8145 21.1569 23 20.7106 23 20.2451V17.943C23 17.4775 22.8145 17.0312 22.4843 16.7021C22.1541 16.373 21.7062 16.1881 21.2393 16.1881H20.6901V9.72177ZM18.7086 9.72177H15.5577V16.1881H18.7086V9.72177ZM3.91249 18.1631C3.39832 18.1631 2.9815 18.5799 2.9815 19.094C2.9815 19.6082 3.39832 20.025 3.91249 20.025H20.0875C20.6016 20.025 21.0184 19.6082 21.0184 19.094C21.0184 18.5799 20.6016 18.1631 20.0875 18.1631H3.91249ZM5.29132 16.1881H8.44222V9.72177H5.29132V16.1881ZM10.4237 9.72177V16.1881H13.5762V9.72177H10.4237Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoBank;
