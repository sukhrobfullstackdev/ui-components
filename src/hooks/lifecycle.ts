import { useEffect, useRef } from 'react';

export function useEffectAfterMount(effect: () => void, deps: boolean[]) {
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    if (effect) return effect();
  }, deps);
}
