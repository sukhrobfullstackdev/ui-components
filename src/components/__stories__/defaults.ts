export const pageMeta = {
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    backgroundType: {
      control: { type: 'select' },
    },
    paddingType: {
      control: { type: 'select' },
    },
    onAnimated: {
      table: {
        disable: true,
      },
    },
    onClosed: {
      table: {
        disable: true,
      },
    },
    onHidden: {
      table: {
        disable: true,
      },
    },
  },
};

export const pageArgs = {
  animate: true,
  isOpen: true,
  backgroundType: 'blurred' as const,
  overlay: true,
  paddingType: 'md' as const,
  fullscreen: false,
  onAnimated: () => console.log('Animated'),
  onClosed: () => console.log('Modal Closed'),
  onHidden: () => console.log('Overlay Hidden'),
};
