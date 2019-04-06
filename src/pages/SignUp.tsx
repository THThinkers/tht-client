import React, { ChangeEvent, Reducer, useCallback, useEffect, useReducer, useState } from 'react';
import { postSignUp } from '../api/auth';
import { FirstStep, SecondStep } from '../containers/SignUp';
import history from '../history';
import { useAsyncCallback } from '../hooks';
import { IMajor } from '../models/major';
import { ITag } from '../models/tag';
import { ISignupUser } from '../models/user';
import { Header, SignUpStepIndicator, StepIndicatorWrapper, Wrapper } from '../styles/SignUpStyles';

/** 사용자의 서버 중복 여부를 판단하는 타입 */
export type UserNameValidation = 'NOT_CHECKED' | 'EXIST' | 'NOT_EXIST' | 'ERROR';

/** 입력 회원가입 시 필요한 정보 */
export type SignupForm = {
  pwCheck: string;
  tags: Array<PartialExclude<ITag, 'name'>>;
  [key: string]: string | number | undefined | Array<PartialExclude<ITag, 'name'>> | IMajor;
} & ISignupUser;

const SignUp = () => {
  const [step, setStep] = useState<number>(1);
  const [form, setForm] = useReducer<Reducer<SignupForm, Partial<SignupForm>>>(
    (state, newState) => ({ ...state, ...newState }),
    {
      username: '', // 아이디
      password: '', // 비밀번호
      pwCheck: '', // 비밀번호 확인
      name: '', // 사용자 이름
      phoneNumber: '', // 전화번호
      studentId: -1, // 학번
      major: { createAt: '', name: '', _id: '' }, // 전공
      joined: '', // 기간
      ended: '',
      tags: [],
    },
  );

  /** usename 서버에서 중복 확인여부 */
  const [userNameValidation, setUsernameValidation] = useState<UserNameValidation>('NOT_CHECKED');

  const [signUpStatus, signUpResult, callSignUp] = useAsyncCallback(postSignUp, { success: false });

  useEffect(() => {
    if (signUpStatus === 'SUCCESS') {
      if (signUpResult.success) {
        history.push('/');
      } else {
        console.log('에러따리 에러따');
      }
    } else if (signUpStatus === 'FAILURE') {
      console.log('에러');
    }
  }, [signUpStatus]);

  const setStepper = useCallback(
    ({ nextStep, nextForm }: { nextStep: number; nextForm: Partial<SignupForm> }) => {
      setForm(nextForm);
      if (nextStep < 3) {
        setStep(nextStep);
      } else {
        const singUpInfo = { ...form, ...nextForm, isNew: true };
        delete singUpInfo.pwCheck;
        callSignUp(singUpInfo);
      }
    },
    [form],
  );

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
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
          setStep={setStepper}
          form={form}
          userNameValidation={userNameValidation}
          setUsernameValidation={setUsernameValidation}
        />
      )}
      {step === 2 && <SecondStep setStep={setStepper} form={form} />}
    </Wrapper>
  );
};

export default SignUp;
