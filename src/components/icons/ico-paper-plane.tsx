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
const IcoPaperPlane = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M16.6983 3.36856C18.6892 2.70507 19.8674 3.03265 20.4165 3.58246C20.9667 4.13335 21.2935 5.31535 20.6352 7.30603L20.6349 7.30692L17.449 16.8625L17.4489 16.863C16.9354 18.4058 16.3635 19.4846 15.8074 20.1579C15.2487 20.8344 14.798 21 14.5017 21C14.2053 21 13.7547 20.8344 13.1959 20.1579C12.6419 19.4871 12.0722 18.4139 11.5602 16.8803L10.8755 14.5387L14.7071 10.7071C15.0976 10.3166 15.0976 9.6834 14.7071 9.29288C14.3166 8.90235 13.6834 8.90235 13.2929 9.29288L9.46037 13.1254L7.12061 12.4416C5.58635 11.9296 4.51271 11.3606 3.84169 10.8074C3.16483 10.2493 3 9.80002 3 9.50524C3 9.21015 3.16515 8.75995 3.84249 8.20031C4.51624 7.64364 5.59547 7.07057 7.13862 6.55443L7.13935 6.55419L16.6983 3.36856ZM22.5337 7.93501C23.2939 5.637 23.1646 3.50385 21.8316 2.16915C20.4975 0.833267 18.3652 0.704914 16.066 1.47116L6.50602 4.65711L6.50503 4.65745C4.83378 5.21636 3.50214 5.88718 2.5686 6.65849C1.63855 7.42693 1 8.38888 1 9.50524C1 10.6219 1.63887 11.5833 2.56941 12.3505C3.50327 13.1205 4.83519 13.7891 6.50652 14.3451C6.51817 14.349 6.52989 14.3526 6.54167 14.3561L8.94354 15.058L9.64582 17.4595C9.64927 17.4713 9.65292 17.483 9.6568 17.4946C10.213 19.1659 10.8826 20.4977 11.6538 21.4315C12.4223 22.362 13.3849 23 14.5017 23C15.6184 23 16.581 22.362 17.3495 21.4315C18.1206 20.4978 18.7901 19.1662 19.3464 17.4951L19.3465 17.4946L22.533 7.93725L22.5337 7.93501Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoPaperPlane;
