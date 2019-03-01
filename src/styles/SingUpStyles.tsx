import styled from 'styled-components';
import { SignInput } from '../components';
import colors from '../constants/colors';

// 상단 부분
export const Wrapper = styled.form`
  width: 482px;
  margin: 0px auto;
`;

export const Header = styled.h1`
  color: ${colors.prime};
  font-weight: bold;
  font-size: 24px;
  margin-top: 115px;
  text-align: center;
`;

export const StepIndicatorWrapper = styled.div`
  margin: 80px auto 63px auto;
  display: flex;
  width: 163px;
  justify-content: space-between;
`;

/** 로그인 단계 표시기  */
export const SignUpStepIndicator = styled.div<{ isCurrentStep?: boolean }>`
  font-size: 50px;
  text-align: center;
  display: inline-block;
  line-height: 60px;
  width: 60px;
  height: 60px;
  font-weight: bolder;
  color: ${({ isCurrentStep = false }) => (isCurrentStep ? colors.prime : '#a8a8a8')};
  border: solid 5px ${({ isCurrentStep = false }) => (isCurrentStep ? colors.prime : '#a8a8a8')};
  border-radius: 50%;
`;

// 로그인 인풋 래퍼
export const InputWrapper = styled.div`
  & > div {
    margin-bottom: 16px;
  }
`;

// 사용자 중복체크 버튼
export const CheckUsernameButton = styled.button`
  display: inline-block;
  flex-shrink: 0;
  width: 116px;
  height: 58px;
  background-color: ${colors.prime};
  color: white;
  font-size: 20px;
  text-align: center;
  border: none;
  &:disabled {
    background-color: #9d9d9d;
  }
`;

// 비밀번호 안내문구
export const PasswordHelpText = styled.div`
  position: absolute;
  font-size: 14px;
  color: #737373;
  right: 10px;
  bottom: 10px;
`;

// 일반 항목 input
export const UserInfoInput = styled(SignInput)`
  margin-bottom: 19px;
`;

export const InputFooter = styled.div`
  margin-top: 54px;
`;

export const StepError = styled.div`
  color: red;
  font-size: 16px;
  text-align: center;
`;

export const StepButton = styled(CheckUsernameButton)`
  display: block;
  font-size: 24px;
  width: 136px;
  height: 58px;
  margin: 13px auto 0px auto;
`;
