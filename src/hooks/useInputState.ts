import { useCallback, useState, ChangeEvent } from 'react';

const useInputState = (
  initialValue: string,
  varifier?: (...args: any[]) => boolean,
): [string, typeof onChange, boolean] => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInputValue(value);
  }, []);

  return [inputValue, onChange, false];
};

export default useInputState;
