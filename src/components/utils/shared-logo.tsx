import { IcoRocketFill } from '@components/icons';
import { IconMagicLogo } from '@components/logos';
import { css } from '@styled/css';
import { Box, Flex } from '@styled/jsx';
import { token } from '@styled/tokens';

export interface SharedLogoProps {
  assetUri: string | undefined | null;
}

const SharedLogo = ({ assetUri }: SharedLogoProps) => {
  const isBlankLogoUrl = assetUri?.includes('blank.png');
  const useFallbackImage = !assetUri || isBlankLogoUrl;

  const styles = {
    animation: 'fadeIn 0.5s, moveRight 1s 0.5s forwards',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: useFallbackImage ? 'magic.10' : 'surface.primary',
    borderRadius: '50%',
    borderWidth: '3px',
    borderStyle: 'solid',
    borderColor: 'surface.primary',
    height: '3.875rem',
    width: '3.875rem',
    marginTop: '-3px',
    marginRight: '0.9rem',
    overflow: 'hidden',
    zIndex: 1,
  };

  return (
    <Flex>
      <Flex className={css(styles)}>
        {useFallbackImage ? (
          <IcoRocketFill height={34} width={34} color={token('colors.magic.30')} />
        ) : (
          <img alt="logo" height={56} width={56} src={assetUri} />
        )}
      </Flex>
      <Box
        className={css({
          marginLeft: '0.9rem',
          animation: 'fadeIn 0.5s, moveLeft 1s  0.5s forwards',
        })}
      >
        <IconMagicLogo height={56} width={56} />
      </Box>
    </Flex>
  );
};

export default SharedLogo;
