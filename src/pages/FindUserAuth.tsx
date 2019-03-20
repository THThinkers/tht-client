import React from 'react';
import { Route, RouteProps, Switch } from 'react-router';
import { FindAuthDescription, FindAuthWrapper, InputWrapper } from '../styles/FindUserAuthStyles';

function FindId() {
  console.log(111);
  return (
    <FindAuthWrapper>
      <h1>개인정보 찾기</h1>
      <FindAuthDescription>
        회원가입에 사용한 이름과 핸드폰 번호가 일치해야 아이디를 찾을 수 있습니다
      </FindAuthDescription>
      <InputWrapper />
    </FindAuthWrapper>
  );
}

type IFindAuthProps = {} & RouteProps;

const FindUserAuth: React.SFC<IFindAuthProps> = ({ location }) => {
  if (!location) {
    return null;
  }
  const { pathname } = location;
  console.log(pathname);
  return (
    <Switch>
      <Route path={`${pathname}/id`} component={FindId} />
      <Route path={`${pathname}/password`} component={FindId} />
    </Switch>
  );
};

export default FindUserAuth;
