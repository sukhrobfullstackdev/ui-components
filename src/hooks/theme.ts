import { useEffect, useState } from 'react';

const ColorSets = {
  brand: {
    base: {
      base: 0,
      lightest: 102,
      lighter: 51,
      darker: -51,
      darkest: -102,
    },
    dark: {
      base: 0,
      lightest: '25%',
      lighter: '66%',
      darker: 102,
      darkest: 102,
    },
  },
  neutral: {
    base: {
      primary: 0,
      secondary: 51,
      tertiary: 102,
      quaternary: 153,
    },
    dark: {
      primary: '16%',
      secondary: '12%',
      tertiary: '8%',
      quaternary: '5%',
    },
  },
  surface: {
    base: {
      primary: 0,
      secondary: -51,
      tertiary: -102,
    },
    dark: {
      primary: 0,
      secondary: 21,
      tertiary: 42,
    },
  },
  text: {
    base: {
      primary: 0,
      secondary: 51,
      tertiary: 102,
    },
    dark: {
      primary: 0,
      secondary: '72%',
      tertiary: '44%',
    },
  },
};

type ColorSet = keyof typeof ColorSets;
type RadiusType = 'button' | 'container' | 'input';

interface Props {
  onError?: (error: unknown) => void;
}

const normalizeColor = (color: string, opacity?: string): string => {
  color = color.replace(/[^0-9a-f]/gi, '').slice(0, 6);

  const alpha = opacity ? Math.round(0.01 * parseFloat(opacity) * 255).toString(16) : undefined;

  if (color.length < 3) return color;
  if (color.length < 6) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }

  return alpha ? color + alpha : color;
};

const calculateColorShade = (color: string, amt: number): string => {
  color = normalizeColor(color);

  // parse into RGB and reconstruct
  const num = parseInt(color, 16);
  const r = Math.min(Math.max(0, (num >> 16) + amt), 255);
  const g = Math.min(Math.max(0, (num & 0x0000ff) + amt), 255);
  const b = Math.min(Math.max(0, ((num >> 8) & 0x00ff) + amt), 255);

  return '#' + ('00000' + (g | (b << 8) | (r << 16)).toString(16)).slice(-6);
};

export const useCustomVars = ({ onError }: Props) => {
  const [docElement, setDocElement] = useState<HTMLElement | null>(null);

  const setColors = (type: ColorSet, hexColor: string) => {
    const baseColorSet = ColorSets[type].base;
    const darkColorSet = ColorSets[type].dark;
    let newColor;

    try {
      // process base color values
      for (const [key, value] of Object.entries(baseColorSet)) {
        newColor = calculateColorShade(hexColor, value);
        docElement?.style.setProperty(`--${type}-${key}`, newColor);
      }
      // process dark color values
      for (const [key, value] of Object.entries(darkColorSet)) {
        const isStr = typeof value === 'string';
        newColor = isStr ? '#' + normalizeColor(hexColor, value) : calculateColorShade(hexColor, value);
        docElement?.style.setProperty(`--${type}-${key}-dark`, newColor);
      }
    } catch (error: unknown) {
      onError?.(error);
    }
  };

  const setFont = (value: string) => {
    try {
      docElement?.style.setProperty('--brand-font', value);
    } catch (error: unknown) {
      onError?.(error);
    }
  };

  const setRadius = (type: RadiusType, value: string) => {
    try {
      docElement?.style.setProperty(`--${type}-radius`, value);
    } catch (error: unknown) {
      onError?.(error);
    }
  };

  useEffect(() => {
    setDocElement(document?.documentElement);
  }, []);

  return {
    setColors,
    setFont,
    setRadius,
  };
};
