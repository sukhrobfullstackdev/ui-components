import { defineTokens } from '@pandacss/dev';

export const colorTokens = defineTokens.colors({
  slate: {
    0: { value: '#19191A' },
    1: { value: '#252525' },
    2: { value: '#303030' },
    3: { value: '#383838' },
    4: { value: '#474747' },
  },
  ink: {
    10: { value: '#F8F8FA' },
    20: { value: '#EDEDF3' },
    30: { value: '#E2E0E5' },
    40: { value: '#CCCAD0' },
    50: { value: '#B6B4BA' },
    60: { value: '#97959A' },
    70: { value: '#77767A' },
    80: { value: '#4E4D52' },
    90: { value: '#18171A' },
  },
  magic: {
    10: { value: '#EDEBFF' },
    20: { value: '#CAC2FF' },
    30: { value: '#A799FF' },
    40: { value: '#8875FF' },
    50: { value: '#6851FF' },
    60: { value: '#5D40EA' },
    70: { value: '#522FD4' },
    80: { value: '#4421C3' },
    90: { value: '#3512B2' },
  },
  leaf: {
    10: { value: '#E3FAF3' },
    20: { value: '#BAF5E3' },
    30: { value: '#90F0D3' },
    40: { value: '#48DEB1' },
    50: { value: '#00CC8F' },
    60: { value: '#00AA77' },
    70: { value: '#00875F' },
    80: { value: '#007753' },
    90: { value: '#006647' },
  },
  ruby: {
    10: { value: '#FFEAE5' },
    20: { value: '#FFC3B3' },
    30: { value: '#FF9B80' },
    40: { value: '#FE7C58' },
    50: { value: '#FC5C30' },
    60: { value: '#E84718' },
    70: { value: '#D43100' },
    80: { value: '#C12E02' },
    90: { value: '#AD2B03' },
  },
  gold: {
    10: { value: '#FCF4E5' },
    20: { value: '#FEE5BD' },
    30: { value: '#FFD594' },
    40: { value: '#EDBD72' },
    50: { value: '#DBA550' },
    60: { value: '#BF8832' },
    70: { value: '#A36B14' },
    80: { value: '#97630C' },
    90: { value: '#8A5A03' },
  },
  sky: {
    10: { value: '#EBF0FE' },
    20: { value: '#AFC4FF' },
    30: { value: '#7398FF' },
    40: { value: '#5482FB' },
    50: { value: '#346BF7' },
    60: { value: '#295EE7' },
    70: { value: '#1E50D6' },
    80: { value: '#1344C7' },
    90: { value: '#0737B8' },
  },
  chalk: { value: '#FFFFFF' },
  paper: { value: '#FFFFFF' },
});

export const borderWidthTokens = defineTokens.borderWidths({
  thin: { value: '0.0625rem' },
  medium: { value: '0.09375rem' },
  thick: { value: '0.125rem' },
});

export const radiiTokens = defineTokens.radii({
  button: { value: 'var(--button-radius, 9999px)' },
  container: { value: 'var(--container-radius, 1.75rem)' },
  input: { value: 'var(--input-radius, 0.5rem)' },
});

export const sizeTokens = defineTokens.sizes({
  // Extends from these panda defaults: https://panda-css.com/docs/customization/theme#spacing
  13: { value: '3.25rem' },
  15: { value: '3.75rem' },
});

export const zIndexTokens = defineTokens.zIndex({
  max: { value: '2147483647' },
});
