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
const IcoWand = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M8.14075 0.520228C7.9653 0.468762 7.77575 0.51717 7.64646 0.646459C7.51717 0.775748 7.46876 0.965299 7.52023 1.14075L7.91895 2.50001L7.52023 3.85928C7.46876 4.03473 7.51717 4.22428 7.64646 4.35357C7.77575 4.48286 7.9653 4.53126 8.14075 4.4798L9.50001 4.08108L10.8593 4.4798C11.0347 4.53126 11.2243 4.48286 11.3536 4.35357C11.4829 4.22428 11.5313 4.03473 11.4798 3.85928L11.0811 2.50001L11.4798 1.14075C11.5313 0.965299 11.4829 0.775748 11.3536 0.646459C11.2243 0.51717 11.0347 0.468762 10.8593 0.520228L9.50001 0.918945L8.14075 0.520228ZM2.14075 7.52023C1.9653 7.46876 1.77575 7.51717 1.64646 7.64646C1.51717 7.77575 1.46876 7.9653 1.52023 8.14075L1.91895 9.50001L1.52023 10.8593C1.46876 11.0347 1.51717 11.2243 1.64646 11.3536C1.77575 11.4829 1.9653 11.5313 2.14075 11.4798L3.50001 11.0811L4.85928 11.4798C5.03473 11.5313 5.22428 11.4829 5.35357 11.3536C5.48286 11.2243 5.53126 11.0347 5.4798 10.8593L5.08108 9.50001L5.4798 8.14075C5.53126 7.9653 5.48286 7.77575 5.35357 7.64646C5.22428 7.51717 5.03473 7.46876 4.85928 7.52023L3.50001 7.91894L2.14075 7.52023ZM19.1407 14.5202C18.9653 14.4688 18.7757 14.5172 18.6465 14.6465C18.5172 14.7757 18.4688 14.9653 18.5202 15.1407L18.9189 16.5L18.5202 17.8593C18.4688 18.0347 18.5172 18.2243 18.6465 18.3536C18.7757 18.4829 18.9653 18.5313 19.1407 18.4798L20.5 18.0811L21.8593 18.4798C22.0347 18.5313 22.2243 18.4829 22.3536 18.3536C22.4829 18.2243 22.5313 18.0347 22.4798 17.8593L22.0811 16.5L22.4798 15.1407C22.5313 14.9653 22.4829 14.7757 22.3536 14.6465C22.2243 14.5172 22.0347 14.4688 21.8593 14.5202L20.5 14.9189L19.1407 14.5202Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.1892 1.81085C20.9604 0.582011 18.968 0.582012 17.7392 1.81085L1.80704 17.743C0.578196 18.9718 0.578198 20.9642 1.80704 22.193C3.03587 23.4219 5.02822 23.4219 6.25705 22.193L22.1892 6.26087C23.418 5.03203 23.418 3.03969 22.1892 1.81085ZM19.1534 3.22506C19.6012 2.77727 20.3272 2.77727 20.775 3.22506C21.2228 3.67285 21.2228 4.39886 20.775 4.84665L18.0179 7.60373L16.3963 5.98214L19.1534 3.22506Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoWand;
