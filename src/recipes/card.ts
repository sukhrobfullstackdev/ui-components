import { cva, type RecipeVariantProps } from '@styled/css';

export const card = cva({
  base: {
    bgColor: 'surface.primary',
    borderRadius: '1rem',
  },
  variants: {
    asButton: {
      false: {
        cursor: 'default',
      },
      true: {
        alignItems: 'center',
        cursor: 'pointer',
        h: '10.75rem',
        justifyContent: 'center',
        p: 4,
        transition: 'all 0.1s ease',
        w: '10.75rem',
        _active: { transform: 'scale(0.95)' },
      },
    },
    alignment: {
      center: {
        alignItems: 'center',
      },
      left: {
        alignItems: 'flex-start',
      },
      right: {
        alignItems: 'flex-end',
      },
    },
    alt: {
      true: {},
    },
    expand: {
      false: {
        overflow: 'hidden',
      },
      true: {
        overflow: 'visible',
        w: 'full',
      },
    },
    gapType: {
      none: {
        gap: 0,
      },
      sm: {
        gap: 4,
      },
      md: {
        gap: 5,
      },
      lg: {
        gap: 6,
      },
    },
    heavyShadow: {
      false: {
        boxShadow: '0px 1px 2px rgba(189, 189, 189, 0.3)',
      },
      true: {
        boxShadow: '8px 8px 48px rgba(16, 15, 17, 0.14)',
      },
    },
    paddingType: {
      none: {
        p: 0,
      },
      sm: {
        px: 4,
        py: 3,
      },
      md: {
        px: 8,
        py: 6,
      },
      lg: {
        p: 12,
      },
    },
    widthMax: {
      true: {
        flex: 1,
        maxW: '29.125rem',
        mdDown: { maxW: 'full' },
      },
    },
    disabled: {
      true: {
        opacity: 0.3,
        pointerEvents: 'none',
      },
    },
    validating: {
      true: {
        pointerEvents: 'none',
      },
    },
  },
  compoundVariants: [
    {
      asButton: true,
      alt: true,
      css: {
        bgColor: 'surface.tertiary',
        color: 'text.secondary',
        _hover: {
          filter: 'brightness(0.9)',
        },
      },
    },
  ],
  defaultVariants: {
    alt: false,
    expand: false,
    gapType: 'md',
    heavyShadow: false,
    paddingType: 'md',
    widthMax: false,
  },
});

export type CardVariants = RecipeVariantProps<typeof card>;
