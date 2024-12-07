import { IcoDismiss } from '@components/icons';
import { Text } from '@components/primitives';
import Portal from '@components/primitives/portal';
import Animate from '@components/utils/animate';
import { ToastProps as BaseToastProps, ToastContext, ToastDefinition } from '@hooks/useToast';
import { toast as classes } from '@recipes/toast';
import { HStack, VStack } from '@styled/jsx';
import { PropsWithChildren, useCallback, useMemo, useReducer, useRef, useState } from 'react';
import { StatusIcon } from './status-icon';

let toastID = 0;

interface InternalToast extends ToastDefinition {
  removeToast: ToastContext['removeToast'];
}

export interface ToastProps extends BaseToastProps {}
export interface ToastProviderProps extends PropsWithChildren {
  icon?: boolean;
  lifespan?: number;
  position?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
}

export const Toast = (props: ToastProps | InternalToast) => {
  const { dismissible, lifespan, message = '', variant = 'branded' } = props;
  const toastClasses = classes({ variant });
  const dismissId = (props as InternalToast).id;
  const removeToast = (props as InternalToast).removeToast;
  const [show, setShow] = useState(true);

  if (lifespan) {
    setTimeout(() => {
      setShow(false);
    }, lifespan);
  }

  return (
    <Animate
      aria-live={['error'].includes(variant || '') ? 'assertive' : 'polite'}
      show={show}
      type="slide"
      onHidden={() => {
        if (dismissId) {
          removeToast(dismissId);
        }
      }}
    >
      <HStack className={toastClasses.toast}>
        {props.icon && <StatusIcon className={toastClasses.icon} variant={variant} />}
        <Text fontColor="text.quaternary">{message}</Text>
        {dismissible && (
          <button className={toastClasses.dismiss} onClick={() => setShow(false)} aria-label="dismiss toast">
            <IcoDismiss className={toastClasses.icon} />
          </button>
        )}
      </HStack>
    </Animate>
  );
};

export const ToastProvider = ({
  icon: defaultIcon = false,
  lifespan: defaultLifespan = 0,
  position = 'top-right',
  children,
}: ToastProviderProps) => {
  const toastsRef = useRef<ToastDefinition[]>([]);
  const forceUpdate = useReducer((x: number) => x + 1, 0)[1];

  const removeToast: ToastContext['removeToast'] = useCallback((id: number) => {
    toastsRef.current = toastsRef.current.filter(toast => toast.id !== id);
    forceUpdate();
  }, []);

  const createToast: ToastContext['createToast'] = useCallback(options => {
    const { icon = options.icon || defaultIcon, lifespan = options.lifespan || defaultLifespan, ...props } = options;
    const id = ++toastID;

    toastsRef.current.push({ icon, lifespan, id, ...props });
    forceUpdate();

    return id;
  }, []);

  const toastCtx = useMemo(() => ({ createToast, removeToast }), [createToast, removeToast]);
  const toasts = position?.startsWith('top') ? [...toastsRef.current] : [...toastsRef.current].reverse();
  const activeToasts = toasts.map(toast => {
    return <Toast key={toast.id} {...toast} removeToast={removeToast} />;
  });

  const providerClasses = classes({ position });

  return (
    <ToastContext.Provider value={toastCtx}>
      {children}
      <Portal>
        <div className={providerClasses.portal}>
          <VStack className={providerClasses.container}>{activeToasts}</VStack>
        </div>
      </Portal>
    </ToastContext.Provider>
  );
};
