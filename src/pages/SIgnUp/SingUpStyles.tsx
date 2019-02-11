import styled from 'styled-components';
import colors from '../../constants/colors';

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

export const InputWrapper = styled.div`
  & > div {
    margin-bottom: 16px;
  }
`;

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
`;

export const PasswordHelpText = styled.div`
  position: absolute;
  font-size: 14px;
  color: #737373;
  right: 10px;
  bottom: 10px;
`;
