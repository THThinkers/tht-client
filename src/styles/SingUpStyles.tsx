import styled from 'styled-components';
import { SignInput } from '../components/shared';
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
  width: 92px;
  justify-content: space-between;
`;

/** 로그인 단계 표시기  */
export const SignUpStepIndicator = styled.div<{ isCurrentStep?: boolean }>`
  font-size: 30px;
  text-align: center;
  display: inline-block;
  line-height: 34px;
  width: 34px;
  height: 34px;
  font-weight: bolder;
  color: ${({ isCurrentStep = false }) => (isCurrentStep ? colors.prime : '#a8a8a8')};
  border: solid 3px ${({ isCurrentStep = false }) => (isCurrentStep ? colors.prime : '#a8a8a8')};
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

export const MonthInfoInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 19px;
`;

export const Interval = styled.div`
  font-size: 24px;
  line-height: 58px;
  height: 58px;
`;

// 달 항목 input
export const MonthInfoInput = styled(UserInfoInput)`
  display: inline-block;
  width: 200px;
  margin-bottom: 0px;
`;

export const InputFooter = styled.div`
  margin-top: 54px;
  text-align: center;
`;

export const StepButton = styled(CheckUsernameButton)`
  font-size: 24px;
  width: 136px;
  height: 58px;
  &:nth-child(2) {
    margin-left: 44px;
  }
`;
