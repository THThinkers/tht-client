import { useState, ChangeEvent } from 'react';

type inputValue = number | string | string[] | undefined;

const useInputValue = (initialValue: inputValue): [inputValue, typeof onChange] => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInputValue(value);
  };

  return [inputValue, onChange];
};

export default useInputValue;
