import styled, { css } from 'styled-components';
import { SignInput } from '../components/shared';
import colors from '../constants/colors';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 482px;
`;

export const SignInHeader = styled.div`
  color: ${colors.prime};
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 37px;
  margin-top: 152px;
`;
export const SignInSubHeader = styled.p`
  font-size: 20px;
  text-align: center;
`;
export const SignInInput = styled(SignInput)`
  margin-top: 15px;
`;

export const ModalContents = styled.div`
  font-size: 24px;
  color: ${colors.negative};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginCheckBoxWrapper = styled.div`
  margin-top: 13px;
  font-size: 18px;
`;

export const Checkbox = styled.input`
  margin-left: 5px;
  &[type='checkbox'] {
    transform: scale(1.8);
  }
`;

export const CheckboxLabel = styled.label`
  margin-left: 12px;
`;

export const ErrorMessage = styled.div`
  color: ${colors.negative};
  margin-top: 10px;
`;
export const Button = styled.button`
  position: relative;
  display: inline-block;
  width: 482px;
  text-align: center;
  border: none;
  cursor: pointer;
`;

export const SignInButton = styled(Button)`
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  background-color: ${colors.prime};
  margin-top: 36px;
  padding: 15px 0px 16px 0px;
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`;

export const UserActionSection = styled.div`
  margin-top: 27px;
  height: 30px;
`;

export const UserActionButton = styled.button<{ hasLine?: boolean }>`
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

export const SocialLoginButoon = styled(Button)`
  padding: 11px 0px;
  font-size: 20px;
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;

export const GoogleLoginButton = styled(SocialLoginButoon)`
  margin-top: 40px;
  background-color: #da4835;
  color: #ffffff;
`;

export const KakaoLoginButton = styled(SocialLoginButoon)`
  margin-top: 14px;
  background-color: #ffde00;
  color: #3c1e1e;
`;

export const Googlelogo = styled.img`
  width: 37px;
  height: 31px;
  top: 6px;
  left: 9px;
  position: absolute;
`;

export const KakaoLogo = styled.img`
  width: 24px;
  height: 24px;
  top: 10px;
  left: 17px;
  position: absolute;
`;
