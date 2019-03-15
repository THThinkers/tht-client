import React, { useEffect, useReducer, useRef } from 'react';
import { useModal, usePrevious } from '../../hooks';
import { ISigninUser } from '../../models/user';
import {
  ErrorMessage,
  ModalContents,
  SignInButton,
  SignInHeader,
  SignInInput,
  SignInSubHeader,
} from '../../styles/SignInStyles';

type Field = 'username' | 'password';
const initialErrorState = {
  username: '',
  password: '',
  submit: '',
};
type IInputRef = Record<Field, React.RefObject<HTMLInputElement>>;

interface ISigninProps {
  header?: string;
  subHeader?: string;
  handleSubmit: (user: ISigninUser) => void;
  signinStatus: State;
}

const SigninForm: React.SFC<ISigninProps> = ({ header = '로그인', subHeader, handleSubmit, signinStatus }) => {
  const [error, setError] = useReducer((prevState, newState) => ({ ...prevState, ...newState }), initialErrorState);
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const inputRefs: IInputRef = {
    username: usernameInput,
    password: passwordInput,
  };
  const [openModal, closeModal] = useModal();
  const clearError = () => setError(initialErrorState);
  const clearValue = (ref: React.RefObject<HTMLInputElement>) => ref && ref.current && (ref.current.value = '');
  const checkEmpty = (field: Field, ref: React.RefObject<HTMLInputElement>) => {
    if (!ref || !ref.current) {
      return false;
    }
    if (!ref.current.value) {
      ref.current.focus();
      setError({
        ...initialErrorState,
        [field]: `${ref.current.name}를 입력해주세요.`,
      });
      return false;
    }
    return true;
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const signinUser: ISigninUser = {
      username: '',
      password: '',
    };
    const passed = Object.keys(inputRefs).every((key) => {
      const field = key as Field;
      const inputRef = inputRefs[field].current;
      signinUser[field] = inputRef ? inputRef.value : '';
      return checkEmpty(field, inputRefs[field]);
    });
    if (passed) {
      clearError();
      handleSubmit(signinUser);
    }
  };
  const previousStatus = usePrevious(signinStatus);
  useEffect(() => {
    if (previousStatus !== signinStatus && signinStatus === 'FAILURE') {
      openModal({
        title: '로그인 실패',
        contents: (
          <ModalContents>
            <p>
              존재하지 않는 아이디 또는 비밀번호입니다. <br />
              다시 로그인해주세요.
            </p>
          </ModalContents>
        ),
      });
      clearValue(inputRefs.password);
    }
    return () => closeModal();
  }, [signinStatus]);
  return (
    <form onSubmit={onSubmit}>
      <SignInHeader>{header}</SignInHeader>
      {subHeader && <SignInSubHeader>{subHeader}</SignInSubHeader>}
      <SignInInput ref={usernameInput} placeholder="ID" name="아이디" />
      <ErrorMessage>{error.username}</ErrorMessage>
      <SignInInput ref={passwordInput} placeholder="PASSWORD" type="password" name="패스워드" />
      <ErrorMessage>{error.password}</ErrorMessage>
      <SignInButton disabled={signinStatus === 'WAITING'}>LOGIN</SignInButton>
    </form>
  );
};

export default SigninForm;
