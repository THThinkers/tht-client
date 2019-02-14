import { useCallback, useState, ChangeEvent } from 'react';

const useInputState = (initialValue: string): [string, typeof onChange] => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInputValue(value);
  }, []);

  return [inputValue, onChange];
};

export default useInputState;
