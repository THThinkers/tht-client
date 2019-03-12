import React, { ChangeEvent, useReducer, useState } from 'react';
import { FirstStep, SecondStep } from '../containers/SignUp';
import { ITag } from '../models/tag';
import { ISignupUser } from '../models/user';
import { Header, SignUpStepIndicator, StepIndicatorWrapper, Wrapper } from '../styles/SignUpStyles';

/** 사용자의 서버 중복 여부를 판단하는 타입 */
export type UserNameValidation = 'NOT_CHECKED' | 'EXIST' | 'NOT_EXIST' | 'ERROR';

/** 입력 회원가입 시 필요한 정보 */
export type SignupForm = {
  pwCheck: string;
  tags: Array<PartialExclude<ITag, 'name'>>;
  [key: string]: string | number | undefined | Array<PartialExclude<ITag, 'name'>>;
} & ISignupUser;

const SignUp = () => {
  /** usename 서버에서 중복 확인여부 */
  const [userNameValidation, setUsernameValidation] = useState<UserNameValidation>('NOT_CHECKED');

  const [form, setForm] = useReducer<SignupForm, Partial<SignupForm>>(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: '', // 아이디
      password: '', // 비밀번호
      pwCheck: '', // 비밀번호 확인
      name: '', // 사용자 이름
      phoneNumber: '', // 전화번호
      studentId: -1, // 학번
      major: '', // 전공
      joined: '', // 기간
      ended: '',
      tags: [],
    },
  );

  const [step, setStep] = useReducer<number, { nextStep: number; nextForm: Partial<SignupForm> }>(
    (_, { nextStep, nextForm }) => {
      setForm(nextForm);
      // 회워ㅕㄴ가입 요청
      return nextStep;
    },
    2,
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
