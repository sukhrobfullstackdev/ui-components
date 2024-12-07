import { ButtonContainer } from '@components/containers';
import { IcoCheckmark, IcoCopy, IcoEyeClosed, IcoEyeOpened } from '@components/icons';
import { Text } from '@components/primitives';
import { Box, HStack } from '@styled/jsx';
import { token } from '@styled/tokens';
import { useCallback, useEffect, useState } from 'react';

export interface TextBoxProps {
  content: string;
  onCopy?: (content: string) => void;
  showHideButton?: boolean;
  mono?: boolean;
}

const TextBox = (props: TextBoxProps) => {
  const { content, onCopy, showHideButton, mono } = props;
  const [isHidden, setIsHidden] = useState(Boolean(showHideButton));
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timeoutId = setTimeout(() => {
        setIsCopied(false);
      }, 1500);

      return () => clearTimeout(timeoutId);
    }
  }, [isCopied]);

  useEffect(() => {
    if (showHideButton) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [showHideButton]);

  const handleOnCopy = useCallback(() => {
    if (!onCopy) return;
    onCopy(content);
    setIsCopied(true);
  }, [content]);

  return (
    <HStack
      w="full"
      px={4}
      py={3}
      rounded={10}
      bg="surface.secondary"
      justifyContent="space-between"
      position="relative"
    >
      <Box
        textWrap="nowrap"
        overflow="hidden"
        userSelect={isHidden ? 'none' : 'auto'}
        filter={isHidden ? 'blur(10px)' : ''}
      >
        {mono ? <Text.Mono truncate>{content}</Text.Mono> : <Text truncate>{content}</Text>}
      </Box>

      <HStack gap={3}>
        {isHidden && (
          <ButtonContainer onPress={() => setIsHidden(false)} aria-label="show">
            <IcoEyeClosed width={22} height={22} color={token('colors.brand.base')} />
          </ButtonContainer>
        )}
        {showHideButton && !isHidden && (
          <ButtonContainer onPress={() => setIsHidden(true)} aria-label="hide">
            <IcoEyeOpened width={22} height={22} color={token('colors.brand.base')} />
          </ButtonContainer>
        )}
        {onCopy && (
          <>
            {isCopied ? (
              <IcoCheckmark width={22} height={22} color={token('colors.brand.base')} />
            ) : (
              <ButtonContainer onPress={handleOnCopy} aria-label="copy">
                <IcoCopy width={22} height={22} color={token('colors.brand.base')} />
              </ButtonContainer>
            )}
          </>
        )}
      </HStack>
    </HStack>
  );
};

TextBox.displayName = 'TextBox';

export default TextBox;
