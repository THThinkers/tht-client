import React, { useState, useMemo, useCallback } from 'react';
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
import { useInputValue } from '../../hooks';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [username, onChangeName] = useInputValue('');
  const [password, onChangePassword] = useInputValue('');
  const [passwordCheck, onChangePasswordCheck] = useInputValue('');

  const CheckUsername = useMemo(
    () => (
      <CheckUsernameButton type="button" disabled={!username}>
        중복 확인
      </CheckUsernameButton>
    ),
    [username],
  );

  const PasswordHelp = useMemo(
    () => !password.length && <PasswordHelpText>영어, 숫자, 특수문자 포함 6자 이상</PasswordHelpText>,
    [password.length],
  );

  const firstStep = (
    <>
      <CheckInput
        placeholder="아이디"
        value={username}
        onChange={onChangeName}
        isValid
        type="email"
        inValidInfo="이미 존재하는 계정입니다."
        validInfo="사용가능한 계정입니다"
        rightComponent={CheckUsername}
      />
      <CheckInput
        placeholder="비밀번호"
        value={password}
        onChange={onChangePassword}
        isValid
        type="password"
        inValidInfo="올바르지 않은 비밀번호입니다"
        validInfo="사용 가능한 비밀번호입니다"
        rightComponent={PasswordHelp}
      />
      <CheckInput
        placeholder="비밀번호 확인"
        value={passwordCheck}
        onChange={onChangePasswordCheck}
        isValid={password === passwordCheck}
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
      <InputWrapper>
        {step === 1 && firstStep}
        {step === 2 && secondStep}
      </InputWrapper>
      {step === 1 ? (
        <button type="button" onClick={() => setStep(2)}>
          다음
        </button>
      ) : (
        <>
          <button type="button" onClick={() => setStep(1)}>
            이전
          </button>
          <button type="button" onClick={() => setStep(2)}>
            다음
          </button>
        </>
      )}
    </Wrapper>
  );
};

export default SignUp;
