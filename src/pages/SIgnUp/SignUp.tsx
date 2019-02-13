import React, { useState } from 'react';
import { CheckInput } from '../../components';
import {
  Wrapper,
  StepIndicatorWrapper,
  Header,
  SignUpStepIndicator,
  CheckUsernameButton,
  PasswordHelpText,
  InputWrapper,
} from './SingUpStyles';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const firstStep = (
    <>
      <CheckInput
        placeholder="아이디"
        isValid
        type="email"
        inValidInfo="이미 존재하는 계정입니다."
        validInfo="사용가능한 계정입니다"
        rightComponent={<CheckUsernameButton>중복 확인</CheckUsernameButton>}
      />
      <CheckInput
        placeholder="비밀번호"
        isValid
        type="password"
        inValidInfo="올바르지 않은 비밀번호입니다"
        validInfo="사용 가능한 비밀번호입니다"
        rightComponent={<PasswordHelpText>영어, 숫자, 특수문자 포함 6자 이상</PasswordHelpText>}
      />
      <CheckInput
        placeholder="비밀번호 확인"
        isValid
        type="password"
        inValidInfo="비밀번호가 일치하지 않습니다"
        validInfo="비밀번호가 일치합니다"
      />
    </>
  );

  const secondStep = <div>응~ </div>;

  return (
    <Wrapper onSubmit={e => e.preventDefault()}>
      <Header>회원가입</Header>
      <StepIndicatorWrapper>
        <SignUpStepIndicator isCurrentStep={step === 1}>1</SignUpStepIndicator>
        <SignUpStepIndicator isCurrentStep={step === 2}>2</SignUpStepIndicator>
      </StepIndicatorWrapper>
      {step === 1 && firstStep}
      {step === 2 && secondStep}
      <InputWrapper />
      {step === 2 && <button onClick={() => setStep(1)}>이전</button>}
      <button onClick={() => setStep(2)}>다음</button>
    </Wrapper>
  );
};

export default SignUp;
