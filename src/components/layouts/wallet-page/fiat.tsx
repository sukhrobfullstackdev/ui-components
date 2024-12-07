import Text from '@components/primitives/text';
import { HStack } from '@styled/jsx';

export interface FiatProps {
  fiatTotal?: string;
  symbol?: string;
}

export const Fiat = ({ fiatTotal, symbol }: FiatProps) => {
  const fiat = fiatTotal ? fiatTotal.split('.') : ['0', '00'];
  const fiatColor = fiatTotal ? 'text.primary' : 'text.tertiary';

  return (
    <HStack alignItems="flex-start" gap={1} my={3}>
      <Text.H4 fontColor={fiatColor} styles={{ lineHeight: '2.75rem' }}>
        {symbol}
      </Text.H4>
      <HStack alignItems="baseline" gap={0}>
        <Text.H1 fontColor={fiatColor}>{fiat[0]}</Text.H1>
        <Text.H4 fontColor={fiatColor}>{`.${fiat[1] || '00'}`}</Text.H4>
      </HStack>
    </HStack>
  );
};
