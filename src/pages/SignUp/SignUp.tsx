import React, { useReducer } from 'react';
import { Header, SignUpStepIndicator, StepIndicatorWrapper, Wrapper } from './SingUpStyles';
import { FirstStep, SecondStep } from './Steps';

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
    (prevStep, { nextStep, nextForm }) => {
      if (nextStep === 3) {
        // submit
        const submitForm = {
          ...form,
          ...nextForm,
        };
        return prevStep;
      }
      setForm(nextForm);
      return nextStep;
    },
    1,
  );
  const getForm = () => form;
  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <Header>회원가입</Header>
      <StepIndicatorWrapper>
        <SignUpStepIndicator isCurrentStep={step === 1}>1</SignUpStepIndicator>
        <SignUpStepIndicator isCurrentStep={step === 2}>2</SignUpStepIndicator>
      </StepIndicatorWrapper>
      {step === 1 && <FirstStep setStep={setStep} getForm={getForm} />}
      {step === 2 && <SecondStep setStep={setStep} getForm={getForm} />}
    </Wrapper>
  );
};

export default SignUp;
