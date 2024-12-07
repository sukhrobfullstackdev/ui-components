import { IcoMenu } from '@components/icons';
import { Button } from '@components/primitives';
import { Box, Divider, Stack } from '@styled/jsx';
import { createHost, createSlot } from 'create-slots';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

export interface MenuProps extends PropsWithChildren {
  isOpen?: boolean;
  placement?: 'left' | 'right';
}

const Header = createSlot('div');
const Content = createSlot('div');
const Footer = createSlot('div');

const MenuHost = ({ children, placement = 'right', isOpen: opened = false }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(opened);
  const [isVisible, setIsVisible] = useState(isOpen);
  const menuRef = useRef<HTMLDivElement>(null);
  const isLeftAligned = placement === 'left';

  useEffect(() => {
    setIsOpen(opened);
  }, [opened]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isOpen) {
      timeoutId = setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }

    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpen]);

  return createHost(children, slots => {
    return (
      <>
        <Button onPress={() => setIsOpen(prev => !prev)} textStyle="neutral" variant="text">
          <Button.TrailingIcon>
            <IcoMenu />
          </Button.TrailingIcon>
        </Button>
        <Box
          position="absolute"
          display={isOpen ? 'block' : 'none'}
          h="full"
          bottom={0}
          left={0}
          right={0}
          bg="text.primary/20"
          _dark={{ bg: 'rgba(0, 0, 0, .7)' }}
        />
        <Stack
          ref={menuRef}
          position="absolute"
          transform={isVisible ? 'translateX(0)' : isLeftAligned ? 'translateX(-100%)' : 'translateX(100%)'}
          transition="transform 0.3s"
          top={0}
          bottom={0}
          {...(isLeftAligned ? { left: 0 } : { right: 0 })}
          bg="surface.primary"
          _dark={{ bg: 'surface.secondary' }}
          {...(isLeftAligned ? { roundedRight: '2xl' } : { roundedLeft: '2xl' })}
          zIndex={10}
          justifyContent="space-between"
          p={4}
          pb={6}
          w={80}
        >
          <Stack gap={6}>
            <Stack h="full" justifyContent="space-between">
              {slots.get(Header)}
            </Stack>
            <Divider color="surface.quaternary" />
            <Stack>{slots.get(Content)}</Stack>
          </Stack>
          {slots.get(Footer)}
        </Stack>
      </>
    );
  });
};

export const Menu = Object.assign(MenuHost, {
  Header,
  Content,
  Footer,
});
