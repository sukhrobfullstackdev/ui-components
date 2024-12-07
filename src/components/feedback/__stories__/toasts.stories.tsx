import { ToastProps, ToastProvider, ToastProviderProps } from '@components/feedback';
import Button from '@components/primitives/button';
import { useToast } from '@hooks/useToast';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ToastProvider> = {
  component: ToastProvider,
  title: 'Feedback/Toasts',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<ToastProviderProps & ToastProps>;

const ToastRender = (props: ToastProps) => {
  const { createToast } = useToast();

  const addToasts = () => {
    createToast({
      message: 'This is an info toast',
      icon: props.icon,
      dismissible: props.dismissible,
      lifespan: props.lifespan,
    });
    createToast({
      message: 'This is a success toast',
      icon: props.icon,
      dismissible: props.dismissible,
      variant: 'success',
      lifespan: props.lifespan,
    });
    createToast({
      message: 'This is a warning toast',
      icon: props.icon,
      dismissible: props.dismissible,
      variant: 'warning',
      lifespan: props.lifespan,
    });
    createToast({
      message: 'This is an error toast',
      icon: props.icon,
      dismissible: props.dismissible,
      variant: 'error',
      lifespan: props.lifespan,
    });
    createToast({
      message: 'This is a neutral toast',
      icon: props.icon,
      dismissible: props.dismissible,
      variant: 'neutral',
      lifespan: props.lifespan,
    });
  };

  return <Button label="Generate toasts" onPress={addToasts} />;
};

export const ToastsDefault: Story = {
  argTypes: {
    dismissible: {
      control: {
        type: 'boolean',
      },
    },
    icon: {
      control: {
        type: 'boolean',
      },
    },
    lifespan: {
      control: {
        type: 'number',
      },
    },
  },
  args: {
    position: 'top-right',
    dismissible: true,
    icon: true,
    lifespan: 0,
  },
  render: args => {
    return (
      <ToastProvider {...args}>
        <ToastRender {...args} />
      </ToastProvider>
    );
  },
};
