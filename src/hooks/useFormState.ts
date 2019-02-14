import { useState, useCallback, ChangeEvent, useReducer } from 'react';

interface IFormState {
  [key: string]: string;
}

const useFormState = (initialValue: IFormState): [IFormState, typeof onChangeFormValue] => {
  const [formValue, setFormValue] = useReducer((prevState, newState) => ({ ...prevState, ...newState }), initialValue);

  const onChangeFormValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value, id: key } = e.currentTarget;
    setFormValue({ [key]: value });
  }, []);

  return [formValue, onChangeFormValue];
};

export default useFormState;
