import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import styled from 'styled-components';
import { setRootValue } from '../actions/root';
import { Header } from '../components';
import { Introduction } from '../pages';
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
  value: number;
  setValue: (value: number) => void;
}

const App = ({ value, setValue }: IAppProps) => (
  <AppBody>
    <Header />
    <MainContainer>
      <h1>Hello</h1>
      {value}
      <button onClick={() => setValue(value + 1)}>Up</button>
      <button onClick={() => setValue(value - 1)}>Down</button>
      <Route exact path="/info/introduction" component={Introduction} />
      <Route exact path="/info/history" />
    </MainContainer>
  </AppBody>
);

const mapStateToProps = (state: IRootState) => ({
  value: state.value,
});

// 2번째 인자로 object를 넘겨주면, 각 키의 해당하는 값이 actionCreator임을 알고 dispatch한다.
// typescript에서 connect 정의하는 여러 방법이 있는데,
// https://github.com/piotrwitek/react-redux-typescript-guide 참고

export default connect(
  mapStateToProps,
  {
    setValue: setRootValue,
  },
)(App);
