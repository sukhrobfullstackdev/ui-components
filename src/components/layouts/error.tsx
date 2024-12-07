import { IcoCode } from '@components/icons';
import { Page, PageProps } from '@components/layouts/page';
import Text from '@components/primitives/text';
import { css } from '@styled/css';
import { Center } from '@styled/jsx';
import { createHost, createSlot } from 'create-slots';
import { Children, cloneElement } from 'react';

export interface ErrorProps extends PageProps {
  title: string;
  message: string;
  detailTitle?: string;
  detailMessage?: string;
}

const Icon = createSlot(({ children, ...props }) => {
  return (
    <Center>
      {Children.map(children, child => {
        return cloneElement(child, props);
      })}
    </Center>
  );
});

const Button = createSlot(({ children, ...props }) => {
  return (
    <Center>
      {Children.map(children, child => {
        return cloneElement(child, props);
      })}
    </Center>
  );
});

export const Component = ({ children, detailTitle, detailMessage, title, message, ...props }: ErrorProps) => {
  return createHost(children, slots => {
    const icon = slots.get(Icon);
    const button = slots.get(Button);

    return (
      <Page {...props}>
        <Page.Icon>{icon ? icon : <IcoCode />}</Page.Icon>
        <Page.Content>
          <Text.H3 styles={{ textAlign: 'center' }}>{title}</Text.H3>
          <Text size="md" styles={{ textAlign: 'center' }}>
            {message}
          </Text>
          {detailMessage && (
            <div
              className={css({
                background: 'negative.lightest',
                borderRadius: '0.5rem',
                my: 4,
                p: 4,
                width: 'full',
              })}
            >
              {detailTitle && (
                <Text variant="error">
                  <b className={css({ textTransform: 'uppercase' })}>{detailTitle}</b>
                </Text>
              )}
              <Text variant="error">{detailMessage}</Text>
            </div>
          )}
          {button}
        </Page.Content>
        <Page.Footer />
      </Page>
    );
  });
};

export const Error = Object.assign(Component, {
  Icon,
  Button,
});
