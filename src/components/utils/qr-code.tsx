import { css } from '@styled/css';
import { Flex } from '@styled/jsx';
import { token } from '@styled/tokens';
import { IProps, QRCode as LogoQRCode } from 'react-qrcode-logo';

export interface QRCodeProps extends IProps {
  value: string;
}

export default function QRCode({
  value,
  ecLevel = 'H',
  qrStyle = 'dots',
  eyeRadius = 0,
  eyeColor = token('colors.ink.90'),
  size = 160,
  logoImage = undefined,
  logoHeight = 32,
  logoWidth = 32,
  logoOpacity = 1,
  logoPadding = 0,
  logoPaddingStyle = 'square',
  logoOnLoad = undefined,
  removeQrCodeBehindLogo = false,
  enableCORS = false,
  quietZone = 5,
  bgColor = token('colors.chalk'),
  fgColor = token('colors.ink.90'),
  style = undefined,
  id = 'qr-code',
}: QRCodeProps) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      className={css({
        shadow: '0.125rem 0.125rem 1.5rem {colors.ink.70/15}',
        overflow: 'hidden',
        padding: 1,
        borderRadius: '1rem',
      })}
    >
      <LogoQRCode
        value={value}
        ecLevel={ecLevel}
        qrStyle={qrStyle}
        eyeRadius={eyeRadius}
        eyeColor={eyeColor}
        size={size}
        logoImage={logoImage}
        logoHeight={logoHeight}
        logoWidth={logoWidth}
        logoOpacity={logoOpacity}
        logoPadding={logoPadding}
        logoPaddingStyle={logoPaddingStyle}
        logoOnLoad={logoOnLoad}
        removeQrCodeBehindLogo={removeQrCodeBehindLogo}
        enableCORS={enableCORS}
        quietZone={quietZone}
        bgColor={bgColor}
        fgColor={fgColor}
        style={style}
        id={id}
        // This practice is discouraged. It is recommended to use this only
        // after the other queries don't work for your use case.
        // https://testing-library.com/docs/queries/bytestid
        data-testid={id}
      />
    </Flex>
  );
}
