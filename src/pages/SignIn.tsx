import React from 'react';
import { connect } from 'react-redux';
import { signin } from '../actions/auth';
import { GoogleIcon, KakaoIcon } from '../assets/images';
import { SigninForm } from '../containers/Signin';
import { IRootState } from '../reducers';
import {
  GoogleLoginButton,
  Googlelogo,
  KakaoLoginButton,
  KakaoLogo,
  UserActionButton,
  UserActionSection,
  Wrapper,
} from '../styles/SignInStyles';

interface ISigninProps {
  signinAction: typeof signin;
  signinStatus: State;
  signinError: string;
}
const SignIn: React.SFC<ISigninProps> = ({ signinAction, signinStatus, signinError }) => {
  return (
    <>
      <Wrapper>
        <SigninForm handleSubmit={signinAction} signinStatus={signinStatus} />
        <UserActionSection>
          <UserActionButton hasLine>회원가입</UserActionButton>
          <UserActionButton hasLine>아이디 찾기</UserActionButton>
          <UserActionButton>비밀번호 찾기</UserActionButton>
        </UserActionSection>
        <GoogleLoginButton>
          <a href="/api/auth/oauth/google">
            <Googlelogo src={GoogleIcon} />
            Google 계정으로 로그인
          </a>
        </GoogleLoginButton>
        <KakaoLoginButton>
          <a href="/api/auth/oauth/kakao">
            <KakaoLogo src={KakaoIcon} />
            카카오 계정으로 로그인
          </a>
        </KakaoLoginButton>
      </Wrapper>
    </>
  );
};

const mapStateToProps = (state: IRootState) => ({
  signinStatus: state.auth.signin.status,
  signinError: state.auth.signin.error,
});
export default connect(
  mapStateToProps,
  {
    signinAction: signin,
  },
)(SignIn);
