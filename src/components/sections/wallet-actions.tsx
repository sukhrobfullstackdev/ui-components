import { ButtonContainer } from '@components/containers';
import { Tooltip } from '@components/feedback';
import { Button, Text } from '@components/primitives';
import { css } from '@styled/css';
import { Box, Center, HStack, VStack } from '@styled/jsx';
import { createHost, createSlot, getSlotProps, isSlot } from 'create-slots/list';
import { Children, cloneElement, PropsWithChildren, ReactElement } from 'react';

export interface ActionProps extends PropsWithChildren {
  key?: string;
  label: string;
  onPress: () => void;
  actionBox?: boolean;
  disabledLabel?: string;
}

const Action = createSlot(({ actionBox, children, disabledLabel, label, onPress }: ActionProps) => {
  if (actionBox) {
    return (
      <Center
        h="76px"
        maxW="115px"
        w="full"
        opacity={disabledLabel ? 0.3 : 1}
        pointerEvents={disabledLabel ? 'none' : 'initial'}
      >
        <ButtonContainer
          className={css({
            _hover: { bgColor: 'neutral.secondary' },
            bgColor: 'neutral.tertiary',
            h: '100%',
          })}
          borderRadius="0.75rem"
          expand
          onPress={onPress}
        >
          <VStack gap={2}>
            {cloneElement(Children.only(children) as ReactElement, { height: 20, width: 20 })}
            <Text size="sm" styles={{ fontWeight: 500 }}>
              {label}
            </Text>
          </VStack>
        </ButtonContainer>
      </Center>
    );
  }

  return (
    <VStack gap={1} minW={20} opacity={disabledLabel ? 0.3 : 1} pointerEvents={disabledLabel ? 'none' : 'initial'}>
      <Button variant="neutral" size="sm" onPress={onPress} aria-label="Buy">
        <Button.LeadingIcon>{children}</Button.LeadingIcon>
      </Button>
      <Text size="sm" styles={{ fontWeight: 500 }}>
        {label}
      </Text>
    </VStack>
  );
});

export interface WalletActionsProps extends PropsWithChildren {
  actionBox?: boolean;
}

export const WalletActions = ({ actionBox, children }: WalletActionsProps) => (
  <Box w="full">
    {createHost(children, slots => {
      return (
        <HStack w="full" justifyContent="space-around" px={10}>
          {slots.map(slot => {
            if (isSlot(slot, Action)) {
              const { key, disabledLabel, ...slotProps } = getSlotProps(slot);

              if (disabledLabel) {
                return (
                  <Tooltip key={key} content={disabledLabel} width="max-content">
                    <Box>
                      <Action actionBox={actionBox} disabledLabel={disabledLabel} {...slotProps} />
                    </Box>
                  </Tooltip>
                );
              }
              return <Action key={key} actionBox={actionBox} {...slotProps} />;
            }
          })}
        </HStack>
      );
    })}
  </Box>
);

WalletActions.Action = Action;
