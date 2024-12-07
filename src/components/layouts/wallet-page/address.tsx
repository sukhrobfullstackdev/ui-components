import { WalletAddress } from '@components/info';
import { Center, HStack } from '@styled/jsx';
import { token } from '@styled/tokens';

export interface AddressProps {
  address: string;
  onAddressCopy?: (address: string) => void;
}

export const Address = ({ address, onAddressCopy }: AddressProps) => (
  <HStack
    gap={0}
    style={{ filter: `drop-shadow(0px 0px 0.5px color-mix(in srgb, ${token('colors.text.primary')}, transparent 20%)` }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M0 0L48 0V48H47.4146C37.829 48 29.1682 42.28 25.4052 33.4639L16.4163 12.405C13.533 5.65001 7.28559 0.929159 0 0Z"
        fill={token('colors.surface.primary')}
      />
    </svg>
    <Center bgColor="surface.primary" w="114px" h="48px">
      <WalletAddress
        address={address}
        onCopy={onAddressCopy}
        size="sm"
        icon
        fontColor="text.secondary"
        fontWeight="medium"
      />
    </Center>
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path
        d="M48 0L0 0V48H0.299999C9.94709 48 18.6672 42.2544 22.4737 33.39L31.4615 12.4594C34.3773 5.66924 40.669 0.929361 48 0Z"
        fill={token('colors.surface.primary')}
      />
    </svg>
  </HStack>
);
