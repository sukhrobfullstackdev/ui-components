import { sva, type RecipeVariantProps } from '@styled/css';

export const overlay = sva({
  slots: ['bg', 'container'],
  base: {
    bg: {
      height: 'full',
      width: 'full',
      pointerEvents: 'all',
      position: 'fixed',
      top: 0,
      left: 0,
    },
    container: {
      height: '100vh',
      width: '100vw',
      maxWidth: '100rem',
      position: 'relative',
      margin: '0 auto',

      '@media (min-width: 48rem)': {
        height: 'fit-content',
      },
    },
  },
  variants: {
    fullscreen: {
      true: {
        container: {
          maxWidth: 'none',
        },
      },
    },
    animate: {
      false: {
        bg: {
          animationName: 'none',
        },
      },
    },
    backgroundType: {
      blurred: {
        bg: {
          backdropBlur: '0.375rem',
          backdropFilter: 'auto',
          backgroundColor: 'surface.primary/70',
        },
      },
      solid: {
        bg: {
          backgroundColor: 'surface.tertiary',
        },
      },
      transparent: {},
      none: {},
    },
    hide: { false: {} },
  },
  compoundVariants: [
    {
      animate: true,
      hide: false,
      css: {
        bg: {
          animationFillMode: 'forwards',
          animationName: 'fadeIn',
          animationDuration: '400ms',
        },
      },
    },
    {
      animate: true,
      hide: true,
      css: {
        bg: {
          animationFillMode: 'forwards',
          animationName: 'fadeOut',
          animationDuration: '400ms',
        },
      },
    },
  ],
  defaultVariants: {
    animate: true,
    backgroundType: 'none',
    hide: false,
  },
});

export type OverlayVariants = RecipeVariantProps<typeof overlay>;
