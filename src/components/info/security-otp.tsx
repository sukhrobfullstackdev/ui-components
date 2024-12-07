import { CopyButton } from '@components/info';
import { Text } from '@components/primitives';
import { Box, HStack } from '@styled/jsx';

export interface SecurityOtpProps {
  otp: string | number;
  color: string;
  onCopy: (value: string) => void;
}

const SecurityOtp = ({ otp, color, onCopy }: SecurityOtpProps) => {
  return (
    <HStack
      bg="neutral.quaternary"
      p={3}
      rounded="lg"
      minWidth="15rem"
      justifyContent="space-around"
      alignItems="center"
      width="full"
    >
      <HStack width="40%" justifyContent="space-around">
        <Text.Mono styles={{ fontSize: '24px', lineHeight: '27px' }}>{otp}</Text.Mono>
      </HStack>
      <Box borderLeft="thin solid" borderColor="neutral.tertiary" height={8} />
      <HStack width="40%" justifyContent="space-around">
        <CopyButton value={otp as string} showText={true} color={color} onCopy={onCopy} />
      </HStack>
    </HStack>
  );
};

SecurityOtp.displayName = 'SecurityOtp';

export default SecurityOtp;
