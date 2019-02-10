import React from 'react';
import styled, { css } from 'styled-components';
import SignInput from '../components/SignInput';
import colors from '../constants/colors';

const Wrapper = styled.div`
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

const Button = styled.button`
  display: inline-block;
  width: 482px;
  text-align: center;
  border: none;
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
  ${({ hasLine }) =>
    hasLine &&
    css`
      border-right: solid 0.5px black;
    `}
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
const SignIn = () => {
  return (
    <Wrapper>
      <SignInHeader>LOGIN</SignInHeader>
      <SignInInput placeholder="ID" />
      <SignInInput placeholder="PASSWORD" />
      <LoginCheckBoxWrapper>
        <Checkbox type="checkbox" />
        <CheckboxLabel>로그인 상태 유지</CheckboxLabel>
      </LoginCheckBoxWrapper>
      <SignInButton>LOGIN</SignInButton>
      <UserActionSection>
        <UserActionButton hasLine>회원가입</UserActionButton>
        <UserActionButton hasLine>아이디 찾기</UserActionButton>
        <UserActionButton>비밀번호 찾기</UserActionButton>
      </UserActionSection>
      <GoogleLoginButoon>Google 계정으로 로그인</GoogleLoginButoon>
      <KakaoLoginButoon>카카오 계정으로 로그인</KakaoLoginButoon>
    </Wrapper>
  );
};

export default SignIn;
