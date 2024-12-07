import { Button, Popover, Text } from '@components/primitives';
import { css } from '@styled/css/css';
import { Divider, Stack } from '@styled/jsx';
import { useEffect, useState } from 'react';

export interface AccountMenuProps {
  avatarUrl?: string;
  email?: string;
  name?: string;
  logoutLabel?: string;
  onLogout?: () => void;
}

export const AccountMenu = ({ avatarUrl, email, name, logoutLabel = 'Log out', onLogout }: AccountMenuProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [avatarUrl]);

  return (
    <Popover iconSize={28} placement="bottom right" variant="text">
      <Popover.LeadingIcon>
        {avatarUrl && !error ? (
          <img style={{ borderRadius: '50%' }} src={avatarUrl} alt="user avatar" onError={() => setError(true)} />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle
              cx="14"
              cy="14"
              r="13"
              fill="url(#paint0_radial_3600_63997)"
              stroke="white"
              strokeOpacity="0.24"
              strokeWidth="0.5"
            />
            <defs>
              <radialGradient
                id="paint0_radial_3600_63997"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15 30.75) rotate(-90) scale(37.3333 65.833)"
              >
                <stop offset="0.01" stopColor="#FFF507" />
                <stop offset="0.259381" stopColor="#F09BEB" />
                <stop offset="0.598165" stopColor="#412CB9" />
                <stop offset="1" stopColor="#18171A" />
              </radialGradient>
            </defs>
          </svg>
        )}
      </Popover.LeadingIcon>
      <Popover.Content className={css({ w: name && email ? '200px' : 'fit-content', maxW: '200px' })}>
        <Stack w="full" alignItems="start" gap={0}>
          {(email || name) && (
            <Stack w="full" gap={1}>
              {name && <Text fontWeight="medium">{name}</Text>}
              {email && (
                <Text size="sm" truncate fontColor="text.secondary">
                  {email}
                </Text>
              )}
            </Stack>
          )}
          {(email || name) && <Divider color="surface.quaternary" my={3} minW="88px" />}
          <Button label={logoutLabel} textStyle="negative" variant="text" size="sm" onPress={onLogout} />
        </Stack>
      </Popover.Content>
    </Popover>
  );
};
