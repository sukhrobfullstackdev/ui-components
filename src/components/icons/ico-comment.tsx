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
const IcoComment = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M9.24965 1.99992C5.18141 1.99992 1.99992 5.05949 1.99992 8.69967C1.99992 10.8603 3.1115 12.8011 4.87508 14.0415C5.02085 14.144 5.13657 14.2836 5.21027 14.4459L6.6813 17.6844L6.68214 17.6862C6.69302 17.709 6.70482 17.7205 6.71517 17.7279C6.72781 17.7369 6.74533 17.7445 6.7662 17.7473C6.78711 17.7501 6.80516 17.7474 6.81816 17.7426C6.82863 17.7388 6.84083 17.7321 6.85515 17.7152L6.85577 17.7145L7.4497 17.0017L7.45717 16.9926L8.48013 15.7607C8.56698 15.6561 8.67305 15.5716 8.79104 15.5108C8.93118 15.4385 9.08814 15.3994 9.24965 15.3994C10.521 15.3994 11.7057 15.1006 12.7338 14.5787C12.8109 14.5396 12.8871 14.4992 12.9625 14.4575C15.0963 13.2782 16.4992 11.117 16.4992 8.69977C16.4992 7.7066 16.2633 6.77174 15.8368 5.92811C15.8316 5.91783 15.8266 5.9075 15.8218 5.89711C14.7054 3.62549 12.1986 1.99992 9.24965 1.99992ZM4.86625 18.5242C5.48631 19.8643 7.24584 20.1591 8.26341 19.1362C9.82325 20.599 11.9426 21.522 14.2707 21.6338L15.6057 23.2394L15.6071 23.2412C16.6098 24.4547 18.4939 24.1507 19.1326 22.7701L19.1327 22.7701L19.1355 22.7638L20.5004 19.7592C22.6139 18.1755 23.9989 15.7248 23.9989 12.9456C23.9989 8.97563 21.1783 5.68068 17.4085 4.61864C15.859 1.85094 12.7619 0 9.24965 0C4.21023 0 0 3.82617 0 8.69967C0 11.4789 1.38502 13.9295 3.49853 15.5132L4.86334 18.5178L4.86332 18.5179L4.86625 18.5242ZM14.7492 19.6453C12.6918 19.6453 10.8464 18.8552 9.55155 17.6011L9.7286 17.3879C11.0855 17.3222 12.3729 16.9795 13.5226 16.4157C13.6503 16.353 13.7764 16.2877 13.9006 16.2197C16.6341 14.7232 18.4993 11.9435 18.4993 8.69967C18.4993 8.16467 18.4474 7.64184 18.3481 7.13487C20.5488 8.29948 21.999 10.4918 21.999 12.9456C21.999 15.1063 20.8874 17.0471 19.1238 18.2875C18.978 18.39 18.8623 18.5296 18.7886 18.6918L17.3176 21.9303L17.3167 21.9321C17.3053 21.9561 17.2924 21.9691 17.2806 21.9776C17.2667 21.9876 17.2487 21.9951 17.2289 21.9979C17.2092 22.0006 17.1935 21.9979 17.1832 21.9941C17.1755 21.9912 17.1639 21.9855 17.1487 21.9671L17.1461 21.964L15.5181 20.006C15.3282 19.7775 15.0464 19.6453 14.7492 19.6453ZM6.49975 7.69972C5.94749 7.69972 5.49979 8.14742 5.49979 8.69968C5.49979 9.25194 5.94749 9.69964 6.49975 9.69964H11.9995C12.5518 9.69964 12.9995 9.25194 12.9995 8.69968C12.9995 8.14742 12.5518 7.69972 11.9995 7.69972H6.49975Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoComment;
