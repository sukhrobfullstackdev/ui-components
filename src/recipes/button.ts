import { sva } from '@styled/css';

export const button = sva({
  slots: ['button', 'label', 'focus', 'icon', 'iconContainer'],
  base: {
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      fontWeight: 'semibold',
      boxSizing: 'border-box',
      borderRadius: 'button',
      border: 'thin solid',
      borderColor: 'transparent',
      cursor: 'pointer',
      transition: 'all 0.1s ease',
      outline: 'none',
      willChange: 'transform, opacity',
      bg: 'none',
      _active: { transform: 'scale(0.95)' },
      _disabled: { opacity: '0.3', pointerEvents: 'none' },
      _before: {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 'inherit',
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))',
        _dark: { backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))` },
        opacity: 0,
        transition: 'opacity 0.1s ease',
      },
      _hover: {
        _before: {
          opacity: 1,
        },
      },
    },
    label: {
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      transition: 'all 0.1s ease',
    },
    focus: {
      outlineColor: 'brand.base',
      outlineStyle: 'solid',
      outlineWidth: 'thick',
      outlineOffset: 0.5,
    },
    icon: {
      transition: 'all 0.1s ease',
    },
  },
  variants: {
    size: {
      sm: {
        button: {
          h: 9,
          py: 1.5,
          px: 4,
        },
        label: {
          fontSize: 'sm',
          lineHeight: '1.5rem',
        },
        iconContainer: {
          w: 9,
          p: 1.5,
        },
      },
      md: {
        button: {
          h: 12,
          py: 3,
          px: 6,
        },
        label: {
          fontSize: 'md',
          lineHeight: '1.5rem',
        },
        iconContainer: {
          w: 12,
          p: 3,
        },
      },
      lg: {
        button: {
          h: 15,
          py: 4,
          px: 6,
        },
        label: {
          fontSize: 'lg',
          lineHeight: '1.75rem',
        },
        iconContainer: {
          w: 15,
          p: 4,
        },
      },
    },
    variant: {
      primary: {
        button: {
          bg: 'brand.base',
        },
        label: {
          color: 'surface.primary',
        },
        icon: {
          color: 'surface.primary',
        },
      },
      secondary: {
        button: {
          bg: 'brand.lightest',
        },
        label: {
          color: 'brand.darker',
        },
        icon: {
          color: 'brand.darker',
        },
      },
      positive: {
        button: {
          bg: 'positive.darker',
        },
        label: {
          color: 'surface.primary',
        },
        icon: {
          color: 'surface.primary',
        },
      },
      negative: {
        button: {
          bg: 'negative.darker',
        },
        label: {
          color: 'surface.primary',
        },
        icon: {
          color: 'surface.primary',
        },
      },
      neutral: {
        button: {
          bg: 'neutral.tertiary',
          _light: {
            mixBlendMode: 'multiply',
          },
        },
        label: {
          color: 'text.primary',
        },
        icon: {
          color: 'text.primary',
        },
      },
      tertiary: {
        button: {
          bg: 'transparent',
          borderColor: 'neutral.primary',
        },
        label: {
          color: 'text.primary',
        },
        icon: {
          color: 'brand.base',
        },
      },
      text: {
        button: {
          p: 0,
          h: 'fit-content',
          _hover: {
            _before: {
              opacity: 0,
            },
          },
        },
        label: {
          color: 'brand.base',
          _groupHover: {
            color: 'brand.darkest',
            _dark: {
              color: 'brand.lighter',
            },
          },
        },
        icon: {
          color: 'brand.base',
          _groupHover: {
            color: 'brand.darkest',
            _dark: {
              color: 'brand.lighter',
            },
          },
        },
      },
      transparent: {
        button: {
          bg: { base: '#ffffff14', _hover: '#ffffff4d' },
          _dark: { bg: '#ffffff29' },
          backdropFilter: 'blur(3px)',
          _before: { display: 'none' },
        },
        label: {
          color: 'chalk',
        },
        icon: {
          color: 'chalk',
        },
      },
      inverse: {
        button: {
          bg: 'ink.90',
          _dark: {
            bg: 'paper',
          },
          _before: {
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
            _dark: { backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05))' },
          },
        },
        label: {
          color: 'chalk',
          _dark: {
            color: 'ink.90',
          },
        },
        icon: {
          color: 'chalk',
          _dark: {
            color: 'ink.90',
          },
        },
      },
    },
    validating: {
      true: {
        button: {
          pointerEvents: 'none',
        },
      },
    },
    expand: {
      true: {
        button: {
          width: 'full',
        },
      },
    },
    iconOnly: {
      true: {
        button: {
          borderRadius: 'full',
        },
      },
    },
    textStyle: {
      positive: {},
      negative: {},
      neutral: {},
      subtle: {},
    },
  },
  compoundVariants: [
    {
      textStyle: 'positive',
      css: {
        label: {
          color: 'positive.base',
        },
        icon: {
          color: 'positive.base',
        },
      },
    },
    {
      variant: 'text',
      textStyle: 'positive',
      css: {
        label: {
          _groupHover: {
            color: 'positive.darker',
            _dark: { color: 'positive.darker' },
          },
        },
        icon: {
          _groupHover: {
            color: 'positive.darker',
            _dark: { color: 'positive.darker' },
          },
        },
      },
    },
    {
      textStyle: 'negative',
      css: {
        label: {
          color: 'negative.darker',
          _dark: { color: 'negative.base' },
        },
        icon: {
          color: 'negative.darker',
          _dark: { color: 'negative.base' },
        },
      },
    },
    {
      variant: 'text',
      textStyle: 'negative',
      css: {
        label: {
          _groupHover: {
            color: 'negative.darkest',
            _dark: { color: 'negative.lighter' },
          },
        },
        icon: {
          _groupHover: {
            color: 'negative.darkest',
            _dark: { color: 'negative.lighter' },
          },
        },
      },
    },
    {
      textStyle: 'neutral',
      css: {
        label: {
          color: 'text.primary',
        },
        icon: {
          color: 'text.primary',
        },
      },
    },
    {
      variant: 'text',
      textStyle: 'neutral',
      css: {
        label: {
          _groupHover: {
            color: 'text.secondary',
            _dark: { color: 'text.secondary' },
          },
        },
        icon: {
          _groupHover: {
            color: 'text.secondary',
            _dark: { color: 'text.secondary' },
          },
        },
      },
    },
    {
      textStyle: 'subtle',
      css: {
        label: {
          color: 'text.tertiary',
        },
        icon: {
          color: 'text.tertiary',
        },
      },
    },
    {
      variant: 'text',
      textStyle: 'subtle',
      css: {
        label: {
          _groupHover: {
            color: 'text.secondary',
            _dark: { color: 'text.secondary' },
          },
        },
        icon: {
          _groupHover: {
            color: 'text.secondary',
            _dark: { color: 'text.secondary' },
          },
        },
      },
    },
    {
      variant: 'text',
      iconOnly: true,
      css: {
        iconContainer: {
          p: 1.5,
          w: 'fit-content',
        },
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});
