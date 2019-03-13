import React, { useEffect, useReducer, useRef } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { signin } from '../actions/auth';
import { GoogleIcon, KakaoIcon } from '../assets/images';
import { SignInput } from '../components/shared';
import colors from '../constants/colors';
import { useModal, usePrevious } from '../hooks';
import { ISigninUser } from '../models/user';
import { IRootState } from '../reducers';

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

const ModalContents = styled.div`
  font-size: 24px;
  color: ${colors.negative};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: ${colors.negative};
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
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
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
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

const GoogleLoginButton = styled(SocialLoginButoon)`
  margin-top: 40px;
  background-color: #da4835;
  color: #ffffff;
`;

const KakaoLoginButton = styled(SocialLoginButoon)`
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
const initialErrorState = {
  username: '',
  password: '',
  submit: '',
};
type IInputRef = Record<Field, React.RefObject<HTMLInputElement>>;
interface ISigninProps {
  signinAction: typeof signin;
  signinStatus: State;
  signinError: string;
}
const SignIn: React.SFC<ISigninProps> = ({ signinAction, signinStatus, signinError }) => {
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
  const handleSubmit = (e: React.FormEvent) => {
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
      signinAction(signinUser);
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
    <>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <SignInHeader>LOGIN</SignInHeader>
          <SignInInput ref={usernameInput} placeholder="ID" name="아이디" />
          <ErrorMessage>{error.username}</ErrorMessage>
          <SignInInput ref={passwordInput} placeholder="PASSWORD" type="password" name="패스워드" />
          <ErrorMessage>{error.password}</ErrorMessage>
          <SignInButton disabled={signinStatus === 'WAITING'}>LOGIN</SignInButton>
        </form>
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
