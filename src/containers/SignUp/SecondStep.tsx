import React, { InputHTMLAttributes, useRef } from 'react';
import { getTagList } from '../../api/tag';
import { useEvent } from '../../hooks';
import { useAsync } from '../../hooks/useAsync';
import useFormState from '../../hooks/useFormState';
import { ISignupUser } from '../../models/user';
import { ISignupForm } from '../../pages/SignUp';
import {
  InputFooter,
  InputWrapper,
  Interval,
  MonthInfoInput,
  MontHInfoInputWrapper,
  StepButton,
  UserInfoInput,
} from '../../styles/SingUpStyles';

type SecondFormType = Pick<ISignupForm, 'name' | 'phoneNumber' | 'major' | 'studentId' | 'period'> & {
  [key: string]: string;
};

interface ISecondStepProps {
  getForm: () => ISignupForm;
  setStep: ({ nextStep, nextForm }: { nextStep: number; nextForm: SecondFormType }) => void;
}

//  UserInfo 에 대한 기본 인풋일 경우 데이터 input 설정
type FlatInputUserData = Exclude<keyof ISignupUser, 'username' | 'password' | 'tags'>;
const UserInfoFormMap: { [key in FlatInputUserData]: InputHTMLAttributes<{}> } = {
  name: { placeholder: '이름', type: 'text' },
  phoneNumber: { placeholder: '전화번호', type: 'tel' },
  major: { placeholder: '전공', type: 'text' },
  studentId: { placeholder: '학번', type: 'number', min: '2000', max: '2099' },
  joined: { placeholder: '활동 시작', type: 'month', min: '2018-03' },
  ended: { placeholder: '활동 종료', type: 'month', min: '2018-03' },
};

const SecondStep: React.SFC<ISecondStepProps> = ({ getForm, setStep }) => {
  const { username, password, pwCheck, ...rest } = getForm();

  /**
   * 회원 인증 함수 / 상태 초기화
   */
  const validator = (form: SecondFormType) => Object.keys(form).every((field) => form[field].length > 0);
  const [userInfo, setUserInfo, isFormValid] = useFormState<SecondFormType>(rest, validator);

  const [majorState, major] = useAsync({ endpoint: getTagList }, []);
  const [tagState, tag] = useAsync({ endpoint: getTagList }, []);

  /**
   *  활동 기간 초기화
   */
  const joinedRef = useRef(null);
  const endedRef = useRef(null);

  useEvent(joinedRef, 'focus', () => console.log(1));
  useEvent(endedRef, 'focus', () => console.log(1));

  return (
    <InputWrapper>
      <UserInfoInput id={'name'} value={userInfo.name} onChange={setUserInfo} {...UserInfoFormMap.name} />
      <UserInfoInput
        id={'phoneNumber'}
        value={userInfo.phoneNumber}
        onChange={setUserInfo}
        {...UserInfoFormMap.phoneNumber}
      />
      {/* TODO: 셀렉트박스 붙이기*/}
      <UserInfoInput id={'major'} value={userInfo.major} onChange={setUserInfo} {...UserInfoFormMap.major} />
      {/* TODO: 셀렉트박스 붙이기*/}
      <UserInfoInput
        id={'studentId'}
        value={userInfo.studentId}
        onChange={setUserInfo}
        {...UserInfoFormMap.studentId}
      />
      <MontHInfoInputWrapper>
        {/* TODO: 달력 붙이기*/}
        <MonthInfoInput
          ref={joinedRef}
          id={'joined'}
          value={userInfo.joined}
          onChange={setUserInfo}
          {...UserInfoFormMap.joined}
        />
        <Interval>~</Interval>
        <MonthInfoInput
          ref={endedRef}
          id={'ended'}
          value={userInfo.ended}
          onChange={setUserInfo}
          {...UserInfoFormMap.ended}
        />
      </MontHInfoInputWrapper>
      {/* TODO: Select Options 붙이기*/}
      <InputFooter>
        <StepButton type="button" onClick={() => setStep({ nextStep: 1, nextForm: userInfo })}>
          이전
        </StepButton>
        <StepButton type="submit" disabled={!isFormValid}>
          완료
        </StepButton>
      </InputFooter>
    </InputWrapper>
  );
};

export default SecondStep;
