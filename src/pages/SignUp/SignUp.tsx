import React, { ChangeEvent, useReducer, useState } from 'react';
import { FirstStep, SecondStep } from '../../containers/SignUp';
import { Header, SignUpStepIndicator, StepIndicatorWrapper, Wrapper } from '../../styles/SingUpStyles';

/** 사용자의 서버 중복 여부를 판단하는 타입 */
export type UserNameValidation = 'NOT_CHECKED' | 'EXIST' | 'NOT_EXIST' | 'ERROR';

export interface ISignupForm {
  username: string;
  password: string;
  pwCheck: string;
  name: string;
  phoneNumber: string;
  major: string;
  studentId: string;
  period: string;
  [key: string]: string;
}

const SignUp = () => {
  /** usename 서버에서 중복 확인여부 */
  const [userNameValidation, setUsernameValidation] = useState<UserNameValidation>('NOT_CHECKED');

  const [form, setForm] = useReducer((state, newState) => ({ ...state, ...newState }), {
    username: '',
    password: '',
    pwCheck: '',
    name: '',
    phoneNumber: '',
    studentId: '',
    major: '',
    period: '',
  });

  const [step, setStep] = useReducer<number, { nextStep: number; nextForm: Partial<ISignupForm> }>(
    (_, { nextStep, nextForm }) => {
      setForm(nextForm);
      return nextStep;
    },
    1,
  );

  const getForm = () => form;

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form, 'submitted');
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <Header>회원가입</Header>
      <StepIndicatorWrapper>
        <SignUpStepIndicator isCurrentStep={step === 1}>1</SignUpStepIndicator>
        <SignUpStepIndicator isCurrentStep={step === 2}>2</SignUpStepIndicator>
      </StepIndicatorWrapper>
      {step === 1 && (
        <FirstStep
          setStep={setStep}
          getForm={getForm}
          userNameValidation={userNameValidation}
          setUsernameValidation={setUsernameValidation}
        />
      )}
      {step === 2 && <SecondStep setStep={setStep} getForm={getForm} />}
    </Wrapper>
  );
};

export default SignUp;
