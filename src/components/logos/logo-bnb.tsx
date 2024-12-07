import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoBnb = ({ title, titleId, ...props }: Props) => (
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
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1C18.0756 1 23 5.92444 23 12C23 18.0756 18.0756 23 12 23C5.92444 23 1 18.0756 1 12C1 5.92444 5.92444 1 12 1Z"
      fill="#F0B90B"
    />
    <path
      d="M7.04554 12L7.05348 14.9087L9.52495 16.363V18.0659L5.60708 15.768V11.1494L7.04554 12ZM7.04554 9.09134V10.7863L5.6062 9.93485V8.2399L7.04554 7.38846L8.49194 8.2399L7.04554 9.09134ZM10.5571 8.2399L11.9964 7.38846L13.4428 8.2399L11.9964 9.09134L10.5571 8.2399Z"
      fill="white"
    />
    <path
      d="M8.08569 14.3058V12.6029L9.52504 13.4543V15.1493L8.08569 14.3058ZM10.5572 16.9729L11.9965 17.8244L13.4429 16.9729V18.6679L11.9965 19.5193L10.5572 18.6679V16.9729ZM15.5072 8.2399L16.9465 7.38846L18.3929 8.2399V9.93485L16.9465 10.7863V9.09134L15.5072 8.2399ZM16.9465 14.9087L16.9544 12L18.3938 11.1486V15.7671L14.4759 18.065V16.3621L16.9465 14.9087Z"
      fill="white"
    />
    <path d="M15.9143 14.3058L14.475 15.1493V13.4543L15.9143 12.6029V14.3058Z" fill="white" />
    <path
      d="M15.9144 9.69422L15.9223 11.3971L13.4438 12.8514V15.7671L12.0044 16.6107L10.5651 15.7671V12.8514L8.08657 11.3971V9.69422L9.53209 8.84278L11.9956 10.3042L14.4742 8.84278L15.9205 9.69422H15.9144ZM8.08569 6.78645L11.9965 4.48068L15.9144 6.78645L14.475 7.63789L11.9965 6.17652L9.52504 7.63789L8.08569 6.78645Z"
      fill="white"
    />
  </svg>
);
export default LogoBnb;
