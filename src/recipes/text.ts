import { cva, type RecipeVariantProps } from '@styled/css';

export const text = cva({
  base: {
    textWrap: 'wrap',
  },
  variants: {
    mono: {
      false: {},
      true: {},
    },
    scale: {
      false: {},
      true: {},
    },
    variant: {
      text: {
        color: 'text.primary',
      },
      error: {
        color: 'negative.darker',
      },
      info: {
        color: 'brand.base',
      },
      success: {
        color: 'positive.base',
      },
      warning: {
        color: 'warning.base',
      },
    },
    size: {
      xs: {
        textStyle: 'body-xs',
      },
      sm: {
        textStyle: 'body-sm',
      },
      md: {
        textStyle: 'body-md',
      },
      lg: {
        textStyle: 'body-lg',
      },
    },
  },
  compoundVariants: [
    {
      scale: true,
      size: 'sm',
      css: {
        textStyle: 'body-sm-scaled',
      },
    },
    {
      scale: true,
      size: 'md',
      css: {
        textStyle: 'body-md-scaled',
      },
    },
    {
      scale: true,
      size: 'lg',
      css: {
        textStyle: 'body-lg-scaled',
      },
    },
    {
      mono: true,
      size: 'sm',
      css: {
        textStyle: 'mono-sm',
      },
    },
    {
      mono: true,
      size: 'md',
      css: {
        textStyle: 'mono-md',
      },
    },
    {
      mono: true,
      size: 'lg',
      css: {
        textStyle: 'mono-lg',
      },
    },
  ],
  defaultVariants: {
    mono: false,
    variant: 'text',
    size: 'md',
  },
});

export type TextVariants = RecipeVariantProps<typeof text>;
