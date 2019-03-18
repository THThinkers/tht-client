import React, { ChangeEvent, useCallback, useMemo } from 'react';
import { postCheckUserName } from '../../api/auth';
import { CheckInput } from '../../components/shared';
import { useInputState } from '../../hooks';
import { SignupForm, UserNameValidation } from '../../pages/SignUp';
import {
  CheckUsernameButton,
  InputFooter,
  InputWrapper,
  PasswordHelpText,
  StepButton,
} from '../../styles/SignUpStyles';
import * as is from '../../utils/is';

/** FirstStep에서 쓰는 Form Type */
type FirstFormType = Pick<SignupForm, 'username' | 'password' | 'pwCheck'>;

interface IFirstStepProps {
  form: SignupForm;
  setStep: ({ nextStep, nextForm }: { nextStep: number; nextForm: FirstFormType }) => void;
  userNameValidation: UserNameValidation;
  setUsernameValidation: (status: UserNameValidation) => void;
}

/**
 * @description 아이디, 비밀번호를 입력하는 컴포넌트
 * @param {Object} props
 * @param props.getForm 상위의 폼 데이터를 호출하는 함수
 * @param props.setStep 다음 단계로 변경을 호출하는 함수
 */
const FirstStep: React.SFC<IFirstStepProps> = ({ form, setStep, userNameValidation, setUsernameValidation }) => {
  const [username, onChangeName, isValidUsername] = useInputState(form.username, is.email);
  const [password, onChangePassword, isValidPassword] = useInputState(form.password, is.validPassword);
  const [pwCheck, onChangePwCheck, isValidPwCheck] = useInputState(form.pwCheck, is.shallowEqual.bind(null, password));

  /**
   * userNmae의 값을 변경할때 실행되는 함수
   * 1. username값 변경
   * 2. userNameVailidation 값 초기화
   */
  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeName(e);
    setUsernameValidation('NOT_CHECKED');
  };

  /**
   * username이 서버에 존재하는지 확인해주고, 그 상태를 변경해준다.
   */
  const onClickCheckUsername = useCallback(
    (id) => async () => {
      const { isExist } = await postCheckUserName(id);
      if (isExist) {
        setUsernameValidation('EXIST');
      } else {
        setUsernameValidation('NOT_EXIST');
      }
    },
    [],
  );

  /**
   * username의 밸리데이션을 하는 버튼 컴포넌트
   */
  const CheckUsername = useMemo(
    () => (
      <CheckUsernameButton type="button" disabled={!isValidUsername} onClick={onClickCheckUsername(username)}>
        중복 확인
      </CheckUsernameButton>
    ),
    [isValidUsername, username],
  );

  /**
   * username에 대한 validation Error를 출력하는 함수
   * @returns string
   */
  const getUsernameError = useCallback((): string => {
    if (!isValidUsername) {
      return '올바른 이메일을 입력해주세요';
    }
    if (userNameValidation === 'ERROR') {
      return '에러가 발생했습니다. 다시 시도해 주세요';
    }
    if (userNameValidation === 'NOT_CHECKED') {
      return '중복 확인을 해주세요';
    }
    return '이미 존재하는 계정입니다';
  }, [userNameValidation, isValidUsername]);

  /**
   * 비밀번호에 대한 설명을 알려주는 컴포넌트
   */
  const PasswordHelp = useMemo(
    () => !password.length && <PasswordHelpText>영어, 숫자, 특수문자 포함 6자 이상</PasswordHelpText>,
    [!password.length],
  );

  /**
   * 다음단계로 진행가능한지 여부
   */
  const youShallNotPass: boolean =
    !isValidUsername || userNameValidation !== 'NOT_EXIST' || !isValidPassword || !isValidPwCheck;

  return (
    <InputWrapper>
      <CheckInput
        placeholder="아이디"
        value={username}
        onChange={onChangeUserName}
        isValid={isValidUsername && userNameValidation === 'NOT_EXIST'}
        type="email"
        inValidInfo={getUsernameError()}
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
      <InputFooter>
        <StepButton
          type="button"
          disabled={youShallNotPass}
          onClick={() => setStep({ nextStep: 2, nextForm: { username, password, pwCheck } })}
        >
          다음
        </StepButton>
      </InputFooter>
    </InputWrapper>
  );
};

export default FirstStep;
