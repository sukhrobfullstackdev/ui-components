import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const FwkJwt = ({ title, titleId, ...props }: Props) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <rect width={24} height={24} rx={4} fill="#222222" />
    <g clipPath="url(#clip0_8941_308)">
      <path d="M13.3228 7.83767L13.3048 3H10.6072L10.6252 7.83767L11.974 9.69002L13.3228 7.83767Z" fill="white" />
      <path d="M10.6252 16.1282V20.9839H13.3228V16.1282L11.974 14.2759L10.6252 16.1282Z" fill="white" />
      <path
        d="M13.3228 16.1283L16.1642 20.0488L18.3403 18.4662L15.4988 14.5457L13.3228 13.8444V16.1283Z"
        fill="#00F2E6"
      />
      <path
        d="M10.6252 7.83773L7.76574 3.91724L5.58969 5.49982L8.43115 9.42031L10.6252 10.1217V7.83773Z"
        fill="#00F2E6"
      />
      <path
        d="M8.43114 9.42028L3.82726 7.92761L3 10.4813L7.60388 11.992L9.77993 11.2726L8.43114 9.42028Z"
        fill="#00B9F1"
      />
      <path
        d="M14.15 12.6933L15.4988 14.5457L20.1027 16.0383L20.93 13.4846L16.3261 11.9919L14.15 12.6933Z"
        fill="#00B9F1"
      />
      <path
        d="M16.3261 11.992L20.93 10.4813L20.1027 7.92761L15.4988 9.42028L14.15 11.2726L16.3261 11.992Z"
        fill="#D63AFF"
      />
      <path
        d="M7.60388 11.9919L3 13.4846L3.82726 16.0383L8.43114 14.5457L9.77993 12.6933L7.60388 11.9919Z"
        fill="#D63AFF"
      />
      <path
        d="M8.43115 14.5457L5.58969 18.4662L7.76574 20.0488L10.6252 16.1283V13.8444L8.43115 14.5457Z"
        fill="#FB015B"
      />
      <path
        d="M15.4988 9.42031L18.3403 5.49982L16.1642 3.91724L13.3228 7.83773V10.1217L15.4988 9.42031Z"
        fill="#FB015B"
      />
    </g>
    <defs>
      <clipPath id="clip0_8941_308">
        <rect width={17.93} height={18} fill="white" transform="translate(3 3)" />
      </clipPath>
    </defs>
  </svg>
);
export default FwkJwt;
