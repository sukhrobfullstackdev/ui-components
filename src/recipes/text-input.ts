import { sva } from '@styled/css';

export const textInput = sva({
  slots: ['container', 'label', 'inputContainer', 'input', 'description', 'typeIcon', 'actionIcon', 'actionButton'],
  base: {
    label: {
      fontSize: 'sm',
      fontWeight: 'medium',
      color: 'text.primary',
    },
    inputContainer: {
      backgroundColor: 'transparent',
      borderStyle: 'solid',
      borderWidth: 'thin',
      borderColor: 'neutral.secondary',
      borderRadius: 'input',
      boxSizing: 'border-box',
      transition: 'all linear 120ms',
      width: '100%',

      _hover: {
        borderColor: 'neutral.primary',
      },

      _focusWithin: {
        outlineColor: 'brand.base',
        outlineStyle: 'solid',
        outlineWidth: 'thick',
        outlineOffset: 0.5,
      },
    },
    input: {
      transition: 'all linear 120ms',
      width: '100%',
      boxSizing: 'border-box',
      m: 0,
      p: 0,
      outline: 'none',
      minWidth: 10,
      fontWeight: 'normal',
      backgroundColor: 'transparent',
      color: 'text.primary',
      _placeholder: {
        color: 'text.tertiary',
      },

      _groupHover: {
        borderColor: 'neutral.primary',
      },
    },
    description: {
      fontSize: 'sm',
      color: 'text.primary',
    },
    typeIcon: {
      transition: 'opacity linear 120ms',
    },
    actionIcon: {
      transition: 'opacity linear 120ms',
      cursor: 'pointer',
    },
    actionButton: {
      transition: 'opacity linear 120ms',
    },
  },
  variants: {
    size: {
      sm: {
        input: {
          fontSize: 'sm',
          textAlign: 'left',
        },
        inputContainer: {
          height: 10,
          p: 3,
        },
      },
      md: {
        input: {
          fontSize: 'md',
          textAlign: 'left',
        },
        inputContainer: {
          height: 12,
          p: 3,
        },
      },
      lg: {
        input: {
          fontSize: 'lg',
          textAlign: 'left',
        },
        inputContainer: {
          height: 15,
          padding: 4,
        },
      },
    },
    alignText: {
      left: {
        input: {
          textAlign: 'left',
        },
        container: {
          alignItems: 'flex-start',
        },
      },
      center: {
        input: {
          textAlign: 'center',
        },
        container: {
          alignItems: 'center',
        },
      },
      right: {
        input: {
          textAlign: 'right',
        },
        container: {
          alignItems: 'flex-end',
        },
      },
    },
    isError: {
      true: {
        inputContainer: {
          borderColor: 'negative.base',
        },
      },
    },
    char: {
      true: {
        input: {
          fontSize: 'xl',
          textAlign: 'center',
        },
        inputContainer: {
          height: 12,
          py: 2,
        },
      },
    },
    disabled: {
      true: {
        container: {
          opacity: 0.3,
          pointerEvents: 'none',
        },
        inputContainer: {
          _hover: {
            borderColor: 'neutral.secondary',
          },
        },
      },
    },
  },
});
