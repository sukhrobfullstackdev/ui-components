import { defineTextStyles } from '@pandacss/dev';

export const textStyles = defineTextStyles({
  h1: {
    description: 'h1 default styling',
    value: {
      fontSize: '2.5rem',
      lineHeight: '3.5rem',
      fontWeight: 'extrabold',
    },
  },
  'h1-scaled': {
    description: 'h1 scalable styling',
    value: {
      fontSize: {
        base: '2.5rem',
        lg: '5rem',
      },
      lineHeight: {
        base: '3.25rem',
        lg: '5.5rem',
      },
      fontWeight: 'extrabold',
    },
  },
  h2: {
    description: 'h2 default styling',
    value: {
      fontSize: '2rem',
      lineHeight: '2.75rem',
      fontWeight: 'extrabold',
    },
  },
  'h2-scaled': {
    description: 'h2 scalable styling',
    value: {
      fontSize: {
        base: '2.25rem',
        lg: '4rem',
      },
      lineHeight: {
        base: '3rem',
        lg: '4.75rem',
      },
      fontWeight: 'extrabold',
    },
  },
  h3: {
    description: 'h3 default styling',
    value: {
      fontSize: '1.5rem',
      lineHeight: '2.25rem',
      fontWeight: 'bold',
    },
  },
  'h3-scaled': {
    description: 'h3 scalable styling',
    value: {
      fontSize: {
        base: '2rem',
        lg: '3rem',
      },
      lineHeight: {
        base: '2.75rem',
        lg: '4rem',
      },
      fontWeight: 'extrabold',
    },
  },
  h4: {
    description: 'h4 default styling',
    value: {
      fontSize: '1.25rem',
      lineHeight: '2rem',
      fontWeight: 'bold',
    },
  },
  'h4-scaled': {
    description: 'h4 scalable styling',
    value: {
      fontSize: {
        base: '1.25rem',
        lg: '1.5rem',
      },
      lineHeight: {
        base: '2rem',
        lg: '2.25rem',
      },
      fontWeight: 'bold',
    },
  },
  h5: {
    description: 'h5 default styling',
    value: {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      fontWeight: 'bold',
    },
  },
  'h5-scaled': {
    description: 'h5 scalable styling',
    value: {
      fontSize: {
        base: '1.125rem',
        lg: '1.25rem',
      },
      lineHeight: {
        base: '1.75rem',
        lg: '2rem',
      },
      fontWeight: 'bold',
    },
  },
  h6: {
    description: 'h6 default styling',
    value: {
      fontSize: '0.75rem',
      lineHeight: '0.75rem',
      fontWeight: 'semibold',
      letterSpacing: '0.06rem',
      textTransform: 'uppercase',
    },
  },
  'h6-scaled': {
    description: 'h6 scalable styling',
    value: {
      fontSize: {
        base: '0.625rem',
        lg: '0.75rem',
      },
      lineHeight: {
        base: '0.75rem',
        lg: '0.75rem',
      },
      fontWeight: 'semibold',
      letterSpacing: '0.06rem',
      textTransform: 'uppercase',
    },
  },
  'body-lg': {
    description: 'body text large default styling',
    value: {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      fontWeight: 'normal',
    },
  },
  'body-lg-scaled': {
    description: 'body text large scalable styling',
    value: {
      fontSize: {
        base: '1rem',
        lg: '1.125rem',
      },
      lineHeight: {
        base: '1.5rem',
        lg: '1.75rem',
      },
      fontWeight: 'normal',
    },
  },
  'body-md': {
    description: 'body text medium default styling',
    value: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontWeight: 'normal',
    },
  },
  'body-md-scaled': {
    description: 'body text medium default styling',
    value: {
      fontSize: {
        base: '0.875rem',
        lg: '1rem',
      },
      lineHeight: {
        base: '1.5rem',
        lg: '1.5rem',
      },
      fontWeight: 'normal',
    },
  },
  'body-sm': {
    description: 'body text small default styling',
    value: {
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
      fontWeight: 'normal',
    },
  },
  'body-sm-scaled': {
    description: 'body text small default styling',
    value: {
      fontSize: {
        base: '0.75rem',
        lg: '0.875rem',
      },
      lineHeight: {
        base: '1.25rem',
        lg: '1.5rem',
      },
      fontWeight: 'normal',
    },
  },
  'body-xs': {
    description: 'body text fine print default styling',
    value: {
      fontSize: '0.75rem',
      lineHeight: '1.25rem',
      fontWeight: 'normal',
    },
  },
  'mono-lg': {
    description: 'monospace typography large default styling',
    value: {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      fontFamily: 'mono',
    },
  },
  'mono-md': {
    description: 'monospace typography medium default styling',
    value: {
      fontSize: '1rem',
      lineHeight: '1.5rem',
      fontFamily: 'mono',
    },
  },
  'mono-sm': {
    description: 'monospace typography small default styling',
    value: {
      fontSize: '0.875rem',
      lineHeight: '1.5rem',
      fontFamily: 'mono',
    },
  },
});
