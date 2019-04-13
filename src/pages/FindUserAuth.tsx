import React from 'react';
import { Route, RouteProps, Switch } from 'react-router';
import { EtcLayout } from '../components/shared';
import { FindId, FindPassword } from '../containers/FindUserAuth';

type IFindAuthProps = {} & RouteProps;

/**
 * 아이디 비밀번호 찾는 컴포넌트
 */
const FindUserAuth: React.SFC<IFindAuthProps> = ({ location }) => {
  if (!location) {
    return null;
  }

  return (
    <EtcLayout>
      <Switch>
        <Route path="/find-user-auth/id" component={FindId} />
        <Route path="/find-user-auth/password" component={FindPassword} />
      </Switch>
    </EtcLayout>
  );
};

export default FindUserAuth;
