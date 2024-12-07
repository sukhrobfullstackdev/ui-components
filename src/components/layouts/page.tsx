import { Content } from '@components/containers/content';
import { Drawer } from '@components/containers/drawer';
import { Footer } from '@components/containers/footer';
import { Header } from '@components/containers/header';
import { Modal, ModalProps } from '@components/containers/modal';
import { Overlay, OverlayProps } from '@components/containers/overlay';
import { css } from '@styled/css';
import { VStack } from '@styled/jsx';
import { token } from '@styled/tokens';
import { createHost, createSlot } from 'create-slots';
import { Children, ComponentProps, cloneElement } from 'react';

const DEFAULT_ICON_SIZE = '2.625rem';

const PageHeader = createSlot(({ children }) => <Header>{children}</Header>);
const PageIcon = createSlot(({ children }) => {
  return Children.map(children, child => {
    return cloneElement(child, {
      color: child.props.color ?? token('colors.brand.base'),
      width: child.props.width ?? DEFAULT_ICON_SIZE,
      height: child.props.height ?? DEFAULT_ICON_SIZE,
    });
  });
});
const PageContent = createSlot(Content);
const PageFooter = createSlot(Footer);
const PageDrawer = createSlot(Drawer);

export interface PageProps extends ModalProps, Omit<OverlayProps, 'hide'>, ComponentProps<'div'> {
  overlay?: boolean;
}

const Container = ({ children, overlay, ...props }: PageProps) => {
  if (overlay) {
    const { animate, backgroundType, isOpen = true, onHidden, fullscreen = false } = props;
    return (
      <Overlay
        animate={animate}
        backgroundType={backgroundType}
        hide={!isOpen}
        onHidden={onHidden}
        fullscreen={fullscreen}
      >
        {children}
      </Overlay>
    );
  }
  return <>{children}</>;
};

const PageHost = ({ children, overlay = true, ...props }: PageProps) => {
  return createHost(children, slots => {
    const buffer = slots.get(PageHeader) ? 8 : 4;
    const footerProps = slots.getProps(PageFooter);
    const drawerProps = slots.getProps(PageDrawer);

    return (
      <Container overlay={overlay} {...props}>
        <Modal paddingType="md" {...props}>
          <VStack alignItems="center" gap={0} width="full" className={css({ mt: buffer })}>
            {slots.get(PageHeader)}
            {slots.get(PageIcon)}
            {slots.get(PageContent)}
            {footerProps && <Footer {...footerProps} />}
            {drawerProps && <Drawer {...drawerProps} />}
          </VStack>
        </Modal>
      </Container>
    );
  });
};

export const Page = Object.assign(PageHost, {
  Header: PageHeader,
  Icon: PageIcon,
  Content: PageContent,
  Footer: PageFooter,
  Drawer: PageDrawer,
});
