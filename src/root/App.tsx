import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { Footer } from '../components';
import { Header } from '../containers';
import { NotVerified } from '../pages';
import history from '../history';
import { IUser } from '../models/user';
import { IRootState } from '../reducers';

const AppBody = styled.div`
  width: 100%;
  min-width: 1366px;
`;

const MainContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  padding-bottom: 120px;
`;

const AuthCheck = React.lazy(() => import('../pages/AuthCheck'));
const Landing = React.lazy(() => import('../pages/Landing'));
const SignIn = React.lazy(() => import('../pages/SignIn'));
const OauthSignup = React.lazy(() => import('../pages/OauthSignup'));
const SignUp = React.lazy(() => import('../pages/SignUp'));
const History = React.lazy(() => import('../pages/History'));

interface IAppProps {
  user: Partial<IUser>;
  status: string;
}

class App extends React.Component<IAppProps> {
  render() {
    const { user, status } = this.props;
    // if (status === 'WAITING') {
    //   return null;
    // }
    // if (status !== 'SUCCESS') {
    //   return (
    //     <Suspense fallback={<div>Loading..</div>}>
    //       <SignUp />
    //     </Suspense>
    //   );
    // }

    /* 임시 auth 플로우 */
    if (status === 'INIT' || status === 'WAITING') {
      return null;
    }
    if (status === 'FAILURE') {
      return (
        <Router history={history}>
          <AppBody>
            <MainContainer>
              <Suspense fallback={<div>Loading..</div>}>
                <Route exact path="/" render={() => <Landing />} />
                <Route exact path="/signup" render={() => <SignUp />} />
                <Route exact path="/signin" render={props => <SignIn {...props} />} />
                <Route path="/auth/check" render={props => <AuthCheck {...props} />} />
              </Suspense>
            </MainContainer>
            <Footer />
          </AppBody>
        </Router>
      );
    }
    // if (window.location.pathname === '/auth/check') {
    //   return (
    //     <Suspense fallback={<div>Loading...</div>}>
    //       <AuthCheck />
    //     </Suspense>
    //   );
    // }

    // if (status !== 'SUCCESS') {
    //   return (
    //     <Suspense fallback={<div>Loading..</div>}>
    //       <Landing />
    //     </Suspense>
    //   );
    // }

    // if (!user.isVerified) {
    //   return (
    //     <Suspense fallback={<div>Loading..</div>}>
    //       {/* <OauthSignup userId={user._id} /> */}
    //     </Suspense>
    //   );
    // }
    if (!user.isVerified) {
      return <NotVerified />;
    }
    return (
      <Router history={history}>
        <AppBody>
          <Header />
          <MainContainer>
            <Suspense fallback={<div>Loading..</div>}>
              <Route exact path="/" render={() => <div>HOME</div>} />
              {/*
                <Route
                  exact path="/signup/Oauth" render={(props) => <OauthSignup userId={user._id} {...props} />}
                />
              */}
              <Route exact path="/signup" render={() => <SignUp />} />
              <Route exact path="/signin" render={props => <SignIn {...props} />} />
              <Route exact path="/info/introduction" render={props => <History {...props} />} />
            </Suspense>
          </MainContainer>
          <Footer />
        </AppBody>
      </Router>
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
  null,
)(App);
