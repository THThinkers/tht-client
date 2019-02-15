import React, { useMemo } from 'react';
import { CheckInput } from '../../../components';
import { useInputState } from '../../../hooks';
import * as is from '../../../utils/is';
import { ISignupForm } from '../SignUp';
import { CheckUsernameButton, InputWrapper, PasswordHelpText } from '../SingUpStyles';
type FirstFormType = Pick<ISignupForm, 'username' | 'password' | 'pwCheck'>;

interface IFirstStepProps {
  getForm: () => ISignupForm;
  setStep: ({ nextStep, nextForm }: { nextStep: number; nextForm: FirstFormType }) => void;
}
const FirstStep: React.SFC<IFirstStepProps> = ({ getForm, setStep }) => {
  const fp = getForm();
  const [username, onChangeName, isValidUsername] = useInputState(fp.username, is.email);
  const [password, onChangePassword, isValidPassword] = useInputState(fp.password, is.validPassword);
  const [pwCheck, onChangePwCheck, isValidPwCheck] = useInputState(fp.pwCheck, is.shallowEqual.bind(null, password));
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
    [!password.length],
  );
  const youShallNotPass = !isValidUsername || !isValidPassword || !isValidPwCheck;
  return (
    <InputWrapper>
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
      <button
        type="button"
        disabled={youShallNotPass}
        onClick={() => setStep({ nextStep: 2, nextForm: { username, password, pwCheck } })}
      >
        다음
      </button>
    </InputWrapper>
  );
};

export default FirstStep;
