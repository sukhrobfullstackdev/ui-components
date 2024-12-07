import { IcoGlobe, IcoRemove } from '@components/icons';
import { Button, Popover, Text } from '@components/primitives';
import { css } from '@styled/css/css';
import { Circle, Divider, Stack } from '@styled/jsx';
import { token } from '@styled/tokens';
import { useEffect, useState } from 'react';

export interface ConnectionMenuProps {
  connected?: boolean;
  connectedLabel?: string;
  disconnectLabel?: string;
  disconnectedLabel?: string;
  domain: string;
  logoUrl?: string;
  onDisconnect?: () => void;
}

export const ConnectionMenu = ({
  connected,
  connectedLabel = 'Connected',
  disconnectLabel,
  disconnectedLabel = 'Not connected',
  domain,
  logoUrl,
  onDisconnect,
}: ConnectionMenuProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [logoUrl]);

  return (
    <Popover iconSize={28} variant="text">
      <Popover.LeadingIcon color={token('colors.text.tertiary')}>
        {logoUrl && connected && !error ? (
          <Circle position="relative" w={7} h={7}>
            <img
              style={{ borderRadius: '50%' }}
              width={28}
              height={28}
              src={logoUrl}
              alt="app logo"
              onError={() => setError(true)}
            />
            <Circle
              size="7px"
              position="absolute"
              bg="positive.base"
              borderWidth="thin"
              borderColor="surface.primary"
              bottom="-1px"
              right="-1px"
              boxSizing="border-box"
            />
          </Circle>
        ) : (
          <svg width="28" height="28">
            <circle cx="14" cy="14" r="14" fill={token('colors.surface.tertiary')} />
            <IcoGlobe color={token('colors.text.tertiary')} x={6} y={6} height={16} width={16} />
          </svg>
        )}
      </Popover.LeadingIcon>
      <Popover.Content className={css({ w: '200px' })}>
        <Stack w="100%" gap={1} overflow="hidden">
          {!connected ? (
            <Text fontColor="text.tertiary" size="xs">
              {disconnectedLabel}
            </Text>
          ) : (
            <Text size="xs" variant="success" fontWeight="normal">
              {connectedLabel}
            </Text>
          )}
          <Text truncate>{domain}</Text>
        </Stack>
        {connected && disconnectLabel && (
          <>
            <Divider color="surface.quaternary" my={3} />
            <Button label={disconnectLabel} size="sm" textStyle="negative" variant="text" onPress={onDisconnect}>
              <Button.LeadingIcon>
                <svg width="20" height="20">
                  <circle cx="8" cy="8" r="8" fill={token('colors.negative.lightest')} />
                  <IcoRemove color={token('colors.negative.base')} x={3} y={3} height={10} width={10} />
                </svg>
              </Button.LeadingIcon>
            </Button>
          </>
        )}
      </Popover.Content>
    </Popover>
  );
};
