import { Children, cloneElement, PropsWithChildren, ReactElement } from 'react';
import { Box, Center, Flex, HStack } from '@styled/jsx';
import { createHost, createSlot } from 'create-slots';
import Text from '@components/primitives/text';
import { css, cx } from '@styled/css';
import { ButtonContainer } from '@components/containers';

export interface ActivityListItemProps extends PropsWithChildren {
  onPress?: () => void;
  title: string;
  subtitle?: string;
  primaryValue: string;
  primaryValueColor?: string;
  secondaryValue?: string;
}

export interface IconProps extends PropsWithChildren {
  backgroundColor?: string;
}

export interface DoubleIconProps {
  backgroundColor?: string;
  children: ReactElement[];
}

const PrimaryIcon = createSlot(({ backgroundColor, children }: IconProps) => (
  <Center borderRadius={60} height={11} width={11} backgroundColor={backgroundColor} overflow="hidden">
    {cloneElement(Children.only(children) as ReactElement, { height: 24, width: 24 })}
  </Center>
));

const DoubleIcon = createSlot(({ backgroundColor, children }: DoubleIconProps) => {
  return (
    <Box height={10} width={10} position="relative">
      <Flex
        alignItems="center"
        justifyContent="center"
        position="absolute"
        backgroundColor={backgroundColor}
        height={7}
        width={7}
        borderRadius={30}
      >
        {cloneElement(children[0] as ReactElement, { height: 20, width: 20 })}
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        position="absolute"
        backgroundColor={backgroundColor}
        borderRadius={30}
        height={7}
        width={7}
        bottom={0}
        right={0}
      >
        {cloneElement(children[1] as ReactElement, { height: 20, width: 20 })}
      </Flex>
    </Box>
  );
});

const SecondaryIcon = createSlot(({ backgroundColor, children }: IconProps) => (
  <Flex
    backgroundColor={backgroundColor}
    borderRadius={30}
    alignItems="center"
    justifyContent="center"
    borderWidth="2"
    borderColor="neutral.tertiary"
    width="5"
    height="5"
  >
    {cloneElement(Children.only(children) as ReactElement, { height: 10, width: 10 })}
  </Flex>
));

const ActivityListItemHost = ({
  title,
  subtitle,
  primaryValue,
  primaryValueColor,
  secondaryValue,
  children,
  onPress,
  ...props
}: ActivityListItemProps) => {
  return createHost(children, slots => {
    const doubleIcon = slots.get(DoubleIcon);
    const primaryIcon = slots.get(PrimaryIcon);
    const secondaryIcon = slots.get(SecondaryIcon);

    return (
      <ButtonContainer borderRadius="0.375rem" expand onPress={onPress}>
        <HStack
          p={3}
          gap={2}
          w="full"
          pos="relative"
          className={cx(
            css({
              _active: { transform: 'scale(0.95)' },
              _hover: { bgColor: 'neutral.secondary' },
              bgColor: 'neutral.tertiary',
            }),
          )}
          borderRadius="md"
          justify="space-between"
          alignItems="center"
          {...props}
        >
          <HStack>
            {doubleIcon && doubleIcon}
            {primaryIcon && primaryIcon}
            {secondaryIcon && (
              <Box position="absolute" left={9} top={11}>
                {secondaryIcon}
              </Box>
            )}
            <Box>
              <Text truncate={true} size="md" fontWeight="bold">
                {title}
              </Text>{' '}
              {subtitle && (
                <Text truncate={true} size="sm" fontColor="text.secondary">
                  {subtitle}
                </Text>
              )}
            </Box>
          </HStack>

          <Box>
            <Text truncate={true} size="md" styles={{ textAlign: 'end', color: primaryValueColor }} {...props}>
              {primaryValue}
            </Text>
            {secondaryValue && (
              <Text truncate={true} size="sm" styles={{ textAlign: 'end' }} fontColor="text.secondary">
                {secondaryValue}
              </Text>
            )}
          </Box>
        </HStack>
      </ButtonContainer>
    );
  });
};

export const ActivityListItem = Object.assign(ActivityListItemHost, {
  DoubleIcon,
  PrimaryIcon,
  SecondaryIcon,
});
