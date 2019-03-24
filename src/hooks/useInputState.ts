import { ChangeEvent, Dispatch, useCallback, useEffect, useMemo, useState } from 'react';

const useInputState = (
  initialValue: string,
  varifier?: (value: string) => boolean,
): [string, typeof onChange, boolean, Dispatch<string>] => {
  const [inputValue, setInputValue] = useState(initialValue);

  const isValid = useMemo(() => {
    if (!varifier) {
      return true;
    }
    return varifier(inputValue);
  }, [varifier, inputValue]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInputValue(value);
  }, []);

  return [inputValue, onChange, isValid, setInputValue];
};

export default useInputState;
