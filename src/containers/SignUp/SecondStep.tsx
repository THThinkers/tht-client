import React from 'react';
import useFormState from '../../hooks/useFormState';
import { ISignupForm } from '../../pages/SignUp/SignUp';
import { UserInfoFormMap } from '../../pages/SignUp/SignUpFormMap';
import { InputWrapper, UserInfoInput } from '../../styles/SingUpStyles';

type SecondFormType = Pick<ISignupForm, 'name' | 'phoneNumber' | 'major' | 'studentId' | 'period'> & {
  [key: string]: string;
};
interface ISecondStepProps {
  getForm: () => ISignupForm;
  setStep: ({ nextStep, nextForm }: { nextStep: number; nextForm: SecondFormType }) => void;
}
const SecondStep: React.SFC<ISecondStepProps> = ({ getForm, setStep }) => {
  const { username, password, pwCheck, ...rest } = getForm();

  const validator = (form: SecondFormType) => Object.keys(form).every((field) => form[field].length > 0);
  const [userInfo, setUserInfo, isFormValid] = useFormState<SecondFormType>(rest, validator);

  return (
    <InputWrapper>
      {Object.keys(userInfo).map((key) => (
        <UserInfoInput
          key={key}
          id={key}
          placeholder={UserInfoFormMap[key].id}
          value={userInfo[key]}
          onChange={setUserInfo}
        />
      ))}
      <>
        <button type="button" onClick={() => setStep({ nextStep: 1, nextForm: userInfo })}>
          이전
        </button>
        <button type="button" disabled={!isFormValid} onClick={() => setStep({ nextStep: 3, nextForm: userInfo })}>
          완료
        </button>
      </>
    </InputWrapper>
  );
};

export default SecondStep;
