import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { signin } from '../actions/auth';
import { GoogleIcon, KakaoIcon } from '../assets/images';
import { SigninForm } from '../containers/Signin';
import { useDidUpdate } from '../hooks';
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

const ActionLink = styled(Link)`
  text-decoration: none;
`;
interface ISigninProps extends RouteComponentProps {
  signinAction: typeof signin;
  signinStatus: State;
  signinError: string;
}
const SignIn: React.SFC<ISigninProps> = ({ signinAction, signinStatus, signinError, history }) => {
  useDidUpdate(signinStatus, (_, status) => {
    if (status === 'SUCCESS') {
      window.location.replace('/');
    }
  });
  return (
    <>
      <Wrapper>
        <SigninForm handleSubmit={signinAction} signinStatus={signinStatus} signinError={signinError} />
        <UserActionSection>
          <UserActionButton hasLine>
            <ActionLink to="/signup">회원가입</ActionLink>
          </UserActionButton>
          <UserActionButton hasLine>
            <ActionLink to="/find-user-auth/id">아이디 찾기</ActionLink>
          </UserActionButton>
          <UserActionButton>
            <ActionLink to="/find-user-auth/password">비밀번호 찾기</ActionLink>
          </UserActionButton>
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
