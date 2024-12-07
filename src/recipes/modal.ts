import { sva, type RecipeVariantProps } from '@styled/css';

export const modal = sva({
  slots: ['content', 'wrapper'],
  base: {
    content: {
      height: 'full',
      width: 'full',
      boxSizing: 'border-box',
    },
    wrapper: {
      height: 'full',
      width: 'full',
      bg: 'surface.primary',
      position: 'relative',
      overflow: 'auto',
      scrollbarWidth: 'none',
    },
  },
  variants: {
    fullscreen: {
      true: {
        wrapper: {
          height: '100vh',
          width: '100vw',
        },
      },
      false: {
        wrapper: {
          '@media (min-width: 48rem)': {
            top: 12,
            mx: 'auto',
            width: '25rem',
            height: 'fit-content',
            boxShadow: '0px 12px 56px {colors.ink.70/15}',
            borderRadius: 'container',
            _dark: {
              boxShadow: 'none',
            },
          },
        },
      },
    },
    animate: {
      false: {
        wrapper: {
          animationName: 'none',
          scale: 1,
        },
      },
    },
    isOpen: { true: {} },
    paddingType: {
      none: {
        wrapper: {
          p: 0,
        },
      },
      sm: {
        wrapper: {
          p: 2,
          pb: 0,
        },
      },
      md: {
        wrapper: {
          p: 4,
          pb: 0,
        },
      },
      lg: {
        wrapper: {
          p: 8,
          pb: 0,
        },
      },
    },
    showBorder: {
      true: {
        wrapper: {
          '@media (min-width: 48rem)': {
            _dark: {
              borderWidth: 1,
              borderBlock: 'solid',
              borderColor: 'neutral.secondary',
            },
          },
        },
      },
    },
    isMobileBrowser: { true: {} },
  },
  compoundVariants: [
    {
      animate: true,
      isOpen: true,
      css: {
        wrapper: {
          animationFillMode: 'forwards',
          animationName: 'scaleIn',
          animationDuration: '250ms',
          _motionReduce: { scale: 1 },
        },
      },
    },
    {
      animate: true,
      isOpen: false,
      css: {
        wrapper: {
          animationFillMode: 'forwards',
          animationName: 'scaleOut',
          animationDuration: '150ms',
          _motionReduce: { scale: 1 },
        },
      },
    },
    {
      fullscreen: true,
      isMobileBrowser: true,
      css: {
        wrapper: {
          '@media only screen and (max-width: 767px)': {
            height: '100dvh',
          },
        },
      },
    },
  ],
  defaultVariants: {
    animate: true,
    isOpen: true,
    paddingType: 'none',
  },
});

export type ModalVariants = RecipeVariantProps<typeof modal>;
