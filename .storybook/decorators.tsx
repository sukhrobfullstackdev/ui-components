import { withConsole } from '@storybook/addon-console';
import React from 'react';
import { useCustomVars } from '../src/hooks/theme';

const decorators = [
  (StoryFn, context) => withConsole()(StoryFn)(context),
  (StoryFn, context) => {
    const { setColors, setFont, setRadius } = useCustomVars({});
    const { globals } = context;
    const htmlElement = document.querySelector('html');
    htmlElement?.setAttribute('data-color-mode', globals.mode);

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

    return <StoryFn />;
  },
];

export default decorators;
