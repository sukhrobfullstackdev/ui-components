import { SecuredByMagic } from '@components/utils';
import { SecuredByMagicProps } from '@components/utils/secured-by-magic';
import { css } from '@styled/css';
import { VStack } from '@styled/jsx';
import { ComponentProps } from 'react';

export type FooterProps = ComponentProps<'div'> &
  SecuredByMagicProps & {
    showLogo?: boolean;
  };

export const Footer = ({ children, showLogo = true, ...sbmProps }: FooterProps) => (
  <VStack alignItems="center" className={css({ width: 'full', p: 8 })}>
    {children}
    {showLogo && <SecuredByMagic {...sbmProps} />}
  </VStack>
);
