import React, { InputHTMLAttributes } from 'react';
import useFormState from '../../hooks/useFormState';
import { ISignupForm } from '../../pages/SignUp';
import { InputFooter, InputWrapper, StepButton, UserInfoInput } from '../../styles/SingUpStyles';

type SecondFormType = Pick<ISignupForm, 'name' | 'phoneNumber' | 'major' | 'studentId' | 'period'> & {
  [key: string]: string;
};

interface ISecondStepProps {
  getForm: () => ISignupForm;
  setStep: ({ nextStep, nextForm }: { nextStep: number; nextForm: SecondFormType }) => void;
}

/**
 * UserInfo 에 대한 input 설정
 */
const UserInfoFormMap: { [key: string]: InputHTMLAttributes<{}> } = {
  name: { placeholder: '이름', type: 'text' },
  phoneNumber: { placeholder: '전화번호', type: 'tel' },
  major: { placeholder: '전공', type: 'text' },
  studentId: { placeholder: '학번', type: 'number', min: '00', max: '99' },
  period: { placeholder: '활동시기', type: 'month', min: '2018-03' },
};

const SecondStep: React.SFC<ISecondStepProps> = ({ getForm, setStep }) => {
  const { username, password, pwCheck, ...rest } = getForm();

  const validator = (form: SecondFormType) => Object.keys(form).every((field) => form[field].length > 0);
  const [userInfo, setUserInfo, isFormValid] = useFormState<SecondFormType>(rest, validator);

  return (
    <InputWrapper>
      {Object.keys(userInfo).map((key) => (
        <UserInfoInput key={key} id={key} value={userInfo[key]} onChange={setUserInfo} {...UserInfoFormMap[key]} />
      ))}
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
