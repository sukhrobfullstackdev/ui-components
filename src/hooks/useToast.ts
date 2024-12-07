import { createContext, useContext } from 'react';

export interface ToastProps {
  message: string;
  dismissible?: boolean;
  icon?: boolean;
  lifespan?: number;
  variant?: 'branded' | 'success' | 'error' | 'warning' | 'neutral';
}

export interface ToastDefinition extends ToastProps {
  id: number;
}

export interface ToastContext {
  createToast: (options: ToastProps) => number;
  removeToast: (id: number) => void;
}

const raiseToastError = (fn: 'createToast' | 'removeToast') => () => {
  throw new Error('TOAST_PROVIDER_REQUIRED', {
    cause: `Before calling \`${fn}\`, wrap your application with \`<ToastProvider>\`.`,
  });
};

// eslint-disable-next-line @typescript-eslint/no-redeclare -- intentionally naming the variable the same as the type
export const ToastContext = /* @__PURE__ */ createContext<ToastContext>({
  createToast: /* @__PURE__ */ raiseToastError('createToast'),
  removeToast: /* @__PURE__ */ raiseToastError('removeToast'),
});

export function useToast() {
  return useContext(ToastContext);
}
