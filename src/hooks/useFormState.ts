import { useState, useCallback, ChangeEvent, useReducer } from 'react';

interface IFormState {
  [key: string]: string;
}

const useFormState = (initialValue: IFormState): [IFormState, typeof onChangeFormValue, boolean] => {
  const [formValue, setFormValue] = useReducer((prevState, newState) => ({ ...prevState, ...newState }), initialValue);

  const onChangeFormValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value, id: key } = e.currentTarget;
    setFormValue({ [key]: value });
  }, []);

  const isFormFilled = Object.keys(formValue).every(key => formValue[key].length !== 0);

  return [formValue, onChangeFormValue, isFormFilled];
};

export default useFormState;
