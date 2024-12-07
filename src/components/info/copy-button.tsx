import { IcoCheckmark, IcoCopy } from '@components/icons';
import { token } from '@styled/tokens';
import { useEffect, useState, useCallback } from 'react';
import Button from '../primitives/button';

export interface CopyButtonProps {
  value: string;
  showText: boolean;
  color?: string;
  onCopy: (value: string) => void;
}

const CopyButton = ({ value, showText, color: customColor, onCopy }: CopyButtonProps) => {
  const color = customColor || token('colors.text.primary');

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2500);
    }
  }, [isCopied]);

  const handleOnCopy = useCallback(() => {
    onCopy(value);
    setIsCopied(true);
  }, [value]);

  const text = showText ? (!isCopied ? 'Copy' : 'Copied!') : undefined;

  return (
    <Button label={text} variant="text" onPress={handleOnCopy} iconSize={!isCopied ? 16 : 12}>
      <Button.LeadingIcon>{!isCopied ? <IcoCopy color={color} /> : <IcoCheckmark color={color} />}</Button.LeadingIcon>
    </Button>
  );
};

CopyButton.displayName = 'CopyButton';

export default CopyButton;
