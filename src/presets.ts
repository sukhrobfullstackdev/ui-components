import { definePreset } from '@pandacss/dev';
import { keyframes } from './styles/keyframes';
import { semanticColors } from './styles/semantic-tokens';
import { textStyles } from './styles/text-styles';
import { borderWidthTokens, colorTokens, radiiTokens, sizeTokens, zIndexTokens } from './styles/tokens';

export const magicPreset = definePreset({
  theme: {
    extend: {
      keyframes,
      semanticTokens: {
        colors: semanticColors,
      },
      textStyles,
      tokens: {
        colors: colorTokens,
        borderWidths: borderWidthTokens,
        radii: radiiTokens,
        sizes: sizeTokens,
        zIndex: zIndexTokens,
      },
    },
  },
  utilities: {
    extend: {
      truncate: {
        className: 'truncate',
        values: { type: 'boolean' },
        transform(value) {
          if (!value) return {};
          return {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          };
        },
      },
    },
  },
});
