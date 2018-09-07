import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import styled from 'styled-components';
import { getProfile } from '../actions/auth';
import { Header } from '../components';
import { IUser } from '../models/user';
import { Introduction, Landing, OauthSignup } from '../pages';
import { IRootState } from '../reducers';

const AppBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  width: 1366px;
  justify-content: center;
`;

interface IAppProps {
  user: IUser;
  status: string;
  getProfile: () => void;
}

class App extends React.Component<IAppProps> {
  componentDidMount() {
    this.props.getProfile();
  }
  render() {
    const { user, status } = this.props;
    if (status === 'WAITING') {
      return null;
    }
    if (status !== 'SUCCESS') {
      return <Landing />;
    }
    if (!user.isVerified) {
      return <OauthSignup userId={user._id} />;
    }
    return (
      <AppBody>
        <Header />
        <MainContainer>
          <Route exact path="/info/introduction" component={Introduction} />
          <Route exact path="/info/history" />
        </MainContainer>
      </AppBody>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  status: state.auth.profile.status,
  user: state.auth.profile.user,
});

// 2번째 인자로 object를 넘겨주면, 각 키의 해당하는 값이 actionCreator임을 알고 dispatch한다.
// typescript에서 connect 정의하는 여러 방법이 있는데,
// https://github.com/piotrwitek/react-redux-typescript-guide 참고

export default connect(
  mapStateToProps,
  {
    getProfile,
  },
)(App);
