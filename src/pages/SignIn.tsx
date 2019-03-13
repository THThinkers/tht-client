import React, { useMemo, useReducer, useRef } from 'react';
import styled, { css } from 'styled-components';
import { GoogleIcon, KakaoIcon } from '../assets/images';
import { SignInput } from '../components/shared';
import colors from '../constants/colors';

const Wrapper = styled.form`
  margin: 0 auto;
  width: 482px;
`;

const SignInHeader = styled.div`
  color: ${colors.prime};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 37px;
  margin-top: 152px;
`;

const SignInInput = styled(SignInput)`
  margin-top: 15px;
`;

const LoginCheckBoxWrapper = styled.div`
  margin-top: 13px;
  font-size: 18px;
`;

const Checkbox = styled.input`
  margin-left: 5px;
  &[type='checkbox'] {
    transform: scale(1.8);
  }
`;

const CheckboxLabel = styled.label`
  margin-left: 12px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;
const Button = styled.button`
  position: relative;
  display: inline-block;
  width: 482px;
  text-align: center;
  border: none;
  cursor: pointer;
`;

const SignInButton = styled(Button)`
  background-color: ${colors.prime};
  margin-top: 36px;
  padding: 15px 0px 16px 0px;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

const UserActionSection = styled.div`
  margin-top: 27px;
  height: 30px;
`;

const UserActionButton = styled.button<{ hasLine?: boolean }>`
  width: 33.3%;
  height: 30px;
  font-size: 14px;
  background: transparent;
  border: none;
  cursor: pointer;
  ${({ hasLine = false }) =>
    hasLine &&
    css`
      border-right: solid 0.5px black;
    `};
`;

const SocialLoginButoon = styled(Button)`
  padding: 11px 0px;
  font-size: 20px;
`;

const GoogleLoginButoon = styled(SocialLoginButoon)`
  margin-top: 40px;
  background-color: #da4835;
  color: #ffffff;
`;

const KakaoLoginButoon = styled(SocialLoginButoon)`
  margin-top: 14px;
  background-color: #ffde00;
  color: #3c1e1e;
`;

const Googlelogo = styled.img`
  width: 37px;
  height: 31px;
  top: 6px;
  left: 9px;
  position: absolute;
`;

const KakaoLogo = styled.img`
  width: 24px;
  height: 24px;
  top: 10px;
  left: 17px;
  position: absolute;
`;

type Field = 'username' | 'password';
const mapKor = {
  username: '아이디',
  password: '패스워드',
};
const initialErrorState = {
  username: '',
  password: '',
  submit: '',
};
type IInputRef = Record<Field, React.RefObject<HTMLInputElement>>;
const SignIn = () => {
  const [error, setError] = useReducer((prevState, newState) => ({ ...prevState, ...newState }), initialErrorState);
  const usernameInput = useRef(null);
  const passwordInput = useRef(null);
  const inputRefs: IInputRef = {
    username: usernameInput,
    password: passwordInput,
  };
  const checkEmpty = (field: Field, ref: React.RefObject<HTMLInputElement>) => {
    if (!ref || !ref.current) {
      return false;
    }
    if (!ref.current.value) {
      ref.current.focus();
      setError({
        ...initialErrorState,
        [field]: `${mapKor[field]}를 입력해주세요.`,
      });
      return false;
    }
    return true;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const passed = Object.keys(inputRefs).every((key) => {
      const field = key as Field;
      return checkEmpty(field, inputRefs[field]);
    });
    if (passed) {
      // start request
    }
  };
  return (
    <Wrapper onSubmit={handleSubmit}>
      <SignInHeader>LOGIN</SignInHeader>
      <SignInInput ref={usernameInput} placeholder="ID" />
      <ErrorMessage>{error.username}</ErrorMessage>
      <SignInInput ref={passwordInput} placeholder="PASSWORD" />
      <ErrorMessage>{error.password}</ErrorMessage>
      <SignInButton>LOGIN</SignInButton>
      <UserActionSection>
        <UserActionButton hasLine>회원가입</UserActionButton>
        <UserActionButton hasLine>아이디 찾기</UserActionButton>
        <UserActionButton>비밀번호 찾기</UserActionButton>
      </UserActionSection>
      <GoogleLoginButoon>
        <Googlelogo src={GoogleIcon} />
        Google 계정으로 로그인
      </GoogleLoginButoon>
      <KakaoLoginButoon>
        <KakaoLogo src={KakaoIcon} />
        카카오 계정으로 로그인
      </KakaoLoginButoon>
    </Wrapper>
  );
};

export default SignIn;
