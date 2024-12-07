import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const BlcZilliqa = ({ title, titleId, ...props }: Props) => (
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
      d="M25.3705 13.7444L21.626 15.4139L11.6925 20.4702L21.626 25.2461V17.3518L25.3705 15.6644V27.327L21.626 28.9965L6.99997 21.9966V18.2759L17.1243 13.3092L6.99997 8.44376V4.66949L10.8041 2.99999L25.3705 10.0119V13.7444Z"
      fill="#49C1BF"
    />
    <path d="M6.99997 4.66949L21.626 11.6814L25.3705 10.0119L10.8041 2.99999L6.99997 4.66949Z" fill="#077A8F" />
    <path d="M21.6267 11.6656L25.3711 9.99606V13.7286L21.6267 15.3981V11.6656Z" fill="#298E97" />
    <path
      d="M6.99997 4.67283V8.4471L17.1243 13.3125L6.99997 18.2793V21.9999L21.626 28.9999V25.2554L11.6925 20.4735L21.626 15.4173V11.6847L6.99997 4.67283Z"
      fill="#49C1BF"
    />
    <path d="M21.6267 28.9721L25.3711 27.3026V15.64L21.6267 17.3273V28.9721Z" fill="#298E97" />
  </svg>
);
export default BlcZilliqa;
