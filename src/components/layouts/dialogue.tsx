import { Page, PageProps } from '@components/layouts/page';
import Button from '@components/primitives/button';
import Text from '@components/primitives/text';
import { css } from '@styled/css';
import { HStack } from '@styled/jsx';
import { createHost, createSlot } from 'create-slots';

export interface DialogueProps extends PageProps {
  cancelLabel?: string;
  confirmLabel: string;
  title: string;
  message: string;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const DialogueIcon = createSlot(Page.Icon);

const DialogueHost = ({
  children,
  cancelLabel,
  confirmLabel,
  title,
  message,
  onCancel = () => {},
  onConfirm = () => {},
  ...props
}: DialogueProps) => {
  return createHost(children, slots => {
    return (
      <Page {...props}>
        <Page.Icon>{slots.get(DialogueIcon)}</Page.Icon>
        <Page.Content>
          <Text.H3 styles={{ textAlign: 'center' }}>{title}</Text.H3>
          <Text size="md">{message}</Text>
          {/* {children} */}
          <HStack className={css({ pt: 6 })}>
            <Button onPress={onConfirm} label={confirmLabel} />
            {cancelLabel && <Button onPress={onCancel} label={cancelLabel} />}
          </HStack>
        </Page.Content>
        <Page.Footer />
      </Page>
    );
  });
};

export const Dialogue = Object.assign(DialogueHost, {
  Icon: DialogueIcon,
});
