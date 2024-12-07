import { sva, type RecipeVariantProps } from '@styled/css';

export const toast = sva({
  slots: ['container', 'portal', 'toast', 'icon', 'dismiss'],
  base: {
    portal: {
      boxSizing: 'border-box',
      position: 'fixed',
      zIndex: 'max',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      pointerEvents: 'none',
    },
    container: {
      height: 'full',
      width: 'full',
      p: '20px',
    },
    toast: {
      py: 2,
      px: 4,
      rounded: 10,
      boxShadow: '4px 8px 20px 0px rgba(0, 0, 0, 0.15)',
    },
    dismiss: {
      cursor: 'pointer',
      pointerEvents: 'all',
    },
    icon: {
      color: 'surface.primary',
      height: '1rem',
      width: '1rem',
    },
  },
  variants: {
    variant: {
      branded: {
        toast: {
          backgroundColor: 'brand.base',
        },
      },
      success: {
        toast: {
          backgroundColor: 'positive.darker',
        },
      },
      warning: {
        toast: {
          backgroundColor: 'warning.darker',
        },
      },
      error: {
        toast: {
          backgroundColor: 'negative.darker',
        },
      },
      neutral: {
        toast: {
          backgroundColor: 'text.tertiary',
          _dark: {
            backgroundColor: 'text.secondary',
          },
        },
      },
    },
    position: {
      top: {
        container: {
          alignItems: 'center',
          justifyContent: 'flex-start',
        },
      },
      'top-left': {
        container: {
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        },
      },
      'top-right': {
        container: {
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
        },
      },
      bottom: {
        container: {
          alignItems: 'center',
          justifyContent: 'flex-end',
        },
      },
      'bottom-left': {
        container: {
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
        },
      },
      'bottom-right': {
        container: {
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        },
      },
    },
  },
  defaultVariants: {
    position: 'top-right',
    variant: 'branded',
  },
});

export type ToastVariants = RecipeVariantProps<typeof toast>;
