import { IcoRocketFill } from '@components/icons';
import { css } from '@styled/css';
import { Center } from '@styled/jsx';
import { token } from '@styled/tokens';
import { createHost, createSlot } from 'create-slots';
import { Children, cloneElement } from 'react';

const blankLogoUrl = 'https://assets.fortmatic.com/MagicLogos/blank.png';

export interface ClientAssetLogoProps {
  assetUri: string | null;
  children?: React.ReactNode;
}

const iconSize = '2.625rem';

const PlaceholderIcon = createSlot(({ children, ...props }) => {
  return (
    <Center>
      {Children.map(children, child => {
        return cloneElement(child, props);
      })}
    </Center>
  );
});

const Component = (props: ClientAssetLogoProps) => {
  const { assetUri } = props;

  return createHost(props.children, slots => {
    const placeholderIcon = slots.get(PlaceholderIcon);

    const renderPlaceholder = () => {
      if (placeholderIcon) {
        return { ...placeholderIcon, props: { ...placeholderIcon.props, width: iconSize, height: iconSize } };
      }

      return <IcoRocketFill height={iconSize} width={iconSize} color={token('colors.brand.lighter')} />;
    };

    return (
      <>
        {!assetUri || assetUri === blankLogoUrl ? (
          renderPlaceholder()
        ) : (
          <img className={css({ height: iconSize, width: iconSize, overflow: 'hidden' })} alt="logo" src={assetUri} />
        )}
      </>
    );
  });
};

export const ClientAssetLogo = Object.assign(Component, { PlaceholderIcon });
