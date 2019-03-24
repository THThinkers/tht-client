import React, { ChangeEvent, useCallback } from 'react';
import { Route, RouteProps, Switch } from 'react-router';
import { CheckInput } from '../components/shared';
import { useInputState } from '../hooks';
import { FindAuthDescription, FindAuthWrapper, FindUserInput, InputWrapper } from '../styles/FindUserAuthStyles';
import { is, joinPhoneNumber } from '../utils';

/**
 * 아이디 찾는 컴포넌트
 */
function FindId() {
  const [name, onChangeName, isValidName] = useInputState('', is.notEmptyString);
  const [phoneNumber, _, isValidPhoneNumber, setPhoneNumber] = useInputState('', is.notEmptyString);

  const onChangePhoneNumber = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const joinedPhoneNumber = joinPhoneNumber(e.target.value);
    setPhoneNumber(joinedPhoneNumber);
  }, []);

  return (
    <FindAuthWrapper>
      <h1>개인정보 찾기</h1>
      <FindAuthDescription>
        회원가입에 사용한 이름과 핸드폰 번호가 일치해야 아이디를 찾을 수 있습니다
      </FindAuthDescription>
      <InputWrapper>
        <FindUserInput placeholder="이름" value={name} onChange={onChangeName} />
        <FindUserInput placeholder="전화번호" value={phoneNumber} onChange={onChangePhoneNumber} />
      </InputWrapper>
    </FindAuthWrapper>
  );
}

/**
 * 비밀번호 찾는 컴포넌트
 */
function findPw() {
  const [username, onChangeUsername, isValidUsername] = useInputState('', is.email);
  const [name, onChangeName, isValidName] = useInputState('', is.notEmptyString);
  const [phoneNumber, _, isValidPhoneNumber, setPhoneNumber] = useInputState('', is.notEmptyString);

  const onChangePhoneNumber = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const joinedPhoneNumber = joinPhoneNumber(e.target.value);
    setPhoneNumber(joinedPhoneNumber);
  }, []);

  return (
    <FindAuthWrapper>
      <h1>개인정보 찾기</h1>
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
      </InputWrapper>
    </FindAuthWrapper>
  );
}

type IFindAuthProps = {} & RouteProps;

/**
 * 아이디 비밀번호 찾는 컴포넌트
 */
const FindUserAuth: React.SFC<IFindAuthProps> = ({ location }) => {
  if (!location) {
    return null;
  }
  const { pathname } = location;

  return (
    <Switch>
      <Route path={`${pathname}/id`} component={FindId} />
      <Route path={`${pathname}/password`} component={findPw} />
    </Switch>
  );
};

export default FindUserAuth;
