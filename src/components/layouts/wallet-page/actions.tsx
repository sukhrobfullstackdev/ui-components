import { IcoArrowDown, IcoPaperPlane, IcoQrcode } from '@components/icons';
import { WalletActions } from '@components/sections';

export interface ActionsProps {
  actionBox?: boolean;
  buyLabel?: string;
  buyDisabledLabel?: string;
  sendLabel?: string;
  sendDisabledLabel?: string;
  receiveLabel?: string;
  receiveDisabledLabel?: string;
  onBuy?: () => void;
  onSend?: () => void;
  onReceive?: () => void;
}

export const Actions = ({
  actionBox,
  buyLabel = 'Buy',
  buyDisabledLabel,
  sendLabel = 'Send',
  sendDisabledLabel,
  receiveLabel = 'Receive',
  receiveDisabledLabel,
  onBuy,
  onSend,
  onReceive,
}: ActionsProps) => (
  <WalletActions actionBox={actionBox}>
    {onBuy && (
      <WalletActions.Action disabledLabel={buyDisabledLabel} label={buyLabel} onPress={onBuy}>
        <IcoArrowDown />
      </WalletActions.Action>
    )}
    {onSend && (
      <WalletActions.Action disabledLabel={sendDisabledLabel} label={sendLabel} onPress={onSend}>
        <IcoPaperPlane />
      </WalletActions.Action>
    )}
    {onReceive && (
      <WalletActions.Action disabledLabel={receiveDisabledLabel} label={receiveLabel} onPress={onReceive}>
        <IcoQrcode />
      </WalletActions.Action>
    )}
  </WalletActions>
);
