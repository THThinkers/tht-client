import React, { Suspense } from 'react';
// import Loadable from 'react-loadable';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import { getProfile } from '../actions/auth';
import { Footer, GlobalStyle, Header } from '../components';
import { IUser } from '../models/user';
import { IRootState } from '../reducers';

const AppBody = styled.div`
  width: 100%;
  min-width: 1366px;
`;

const MainContainer = styled.div`
  width: 1366px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  padding-bottom: 120px;
`;

// const LoadableLanding = Loadable({
//   loader: () => import('../pages/Landing'),
//   loading: () => <div>Loading...</div>,
// });
// const LoadableOauthSignup = Loadable({
//   loader: () => import('../pages/OauthSignup'),
//   loading: () => <div>Loading...</div>,
// });
// const LoadableIntroduction = Loadable({
//   loader: () => import('../pages/Introduction'),
//   loading: () => <div>Loading...</div>,
// });

// const LoadableHistory = Loadable({
//   loader: () => import('../pages/History'),
//   loading: () => <div>Loading...</div>,
// });

const Landing = React.lazy(() => import('../pages/Landing'));
const OauthSignup = React.lazy(() => import('../pages/OauthSignup'));
const Introduction = React.lazy(() => import('../pages/Introduction'));
const History = React.lazy(() => import('../pages/History'));

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
      return (
        <Suspense fallback={<div>Loading..</div>}>
          <Landing />
        </Suspense>
      );
    }
    if (!user.isVerified) {
      return (
        <Suspense fallback={<div>Loading..</div>}>
          <OauthSignup userId={user._id} />;
        </Suspense>
      );
    }
    return (
      <BrowserRouter>
        <AppBody>
          <GlobalStyle />
          <Header />
          <MainContainer>
            <Suspense fallback={<div>Loading..</div>}>
              <Route exact path="/" render={() => <div>HOME</div>} />
              <Route
                exact
                path="/singup"
                render={() => <OauthSignup userId={user._id} />}
              />
              <Route exact path="/info/introduction" component={Introduction} />
              <Route exact path="/info/history" component={History} />
            </Suspense>
          </MainContainer>
          <Footer />
        </AppBody>
      </BrowserRouter>
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