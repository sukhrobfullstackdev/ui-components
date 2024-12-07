import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoLinkByStripe = ({ title, titleId, ...props }: Props) => (
  <svg
    width={108}
    height={24}
    viewBox="0 0 108 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M0 6.20313C0 4.61386 0 3.81922 0.198711 3.1733C0.636465 1.75036 1.75036 0.636465 3.1733 0.198711C3.81922 0 4.61386 0 6.20313 0H33.8774C35.4667 0 36.2613 0 36.9073 0.198711C38.3302 0.636465 39.4441 1.75036 39.8819 3.1733C40.0806 3.81922 40.0806 4.61386 40.0806 6.20313V17.7703C40.0806 19.3596 40.0806 20.1542 39.8819 20.8001C39.4441 22.2231 38.3302 23.337 36.9073 23.7747C36.2613 23.9734 35.4667 23.9734 33.8774 23.9734H6.20313C4.61386 23.9734 3.81922 23.9734 3.1733 23.7747C1.75036 23.337 0.636465 22.2231 0.198711 20.8001C0 20.1542 0 19.3596 0 17.7703V6.20313Z"
      fill="#1D3944"
    />
    <path
      d="M9.8418 6.13367C9.8418 5.43691 10.4029 4.86963 11.1058 4.86963C11.8026 4.86963 12.3637 5.43691 12.3699 6.13367C12.3699 6.83044 11.8026 7.39771 11.1058 7.39771C10.4091 7.39771 9.8418 6.83044 9.8418 6.13367Z"
      fill="white"
    />
    <path d="M5.49487 5.00516H7.75159V18.6505H5.49487V5.00516Z" fill="white" />
    <path
      d="M35.9921 8.91439C34.6911 11.6953 33.2359 13.7116 33.2359 13.7116L36.3251 18.6505H33.6614L31.7623 15.6107C29.8508 17.7873 27.9578 18.854 26.1327 18.854C23.9068 18.854 23.0004 17.2632 23.0004 15.4565C23.0004 15.2559 23.002 15.0092 23.0036 14.7708V14.7702V14.7691V14.769C23.0051 14.5465 23.0065 14.3313 23.0065 14.1678C23.0065 11.7816 22.7537 11.1033 21.9521 11.2143C20.4106 11.424 18.0614 14.9386 16.5322 18.6505H14.4111V8.91439H16.6678V13.7732C17.9565 11.6028 19.1281 9.74683 21.0272 9.0254C22.131 8.60611 23.062 8.78494 23.543 9.00073C25.2879 9.77149 25.2879 11.6583 25.2633 14.1802C25.2633 14.3407 25.2618 14.507 25.2604 14.6791V14.6796V14.6801C25.2588 14.8645 25.2571 15.0555 25.2571 15.253C25.2571 16.1718 25.5099 16.5726 26.1327 16.6343C26.737 16.6959 27.1994 16.3999 27.1994 16.3999V5.00516H29.45V14.7783C29.45 14.7783 31.4108 12.9901 33.4764 8.91439H35.9921Z"
      fill="white"
    />
    <path d="M12.2347 8.91437H9.97803V18.6505H12.2347V8.91437Z" fill="white" />
    <path
      d="M50.1172 8.89338C48.9855 8.89338 47.9356 9.4797 47.3357 10.4887V6.75269H45.8086V16.8562H47.3357V15.5881C47.8674 16.5153 48.8628 17.0198 49.9536 17.0198C51.9991 17.0198 53.4442 15.37 53.4442 12.9429C53.4442 10.3251 51.8898 8.89338 50.1172 8.89338ZM49.6127 15.6835C48.2901 15.6835 47.3357 14.5928 47.3357 12.9566C47.3357 11.3204 48.2901 10.2296 49.6263 10.2296C50.9626 10.2296 51.8898 11.334 51.8898 12.9429C51.8898 14.5928 50.9489 15.6835 49.6127 15.6835Z"
      fill="#1D3944"
    />
    <path
      d="M56.1947 20.0196C57.381 20.0196 58.0356 19.3651 58.6218 17.9198L62.1942 9.05713H60.5582L59.6446 11.4023C59.0717 12.8886 58.5125 14.5247 58.2807 15.1792H58.2536C58.008 14.5247 57.381 12.9022 56.7401 11.4023L55.7449 9.05713H53.9995L57.5173 16.8563L57.1359 17.8926C56.9173 18.4106 56.6038 18.6697 56.181 18.6697C55.7719 18.6697 55.3629 18.4243 55.104 18.0425L54.3268 19.2015C54.7629 19.706 55.4176 20.0196 56.1947 20.0196Z"
      fill="#1D3944"
    />
    <path
      d="M70.5626 17.0199C72.8395 17.0199 74.3531 15.8745 74.3531 14.0747C74.3531 12.1522 72.6894 11.5114 71.1218 11.0341C69.7578 10.5978 68.4761 10.2979 68.4761 9.35705C68.4761 8.64808 69.2263 8.1572 70.3032 8.1572C71.4894 8.1572 72.5122 8.74352 72.7303 9.86156L74.2438 9.098C73.6714 7.47545 72.0761 6.72552 70.3032 6.72552C68.2172 6.72552 66.7583 7.7345 66.7583 9.45254C66.7583 11.2796 68.422 11.8932 69.9626 12.3704C71.326 12.7931 72.6077 13.1339 72.6077 14.1702C72.6077 14.961 71.8167 15.5473 70.5897 15.5473C69.0899 15.5473 68.0263 14.6883 67.9175 13.3793L66.3223 14.0884C66.5812 15.8609 68.3127 17.0199 70.5626 17.0199Z"
      fill="#1D3944"
    />
    <path
      d="M79.5565 15.2882C79.3793 15.52 79.0658 15.6836 78.7247 15.6836C78.234 15.6836 78.0022 15.3564 78.0022 14.661V10.3388H79.5565V9.05707H78.0022V6.78003L76.4748 7.95266V9.05707H75.2207V10.3388H76.4748V14.7292C76.4748 16.1745 77.2112 17.0199 78.5067 17.0199C79.0929 17.0199 79.5974 16.8426 79.8701 16.5563L79.5565 15.2882Z"
      fill="#1D3944"
    />
    <path
      d="M85.0908 8.89349C84.1496 8.89349 83.3454 9.46618 82.8271 10.3797V9.0571H81.3003V16.8563H82.8271V13.5975C82.8271 11.3341 83.7544 10.3388 84.8451 10.3388C85.3497 10.3388 85.7587 10.5706 85.9767 10.8842L86.6722 9.60251C86.3857 9.19344 85.7725 8.89349 85.0908 8.89349Z"
      fill="#1D3944"
    />
    <path
      d="M89.4116 8.22508V6.41165H87.8843V8.22508H89.4116ZM89.4116 16.856V9.05681H87.8843V16.856H89.4116Z"
      fill="#1D3944"
    />
    <path
      d="M95.714 8.89355C94.5687 8.89355 93.5321 9.4935 92.9326 10.5025V9.05716H91.4053V20.0196H92.9326V15.5746C93.478 16.5154 94.514 17.02 95.6048 17.02C97.5273 17.02 99.0408 15.4247 99.0408 12.9431C99.0408 10.4752 97.5544 8.89355 95.714 8.89355ZM95.2095 15.6837C93.887 15.6837 92.9326 14.5929 92.9326 12.9568C92.9326 11.3206 93.887 10.2298 95.2233 10.2298C96.5591 10.2298 97.4865 11.3342 97.4865 12.9431C97.4865 14.5929 96.5459 15.6837 95.2095 15.6837Z"
      fill="#1D3944"
    />
    <path
      d="M104.063 8.89349C101.745 8.89349 100.218 10.516 100.218 12.9567C100.218 15.3973 101.813 17.0199 104.117 17.0199C105.753 17.0199 106.994 16.1745 107.54 14.702L106.189 14.102C105.931 15.111 105.18 15.6973 104.131 15.6973C102.781 15.6973 101.827 14.7292 101.827 13.3521H107.731C107.908 10.6251 106.476 8.89349 104.063 8.89349ZM101.881 12.1113C102.004 10.966 102.863 10.2024 104.063 10.2024C105.221 10.2024 106.026 10.9387 106.149 12.1113H101.881Z"
      fill="#1D3944"
    />
  </svg>
);
export default LogoLinkByStripe;
