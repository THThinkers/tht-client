import React, { ChangeEvent, useCallback, useState } from 'react';
import { CheckInput } from '../../components/shared';
import { useInputState } from '../../hooks';
import {
  FindAuthDescription,
  FindAuthWrapper,
  FindButton,
  FindUserInput,
  FindUserStyledLink,
  GoToLoginButton,
  InputWrapper,
  ResultWrapper,
} from '../../styles/FindUserAuthStyles';
import { is, joinPhoneNumber } from '../../utils';

/**
 * 비밀번호 찾는 컴포넌트
 */
function FindPassword() {
  const [isResult, setIsResult] = useState(false);
  const [username, onChangeUsername, isValidUsername] = useInputState('', is.email);
  const [name, onChangeName, isValidName] = useInputState('', is.notEmptyString);
  const [phoneNumber, _, isValidPhoneNumber, setPhoneNumber] = useInputState('', is.notEmptyString);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
    },
    [username, name, phoneNumber],
  );

  /**
   * 전화번호 변경 / 세팅
   */
  const onChangePhoneNumber = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const joinedPhoneNumber = joinPhoneNumber(e.target.value);
    setPhoneNumber(joinedPhoneNumber);
  }, []);

  // 기본 찾기 화면
  if (!isResult) {
    return (
      <FindAuthWrapper onSubmit={onSubmit}>
        <h1>비밀번호 찿기</h1>
        <FindAuthDescription>
          회원가입에 사용한 이름과 핸드폰 번호가 일치해야 아이디를 찾을 수 있습니다
        </FindAuthDescription>
        <InputWrapper>
          <CheckInput
            placeholder="이메일"
            value={username}
            isValid={isValidUsername}
            onChange={onChangeUsername}
            validInfo="확인가능한 이메일 입니다"
            inValidInfo="올바른 이메일을 입력해 주세요"
          />
          <FindUserInput placeholder="이름" value={name} onChange={onChangeName} />
          <FindUserInput placeholder="전화번호" value={phoneNumber} onChange={onChangePhoneNumber} />
          <FindButton invert disabled={!(isValidUsername && isValidName && isValidPhoneNumber)}>
            비밀번호 찾기
          </FindButton>
        </InputWrapper>
        <FindUserStyledLink to="/find-user-auth/id">아이디 찾기</FindUserStyledLink>
      </FindAuthWrapper>
    );
  }

  // 찾기 성공
  return (
    <FindAuthWrapper>
      <h1>비밀번호 찿기</h1>
      <FindAuthDescription>
        회원가입에 사용한 이름과 핸드폰 번호가 일치해야 아이디를 찾을 수 있습니다
      </FindAuthDescription>
      <ResultWrapper>
        <GoToLoginButton invert to="/signin">
          로그인하러 가기
        </GoToLoginButton>
      </ResultWrapper>
      <FindUserStyledLink to="/find-user-auth/password">비밀번호 찾기</FindUserStyledLink>
    </FindAuthWrapper>
  );
}

export default FindPassword;
