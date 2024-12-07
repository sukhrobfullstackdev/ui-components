import { LoadingSpinner } from '@components/feedback';
import { IcoCheckmarkCircleFill } from '@components/icons';
import { PinCodeInput, PinCodeInputProps } from '@components/inputs';
import { Text } from '@components/primitives';
import { Center, VStack } from '@styled/jsx';
import { token } from '@styled/tokens';
import { createHost, createSlot } from 'create-slots';

export interface VerifyPincodeProps extends PinCodeInputProps {
  isPending: boolean;
  isSuccess: boolean;
  errorMessage?: string;
  children?: React.ReactNode;
}

const RetryContent = createSlot(({ children }) => {
  return children;
});

const VerifyPincodeHost = (props: VerifyPincodeProps) => {
  const { isPending, isSuccess, onChange, onComplete, originName, pinLength, id, autoFocus, errorMessage, children } =
    props;

  const renderPincodeOrStatus = () => {
    if (isPending) return <LoadingSpinner size={36} strokeWidth={4} />;

    if (isSuccess) return <IcoCheckmarkCircleFill color={token('colors.brand.base')} width={36} height={36} />;

    return (
      <PinCodeInput
        originName={originName}
        onChange={onChange}
        pinLength={pinLength}
        onComplete={onComplete}
        id={id}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
      />
    );
  };

  return createHost(children, slots => {
    return (
      <VStack gap={3} my={3}>
        <Center height={12}>{renderPincodeOrStatus()}</Center>
        {errorMessage && (
          <Text variant="error" size="sm" styles={{ textAlign: 'center' }}>
            {errorMessage}
          </Text>
        )}
        {slots.get(RetryContent)}
      </VStack>
    );
  });
};

export const VerifyPincode = Object.assign(VerifyPincodeHost, { RetryContent });
