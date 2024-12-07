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
const IcoGlobe = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5229 6.47715 22 12 22C17.5229 22 22 17.5229 22 12C22 6.47715 17.5229 2 12 2Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 12C0 11.4477 0.447715 11 1 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H1C0.447715 13 0 12.5523 0 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.2 6.5C2.2 5.94772 2.64771 5.5 3.2 5.5H20.8C21.3523 5.5 21.8 5.94772 21.8 6.5C21.8 7.05228 21.3523 7.5 20.8 7.5H3.2C2.64771 7.5 2.2 7.05228 2.2 6.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.2 17.5C2.2 16.9477 2.64771 16.5 3.2 16.5H20.8C21.3523 16.5 21.8 16.9477 21.8 17.5C21.8 18.0523 21.3523 18.5 20.8 18.5H3.2C2.64771 18.5 2.2 18.0523 2.2 17.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.50348 1.16265C10.1745 0.481475 11.0187 0 11.9999 0C12.9811 0 13.8253 0.481475 14.4963 1.16265C15.1639 1.8403 15.7191 2.76958 16.1639 3.83721C17.0554 5.97684 17.5832 8.8634 17.5832 12C17.5832 15.1366 17.0554 18.0232 16.1639 20.1628C15.7191 21.2304 15.1639 22.1597 14.4963 22.8374C13.8253 23.5185 12.9811 24 11.9999 24C11.0187 24 10.1745 23.5185 9.50348 22.8374C8.83591 22.1597 8.28077 21.2304 7.83593 20.1628C6.94441 18.0232 6.41658 15.1366 6.41658 12C6.41658 8.8634 6.94441 5.97684 7.83593 3.83721C8.28077 2.76958 8.83591 1.8403 9.50348 1.16265ZM9.68208 4.60644C8.91475 6.44802 8.41658 9.06146 8.41658 12C8.41658 14.9385 8.91475 17.552 9.68208 19.3936C10.0667 20.3165 10.4991 20.9982 10.9283 21.4338C11.3539 21.8659 11.7154 22 11.9999 22C12.2844 22 12.6459 21.8659 13.0716 21.4338C13.5007 20.9982 13.9332 20.3165 14.3177 19.3936C15.0851 17.552 15.5832 14.9385 15.5832 12C15.5832 9.06146 15.0851 6.44802 14.3177 4.60644C13.9332 3.68346 13.5007 3.00183 13.0716 2.56622C12.6459 2.13413 12.2844 2 11.9999 2C11.7154 2 11.3539 2.13413 10.9283 2.56622C10.4991 3.00183 10.0667 3.68346 9.68208 4.60644Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoGlobe;
