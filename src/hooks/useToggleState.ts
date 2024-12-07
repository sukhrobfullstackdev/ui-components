import { useEffect, useState } from 'react';

interface UseToggleStateProps {
  isSelected?: boolean;
  onChange?: (isSelected: boolean) => void;
  defaultSelected?: boolean;
}

export const useToggleState = ({
  isSelected: controlledIsSelected,
  onChange,
  defaultSelected = false,
}: UseToggleStateProps) => {
  const [isSelectedState, setIsSelectedState] = useState(defaultSelected);
  const isControlled = controlledIsSelected !== undefined;
  const isSelected = isControlled ? controlledIsSelected : isSelectedState;

  const setSelected = (value: boolean) => {
    if (!isControlled) {
      setIsSelectedState(value);
    }
    if (onChange) {
      onChange(value);
    }
  };

  const toggle = () => setSelected(!isSelected);

  useEffect(() => {
    if (isControlled) {
      setIsSelectedState(controlledIsSelected);
    }
  }, [controlledIsSelected]);

  return { isSelected, setSelected, toggle };
};
