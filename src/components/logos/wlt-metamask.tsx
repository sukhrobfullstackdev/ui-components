import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const WltMetamask = ({ title, titleId, ...props }: Props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M27.5305 3.56567L17.5367 10.9881L19.3848 6.60899L27.5305 3.56567Z"
      fill="#E2761B"
      stroke="#E2761B"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.45953 3.56555L14.3729 11.0583L12.6152 6.60887L4.45953 3.56555Z"
      fill="#E4761B"
      stroke="#E4761B"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.9347 20.7709L21.2731 24.8487L26.968 26.4156L28.6051 20.8613L23.9347 20.7709Z"
      fill="#E4761B"
      stroke="#E4761B"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.40491 20.8613L5.03203 26.4156L10.7269 24.8487L8.0653 20.7709L3.40491 20.8613Z"
      fill="#E4761B"
      stroke="#E4761B"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.4055 13.8808L8.8186 16.2813L14.4733 16.5324L14.2725 10.4558L10.4055 13.8808Z"
      fill="#E4761B"
      stroke="#E4761B"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.5845 13.8807L17.6673 10.3854L17.5367 16.5323L23.1814 16.2812L21.5845 13.8807Z"
      fill="#E4761B"
      stroke="#E4761B"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.7269 24.8488L14.1218 23.1915L11.1889 20.9015L10.7269 24.8488Z"
      fill="#E4761B"
      stroke="#E4761B"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.8682 23.1915L21.2731 24.8488L20.801 20.9015L17.8682 23.1915Z"
      fill="#E4761B"
      stroke="#E4761B"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.2731 24.8487L17.8682 23.1914L18.1394 25.4111L18.1092 26.3452L21.2731 24.8487Z"
      fill="#D7C1B3"
      stroke="#D7C1B3"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.7269 24.8487L13.8908 26.3452L13.8707 25.4111L14.1218 23.1914L10.7269 24.8487Z"
      fill="#D7C1B3"
      stroke="#D7C1B3"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.941 19.435L11.1086 18.6014L13.1073 17.6874L13.941 19.435Z"
      fill="#233447"
      stroke="#233447"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.049 19.435L18.8826 17.6874L20.8914 18.6014L18.049 19.435Z"
      fill="#233447"
      stroke="#233447"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.727 24.8487L11.2091 20.7709L8.06531 20.8613L10.727 24.8487Z"
      fill="#CD6116"
      stroke="#CD6116"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.791 20.7709L21.2731 24.8487L23.9347 20.8613L20.791 20.7709Z"
      fill="#CD6116"
      stroke="#CD6116"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.1814 16.2812L17.5367 16.5323L18.059 19.435L18.8927 17.6874L20.9015 18.6014L23.1814 16.2812Z"
      fill="#CD6116"
      stroke="#CD6116"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.1086 18.6014L13.1174 17.6874L13.941 19.435L14.4733 16.5323L8.8186 16.2812L11.1086 18.6014Z"
      fill="#CD6116"
      stroke="#CD6116"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.8186 16.2812L11.189 20.9015L11.1086 18.6014L8.8186 16.2812Z"
      fill="#E4751F"
      stroke="#E4751F"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.9015 18.6014L20.801 20.9015L23.1814 16.2812L20.9015 18.6014Z"
      fill="#E4751F"
      stroke="#E4751F"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.4733 16.5323L13.941 19.435L14.6039 22.86L14.7545 18.3503L14.4733 16.5323Z"
      fill="#E4751F"
      stroke="#E4751F"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5368 16.5323L17.2656 18.3403L17.3861 22.86L18.059 19.435L17.5368 16.5323Z"
      fill="#E4751F"
      stroke="#E4751F"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.0591 19.435L17.3861 22.86L17.8682 23.1914L20.801 20.9014L20.9015 18.6013L18.0591 19.435Z"
      fill="#F6851B"
      stroke="#F6851B"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.1086 18.6013L11.1889 20.9014L14.1218 23.1914L14.6039 22.86L13.941 19.435L11.1086 18.6013Z"
      fill="#F6851B"
      stroke="#F6851B"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.1092 26.3452L18.1394 25.4111L17.8883 25.1901H14.1017L13.8707 25.4111L13.8908 26.3452L10.7269 24.8486L11.8318 25.7526L14.0716 27.3094H17.9184L20.1682 25.7526L21.2731 24.8486L18.1092 26.3452Z"
      fill="#C0AD9E"
      stroke="#C0AD9E"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.8682 23.1916L17.386 22.8601H14.6039L14.1218 23.1916L13.8707 25.4113L14.1017 25.1903H17.8882L18.1393 25.4113L17.8682 23.1916Z"
      fill="#161616"
      stroke="#161616"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.9523 11.4701L28.806 7.37221L27.5304 3.56555L17.8682 10.7369L21.5844 13.8807L26.8374 15.4174L28.0025 14.0615L27.5003 13.6999L28.3038 12.9667L27.6811 12.4846L28.4846 11.8719L27.9523 11.4701Z"
      fill="#763D16"
      stroke="#763D16"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.19397 7.37233L4.0477 11.4703L3.50533 11.872L4.30885 12.4847L3.69617 12.9668L4.49968 13.7L3.99749 14.0616L5.15254 15.4175L10.4055 13.8808L14.1218 10.737L4.45951 3.56567L3.19397 7.37233Z"
      fill="#763D16"
      stroke="#763D16"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.8374 15.4175L21.5845 13.8807L23.1814 16.2812L20.801 20.9015L23.9347 20.8613H28.6052L26.8374 15.4175Z"
      fill="#F6851B"
      stroke="#F6851B"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.4055 13.8807L5.15255 15.4175L3.40491 20.8613H8.0653L11.189 20.9015L8.81859 16.2812L10.4055 13.8807Z"
      fill="#F6851B"
      stroke="#F6851B"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5367 16.5323L17.8682 10.7369L19.3948 6.60889H12.6152L14.1218 10.7369L14.4733 16.5323L14.5938 18.3603L14.6039 22.86H17.386L17.4061 18.3603L17.5367 16.5323Z"
      fill="#F6851B"
      stroke="#F6851B"
      strokeWidth={0.100439}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default WltMetamask;
