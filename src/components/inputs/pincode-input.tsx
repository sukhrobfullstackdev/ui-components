import { TextInput } from '@components/inputs/text-input';
import { css } from '@styled/css';

import React, { useCallback, useEffect, useRef, useState } from 'react';

export type PinCodeInputProps = {
  pinLength: 3 | 6;
  onComplete: (pins: string) => void;
  onChange: (pins: Array<string>) => void;
  id?: string;
  originName?: string;
  autoFocus?: boolean;
};

const REGEX_NUMBER_CLEANER = /\D/g;

export const PinCodeInput = ({
  pinLength,
  onComplete = pins => pins,
  onChange = pins => pins,
  originName,
  id = 'pin-code-input',
  autoFocus = true,
}: PinCodeInputProps) => {
  const [pinNumbers, setPinNumbers] = useState(() => Array.from({ length: pinLength }, () => ''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(pinLength).fill(null));

  useEffect(() => {
    setPinNumbers(prevPinNumbers => {
      if (pinLength < prevPinNumbers.length) {
        return prevPinNumbers.slice(0, pinLength);
      } else if (pinLength > prevPinNumbers.length) {
        return [...prevPinNumbers, ...Array(pinLength - prevPinNumbers.length).fill('')];
      }
      return prevPinNumbers;
    });
  }, [pinLength]);

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0]?.focus();
    }
  }, [autoFocus, pinLength]);

  const updatePincode = (currentIndex: number, pins: string[]) => {
    setPinNumbers(pins);
    onChange(pins);

    const strPin = pins.join('');

    if (strPin.length === pinLength) {
      inputRefs.current[currentIndex]?.blur();
      onComplete(strPin);
    }
  };

  const bulkUpdatePincode = useCallback(
    (currentIndex: number, text: string) => {
      const newPins = [...pinNumbers];
      text
        .replace(REGEX_NUMBER_CLEANER, '')
        .split('')
        .forEach(code => {
          if (currentIndex >= pinLength) {
            return;
          }
          newPins[currentIndex] = code;
          currentIndex++;
          inputRefs?.current?.[currentIndex]?.focus();
        });

      updatePincode(currentIndex, newPins);
    },
    [pinNumbers, updatePincode],
  );

  const onChangeProp = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentIndex = parseInt(e.currentTarget.dataset.id || '', 10);
      const value = e.target.value.replace(REGEX_NUMBER_CLEANER, '');

      // handle cases when user pastes multiple characters
      if (value.length > 1) {
        return bulkUpdatePincode(currentIndex, value);
      }
      const newPins = [...pinNumbers];

      newPins[currentIndex] = value;

      if (value.length) {
        inputRefs?.current?.[currentIndex + 1]?.focus();
      }

      updatePincode(currentIndex, newPins);
    },
    [updatePincode],
  );

  const onKeyUp = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const inputHasValue = e.currentTarget.value.length;
      const currentIndex = parseInt(e.currentTarget.dataset.id || '', 10);
      const newPins = [...pinNumbers];

      switch (e.key) {
        case 'Backspace': {
          // Always delete value of selected input
          if (inputHasValue) {
            newPins[currentIndex] = '';
            updatePincode(currentIndex, newPins);
          }

          // Select the last input with a value
          if (currentIndex) {
            const lastIndexWithDigit = newPins.reduceRight((acc, current, index) => {
              if (acc !== -1) return acc;
              if (current !== '') return index;
              return acc;
            }, -1);

            inputRefs?.current[lastIndexWithDigit >= 0 ? lastIndexWithDigit : 0]?.focus();
          }
          return;
        }

        case 'ArrowLeft': {
          // Navigate left in a loop
          const newIndex = currentIndex ? currentIndex - 1 : pinLength - 1;
          inputRefs?.current[newIndex]?.focus();
          return;
        }

        case 'ArrowRight': {
          // Navigate right in a loop
          const newIndex = currentIndex === pinLength - 1 ? 0 : currentIndex + 1;
          inputRefs?.current[newIndex]?.focus();
          return;
        }

        default: {
          // Overwrite existing value if a new number value is pressed
          const value = e.key.replace(REGEX_NUMBER_CLEANER, '');

          if (inputHasValue && value.length && value !== e.currentTarget.value) {
            newPins[currentIndex] = value;
            updatePincode(currentIndex, newPins);
            inputRefs?.current?.[currentIndex + 1]?.focus();
          }
        }
      }
    },
    [onChange, updatePincode],
  );

  const formattedOriginName = originName ? `${originName} ` : '';

  return (
    <form
      id={id}
      className={css({
        margin: 0,
        minWidth: 0,
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        maxWidth: '30rem',
        gap: 2,
      })}
    >
      {pinNumbers.map((_, i) => (
        <TextInput.Char
          id={id ? `${id}-${i}` : undefined}
          aria-label={`${formattedOriginName}one time password input ${i + 1}`}
          data-id={i}
          key={`${id || undefined}-${i}`}
          name={`${formattedOriginName}one time password input ${i + 1}`}
          value={pinNumbers[i] || ''}
          className={css({ caretColor: 'transparent' })}
          attr={{
            onChange: onChangeProp,
            onKeyUp,
            autoComplete: i === 0 ? 'one-time-code' : 'off',
            inputMode: 'numeric',
          }}
          ref={el => {
            if (inputRefs?.current) {
              inputRefs.current[i] = el;
            }
          }}
        />
      ))}
    </form>
  );
};

export default PinCodeInput;
