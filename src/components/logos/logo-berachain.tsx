import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export interface Props extends SVGRProps, SVGProps<SVGSVGElement> {}
const LogoBerachain = ({ title, titleId, ...props }: Props) => (
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
    <circle cx={11.999} cy={12} r={11.25} fill="#F47226" />
    <path
      d="M15.812 14.4799V13.546C16.3869 13.3488 16.8055 12.7366 16.8055 12.012C16.8055 11.2873 16.3869 10.6734 15.812 10.4779V9.54403C16.3534 9.35898 16.7571 8.80381 16.8018 8.13278H16.1432V8.41814C16.1432 8.63779 16.0093 8.83148 15.812 8.92834V8.79517C15.812 8.59974 15.6409 8.44063 15.4307 8.44063H15.3972C15.187 8.44063 15.0158 8.59974 15.0158 8.79517V8.92834C14.8187 8.83148 14.6847 8.63952 14.6847 8.41814V8.13278H14.0262C14.0708 8.80381 14.4745 9.35898 15.0158 9.54403V10.4779C14.4429 10.6734 14.0225 11.2856 14.0225 12.012C14.0225 12.7383 14.441 13.3506 15.0158 13.546V14.4799C14.4745 14.665 14.0708 15.2201 14.0262 15.8911H14.6847V15.6058C14.6847 15.3862 14.8187 15.1924 15.0158 15.0956V15.2288C15.0158 15.4242 15.187 15.5833 15.3972 15.5833H15.4307C15.6409 15.5833 15.812 15.4242 15.812 15.2288V15.0956C16.0093 15.1924 16.1432 15.3844 16.1432 15.6058V15.8911H16.8018C16.7571 15.2201 16.3534 14.665 15.812 14.4799ZM14.6847 12.4201V11.6021C14.6847 11.3824 14.8187 11.1887 15.0158 11.0919V11.2251C15.0158 11.4205 15.187 11.5796 15.3972 11.5796H15.4307C15.6409 11.5796 15.812 11.4205 15.812 11.2251V11.0919C16.0093 11.1887 16.1432 11.3807 16.1432 11.6021V12.4201C16.1432 12.6398 16.0093 12.8335 15.812 12.9303V12.7972C15.812 12.6017 15.6409 12.4426 15.4307 12.4426H15.3972C15.187 12.4426 15.0158 12.6017 15.0158 12.7972V12.9303C14.8205 12.8335 14.6847 12.6415 14.6847 12.4201Z"
      fill="#171717"
    />
    <path
      d="M19.8525 12.5083V11.5139C20.4274 11.3167 20.846 10.7045 20.846 9.97985C20.846 9.25521 20.4274 8.64124 19.8525 8.44581V8.13278H19.0582V8.44581C18.4834 8.64297 18.0648 9.25521 18.0648 9.97985C18.0648 10.7045 18.4834 11.3185 19.0582 11.5139V12.5083C18.4834 12.7055 18.0648 13.3177 18.0648 14.0424C18.0648 14.767 18.4834 15.381 19.0582 15.5764V15.8894H19.8525V15.5764C20.4274 15.3792 20.846 14.767 20.846 14.0424C20.846 13.3177 20.4274 12.7055 19.8525 12.5083ZM18.7252 10.388V9.56997C18.7252 9.35032 18.8592 9.15662 19.0563 9.05977V9.19294C19.0563 9.38838 19.2275 9.54748 19.4377 9.54748H19.4694C19.6796 9.54748 19.8507 9.38838 19.8507 9.19294V9.05977C20.0479 9.15662 20.1818 9.3486 20.1818 9.56997V10.388C20.1818 10.6076 20.0479 10.8013 19.8507 10.8982V10.765C19.8507 10.5696 19.6796 10.4105 19.4694 10.4105H19.4359C19.2257 10.4105 19.0545 10.5696 19.0545 10.765V10.8982C18.861 10.8013 18.7252 10.6094 18.7252 10.388ZM20.1837 14.4522C20.1837 14.6719 20.0498 14.8656 19.8525 14.9624V14.767C19.8525 14.5716 19.6814 14.4125 19.4712 14.4125H19.4396C19.2294 14.4125 19.0582 14.5716 19.0582 14.767V14.9624C18.861 14.8656 18.7271 14.6736 18.7271 14.4522V13.6342C18.7271 13.4146 18.861 13.2209 19.0582 13.124V13.1949C19.0582 13.3904 19.2294 13.5495 19.4396 13.5495H19.4731C19.6833 13.5495 19.8544 13.3904 19.8544 13.1949V13.124C20.0516 13.2209 20.1856 13.4128 20.1856 13.6342V14.4522H20.1837Z"
      fill="#171717"
    />
    <path
      d="M11.2599 11.2202C11.2525 11.1804 11.2432 11.1423 11.2283 11.106C11.2339 11.0974 12.4691 9.49762 11.3251 8.50837C10.1828 7.51912 8.84895 8.8093 8.84151 8.81622C8.62943 8.75395 8.4155 8.71591 8.20343 8.69861C8.20343 8.69861 8.20343 8.69861 8.20156 8.69861C7.76625 8.63116 7.15606 8.69861 7.15606 8.69861C6.94585 8.71591 6.73378 8.75395 6.52356 8.81448C6.51612 8.80757 5.18227 7.51739 4.04004 8.50664C2.89781 9.49589 4.13119 11.0974 4.13678 11.1043C4.12376 11.1423 4.11259 11.1804 4.10515 11.2184C3.98237 11.9033 3.13965 12.1143 3.13965 13.3076C3.13965 14.5235 4.01957 15.4816 5.81664 15.4816H6.55332C6.55705 15.485 6.84168 15.8621 7.42954 15.8845C7.42954 15.8845 7.56534 15.8984 7.87787 15.888C8.50107 15.888 8.8043 15.4885 8.80617 15.4833H9.54285C11.3399 15.4833 12.2198 14.5252 12.2198 13.3094C12.2254 12.1178 11.3827 11.905 11.2599 11.2202Z"
      fill="#171717"
    />
  </svg>
);
export default LogoBerachain;
