import { useCallback, useEffect, useState } from 'react';

interface UseDisplayStateProps {
  animate: boolean;
  show: boolean;
  onHidden: () => void;
  onShown: () => void;
}

export const useDisplayState = ({ animate, show, onHidden, onShown }: UseDisplayStateProps) => {
  const [displayed, setDisplayed] = useState(show);
  const onShow = useCallback(() => onShown(), []);
  const onHide = useCallback(() => {
    setDisplayed(false);
    onHidden();
  }, []);

  useEffect(() => {
    if (show) {
      setDisplayed(true);
    } else {
      if (!animate) {
        setDisplayed(false);
      }
    }
  }, [show]);

  return { displayed, onShow, onHide };
};
