import LogoGoogle from '@components/logos/logo-google';
import Button, { ButtonProps } from '../primitives/button';

export enum SocialLoginButtonProviders {
  GOOGLE = 'google',
}

export type Props<T = SocialLoginButtonProviders> = ButtonProps & {
  provider: T;
};

type SocialLoginButtonConfig = {
  [key: string]: {
    icon: JSX.Element;
    label: string;
  };
};

// this will contain all social login providers in the future
const socialLoginButtonConfig: SocialLoginButtonConfig = {
  google: {
    icon: <LogoGoogle />,
    label: 'Continue with Google',
  },
};

export const SocialLoginButton = <T = SocialLoginButtonProviders,>({ provider, ...buttonProps }: Props<T>) => {
  const { icon, label } = socialLoginButtonConfig[provider as string];

  return (
    <Button label={label} {...buttonProps} variant="tertiary">
      <Button.LeadingIcon>{icon}</Button.LeadingIcon>
    </Button>
  );
};

export default SocialLoginButton;
