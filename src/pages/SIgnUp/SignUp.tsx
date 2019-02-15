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
  UserInfoInput,
} from './SingUpStyles';
import { useInputState } from '../../hooks';
import useFormState from '../../hooks/useFormState';
import { UserInfoFormMap } from './signUpFormMap';
import * as is from '../../utils/is';

const SignUp = () => {
  /**
   * 기본 유저 정보
   */
  const [step, setStep] = useState(1);
  const [username, onChangeName, isValidUsername] = useInputState('', is.email);
  const [password, onChangePassword, isValidPassword] = useInputState('', is.validPassword);
  const [pwCheck, onChangePwCheck, isValidPwCheck] = useInputState('', is.shallowEqual.bind(null, password));

  const CheckUsername = useMemo(
    () => (
      <CheckUsernameButton type="button" disabled={!isValidUsername}>
        중복 확인
      </CheckUsernameButton>
    ),
    [isValidUsername],
  );

  const PasswordHelp = useMemo(
    () => !password.length && <PasswordHelpText>영어, 숫자, 특수문자 포함 6자 이상</PasswordHelpText>,
    [!password.length, isValidUsername],
  );

  const firstStep = (
    <>
      <CheckInput
        placeholder="아이디"
        value={username}
        onChange={onChangeName}
        isValid={isValidUsername}
        type="email"
        inValidInfo={isValidUsername ? '이미 존재하는 계정입니다' : '올바른 이메일을 입력해주세요'}
        validInfo="사용가능한 계정입니다"
        rightComponent={CheckUsername}
      />
      <CheckInput
        placeholder="비밀번호"
        value={password}
        onChange={onChangePassword}
        isValid={isValidPassword}
        type="password"
        inValidInfo="영어, 숫자, 특수문자가 포함된 비밀번호를 입력해주세요"
        validInfo="사용 가능한 비밀번호입니다"
        rightComponent={PasswordHelp}
      />
      <CheckInput
        placeholder="비밀번호 확인"
        value={pwCheck}
        onChange={onChangePwCheck}
        isValid={isValidPwCheck}
        type="password"
        inValidInfo="비밀번호가 일치하지 않습니다"
        validInfo="비밀번호가 일치합니다"
      />
    </>
  );

  /**
   * 추가 유저 정보
   */

  const [userInfo, setUserInfo] = useFormState({ name: '', phoneNumber: '', major: '', studentNumber: '', period: '' });

  const secondStep = Object.keys(userInfo).map(key => (
    <UserInfoInput
      key={key}
      id={key}
      placeholder={UserInfoFormMap[key].id}
      value={userInfo[key]}
      onChange={setUserInfo}
    />
  ));

  /**
   * 랜더
   */

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
            완료
          </button>
        </>
      )}
    </Wrapper>
  );
};

export default SignUp;
