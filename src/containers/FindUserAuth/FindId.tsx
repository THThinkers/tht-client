import React, { ChangeEvent, useCallback, useState } from 'react';
import { ToHome } from '../../components/shared';
import { useInputState } from '../../hooks';
import {
  FindAuthDescription,
  FindAuthWrapper,
  FindButton,
  FindUserInput,
  FindUserStyledLink,
  InputWrapper,
} from '../../styles/FindUserAuthStyles';
import { is, joinPhoneNumber } from '../../utils';

/**
 * 아이디 찾는 컴포넌트
 */
function FindId() {
  const [isResult, setIsResult] = useState(false);
  const [name, onChangeName, isValidName] = useInputState('', is.notEmptyString);
  const [phoneNumber, _, isValidPhoneNumber, setPhoneNumber] = useInputState('', is.notEmptyString);

  const onChangePhoneNumber = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const joinedPhoneNumber = joinPhoneNumber(e.target.value);
    setPhoneNumber(joinedPhoneNumber);
  }, []);

  if (!isResult) {
    return (
      <FindAuthWrapper>
        <ToHome />
        <h1>아이디 찾기</h1>
        <FindAuthDescription>
          회원가입에 사용한 이름과 핸드폰 번호가 일치해야 아이디를 찾을 수 있습니다
        </FindAuthDescription>
        <InputWrapper>
          <FindUserInput placeholder="이름" value={name} onChange={onChangeName} />
          <FindUserInput placeholder="전화번호" value={phoneNumber} onChange={onChangePhoneNumber} />
          <FindButton invert>아이디 찾기</FindButton>
        </InputWrapper>
        <FindUserStyledLink to="/find-user-auth/password">비밀번호 찾기</FindUserStyledLink>
      </FindAuthWrapper>
    );
  }

  return <div> 결과</div>;
}

export default FindId;
