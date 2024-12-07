import { DocsContainer } from '@storybook/addon-docs';
import React from 'react';
import { useCustomVars } from '../src/hooks/theme';
import { darkTheme, lightTheme } from './theme';

const container = ({ children, context }) => {
  const { setColors, setFont, setRadius } = useCustomVars({});
  const { globals } = context.store.userGlobals;
  const isDark = globals.mode === 'dark';
  const props = {
    context,
    theme: isDark ? darkTheme : lightTheme,
  };

  if (globals.brandColor) {
    setColors('brand', globals.brandColor);
  }

  if (globals.surfaceColor) {
    setColors('surface', globals.surfaceColor);
  }

  if (globals.textColor) {
    setColors('text', globals.textColor);
  }

  if (globals.neutralColor) {
    setColors('neutral', globals.neutralColor);
  }

  if (globals.buttonRadius) {
    setRadius('button', globals.buttonRadius);
  }

  if (globals.containerRadius) {
    setRadius('container', globals.containerRadius);
  }

  if (globals.inputRadius) {
    setRadius('input', globals.inputRadius);
  }

  if (globals.brandFont) {
    setFont(globals.brandFont);
  }

  return (
    <DocsContainer {...props}>
      <div data-color-mode={globals.mode}>{children}</div>
    </DocsContainer>
  );
};

export default container;
