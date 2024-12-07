import { MutableRefObject, useEffect, useLayoutEffect, useRef } from 'react';

export function useClickAway<T extends Element>(cb: (e: Event) => void): MutableRefObject<T> {
  const ref = useRef<T>(null);
  const refCb = useRef<(e: Event) => void>(cb);

  useLayoutEffect(() => {
    refCb.current = cb;
  });

  useEffect(() => {
    const handler = (e: Event) => {
      const element = ref.current;
      if (element && !element.contains(e.target as Node)) {
        refCb.current(e);
      }
    };

    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, []);

  return ref as MutableRefObject<T>;
}
