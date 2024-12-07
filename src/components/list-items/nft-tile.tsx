import { ButtonContainer } from '@components/containers';
import { css } from '@styled/css';
import { Box } from '@styled/jsx';
import { useCallback } from 'react';
import { AriaButtonProps } from 'react-aria';

export interface NFTTileProps extends AriaButtonProps {
  src: string;
  onPress?: () => void;
  alt: string;
}

interface ImageContainerProps {
  src: string;
  alt: string;
}

const ImageContainer = ({ src, alt }: ImageContainerProps) => {
  return (
    <Box rounded="2xl" overflow="hidden">
      <img src={src} alt={alt} className={css({ objectFit: 'cover' })} />
    </Box>
  );
};

export const NFTTile = (props: NFTTileProps) => {
  const { src, onPress, alt } = props;

  const handlePress = useCallback(() => {
    onPress?.();
  }, [onPress]);

  if (onPress)
    return (
      <ButtonContainer
        className={css({
          _hover: {
            boxShadow: '0 6px 8px 2px rgba(0, 0, 0, .18)',
          },
        })}
        borderRadius="1rem"
        onPress={handlePress}
        {...props}
      >
        <ImageContainer src={src} alt={alt} />
      </ButtonContainer>
    );

  return <ImageContainer src={src} alt={alt} />;
};
