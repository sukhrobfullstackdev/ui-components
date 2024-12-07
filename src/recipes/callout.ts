import { sva } from '@styled/css';

export const callout = sva({
  slots: ['container', 'label', 'description', 'icon', 'button', 'focus'],
  base: {
    container: {
      px: 4,
      py: 3,
      rounded: 10,
      w: 'full',
    },
    button: {
      cursor: 'pointer',
      outline: 'none',
      _focusVisible: {
        outlineColor: 'brand.base',
        outlineStyle: 'solid',
        outlineWidth: 'thick',
        outlineOffset: 0.5,
        rounded: 2,
      },
    },
    label: {
      textAlign: 'left',
    },
  },
  variants: {
    size: {
      sm: {
        label: { fontSize: 'sm' },
      },
      md: {
        label: { fontSize: 'md' },
      },
      lg: {
        label: { fontSize: 'lg' },
      },
    },
    variant: {
      branded: {
        container: {
          bg: 'brand.lightest',
          _focusVisible: {
            outlineColor: 'brand.lightest',
          },
        },
        label: {
          color: 'brand.darkest',
        },
        description: {
          color: 'brand.darkest',
        },
        icon: {
          color: 'brand.darkest',
        },
        button: {
          color: 'brand.darkest',
        },
      },
      success: {
        container: {
          bg: 'positive.lightest',
          _focusVisible: {
            outlineColor: 'positive.lightest',
          },
        },
        label: {
          color: 'positive.darkest',
        },
        description: {
          color: 'positive.darkest',
        },
        icon: {
          color: 'positive.darkest',
        },
        button: {
          color: 'positive.darkest',
        },
      },
      error: {
        container: {
          bg: 'negative.lightest',
          _focusVisible: {
            outlineColor: 'negative.lightest',
          },
        },
        label: {
          color: 'negative.darkest',
          _dark: {
            color: 'negative.base',
          },
        },
        description: {
          color: 'negative.darkest',
          _dark: {
            color: 'negative.base',
          },
        },
        icon: {
          color: 'negative.darkest',
          _dark: {
            color: 'negative.base',
          },
        },
        button: {
          color: 'negative.darkest',
          _dark: {
            color: 'negative.base',
          },
        },
      },
      warning: {
        container: {
          bg: 'warning.lightest',
          _focusVisible: {
            outlineColor: 'warning.lightest',
          },
        },
        label: {
          color: 'warning.darkest',
        },
        description: {
          color: 'warning.darkest',
        },
        icon: {
          color: 'warning.darkest',
        },
        button: {
          color: 'warning.darkest',
        },
      },
      neutral: {
        container: {
          bg: 'surface.secondary',
          _focusVisible: {
            outlineColor: 'surface.secondary',
          },
        },
        label: {
          color: 'text.secondary',
        },
        description: {
          color: 'text.secondary',
        },
        icon: {
          color: 'text.secondary',
        },
        button: {
          color: 'text.secondary',
        },
      },
    },
    icon: {
      true: {
        description: {
          ml: 7,
        },
      },
    },
    dismissible: {
      true: {
        description: {
          mr: 7,
        },
      },
    },
    interactive: {
      true: {
        container: {
          cursor: 'pointer',
          transition: 'transform 0.2s ease, opacity 0.2s ease',
          _active: { transform: 'scale(0.95)' },
          _hover: {
            opacity: 0.8,
          },
          _focusVisible: {
            outlineStyle: 'solid',
            outlineWidth: 'thick',
            outlineOffset: 0.5,
          },
        },
      },
    },
    description: {
      true: {
        label: {
          textTransform: 'uppercase',
          fontSize: 'xs',
          fontWeight: 'semibold',
          letterSpacing: '0.06rem',
        },
      },
    },
    isDismissed: {
      true: {
        container: {
          animationFillMode: 'forwards',
          animationName: 'scaleOut',
          animationDuration: '150ms',
          _motionReduce: { scale: 1 },
        },
      },
    },
  },
});
