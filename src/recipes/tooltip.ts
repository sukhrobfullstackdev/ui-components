import { sva } from '@styled/css';

export const tooltip = sva({
  slots: ['trigger', 'content', 'spacer'],
  base: {
    trigger: {
      position: 'relative',
      w: 'auto',
    },
    content: {
      w: 'max',
      maxW: 72,
      color: 'text.secondary',
      bg: 'surface.primary',
      borderColor: 'neutral.secondary',
      borderWidth: 'thin',
      _dark: { bg: 'surface.tertiary' },
      position: 'absolute',
      py: 2,
      px: 3,
      rounded: 'xl',
      boxShadow: '0px 4px 20px 0px rgba(0, 0, 0, 0.10)',
      zIndex: 'max',
      display: 'none',
    },
    spacer: {
      position: 'absolute',
    },
  },
  variants: {
    expand: {
      true: {
        trigger: {
          w: 'full',
        },
      },
    },
    isOpen: {
      true: {
        content: {
          display: 'block',
        },
      },
    },
    placement: {
      top: {
        content: {
          top: '0%',
          left: '50%',
          transform: 'translateX(-50%) translateY(calc(-100% - 0.75rem))',
        },
      },
      'top left': {
        content: {
          top: '0%',
          right: '100%',
          transform: 'translateX(10%) translateY(calc(-100% - 0.75rem))',
        },
      },
      'top right': {
        content: {
          top: '0%',
          left: '100%',
          transform: 'translateX(-10%) translateY(calc(-100% - 0.75rem))',
        },
      },
      left: {
        content: {
          top: '50%',
          left: '0%',
          transform: 'translateX(calc(-100% - 0.75rem)) translateY(-50%)',
        },
      },
      'left top': {
        content: {
          top: '50%',
          left: '0%',
          transform: 'translateX(calc(-100% - 0.75rem)) translateY(-75%)',
        },
      },
      'left bottom': {
        content: {
          top: '50%',
          left: '0%',
          transform: 'translateX(calc(-100% - 0.75rem)) translateY(-25%)',
        },
      },
      right: {
        content: {
          top: '50%',
          right: '0%',
          transform: 'translateX(calc(100% + 0.75rem)) translateY(-50%)',
        },
      },
      'right top': {
        content: {
          top: '50%',
          right: '0%',
          transform: 'translateX(calc(100% + 0.75rem)) translateY(-75%)',
        },
      },
      'right bottom': {
        content: {
          top: '50%',
          right: '0%',
          transform: 'translateX(calc(100% + 0.75rem)) translateY(-25%)',
        },
      },
      bottom: {
        content: {
          bottom: '0%',
          left: '50%',
          transform: 'translateX(-50%) translateY(calc(100% + 0.75rem))',
        },
      },
      'bottom left': {
        content: {
          bottom: '0%',
          right: '100%',
          transform: 'translateX(10%) translateY(calc(100% + 0.75rem))',
        },
      },
      'bottom right': {
        content: {
          bottom: '0%',
          left: '100%',
          transform: 'translateX(-10%) translateY(calc(100% + 0.75rem))',
        },
      },
    },
    position: {
      top: {
        spacer: {
          width: 72,
          height: 4,
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%) translateY(0.75rem)',
        },
      },
      bottom: {
        spacer: {
          width: 72,
          height: 4,
          top: 0,
          left: '50%',
          transform: 'translateX(-50%) translateY(-0.75rem)',
        },
      },
      left: {
        spacer: {
          width: 4,
          height: 48,
          top: '50%',
          right: -6,
          transform: 'translateX(-0.75rem) translateY(-50%)',
        },
      },
      right: {
        spacer: {
          width: 4,
          height: 48,
          top: '50%',
          left: -6,
          transform: 'translateX(0.75rem) translateY(-50%)',
        },
      },
    },
  },
});
