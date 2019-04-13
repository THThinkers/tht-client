import React, { ChangeEvent, useCallback, useEffect } from 'react';
import { postFindUsername } from '../../api/findAuth';
import { useAsyncCallback, useInputState, useModal } from '../../hooks';
import {
  FindAuthDescription,
  FindAuthWrapper,
  FindButton,
  FindUserInput,
  FindUserStyledLink,
  GoToLoginButton,
  InputWrapper,
  ResultWrapper,
  UsernameBox,
} from '../../styles/FindUserAuthStyles';
import { is, joinPhoneNumber } from '../../utils';

/**
 * 아이디 찾는 컴포넌트
 */
function FindId() {
  const [status, usernameData, callFindUsername] = useAsyncCallback(postFindUsername, { username: '' });
  const [name, onChangeName, isValidName] = useInputState('', is.notEmptyString);
  const [phoneNumber, _, isValidPhoneNumber, setPhoneNumber] = useInputState('', is.notEmptyString);
  const [openModal, closeModal] = useModal();

  useEffect(() => {
    if (status === 'SUCCESS' && 'isExist' in usernameData) {
      openModal({ title: '아이디 찾기 실패', contents: '일치하는 회원정보가 존재하지 않습니다' });
    }
  }, [status]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      callFindUsername(name, phoneNumber);
    },
    [name, phoneNumber],
  );

  const onChangePhoneNumber = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const joinedPhoneNumber = joinPhoneNumber(e.target.value);
    setPhoneNumber(joinedPhoneNumber);
  }, []);

  // 요청이 성공했고, username이 존재한다면 아이디 찾기에 성공한 것.
  if (status === 'SUCCESS' && 'username' in usernameData) {
    return (
      <FindAuthWrapper>
        <h1>아이디 찾기</h1>
        <FindAuthDescription>고객님의 정보와 일치하는 아이디입니다.</FindAuthDescription>
        <ResultWrapper>
          <UsernameBox>{usernameData.username}</UsernameBox>
          <GoToLoginButton invert to="/signin">
            로그인하러 가기
          </GoToLoginButton>
        </ResultWrapper>
        <FindUserStyledLink to="/find-user-auth/password">비밀번호 찾기</FindUserStyledLink>
      </FindAuthWrapper>
    );
  }

  return (
    <FindAuthWrapper>
      <h1>아이디 찾기</h1>
      <FindAuthDescription>
        회원가입에 사용한 이름과 핸드폰 번호가 일치해야 아이디를 찾을 수 있습니다
      </FindAuthDescription>
      <InputWrapper onSubmit={onSubmit}>
        <FindUserInput placeholder="이름" value={name} onChange={onChangeName} />
        <FindUserInput placeholder="전화번호" value={phoneNumber} onChange={onChangePhoneNumber} />
        {/* 두 필드가 모두 비어있으면 보낼 수 없음 */}
        <FindButton invert disabled={!isValidName || !isValidPhoneNumber}>
          아이디 찾기
        </FindButton>
      </InputWrapper>
      <FindUserStyledLink to="/find-user-auth/password">비밀번호 찾기</FindUserStyledLink>
    </FindAuthWrapper>
  );
}

export default FindId;
