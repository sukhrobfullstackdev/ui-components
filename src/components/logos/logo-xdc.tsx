import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoXdc = ({ title, titleId, ...props }: Props) => (
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
      d="M14.5297 11.9954L21.6514 3H17.4442C16.5727 3.00968 15.8223 3.41636 15.1881 4.22488L11.6538 8.7129L8.11958 4.22488C7.47567 3.40668 6.72041 3 5.86347 3H3.08448C2.61002 3 2.37279 3.1985 2.37279 3.5955C2.37279 3.794 2.46478 4.00218 2.64391 4.22973L8.77318 11.9954L4.93391 16.8949L2.27112 20.2888C2.09199 20.5212 2 20.7294 2 20.9182C2.05326 21.3055 2.29049 21.4992 2.72137 21.4992H5.47131C6.33309 21.4992 7.07867 21.0973 7.71774 20.2888L11.6538 15.2682L15.5851 20.2888C16.2193 21.0973 16.9697 21.4992 17.8315 21.4992H22L14.5297 11.9954Z"
      fill="#15294C"
    />
    <path d="M15.8466 12.0099L19.5406 16.7013V7.31857L15.8466 12.0099Z" fill="#9ACA3D" />
  </svg>
);
export default LogoXdc;
