import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../reducers';
import { setRootValue } from '../actions/root';

interface AppProps {
  value: number;
  setValue: (value: number) => void;
}

const App = ({ value, setValue }: AppProps) => (
  <div>
    <h1>Hello</h1>
    { value }
    <button onClick={() => setValue(value + 1)}>
      Up
    </button>
    <button onClick={() => setValue(value - 1)}>
      Down
    </button>
  </div>
);

const mapStateToProps = (state: IRootState) => ({
  value: state.value,
});

// 2번째 인자로 object를 넘겨주면, 각 키의 해당하는 값이 actionCreator임을 알고 dispatch한다.
// typescript에서 connect 정의하는 여러 방법이 있는데,
// https://github.com/piotrwitek/react-redux-typescript-guide 참고
export default connect(mapStateToProps, {
  setValue: setRootValue,
})(App);


