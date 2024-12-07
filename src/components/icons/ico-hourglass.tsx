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
const IcoHourglass = ({ color: customColor, title, titleId, ...props }: Props) => {
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
        d="M15.5038 12L19.0321 9.49185C20.2667 8.61426 21 7.19327 21 5.67857C21 3.09467 18.9053 1 16.3214 1H7.67856C5.09466 1 3 3.09467 3 5.67856C3 7.19327 3.73331 8.61426 4.96788 9.49185L8.49625 12L4.96788 14.5081C3.73331 15.3857 3 16.8067 3 18.3214C3 20.9053 5.09467 23 7.67857 23H16.3214C18.9053 23 21 20.9053 21 18.3214C21 16.8067 20.2667 15.3857 19.0321 14.5081L15.5038 12ZM11 13.0029C10.672 13.0216 10.3552 13.1324 10.0863 13.3235L6.12665 16.1383C5.41983 16.6407 5 17.4542 5 18.3214C5 19.8008 6.19923 21 7.67857 21H11L11 13.0029ZM13 13.0029L13 21H16.3214C17.8008 21 19 19.8008 19 18.3214C19 17.4542 18.5802 16.6407 17.8734 16.1383L13.9137 13.3235C13.6448 13.1324 13.328 13.0216 13 13.0029ZM5 5.67857C5 6.39696 5.28812 7.07853 5.78882 7.57692H18.2112C18.7119 7.07853 19 6.39696 19 5.67857C19 4.19924 17.8008 3 16.3214 3L7.67856 3C6.19923 3 5 4.19923 5 5.67857Z"
        fill="currentColor"
      />
    </svg>
  );
};
export default IcoHourglass;
