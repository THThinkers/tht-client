import React, { ChangeEvent, useCallback } from 'react';
import { getFindUsername } from '../../api/findAuth';
import { ToHome } from '../../components/shared';
import { useAsyncCallback, useInputState } from '../../hooks';
import {
  FindAuthDescription,
  FindAuthWrapper,
  FindButton,
  FindUserInput,
  FindUserStyledLink,
  GoToLoginButton,
  InputWrapper,
  UsernameBox,
} from '../../styles/FindUserAuthStyles';
import { is, joinPhoneNumber } from '../../utils';

/**
 * 아이디 찾는 컴포넌트
 */
function FindId() {
  const [status, usernameData] = useAsyncCallback(getFindUsername, { username: '' });
  const [name, onChangeName, isValidName] = useInputState('', is.notEmptyString);
  const [phoneNumber, _, isValidPhoneNumber, setPhoneNumber] = useInputState('', is.notEmptyString);

  const onChangePhoneNumber = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const joinedPhoneNumber = joinPhoneNumber(e.target.value);
    setPhoneNumber(joinedPhoneNumber);
  }, []);

  // 요청이 성공했고, username이 존재한다면 아이디 찾기에 성공한 것.
  if (status === 'SUCCESS' && 'username' in usernameData) {
    return (
      <FindAuthWrapper>
        <ToHome />
        <h1>아이디 찾기</h1>
        <FindAuthDescription>고객님의 정보와 일치하는 아이디입니다.</FindAuthDescription>
        <UsernameBox>{usernameData.username}</UsernameBox>
        <GoToLoginButton>로그인하러 가기</GoToLoginButton>
        <FindUserStyledLink to="/find-user-auth/password">비밀번호 찾기</FindUserStyledLink>
      </FindAuthWrapper>
    );
  }

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

  return <div> 결과</div>;
}

export default FindId;
