import { IcoCaretDown } from '@components/icons';
import { Button, Text } from '@components/primitives';
import { Box, HStack } from '@styled/jsx';
import { PropsWithChildren, useCallback, useEffect, useRef, useState } from 'react';

export interface DrawerProps extends PropsWithChildren {
  onToggle: (isOpen: boolean) => void;
  isOpen: boolean;
  title?: string;
  showCloseButton?: boolean;
}

export const Drawer = ({ isOpen = false, title, onToggle, children, showCloseButton = true }: DrawerProps) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(isOpen);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isOpen) {
      setShouldRender(true);
      timeoutId = setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }

    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onToggle]);

  const handleTransitionEnd = () => {
    if (!isOpen) {
      setShouldRender(false);
    }
  };
  const handleClose = useCallback(() => {
    onToggle(false);
  }, [onToggle]);

  return (
    <>
      <Box
        position="absolute"
        display={isOpen ? 'block' : 'none'}
        h="full"
        bottom={0}
        left={0}
        right={0}
        bg="text.primary/20"
        _dark={{ bg: 'rgba(0, 0, 0, .7)' }}
        backdropFilter="blur(3px)"
      />
      {shouldRender && (
        <Box
          ref={drawerRef}
          position="absolute"
          transform={isVisible ? 'translateY(0)' : 'translateY(100%)'}
          transition="transform 0.3s"
          bottom={0}
          left={0}
          right={0}
          bg="surface.primary"
          _dark={{ bg: 'surface.secondary' }}
          roundedTop="3xl"
          boxShadow="0px -12px 56px 0px rgba(119, 118, 122, 0.15)"
          onTransitionEnd={handleTransitionEnd}
          zIndex={10}
        >
          <HStack justifyContent="space-between" px={6} py={4}>
            <Text fontWeight="medium">{title}</Text>
            {showCloseButton && (
              <Button size="sm" variant="neutral" onPress={handleClose}>
                <Button.LeadingIcon>
                  <IcoCaretDown />
                </Button.LeadingIcon>
              </Button>
            )}
          </HStack>
          <Box px={6} pb={6}>
            {children}
          </Box>
        </Box>
      )}
    </>
  );
};
